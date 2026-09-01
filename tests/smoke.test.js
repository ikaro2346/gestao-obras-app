const fs = require("fs");
const path = require("path");
const vm = require("vm");

class MockElement {
  constructor() {
    this.value = "";
    this.options = [];
    this.textContent = "";
    this.hidden = false;
    this.open = false;
    this.dataset = {};
    this.classList = { add() {}, remove() {} };
    this._innerHTML = "";
  }

  set innerHTML(value) {
    this._innerHTML = String(value);
    this.options = [...this._innerHTML.matchAll(/<option(?:[^>]*value="([^"]*)")?[^>]*>/g)]
      .map((match) => ({ value: match[1] || "" }));
  }

  get innerHTML() {
    return this._innerHTML;
  }

  addEventListener() {}
  append() {}
  click() {}
  close() {}
  focus() {}
  remove() {}
  reset() {}
  setAttribute() {}
  showModal() {}
}

const elements = new Map();
const getElement = (id) => {
  if (!elements.has(id)) elements.set(id, new MockElement());
  return elements.get(id);
};
const storage = new Map();
const context = {
  console,
  document: {
    getElementById: getElement,
    querySelectorAll: () => [],
    querySelector: () => new MockElement(),
    createElement: () => new MockElement(),
    body: new MockElement()
  },
  window: {},
  localStorage: {
    getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key)
  },
  structuredClone,
  Intl,
  Date,
  Math,
  Number,
  String,
  Array,
  Object,
  Set,
  Blob,
  URL,
  FileReader: class {},
  confirm: () => true,
  alert: () => {},
  setInterval: () => 0,
  setTimeout: () => 0,
  clearTimeout: () => {}
};

vm.createContext(context);
const appPath = path.join(__dirname, "..", "app.js");
vm.runInContext(fs.readFileSync(appPath, "utf8"), context);

function evaluate(source) {
  return vm.runInContext(source, context);
}

const migrated = evaluate(`({
  schemaVersion: state.schemaVersion,
  count: state.transactions.length,
  expectedCount: seedData.transactions.length,
  firstTotal: state.transactions[0].total,
  firstStatus: state.transactions[0].financialStatus,
  firstMeasure: state.transactions[0].measure
})`);
if (
  migrated.schemaVersion !== 6 ||
  migrated.count !== migrated.expectedCount ||
  migrated.firstTotal !== 2500 ||
  migrated.firstStatus !== "Pago" ||
  migrated.firstMeasure !== "un"
) {
  throw new Error("A migração não preservou os dados iniciais.");
}
if (!evaluate(`seedData.transactions.every((item, index) => {
  const migratedItem = state.transactions[index];
  return item.id === migratedItem.id &&
    item.phaseId === migratedItem.phaseId &&
    item.unit === migratedItem.unit &&
    item.type === migratedItem.type &&
    item.description === migratedItem.description &&
    item.quantity === migratedItem.quantity &&
    item.unitValue === migratedItem.unitValue &&
    item.total === migratedItem.total &&
    item.date === migratedItem.date &&
    item.notes === migratedItem.notes;
})`)) {
  throw new Error("A migração alterou o conteúdo de um lançamento existente.");
}

const repairedDuplicateImport = evaluate(`(() => {
  const duplicated = structuredClone(seedData);
  duplicated.schemaVersion = 5;
  duplicated.transactions = [...structuredClone(seedData.transactions), ...structuredClone(seedData.transactions.slice(0, 54))];
  const repaired = migrateState(duplicated);
  return {
    schemaVersion: repaired.schemaVersion,
    count: repaired.transactions.length,
    total: repaired.transactions.reduce((sum, item) => sum + Number(item.total || 0), 0)
  };
})()`);
const seedTotal = evaluate("seedData.transactions.reduce((sum, item) => sum + Number(item.total || 0), 0)");
if (
  repairedDuplicateImport.schemaVersion !== 6 ||
  repairedDuplicateImport.count !== migrated.expectedCount ||
  Math.abs(repairedDuplicateImport.total - seedTotal) > 0.001
) {
  throw new Error("A migração não corrigiu a importação duplicada da planilha.");
}

const originalTotal = evaluate("state.transactions.reduce((sum, item) => sum + item.total, 0)");
const originalCount = evaluate("state.transactions.length");
evaluate("moveTransactionToTrash(1)");
if (evaluate("state.transactions.length") !== originalCount - 1 || evaluate("state.trash.length") !== 1) {
  throw new Error("A exclusão recuperável falhou.");
}
evaluate("restoreTransaction(1)");
const restoredTotal = evaluate("state.transactions.reduce((sum, item) => sum + item.total, 0)");
if (
  evaluate("state.transactions.length") !== originalCount ||
  evaluate("state.trash.length") !== 0 ||
  Math.abs(restoredTotal - originalTotal) > 0.001
) {
  throw new Error("A restauração não recuperou o lançamento corretamente.");
}

evaluate(`
  state.units = state.units.map((unit) =>
    unit.name === "Casa 01" ? { ...unit, area: 100 } :
    unit.name === "Casa 02" ? { ...unit, area: 200 } :
    unit
  );
  state.project.allocationMethod = "area";
`);
const allocation = evaluate(`({
  first: unitAllocatedTotal("Casa 01"),
  second: unitAllocatedTotal("Casa 02"),
  shared: sharedTotal()
})`);
if (
  Math.abs((allocation.first + allocation.second) - allocation.shared) > 0.01 ||
  Math.abs(allocation.second - (allocation.first * 2)) > 0.01
) {
  throw new Error("O rateio proporcional por área falhou.");
}

const originalProjectId = evaluate("portfolio.activeProjectId");
evaluate(`
  byId("newProjectName").value = "Obra de teste";
  byId("newProjectAddress").value = "Endereço de teste";
  byId("newProjectCity").value = "Cidade de teste";
  createProjectFromForm();
`);
if (
  evaluate("portfolio.projects.length") !== 2 ||
  evaluate("state.transactions.length") !== 0 ||
  evaluate(`portfolio.projects.find((entry) => entry.id === "${originalProjectId}").data.transactions.length`) !== originalCount
) {
  throw new Error("A criação de outra obra alterou os dados da obra existente.");
}
evaluate(`switchActiveProject("${originalProjectId}")`);
if (evaluate("state.transactions.length") !== originalCount) {
  throw new Error("A troca de obra não recuperou os dados existentes.");
}

evaluate(`
  savePortfolioSafetyBackup("Teste automatizado");
  state.project.name = "Nome temporário";
  saveState();
  restorePortfolioSafetyBackup();
`);
if (
  evaluate("state.project.name") !== "Casa Germinada" ||
  evaluate("state.transactions.length") !== originalCount
) {
  throw new Error("O backup de segurança não restaurou a obra existente.");
}

for (const type of ["phases", "summary", "transactions"]) {
  const report = evaluate(`buildPdfReportHtml({
    type: "${type}",
    unit: "Todas",
    phaseId: null,
    start: "",
    end: ""
  })`);
  if (!report.includes("<!doctype html>") || !report.includes("Gasto realizado")) {
    throw new Error(`O relatório ${type} não foi gerado.`);
  }
}

console.log("Todos os testes passaram.");
