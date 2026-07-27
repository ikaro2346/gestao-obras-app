const STORAGE_KEY = "gestao-obras-casa-germinada-v3";

const seedData = {
  project: {
    name: "Casa Germinada",
    document: "66.726.572/0001-60",
    phone: "77991828792",
    email: "nossoempreendimentoltda@gmail.com",
    address: "Rua I, Quadra L, Lote 4, Bairro Sao Pedro",
    city: "Vitoria da Conquista - Bahia"
  },
  units: [
    { id: 1, name: "Geral", area: 0, status: "Custo comum" },
    { id: 2, name: "Casa 01", area: 0, status: "Em execução" },
    { id: 3, name: "Casa 02", area: 0, status: "Em execução" }
  ],
  phases: [
    { id: 1, name: "CNPJ + Documentações", budget: 0, start: "", end: "" },
    { id: 2, name: "Empreiteiros", budget: 0, start: "", end: "" },
    { id: 3, name: "Gabarito", budget: 0, start: "2026-06-01", end: "2026-06-02" },
    { id: 4, name: "Ferramentas", budget: 0, start: "", end: "" },
    { id: 5, name: "Alvenaria + Estrutura", budget: 0, start: "", end: "" },
    { id: 6, name: "Fundação", budget: 0, start: "2026-06-02", end: "" }
  ],
  catalog: [],
  transactions: [
    { id: 1, phaseId: 3, unit: "Geral", type: "Serviços", description: "Limpeza Terreno", quantity: 1, unitValue: 2500, total: 2500, date: "2026-06-02", notes: "" },
    { id: 2, phaseId: 3, unit: "Geral", type: "Serviços", description: "Planta Baixa", quantity: 1, unitValue: 50, total: 50, date: "2026-05-29", notes: "" },
    { id: 3, phaseId: 3, unit: "Geral", type: "Material", description: "Prego 18x27 Belgo", quantity: 1, unitValue: 15.9, total: 15.9, date: "2026-05-29", notes: "" },
    { id: 4, phaseId: 3, unit: "Geral", type: "Material", description: "Linha de Pedreiro nylon Am 0,80m x 100 mts (COLLINS)", quantity: 5, unitValue: 10.4, total: 52, date: "2026-05-29", notes: "" },
    { id: 5, phaseId: 3, unit: "Geral", type: "Material", description: "Piquetes 90 cm", quantity: 40, unitValue: 6, total: 240, date: "2026-05-30", notes: "" },
    { id: 6, phaseId: 3, unit: "Geral", type: "Material", description: "Pinus 3 m x 0,10 m x 0,02 m", quantity: 30, unitValue: 11.17, total: 335, date: "2026-05-30", notes: "" },
    { id: 7, phaseId: 5, unit: "Geral", type: "Material", description: "Bloco Ceramico 9x19x29", quantity: 6500, unitValue: 1.3, total: 8450, date: "2026-06-03", notes: "" },
    { id: 8, phaseId: 5, unit: "Geral", type: "Material", description: "Arame recozido torcido bwg 18 rl 1kg", quantity: 10, unitValue: 13, total: 130, date: "2026-06-06", notes: "" },
    { id: 9, phaseId: 5, unit: "Geral", type: "Material", description: "Coluna pronta 7 x17 5/16 (8mm) - 6mt", quantity: 30, unitValue: 75, total: 2250, date: "2026-06-06", notes: "" },
    { id: 10, phaseId: 5, unit: "Geral", type: "Material", description: "Trelica Ind Leve H8 - 6mt", quantity: 20, unitValue: 29, total: 580, date: "2026-06-06", notes: "" },
    { id: 11, phaseId: 5, unit: "Geral", type: "Material", description: "Vergalhao 8 mm (5/16)", quantity: 15, unitValue: 29, total: 435, date: "2026-06-06", notes: "" },
    { id: 12, phaseId: 5, unit: "Geral", type: "Material", description: "Canaleta estrutural 9x19x39 cm", quantity: 600, unitValue: 2.7, total: 1620, date: "2026-06-06", notes: "" },
    { id: 13, phaseId: 2, unit: "Geral", type: "Serviços", description: "Compra Xiaomi", quantity: 1, unitValue: 1250, total: 1250, date: "2026-05-26", notes: "" },
    { id: 14, phaseId: 2, unit: "Geral", type: "Serviços", description: "Empreita 1 Prestação", quantity: 1, unitValue: 5000, total: 5000, date: "2026-06-02", notes: "" },
    { id: 15, phaseId: 2, unit: "Geral", type: "Serviços", description: "Água + Luz + Guardar Materiais/Ferramentas", quantity: 1, unitValue: 300, total: 300, date: "2026-06-05", notes: "" },
    { id: 16, phaseId: 2, unit: "Geral", type: "Serviços", description: "Empreita 2 parcela", quantity: 1, unitValue: 3750, total: 3750, date: "2026-06-12", notes: "" },
    { id: 17, phaseId: 1, unit: "Geral", type: "Serviços", description: "Criação CNPJ", quantity: 1, unitValue: 600, total: 600, date: "2026-02-27", notes: "" },
    { id: 18, phaseId: 1, unit: "Geral", type: "Documentação", description: "Alvará CNPJ", quantity: 1, unitValue: 359.77, total: 359.77, date: "2026-05-14", notes: "" },
    { id: 19, phaseId: 1, unit: "Geral", type: "Serviços", description: "Transferência Escritura", quantity: 1, unitValue: 500, total: 500, date: "2026-05-28", notes: "" },
    { id: 20, phaseId: 1, unit: "Geral", type: "Serviços", description: "Alvará Construção", quantity: 1, unitValue: 1000, total: 1000, date: "2026-05-28", notes: "" },
    { id: 21, phaseId: 1, unit: "Geral", type: "Documentação", description: "IPTU 2026", quantity: 1, unitValue: 115.64, total: 115.64, date: "2026-06-10", notes: "" },
    { id: 22, phaseId: 1, unit: "Geral", type: "Documentação", description: "Dam Certidão Informativa", quantity: 1, unitValue: 57.37, total: 57.37, date: "2026-06-10", notes: "" },
    { id: 23, phaseId: 1, unit: "Geral", type: "Documentação", description: "Certidão de interior Teor", quantity: 1, unitValue: 118.78, total: 118.78, date: "2026-06-10", notes: "" },
    { id: 24, phaseId: 1, unit: "Geral", type: "Serviços", description: "Contador", quantity: 1, unitValue: 350, total: 350, date: "2026-06-10", notes: "" },
    { id: 25, phaseId: 1, unit: "Geral", type: "Documentação", description: "Dam Laudo de avaliação", quantity: 1, unitValue: 52.23, total: 52.23, date: "2026-06-15", notes: "" },
    { id: 26, phaseId: 1, unit: "Geral", type: "Documentação", description: "Dam ITBI", quantity: 1, unitValue: 2000, total: 2000, date: "2026-06-25", notes: "" },
    { id: 27, phaseId: 6, unit: "Geral", type: "Material", description: "Cimento Cp II F 32 Montes Claros 50 kg", quantity: 40, unitValue: 46, total: 1840, date: "2026-06-05", notes: "" },
    { id: 28, phaseId: 6, unit: "Geral", type: "Material", description: "Disco corte Diamantado 110 x 20 mm Bom corte", quantity: 5, unitValue: 14.92, total: 74.6, date: "2026-06-05", notes: "" },
    { id: 29, phaseId: 6, unit: "Geral", type: "Material", description: "Disco corte inox 4 1/2x1,0x7/8 RANGER", quantity: 10, unitValue: 0.91, total: 9.1, date: "2026-06-05", notes: "" },
    { id: 30, phaseId: 6, unit: "Geral", type: "Material", description: "Disco serra circular 4.3/8 24 DT Thompson", quantity: 3, unitValue: 8.69, total: 26.07, date: "2026-06-05", notes: "" },
    { id: 31, phaseId: 6, unit: "Geral", type: "Material", description: "Lapis Carpinteiro irwin", quantity: 5, unitValue: 1.76, total: 8.8, date: "2026-06-05", notes: "" },
    { id: 32, phaseId: 6, unit: "Geral", type: "Material", description: "Prego 18x27 Belgo", quantity: 10, unitValue: 14.38, total: 143.8, date: "2026-06-05", notes: "" },
    { id: 33, phaseId: 6, unit: "Geral", type: "Material", description: "Tabuas Pinho 3 metros 30 x 2 cm", quantity: 20, unitValue: 34, total: 680, date: "2026-06-06", notes: "" },
    { id: 34, phaseId: 6, unit: "Geral", type: "Material", description: "Vergalhao 8 mm (5/16)", quantity: 15, unitValue: 29, total: 435, date: "2026-06-06", notes: "" },
    { id: 35, phaseId: 6, unit: "Geral", type: "Material", description: "Sapata Dobrada 45 80x80 vergalhao 8,0 mm (5/16)", quantity: 16, unitValue: 30, total: 480, date: "2026-06-06", notes: "" },
    { id: 36, phaseId: 6, unit: "Geral", type: "Material", description: "Areia Fina", quantity: 15, unitValue: 72.46, total: 1086.96, date: "2026-06-08", notes: "" },
    { id: 37, phaseId: 6, unit: "Geral", type: "Material", description: "Areia Grossa", quantity: 15, unitValue: 98.55, total: 1478.26, date: "2026-06-08", notes: "" },
    { id: 38, phaseId: 6, unit: "Geral", type: "Material", description: "Brita 0", quantity: 7, unitValue: 142.86, total: 1000, date: "2026-06-08", notes: "" },
    { id: 39, phaseId: 6, unit: "Geral", type: "Material", description: "Bloco estrutural 14x19x39 cm", quantity: 600, unitValue: 3.5, total: 2100, date: "2026-06-12", notes: "" },
    { id: 40, phaseId: 6, unit: "Geral", type: "Material", description: "Canaleta estrutural 14x19x39 cm", quantity: 300, unitValue: 3.6, total: 1080, date: "2026-06-12", notes: "" },
    { id: 41, phaseId: 6, unit: "Geral", type: "Material", description: "Ingrax graxa auto 500 g calcio2", quantity: 1, unitValue: 18.87, total: 18.87, date: "2026-06-16", notes: "" },
    { id: 42, phaseId: 6, unit: "Geral", type: "Material", description: "Pintura asfaltica Acqua - Bd 18 l Quartzo", quantity: 1, unitValue: 350, total: 350, date: "2026-06-22", notes: "" },
    { id: 43, phaseId: 6, unit: "Geral", type: "Material", description: "Broxa 180 x 75 mm Condor", quantity: 2, unitValue: 15, total: 30, date: "2026-06-22", notes: "" },
    { id: 44, phaseId: 6, unit: "Geral", type: "Material", description: "Canaleta estrutural 19x19x39 cm", quantity: 75, unitValue: 5.43, total: 407.25, date: "2026-06-25", notes: "" },
    { id: 45, phaseId: 6, unit: "Geral", type: "Material", description: "Bloco estrutural 19x19x39 cm", quantity: 150, unitValue: 5.15, total: 772.5, date: "2026-06-25", notes: "" },
    { id: 46, phaseId: 6, unit: "Geral", type: "Serviços", description: "Frete Blocos Janivaldo", quantity: 1, unitValue: 250, total: 250, date: "2026-06-26", notes: "" },
    { id: 47, phaseId: 4, unit: "Geral", type: "Material", description: "Pa de Bico Cabo 120 cm (Tramontina)", quantity: 2, unitValue: 65.26, total: 130.52, date: "2026-06-01", notes: "" },
    { id: 48, phaseId: 4, unit: "Geral", type: "Material", description: "Enxada Larga 30 cm x 24 cm com Cabo 1, m (Max)", quantity: 1, unitValue: 50.86, total: 50.86, date: "2026-06-01", notes: "" },
    { id: 49, phaseId: 4, unit: "Geral", type: "Material", description: "Picareta Alviao c/ Cabo (Max)", quantity: 1, unitValue: 65.22, total: 65.22, date: "2026-06-01", notes: "" },
    { id: 50, phaseId: 4, unit: "Geral", type: "Material", description: "Lona Plastica Preta 6X100 Lonax", quantity: 60, unitValue: 1.8, total: 108, date: "2026-06-05", notes: "" },
    { id: 51, phaseId: 4, unit: "Geral", type: "Material", description: "Carrinho de mao extraforte (Tramontina)", quantity: 2, unitValue: 315.04, total: 630.08, date: "2026-06-05", notes: "" },
    { id: 52, phaseId: 4, unit: "Geral", type: "Material", description: "Betoneira 400 l prime Motor mono - Menegotti", quantity: 1, unitValue: 5000, total: 5000, date: "2026-06-11", notes: "" },
    { id: 53, phaseId: 4, unit: "Geral", type: "Material", description: "Extencao 25 metros", quantity: 1, unitValue: 228.46, total: 228.46, date: "2026-06-16", notes: "" },
    { id: 54, phaseId: 4, unit: "Geral", type: "Material", description: "Mangueira 20 metros", quantity: 1, unitValue: 132.66, total: 132.66, date: "2026-06-16", notes: "" },
    { id: 55, phaseId: 4, unit: "Geral", type: "Material", description: "Planilha controle de custos", quantity: 1, unitValue: 49, total: 49, date: "2026-06-25", notes: "" }
  ]
};

let state = loadState();
let selectNewPhaseAfterSave = false;
let editingTransactionId = null;

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const dateFmt = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" });
const percentFmt = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1, minimumFractionDigits: 1 });

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seedData);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seedData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function byId(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function phaseName(id) {
  return state.phases.find((phase) => phase.id === Number(id))?.name || "Sem vínculo";
}

function phaseTotal(id, transactions = state.transactions) {
  return transactions
    .filter((item) => item.phaseId === Number(id))
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
}

function todayIso() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function refreshWorkModeDate() {
  const today = todayIso();
  if (byId("todayLabel").textContent !== formatDate(today)) {
    renderDashboard();
  }
  if (!editingTransactionId && !byId("formDate").value) {
    byId("formDate").value = today;
  }
}

function latestTransaction() {
  return [...state.transactions].sort((a, b) => {
    const dateCompare = String(b.date || "").localeCompare(String(a.date || ""));
    return dateCompare || Number(b.id || 0) - Number(a.id || 0);
  })[0];
}

function catalogItems() {
  const fromTransactions = state.transactions.map((item) => ({
    type: item.type,
    description: item.description,
    defaultValue: item.unitValue || 0
  }));
  const byName = [...(state.catalog || []), ...fromTransactions].reduce((acc, item) => {
    if (!item.description) return acc;
    const key = item.description.trim().toLowerCase();
    if (!acc[key]) {
      acc[key] = {
        type: item.type || "Material",
        description: item.description.trim(),
        defaultValue: Number(item.defaultValue || 0)
      };
    }
    return acc;
  }, {});
  return Object.values(byName).sort((a, b) => a.description.localeCompare(b.description, "pt-BR"));
}

function findCatalogItem(description) {
  const key = String(description || "").trim().toLowerCase();
  return catalogItems().find((item) => item.description.trim().toLowerCase() === key);
}

function billableUnits() {
  return state.units.filter((unit) => unit.name !== "Geral");
}

function unitDirectTotal(unitName) {
  return state.transactions
    .filter((item) => item.unit === unitName)
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
}

function sharedTotal() {
  return unitDirectTotal("Geral");
}

function unitAllocatedTotal(unitName) {
  if (unitName === "Geral") return sharedTotal();
  const split = billableUnits().length || 1;
  return unitDirectTotal(unitName) + (sharedTotal() / split);
}

function filteredTransactions() {
  const search = byId("searchInput")?.value.trim().toLowerCase() || "";
  const phase = byId("phaseFilter")?.value || "Todas";
  const type = byId("typeFilter")?.value || "Todos";
  const unit = byId("unitFilter")?.value || "Todas";

  return state.transactions.filter((item) => {
    const matchesSearch = !search || String(item.description || "").toLowerCase().includes(search);
    const matchesPhase = phase === "Todas" || item.phaseId === Number(phase);
    const matchesType = type === "Todos" || item.type === type;
    const matchesUnit = unit === "Todas" || item.unit === unit;
    return matchesSearch && matchesPhase && matchesType && matchesUnit;
  });
}

function totalsBy(items, keyGetter) {
  return items.reduce((acc, item) => {
    const key = keyGetter(item);
    acc[key] = (acc[key] || 0) + Number(item.total || 0);
    return acc;
  }, {});
}

function topEntry(map) {
  return Object.entries(map).sort((a, b) => b[1] - a[1])[0] || ["-", 0];
}

function rankedItems(items = state.transactions) {
  const grouped = items.reduce((acc, item) => {
    const key = String(item.description || "Sem descrição").trim().toLowerCase();
    if (!acc[key]) {
      acc[key] = {
        description: item.description || "Sem descrição",
        type: item.type,
        total: 0,
        quantity: 0,
        phases: {}
      };
    }
    acc[key].total += Number(item.total || 0);
    acc[key].quantity += Number(item.quantity || 0);
    acc[key].phases[phaseName(item.phaseId)] = (acc[key].phases[phaseName(item.phaseId)] || 0) + Number(item.total || 0);
    return acc;
  }, {});

  return Object.values(grouped)
    .map((item) => ({
      ...item,
      mainPhase: topEntry(item.phases)[0]
    }))
    .sort((a, b) => b.total - a.total);
}

function materialAbcItems(items = state.transactions) {
  const materials = rankedItems(items.filter((item) => item.type === "Material"));
  const total = materials.reduce((sum, item) => sum + item.total, 0);
  let cumulative = 0;

  return materials.map((item) => {
    const percent = total > 0 ? item.total / total : 0;
    cumulative += percent;
    const abcClass = cumulative <= 0.8 ? "A" : cumulative <= 0.95 ? "B" : "C";
    return {
      ...item,
      percent,
      cumulative,
      abcClass
    };
  });
}

function abcSummary(items) {
  return ["A", "B", "C"].map((abcClass) => {
    const group = items.filter((item) => item.abcClass === abcClass);
    const total = group.reduce((sum, item) => sum + item.total, 0);
    const percent = group.reduce((sum, item) => sum + item.percent, 0);
    return { abcClass, count: group.length, total, percent };
  });
}

function phaseSchedule(phase) {
  const dates = state.transactions
    .filter((item) => item.phaseId === phase.id && item.date)
    .map((item) => item.date)
    .sort();
  const start = phase.start || dates[0] || "";
  const end = phase.end || dates[dates.length - 1] || "";
  const duration = start && end ? Math.max(0, Math.round((new Date(`${end}T00:00:00Z`) - new Date(`${start}T00:00:00Z`)) / 86400000)) : null;
  return { start, end, duration };
}

function reportTransactions(filters) {
  return state.transactions.filter((item) => {
    const matchesUnit = filters.unit === "Todas" || item.unit === filters.unit;
    const matchesPhase = filters.phaseId === null || item.phaseId === filters.phaseId;
    const matchesStart = !filters.start || String(item.date || "") >= filters.start;
    const matchesEnd = !filters.end || String(item.date || "") <= filters.end;
    return matchesUnit && matchesPhase && matchesStart && matchesEnd;
  });
}

function reportPhaseRows(items, selectedPhaseId = null) {
  const phases = selectedPhaseId === null
    ? state.phases
    : state.phases.filter((phase) => phase.id === selectedPhaseId);
  const rows = phases.map((phase) => {
    const phaseItems = items.filter((item) => item.phaseId === phase.id);
    const spent = phaseItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
    const material = phaseItems
      .filter((item) => item.type === "Material")
      .reduce((sum, item) => sum + Number(item.total || 0), 0);
    const budget = Number(phase.budget || 0);
    return {
      id: phase.id,
      name: phase.name,
      budget,
      spent,
      material,
      other: spent - material,
      balance: budget - spent,
      percentUsed: budget > 0 ? spent / budget : null,
      count: phaseItems.length,
      items: phaseItems
    };
  });

  if (selectedPhaseId === null) {
    const knownIds = new Set(state.phases.map((phase) => phase.id));
    const orphanItems = items.filter((item) => !knownIds.has(item.phaseId));
    if (orphanItems.length) {
      const spent = orphanItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
      const material = orphanItems
        .filter((item) => item.type === "Material")
        .reduce((sum, item) => sum + Number(item.total || 0), 0);
      rows.push({
        id: null,
        name: "Sem vínculo",
        budget: 0,
        spent,
        material,
        other: spent - material,
        balance: 0,
        percentUsed: null,
        count: orphanItems.length,
        items: orphanItems
      });
    }
  }

  return rows;
}

function reportTotals(items, phaseRows) {
  const spent = items.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const material = items
    .filter((item) => item.type === "Material")
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
  const budget = phaseRows.reduce((sum, phase) => sum + Number(phase.budget || 0), 0);
  return {
    budget,
    spent,
    material,
    other: spent - material,
    balance: budget - spent,
    count: items.length
  };
}

function renderSelects() {
  const selectedPdfUnit = byId("pdfUnit")?.value || "Todas";
  const selectedPdfPhase = byId("pdfPhase")?.value || "Todas";
  const unitOptions = state.units
    .map((unit) => `<option value="${escapeHtml(unit.name)}">${escapeHtml(unit.name)}</option>`)
    .join("");
  byId("unitFilter").innerHTML = '<option value="Todas">Todas as unidades</option>' + unitOptions;
  byId("formUnit").innerHTML = unitOptions;
  byId("pdfUnit").innerHTML = '<option value="Todas">Todas as unidades</option>' + unitOptions;
  byId("pdfUnit").value = Array.from(byId("pdfUnit").options).some((option) => option.value === selectedPdfUnit)
    ? selectedPdfUnit
    : "Todas";

  const phaseOptions = ['<option value="Todas">Todas as etapas</option>']
    .concat(state.phases.map((phase) => `<option value="${phase.id}">${escapeHtml(phase.name)}</option>`))
    .join("");
  byId("phaseFilter").innerHTML = phaseOptions;
  byId("pdfPhase").innerHTML = phaseOptions;
  byId("pdfPhase").value = Array.from(byId("pdfPhase").options).some((option) => option.value === selectedPdfPhase)
    ? selectedPdfPhase
    : "Todas";
  byId("formPhase").innerHTML = state.phases
    .map((phase) => `<option value="${phase.id}">${escapeHtml(phase.name)}</option>`)
    .join("");

  const defaultTypes = ["Material", "Serviços", "Documentação", "Ferramenta"];
  const types = Array.from(new Set([...defaultTypes, ...state.transactions.map((item) => item.type).filter(Boolean)])).sort();
  byId("typeFilter").innerHTML = '<option value="Todos">Todos os tipos</option>' +
    types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join("");
  byId("formType").innerHTML = types
    .map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`)
    .join("");

  const catalog = catalogItems();
  byId("catalogList").innerHTML = catalog
    .map((item) => `<option value="${escapeHtml(item.description)}" label="${escapeHtml(item.type)}${item.defaultValue ? ` - ${money.format(item.defaultValue)}` : ""}"></option>`)
    .join("");

  const suppliers = Array.from(new Set(state.transactions.map((item) => item.supplier).filter(Boolean))).sort();
  byId("supplierList").innerHTML = suppliers.map((item) => `<option value="${escapeHtml(item)}"></option>`).join("");
}

function renderDashboard() {
  const items = filteredTransactions();
  const today = todayIso();
  const todayItems = state.transactions.filter((item) => item.date === today);
  const todayTotal = todayItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const last = latestTransaction();
  const totalReal = items.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const totalPlanned = state.phases.reduce((sum, phase) => sum + Number(phase.budget || 0), 0);
  const [topPhaseLabel, topPhaseAmount] = topEntry(totalsBy(items, (item) => phaseName(item.phaseId)));
  const [topTypeLabel, topTypeAmount] = topEntry(totalsBy(items, (item) => item.type));

  byId("projectMeta").textContent = `${state.project.address} | ${state.project.city}`;
  byId("totalReal").textContent = money.format(totalReal);
  byId("launchCount").textContent = `${items.length} lançamentos filtrados`;
  byId("totalPlanned").textContent = money.format(totalPlanned);
  byId("budgetStatus").textContent = totalPlanned > 0
    ? `${Math.round((totalReal / totalPlanned) * 100)}% do orçamento usado`
    : "Informe o orçamento nas etapas";
  byId("topPhase").textContent = topPhaseLabel;
  byId("topPhaseValue").textContent = money.format(topPhaseAmount);
  byId("topType").textContent = topTypeLabel;
  byId("topTypeValue").textContent = money.format(topTypeAmount);
  byId("todayLabel").textContent = formatDate(today);
  byId("todaySummary").innerHTML = `
    <article class="today-item"><span>Gasto hoje</span><strong>${money.format(todayTotal)}</strong></article>
    <article class="today-item"><span>Lançamentos hoje</span><strong>${todayItems.length}</strong></article>
    <article class="today-item"><span>Último gasto</span><strong>${last ? money.format(last.total) : "-"}</strong></article>
  `;

  const max = Math.max(...state.phases.map((phase) => phaseTotal(phase.id, items)), 1);
  byId("phaseBars").innerHTML = state.phases.map((phase) => {
    const real = phaseTotal(phase.id, items);
    const width = Math.max(2, Math.round((real / max) * 100));
    const budget = Number(phase.budget || 0);
    const budgetText = budget > 0 ? ` / ${money.format(budget)}` : "";
    const name = escapeHtml(phase.name);
    return `
      <div class="bar-item">
        <div class="bar-head">
          <span>${name}</span>
          <span>${money.format(real)}${budgetText}</span>
        </div>
        <div class="track" aria-label="${name}: ${money.format(real)}">
          <div class="fill" style="--w: ${width}%"></div>
        </div>
      </div>
    `;
  }).join("");

  const recent = [...items].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 7);
  byId("recentList").innerHTML = recent.map((item) => {
    const description = escapeHtml(item.description);
    const phase = escapeHtml(phaseName(item.phaseId));
    const type = escapeHtml(item.type);
    const supplier = item.supplier ? ` | ${escapeHtml(item.supplier)}` : "";
    const unit = escapeHtml(item.unit || "Sem vínculo");
    return `
      <article class="activity-item">
        <div class="activity-top">
          <span>${description}</span>
          <span>${money.format(item.total)}</span>
        </div>
        <div class="muted">${formatDate(item.date)} | ${phase} | ${type}${supplier}</div>
        <span class="badge">${unit}</span>
      </article>
    `;
  }).join("") || '<p class="muted">Nenhum lançamento encontrado.</p>';

  const rankingLimit = Number(byId("rankingLimit")?.value || 5);
  const ranking = rankedItems(items).slice(0, rankingLimit);
  const rankingMax = Math.max(...ranking.map((item) => item.total), 1);
  byId("costRanking").innerHTML = ranking.map((item, index) => {
    const width = Math.max(2, Math.round((item.total / rankingMax) * 100));
    const description = escapeHtml(item.description);
    const type = escapeHtml(item.type);
    const mainPhase = escapeHtml(item.mainPhase);
    return `
      <article class="ranking-item">
        <span class="rank-number">${index + 1}</span>
        <div class="ranking-main">
          <span class="ranking-title">${description}</span>
          <span class="ranking-meta">${type} | ${mainPhase} | qtd. ${item.quantity.toLocaleString("pt-BR")}</span>
          <div class="track" aria-label="${description}: ${money.format(item.total)}">
            <div class="fill" style="--w: ${width}%"></div>
          </div>
        </div>
        <span class="ranking-total">${money.format(item.total)}</span>
      </article>
    `;
  }).join("") || '<p class="muted">Nenhum item encontrado.</p>';

  byId("phaseTimeline").innerHTML = state.phases.map((phase) => {
    const schedule = phaseSchedule(phase);
    const name = escapeHtml(phase.name);
    return `
      <article class="timeline-item">
        <div class="timeline-top">
          <span>${name}</span>
          <span>${schedule.duration === null ? "-" : `${schedule.duration} dias`}</span>
        </div>
        <div class="timeline-dates">
          <div><span>Início</span><strong>${formatDate(schedule.start)}</strong></div>
          <div><span>Fim</span><strong>${formatDate(schedule.end)}</strong></div>
          <div><span>Realizado</span><strong>${money.format(phaseTotal(phase.id, items))}</strong></div>
        </div>
      </article>
    `;
  }).join("");

  const abcItems = materialAbcItems(items);
  const abcMax = Math.max(...abcItems.map((item) => item.total), 1);
  byId("abcSummary").innerHTML = abcSummary(abcItems).map((group) => `
    <article class="abc-chip">
      <span class="badge abc-${group.abcClass.toLowerCase()}">Classe ${group.abcClass}</span>
      <strong>${money.format(group.total)}</strong>
      <span class="muted">${group.count} materiais | ${percentFmt.format(group.percent * 100)}%</span>
    </article>
  `).join("");

  byId("abcList").innerHTML = abcItems.slice(0, 12).map((item) => {
    const width = Math.max(2, Math.round((item.total / abcMax) * 100));
    const description = escapeHtml(item.description);
    const mainPhase = escapeHtml(item.mainPhase);
    return `
      <article class="abc-item">
        <span class="abc-class abc-${item.abcClass.toLowerCase()}">${item.abcClass}</span>
        <div class="abc-detail">
          <span class="ranking-title">${description}</span>
          <span class="ranking-meta">${mainPhase} | ${percentFmt.format(item.percent * 100)}% do material | acumulado ${percentFmt.format(item.cumulative * 100)}%</span>
          <div class="track" aria-label="${description}: ${money.format(item.total)}">
            <div class="fill" style="--w: ${width}%"></div>
          </div>
        </div>
        <span class="ranking-total">${money.format(item.total)}</span>
      </article>
    `;
  }).join("") || '<p class="muted">Nenhum material encontrado.</p>';
}

function renderTransactions() {
  const items = filteredTransactions().sort((a, b) => b.date.localeCompare(a.date));
  byId("transactionRows").innerHTML = items.map((item) => {
    const description = escapeHtml(item.description);
    const phase = escapeHtml(phaseName(item.phaseId));
    const unit = escapeHtml(item.unit || "Sem vínculo");
    const type = escapeHtml(item.type);
    const payment = item.payment ? ` | ${escapeHtml(item.payment)}` : "";
    const documentRef = item.document ? ` | doc. ${escapeHtml(item.document)}` : "";
    const supplier = escapeHtml(item.supplier || "-");
    const notes = item.notes ? `<br><span class="muted">${escapeHtml(item.notes)}</span>` : "";
    return `
      <tr>
        <td>${formatDate(item.date)}</td>
        <td>${phase}<br><span class="muted">${unit}</span></td>
        <td><strong>${description}</strong><br><span class="muted">${item.quantity} x ${money.format(item.unitValue)} | ${type}${payment}${documentRef}</span></td>
        <td>${supplier}${notes}</td>
        <td class="number">${money.format(item.total)}</td>
        <td class="number">
          <div class="row-actions">
            <button class="table-action" type="button" data-edit="${item.id}" aria-label="Editar ${description}">Editar</button>
            <button class="delete-button" type="button" data-delete="${item.id}" aria-label="Excluir ${description}">Excluir</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || '<tr><td colspan="6">Nenhum lançamento encontrado.</td></tr>';
}

function renderPhases() {
  byId("phaseCards").innerHTML = state.phases.map((phase) => {
    const real = phaseTotal(phase.id);
    const budget = Number(phase.budget || 0);
    const balance = budget - real;
    const percent = budget > 0 ? `${Math.round((real / budget) * 100)}%` : "-";
    const schedule = phaseSchedule(phase);
    const name = escapeHtml(phase.name);
    return `
      <article class="phase-card">
        <h3>${name}</h3>
        <dl>
          <div><dt>Orçado</dt><dd>${money.format(budget)}</dd></div>
          <div><dt>Realizado</dt><dd>${money.format(real)}</dd></div>
          <div><dt>Saldo</dt><dd>${budget > 0 ? money.format(balance) : "-"}</dd></div>
          <div><dt>Uso</dt><dd>${percent}</dd></div>
          <div><dt>Início</dt><dd>${formatDate(schedule.start)}</dd></div>
          <div><dt>Fim</dt><dd>${formatDate(schedule.end)}</dd></div>
          <div><dt>Duração</dt><dd>${schedule.duration === null ? "-" : `${schedule.duration} dias`}</dd></div>
        </dl>
        <div class="phase-actions">
          <button class="ghost-button" type="button" data-edit-phase="${phase.id}">Editar</button>
          <button class="delete-button" type="button" data-delete-phase="${phase.id}" aria-label="Excluir ${name}">Excluir</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderUnits() {
  const split = billableUnits().length || 1;
  const totalReal = state.transactions.reduce((sum, item) => sum + Number(item.total || 0), 0);
  byId("unitCards").innerHTML = state.units.map((unit) => {
    const direct = unitDirectTotal(unit.name);
    const allocated = unitAllocatedTotal(unit.name);
    const area = Number(unit.area || 0);
    const costPerM2 = unit.name !== "Geral" && area > 0 ? allocated / area : 0;
    const share = unit.name === "Geral"
      ? "Custo compartilhado"
      : totalReal > 0 ? `${Math.round((allocated / totalReal) * 100)}%` : "-";
    const sharedLabel = unit.name === "Geral"
      ? `${billableUnits().length} unidades no rateio`
      : `${money.format(sharedTotal() / split)} de custo comum`;
    const name = escapeHtml(unit.name || "Sem vínculo");
    const status = escapeHtml(unit.status || "-");

    return `
      <article class="unit-card">
        <h3>${name}</h3>
        <span class="badge">${status}</span>
        <dl>
          <div><dt>Custo direto</dt><dd>${money.format(direct)}</dd></div>
          <div><dt>Com rateio</dt><dd>${money.format(allocated)}</dd></div>
          <div><dt>Área</dt><dd>${area > 0 ? `${area.toLocaleString("pt-BR")} m²` : "-"}</dd></div>
          <div><dt>Custo/m²</dt><dd>${costPerM2 > 0 ? money.format(costPerM2) : "-"}</dd></div>
          <div><dt>Participação</dt><dd>${share}</dd></div>
          <div><dt>Rateio</dt><dd>${sharedLabel}</dd></div>
        </dl>
        <div class="unit-actions">
          <button class="ghost-button" type="button" data-edit-unit="${unit.id}">Editar</button>
          <button class="delete-button" type="button" data-delete-unit="${unit.id}" aria-label="Excluir ${name}">Excluir</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderReport() {
  const totalReal = state.transactions.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const totalBudget = state.phases.reduce((sum, phase) => sum + Number(phase.budget || 0), 0);
  const material = state.transactions
    .filter((item) => item.type === "Material")
    .reduce((sum, item) => sum + Number(item.total || 0), 0);

  byId("reportSummary").innerHTML = `
    <article class="report-chip"><span class="muted">Realizado</span><strong>${money.format(totalReal)}</strong></article>
    <article class="report-chip"><span class="muted">Orçado</span><strong>${money.format(totalBudget)}</strong></article>
    <article class="report-chip"><span class="muted">Materiais</span><strong>${money.format(material)}</strong></article>
  `;

  byId("reportRows").innerHTML = state.phases.map((phase) => {
    const real = phaseTotal(phase.id);
    const budget = Number(phase.budget || 0);
    const balance = budget - real;
    const used = budget > 0 ? `${Math.round((real / budget) * 100)}%` : "-";
    const schedule = phaseSchedule(phase);
    const name = escapeHtml(phase.name);
    return `
      <tr>
        <td>${name}</td>
        <td class="number">${money.format(budget)}</td>
        <td class="number">${money.format(real)}</td>
        <td class="number">${budget > 0 ? money.format(balance) : "-"}</td>
        <td class="number">${used}</td>
        <td>${formatDate(schedule.start)}</td>
        <td>${formatDate(schedule.end)}</td>
        <td class="number">${schedule.duration === null ? "-" : `${schedule.duration} dias`}</td>
      </tr>
    `;
  }).join("");

  byId("rankingRows").innerHTML = rankedItems(state.transactions).slice(0, 15).map((item, index) => {
    const description = escapeHtml(item.description);
    const type = escapeHtml(item.type);
    const mainPhase = escapeHtml(item.mainPhase);
    return `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${description}</strong></td>
        <td>${type}</td>
        <td>${mainPhase}</td>
        <td class="number">${item.quantity.toLocaleString("pt-BR")}</td>
        <td class="number">${money.format(item.total)}</td>
      </tr>
    `;
  }).join("");

  byId("abcRows").innerHTML = materialAbcItems(state.transactions).map((item) => {
    const description = escapeHtml(item.description);
    const mainPhase = escapeHtml(item.mainPhase);
    return `
      <tr>
        <td><span class="badge abc-${item.abcClass.toLowerCase()}">Classe ${item.abcClass}</span></td>
        <td><strong>${description}</strong></td>
        <td>${mainPhase}</td>
        <td class="number">${item.quantity.toLocaleString("pt-BR")}</td>
        <td class="number">${money.format(item.total)}</td>
        <td class="number">${percentFmt.format(item.percent * 100)}%</td>
        <td class="number">${percentFmt.format(item.cumulative * 100)}%</td>
      </tr>
    `;
  }).join("");
}

function renderAll() {
  renderSelects();
  renderDashboard();
  renderTransactions();
  renderUnits();
  renderPhases();
  renderReport();
}

function formatDate(value) {
  if (!value) return "-";
  return dateFmt.format(new Date(`${value}T00:00:00Z`));
}

function nextId(collection) {
  return Math.max(0, ...collection.map((item) => Number(item.id))) + 1;
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportCsv() {
  const headers = ["data", "unidade", "etapa", "tipo", "descricao", "fornecedor", "quantidade", "valor_unitario", "total", "pagamento", "documento", "observacoes"];
  const rows = state.transactions.map((item) => [
    item.date,
    item.unit,
    phaseName(item.phaseId),
    item.type,
    item.description,
    item.supplier || "",
    item.quantity,
    item.unitValue,
    item.total,
    item.payment || "",
    item.document || "",
    item.notes
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
  download("lancamentos-casa-germinada.csv", csv, "text/csv;charset=utf-8");
}

function pdfReportFilters() {
  const phaseValue = byId("pdfPhase").value;
  return {
    type: byId("pdfReportType").value,
    unit: byId("pdfUnit").value,
    phaseId: phaseValue === "Todas" ? null : Number(phaseValue),
    start: byId("pdfStartDate").value,
    end: byId("pdfEndDate").value
  };
}

function pdfReportTitle(type) {
  return {
    phases: "Gastos por etapa",
    summary: "Resumo geral da obra",
    transactions: "Lançamentos detalhados"
  }[type] || "Relatório da obra";
}

function pdfFilterLabels(filters) {
  const phase = filters.phaseId === null ? "Todas as etapas" : phaseName(filters.phaseId);
  let period = "Todo o período";
  if (filters.start && filters.end) {
    period = `${formatDate(filters.start)} a ${formatDate(filters.end)}`;
  } else if (filters.start) {
    period = `A partir de ${formatDate(filters.start)}`;
  } else if (filters.end) {
    period = `Até ${formatDate(filters.end)}`;
  }
  return [
    filters.unit === "Todas" ? "Todas as unidades" : filters.unit,
    phase,
    period
  ];
}

function pdfSummaryHtml(totals) {
  const balance = totals.budget > 0 ? money.format(totals.balance) : "-";
  return `
    <section class="summary-grid">
      <article><span>Gasto realizado</span><strong>${money.format(totals.spent)}</strong></article>
      <article><span>Orçamento das etapas</span><strong>${money.format(totals.budget)}</strong></article>
      <article><span>Saldo</span><strong>${balance}</strong></article>
      <article><span>Materiais</span><strong>${money.format(totals.material)}</strong></article>
      <article><span>Outros custos</span><strong>${money.format(totals.other)}</strong></article>
      <article><span>Lançamentos</span><strong>${totals.count.toLocaleString("pt-BR")}</strong></article>
    </section>
  `;
}

function pdfPhaseSummaryHtml(rows) {
  const body = rows.map((phase) => {
    const used = phase.percentUsed === null ? "-" : `${percentFmt.format(phase.percentUsed * 100)}%`;
    return `
      <tr>
        <td><strong>${escapeHtml(phase.name)}</strong></td>
        <td class="num">${phase.count}</td>
        <td class="num">${money.format(phase.budget)}</td>
        <td class="num">${money.format(phase.material)}</td>
        <td class="num">${money.format(phase.other)}</td>
        <td class="num">${money.format(phase.spent)}</td>
        <td class="num">${phase.budget > 0 ? money.format(phase.balance) : "-"}</td>
        <td class="num">${used}</td>
      </tr>
    `;
  }).join("");

  return `
    <section class="report-section">
      <h2>Resumo por etapa</h2>
      <table>
        <thead>
          <tr>
            <th>Etapa</th>
            <th class="num">Itens</th>
            <th class="num">Orçado</th>
            <th class="num">Materiais</th>
            <th class="num">Outros</th>
            <th class="num">Gasto</th>
            <th class="num">Saldo</th>
            <th class="num">% usado</th>
          </tr>
        </thead>
        <tbody>${body || '<tr><td colspan="8">Nenhuma etapa encontrada.</td></tr>'}</tbody>
      </table>
    </section>
  `;
}

function pdfTransactionsTableHtml(items, options = {}) {
  const showPhase = options.showPhase !== false;
  const ordered = [...items].sort((a, b) => {
    const dateCompare = String(a.date || "").localeCompare(String(b.date || ""));
    return dateCompare || Number(a.id || 0) - Number(b.id || 0);
  });
  const rows = ordered.map((item) => {
    const supplier = item.supplier ? `<small>Fornecedor: ${escapeHtml(item.supplier)}</small>` : "";
    const notes = item.notes ? `<small>Obs.: ${escapeHtml(item.notes)}</small>` : "";
    const documentRef = item.document ? `<small>Documento: ${escapeHtml(item.document)}</small>` : "";
    return `
      <tr>
        <td>${formatDate(item.date)}</td>
        ${showPhase ? `<td>${escapeHtml(phaseName(item.phaseId))}</td>` : ""}
        <td>${escapeHtml(item.unit || "Sem vínculo")}</td>
        <td><strong>${escapeHtml(item.description)}</strong>${supplier}${documentRef}${notes}</td>
        <td>${escapeHtml(item.type)}</td>
        <td class="num">${Number(item.quantity || 0).toLocaleString("pt-BR")}</td>
        <td class="num">${money.format(Number(item.unitValue || 0))}</td>
        <td class="num"><strong>${money.format(Number(item.total || 0))}</strong></td>
      </tr>
    `;
  }).join("");
  const columns = showPhase ? 8 : 7;

  return `
    <table class="detail-table">
      <thead>
        <tr>
          <th>Data</th>
          ${showPhase ? "<th>Etapa</th>" : ""}
          <th>Unidade</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th class="num">Qtd.</th>
          <th class="num">Unitário</th>
          <th class="num">Total</th>
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="${columns}">Nenhum lançamento encontrado para os filtros escolhidos.</td></tr>`}</tbody>
    </table>
  `;
}

function pdfSummarySectionsHtml(items, phaseRows) {
  const typeMap = totalsBy(items, (item) => item.type || "Sem tipo");
  const typeTotal = Object.values(typeMap).reduce((sum, value) => sum + value, 0);
  const typeRows = Object.entries(typeMap)
    .sort((a, b) => b[1] - a[1])
    .map(([type, total]) => `
      <tr>
        <td>${escapeHtml(type)}</td>
        <td class="num">${money.format(total)}</td>
        <td class="num">${typeTotal > 0 ? `${percentFmt.format((total / typeTotal) * 100)}%` : "-"}</td>
      </tr>
    `).join("");
  const topRows = rankedItems(items).slice(0, 10).map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.description)}</td>
      <td>${escapeHtml(item.mainPhase)}</td>
      <td class="num">${money.format(item.total)}</td>
    </tr>
  `).join("");

  return `
    ${pdfPhaseSummaryHtml(phaseRows)}
    <section class="two-column report-section">
      <div>
        <h2>Composição dos gastos</h2>
        <table>
          <thead><tr><th>Tipo</th><th class="num">Total</th><th class="num">Participação</th></tr></thead>
          <tbody>${typeRows || '<tr><td colspan="3">Sem dados.</td></tr>'}</tbody>
        </table>
      </div>
      <div>
        <h2>10 itens de maior custo</h2>
        <table>
          <thead><tr><th>#</th><th>Item</th><th>Etapa</th><th class="num">Total</th></tr></thead>
          <tbody>${topRows || '<tr><td colspan="4">Sem dados.</td></tr>'}</tbody>
        </table>
      </div>
    </section>
  `;
}

function pdfPhaseDetailsHtml(phaseRows) {
  const sections = phaseRows
    .filter((phase) => phase.items.length)
    .map((phase) => `
      <section class="phase-detail">
        <div class="section-heading">
          <div>
            <span>Etapa</span>
            <h2>${escapeHtml(phase.name)}</h2>
          </div>
          <div class="phase-total">
            <span>Total da etapa no filtro</span>
            <strong>${money.format(phase.spent)}</strong>
          </div>
        </div>
        ${pdfTransactionsTableHtml(phase.items, { showPhase: false })}
      </section>
    `).join("");
  return sections || '<p class="empty">Nenhum lançamento encontrado para os filtros escolhidos.</p>';
}

function buildPdfReportHtml(filters) {
  const items = reportTransactions(filters);
  const phaseRows = reportPhaseRows(items, filters.phaseId);
  const totals = reportTotals(items, phaseRows);
  const title = pdfReportTitle(filters.type);
  const labels = pdfFilterLabels(filters);
  const generatedAt = new Date().toLocaleString("pt-BR");
  const projectName = state.project?.name || "Gestão de Obras";
  const projectAddress = [state.project?.address, state.project?.city].filter(Boolean).join(" - ");
  const documentLabel = state.project?.document ? `CNPJ/CPF: ${escapeHtml(state.project.document)}` : "";
  const orientation = filters.type === "transactions" ? "landscape" : "portrait";
  let content = pdfSummarySectionsHtml(items, phaseRows);

  if (filters.type === "phases") {
    content = `${pdfPhaseSummaryHtml(phaseRows)}${pdfPhaseDetailsHtml(phaseRows)}`;
  } else if (filters.type === "transactions") {
    content = `
      <section class="report-section">
        <h2>Relação de lançamentos</h2>
        ${pdfTransactionsTableHtml(items)}
      </section>
    `;
  }

  return `
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${escapeHtml(title)} - ${escapeHtml(projectName)} - ${todayIso()}</title>
        <style>
          @page { size: A4 ${orientation}; margin: 12mm; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            color: #172321;
            background: #fff;
            font: 10.5px/1.4 Arial, Helvetica, sans-serif;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          header {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            padding-bottom: 12px;
            border-bottom: 3px solid #1d6b59;
          }
          h1, h2, p { margin: 0; }
          h1 { margin-top: 3px; font-size: 21px; }
          h2 { margin-bottom: 8px; font-size: 14px; }
          .brand { color: #1d6b59; font-size: 10px; font-weight: 700; text-transform: uppercase; }
          .project-meta { margin-top: 5px; color: #53615e; }
          .emission { min-width: 150px; text-align: right; }
          .emission strong, .emission span { display: block; }
          .emission span { color: #66736f; }
          .filters {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
            margin: 12px 0;
          }
          .filters span {
            padding: 4px 8px;
            border: 1px solid #ccd7d3;
            border-radius: 4px;
            background: #f3f7f5;
          }
          .summary-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 7px;
            margin-bottom: 14px;
          }
          .summary-grid article {
            padding: 8px 10px;
            border: 1px solid #ccd7d3;
            border-radius: 4px;
          }
          .summary-grid span { display: block; color: #66736f; }
          .summary-grid strong { display: block; margin-top: 2px; font-size: 14px; }
          .report-section { margin-top: 15px; }
          .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          table { width: 100%; border-collapse: collapse; }
          thead { display: table-header-group; }
          tr { break-inside: avoid; }
          th, td {
            padding: 5px 6px;
            border: 1px solid #d6dedb;
            text-align: left;
            vertical-align: top;
          }
          th { color: #fff; background: #285b50; font-size: 9px; }
          tbody tr:nth-child(even) { background: #f6f8f7; }
          .num { text-align: right; white-space: nowrap; }
          small { display: block; margin-top: 2px; color: #65716e; }
          .phase-detail { break-before: page; }
          .section-heading {
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 9px;
            padding-bottom: 7px;
            border-bottom: 2px solid #1d6b59;
          }
          .section-heading span, .phase-total span { display: block; color: #66736f; }
          .section-heading h2 { margin: 1px 0 0; font-size: 18px; }
          .phase-total { text-align: right; }
          .phase-total strong { font-size: 15px; }
          .empty { margin-top: 24px; padding: 14px; border: 1px solid #ccd7d3; }
          footer {
            margin-top: 14px;
            padding-top: 7px;
            border-top: 1px solid #ccd7d3;
            color: #66736f;
            text-align: center;
          }
          @media screen {
            body { max-width: 1100px; margin: 20px auto; padding: 20px; box-shadow: 0 8px 30px rgba(0,0,0,.12); }
          }
          @media screen and (max-width: 700px) {
            body { margin: 0; padding: 12px; box-shadow: none; }
            header { align-items: flex-start; flex-direction: column; }
            .emission { text-align: left; }
            .summary-grid, .two-column { grid-template-columns: 1fr; }
            .report-section { overflow-x: auto; }
          }
        </style>
      </head>
      <body>
        <header>
          <div>
            <span class="brand">Gestão de Obras</span>
            <h1>${escapeHtml(title)}</h1>
            <p class="project-meta"><strong>${escapeHtml(projectName)}</strong>${projectAddress ? ` | ${escapeHtml(projectAddress)}` : ""}${documentLabel ? ` | ${documentLabel}` : ""}</p>
          </div>
          <div class="emission">
            <span>Emitido em</span>
            <strong>${escapeHtml(generatedAt)}</strong>
          </div>
        </header>
        <div class="filters">
          ${labels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
        </div>
        ${pdfSummaryHtml(totals)}
        ${content}
        <footer>Relatório gerado pelo aplicativo Gestão de Obras</footer>
      </body>
    </html>
  `;
}

function generatePdfReport() {
  const filters = pdfReportFilters();
  if (filters.start && filters.end && filters.start > filters.end) {
    alert("A data inicial não pode ser posterior à data final.");
    return;
  }

  const reportWindow = window.open("", "_blank", "width=1200,height=800");
  if (!reportWindow) {
    alert("O navegador bloqueou a abertura do relatório. Permita pop-ups para este site e tente novamente.");
    return;
  }

  byId("pdfReportDialog").close();
  reportWindow.addEventListener("load", () => {
    setTimeout(() => {
      reportWindow.focus();
      reportWindow.print();
    }, 250);
  }, { once: true });
  reportWindow.document.open();
  reportWindow.document.write(buildPdfReportHtml(filters));
  reportWindow.document.close();
}

function validateImportState(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("O arquivo precisa ser um objeto JSON exportado pelo app.");
  }
  if (!data.project || typeof data.project !== "object" || Array.isArray(data.project)) {
    throw new Error("O JSON precisa conter o campo project.");
  }
  ["units", "phases", "transactions"].forEach((key) => {
    if (!Array.isArray(data[key])) {
      throw new Error(`O JSON precisa conter ${key} como lista.`);
    }
  });

  return {
    project: {
      ...seedData.project,
      ...data.project
    },
    units: data.units.map((unit, index) => ({
      id: Number(unit.id || index + 1),
      name: String(unit.name || "Sem vínculo"),
      area: Number(unit.area || 0),
      status: String(unit.status || "Planejada")
    })),
    phases: data.phases.map((phase, index) => ({
      id: Number(phase.id || index + 1),
      name: String(phase.name || "Etapa sem nome"),
      budget: Number(phase.budget || 0),
      start: phase.start || "",
      end: phase.end || ""
    })),
    catalog: Array.isArray(data.catalog)
      ? data.catalog.map((item) => ({
        type: String(item.type || "Material"),
        description: String(item.description || ""),
        defaultValue: Number(item.defaultValue || 0)
      })).filter((item) => item.description)
      : [],
    transactions: data.transactions.map((item, index) => {
      const quantity = Number(item.quantity || 0);
      const unitValue = Number(item.unitValue || 0);
      return {
        id: Number(item.id || index + 1),
        phaseId: Number(item.phaseId || 0),
        unit: String(item.unit || ""),
        type: String(item.type || "Material"),
        description: String(item.description || ""),
        supplier: String(item.supplier || ""),
        quantity,
        unitValue,
        total: Number(item.total ?? (quantity * unitValue).toFixed(2)),
        date: String(item.date || todayIso()),
        payment: String(item.payment || ""),
        document: String(item.document || ""),
        notes: String(item.notes || "")
      };
    })
  };
}

function importJsonFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = validateImportState(JSON.parse(reader.result));
      const confirmed = confirm("Importar este JSON vai sobrescrever todos os dados atuais do app. Deseja continuar?");
      if (!confirmed) return;
      state = imported;
      saveState();
      resetTransactionForm();
      renderAll();
      alert("Importação concluída com sucesso.");
    } catch (error) {
      alert(`Não foi possível importar o arquivo.\n${error.message}`);
    } finally {
      byId("importJsonInput").value = "";
    }
  });
  reader.addEventListener("error", () => {
    alert("Não foi possível ler o arquivo selecionado.");
    byId("importJsonInput").value = "";
  });
  reader.readAsText(file);
}

function openPhaseDialog(phase) {
  byId("phaseId").value = phase?.id || "";
  byId("phaseName").value = phase?.name || "";
  byId("phaseBudget").value = phase?.budget || "";
  byId("phaseStart").value = phase?.start || "";
  byId("phaseEnd").value = phase?.end || "";
  byId("phaseDialog").showModal();
}

function openUnitDialog(unit) {
  byId("unitId").value = unit?.id || "";
  byId("unitName").value = unit?.name || "";
  byId("unitArea").value = unit?.area || "";
  byId("unitStatus").value = unit?.status || "Em execução";
  byId("unitDialog").showModal();
}

function fillTransactionForm(item, options = {}) {
  if (!item) return;
  byId("formPhase").value = item.phaseId ? String(item.phaseId) : String(state.phases[0]?.id || "");
  byId("formUnit").value = item.unit || "Geral";
  byId("formType").value = item.type || "Material";
  byId("formDescription").value = item.description || "";
  byId("formSupplier").value = item.supplier || "";
  byId("formQuantity").value = item.quantity || 1;
  byId("formValue").value = item.unitValue || "";
  byId("formPayment").value = item.payment || "";
  byId("formDocument").value = options.keepDocument ? item.document || "" : "";
  byId("formDate").value = options.keepDate ? item.date || todayIso() : todayIso();
  byId("formNotes").value = item.notes || "";
}

function transactionFromForm(id) {
  const quantity = Number(byId("formQuantity").value || 0);
  const unitValue = Number(byId("formValue").value || 0);
  return {
    id,
    phaseId: Number(byId("formPhase").value),
    unit: byId("formUnit").value,
    type: byId("formType").value,
    description: byId("formDescription").value.trim(),
    supplier: byId("formSupplier").value.trim(),
    quantity,
    unitValue,
    total: Number((quantity * unitValue).toFixed(2)),
    date: byId("formDate").value,
    payment: byId("formPayment").value,
    document: byId("formDocument").value.trim(),
    notes: byId("formNotes").value.trim()
  };
}

function rememberCatalogItem(item) {
  if (!item.description) return;
  state.catalog = [
    ...(state.catalog || []).filter((entry) => String(entry.description || "").trim().toLowerCase() !== item.description.toLowerCase()),
    { type: item.type, description: item.description, defaultValue: item.unitValue }
  ];
}

function resetTransactionForm(form = byId("transactionForm")) {
  editingTransactionId = null;
  form.reset();
  byId("formQuantity").value = 1;
  byId("formDate").value = todayIso();
  byId("transactionSubmit").textContent = "Adicionar lançamento";
  byId("cancelTransactionEdit").hidden = true;
}

function startTransactionEdit(id) {
  const item = state.transactions.find((entry) => entry.id === Number(id));
  if (!item) return;
  editingTransactionId = item.id;
  fillTransactionForm(item, { keepDate: true, keepDocument: true });
  byId("transactionSubmit").textContent = "Salvar alteração";
  byId("cancelTransactionEdit").hidden = false;
  document.querySelector('[data-view="lancamentos"]')?.click();
  byId("formDescription").focus();
}

function applyCatalogSelection() {
  const item = findCatalogItem(byId("formDescription").value);
  if (!item) return;
  byId("formType").value = item.type || byId("formType").value;
  if (item.defaultValue && !Number(byId("formValue").value || 0)) {
    byId("formValue").value = item.defaultValue;
  }
}

function openDescriptionDialog() {
  byId("descriptionType").value = byId("formType").value || "Material";
  byId("descriptionName").value = byId("formDescription").value || "";
  byId("descriptionDefaultValue").value = byId("formValue").value || "";
  byId("descriptionDialog").showModal();
}

function openPdfReportDialog() {
  byId("pdfReportDialog").showModal();
}

function wireEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab, .view").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      byId(tab.dataset.view).classList.add("is-active");
    });
  });

  document.querySelectorAll("[data-go-view]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(`[data-view="${button.dataset.goView}"]`)?.click();
      if (button.dataset.goView === "lancamentos") {
        if (!editingTransactionId) {
          byId("formDate").value = todayIso();
        }
        byId("formDescription").focus();
      }
    });
  });

  byId("quickRepeatLast").addEventListener("click", () => {
    const last = latestTransaction();
    if (!last) return;
    document.querySelector('[data-view="lancamentos"]')?.click();
    fillTransactionForm(last);
    byId("formQuantity").focus();
  });

  byId("addDescriptionFromLaunch").addEventListener("click", openDescriptionDialog);
  byId("formDescription").addEventListener("change", applyCatalogSelection);
  byId("cancelDescription").addEventListener("click", () => byId("descriptionDialog").close());
  byId("descriptionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const description = byId("descriptionName").value.trim();
    if (!description) return;
    const item = {
      type: byId("descriptionType").value,
      description,
      defaultValue: Number(byId("descriptionDefaultValue").value || 0)
    };
    state.catalog = [
      ...(state.catalog || []).filter((entry) => String(entry.description || "").trim().toLowerCase() !== description.toLowerCase()),
      item
    ];
    saveState();
    byId("descriptionDialog").close();
    renderSelects();
    byId("formDescription").value = item.description;
    byId("formType").value = item.type;
    if (item.defaultValue) {
      byId("formValue").value = item.defaultValue;
    }
    byId("formQuantity").focus();
  });

  ["searchInput", "phaseFilter", "typeFilter", "unitFilter"].forEach((id) => {
    byId(id).addEventListener("input", () => {
      renderDashboard();
      renderTransactions();
    });
  });
  byId("rankingLimit").addEventListener("input", renderDashboard);

  byId("clearFilters").addEventListener("click", () => {
    byId("searchInput").value = "";
    byId("phaseFilter").value = "Todas";
    byId("typeFilter").value = "Todos";
    renderDashboard();
    renderTransactions();
  });

  byId("transactionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = transactionFromForm(editingTransactionId || nextId(state.transactions));
    if (editingTransactionId) {
      state.transactions = state.transactions.map((entry) => entry.id === editingTransactionId ? item : entry);
    } else {
      state.transactions.push(item);
    }
    rememberCatalogItem(item);
    saveState();
    resetTransactionForm(event.target);
    renderAll();
  });

  byId("cancelTransactionEdit").addEventListener("click", () => {
    resetTransactionForm();
    byId("formDescription").focus();
  });

  byId("transactionRows").addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit]");
    if (editButton) {
      startTransactionEdit(editButton.dataset.edit);
      return;
    }

    const deleteButton = event.target.closest("[data-delete]");
    if (!deleteButton) return;
    const id = Number(deleteButton.dataset.delete);
    const item = state.transactions.find((entry) => entry.id === id);
    if (!item) return;
    const confirmed = confirm(`Excluir o lançamento "${item.description}"?\nEsta ação não pode ser desfeita.`);
    if (!confirmed) return;
    state.transactions = state.transactions.filter((entry) => entry.id !== id);
    if (editingTransactionId === id) {
      resetTransactionForm();
    }
    saveState();
    renderAll();
  });

  byId("addPhase").addEventListener("click", () => {
    selectNewPhaseAfterSave = false;
    openPhaseDialog();
  });
  const openPhaseFromLaunch = () => {
    selectNewPhaseAfterSave = true;
    openPhaseDialog();
  };
  byId("addPhaseFromLaunch").addEventListener("click", openPhaseFromLaunch);
  byId("addPhaseFromLaunchTop").addEventListener("click", openPhaseFromLaunch);
  byId("phaseCards").addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-phase]");
    if (deleteButton) {
      if (state.phases.length <= 1) {
        alert("A obra precisa manter pelo menos uma etapa cadastrada.");
        return;
      }
      const id = Number(deleteButton.dataset.deletePhase);
      const phase = state.phases.find((entry) => entry.id === id);
      if (!phase) return;
      const affected = state.transactions.filter((item) => item.phaseId === id).length;
      const affectedText = affected
        ? `\n${affected} lançamento(s) vinculado(s) ficarão com etapa sem vínculo.`
        : "";
      const confirmed = confirm(`Excluir a etapa "${phase.name}"?${affectedText}`);
      if (!confirmed) return;
      state.phases = state.phases.filter((entry) => entry.id !== id);
      state.transactions = state.transactions.map((item) => item.phaseId === id
        ? { ...item, phaseId: null }
        : item
      );
      saveState();
      renderAll();
      return;
    }

    const button = event.target.closest("[data-edit-phase]");
    if (!button) return;
    selectNewPhaseAfterSave = false;
    openPhaseDialog(state.phases.find((phase) => phase.id === Number(button.dataset.editPhase)));
  });

  byId("addUnit").addEventListener("click", () => openUnitDialog());
  byId("unitCards").addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-unit]");
    if (deleteButton) {
      if (state.units.length <= 1) {
        alert("A obra precisa manter pelo menos uma unidade cadastrada.");
        return;
      }
      const id = Number(deleteButton.dataset.deleteUnit);
      const unit = state.units.find((entry) => entry.id === id);
      if (!unit) return;
      const affected = state.transactions.filter((item) => item.unit === unit.name).length;
      const affectedText = affected
        ? `\n${affected} lançamento(s) vinculado(s) ficarão com unidade sem vínculo.`
        : "";
      const confirmed = confirm(`Excluir a unidade "${unit.name}"?${affectedText}`);
      if (!confirmed) return;
      state.units = state.units.filter((entry) => entry.id !== id);
      state.transactions = state.transactions.map((item) => item.unit === unit.name
        ? { ...item, unit: "" }
        : item
      );
      saveState();
      renderAll();
      return;
    }

    const button = event.target.closest("[data-edit-unit]");
    if (!button) return;
    openUnitDialog(state.units.find((unit) => unit.id === Number(button.dataset.editUnit)));
  });

  byId("cancelPhase").addEventListener("click", () => byId("phaseDialog").close());
  byId("phaseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = Number(byId("phaseId").value);
    const payload = {
      id: id || nextId(state.phases),
      name: byId("phaseName").value.trim(),
      budget: Number(byId("phaseBudget").value || 0),
      start: byId("phaseStart").value,
      end: byId("phaseEnd").value
    };
    if (id) {
      state.phases = state.phases.map((phase) => phase.id === id ? payload : phase);
    } else {
      state.phases.push(payload);
    }
    saveState();
    byId("phaseDialog").close();
    renderAll();
    if (selectNewPhaseAfterSave) {
      byId("formPhase").value = String(payload.id);
      document.querySelector('[data-view="lancamentos"]').click();
    }
    selectNewPhaseAfterSave = false;
  });

  byId("cancelUnit").addEventListener("click", () => byId("unitDialog").close());
  byId("unitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = Number(byId("unitId").value);
    const previous = state.units.find((unit) => unit.id === id);
    const payload = {
      id: id || nextId(state.units),
      name: byId("unitName").value.trim(),
      area: Number(byId("unitArea").value || 0),
      status: byId("unitStatus").value
    };
    if (id) {
      state.units = state.units.map((unit) => unit.id === id ? payload : unit);
      if (previous && previous.name !== payload.name) {
        state.transactions = state.transactions.map((item) => item.unit === previous.name
          ? { ...item, unit: payload.name }
          : item
        );
      }
    } else {
      state.units.push(payload);
    }
    saveState();
    byId("unitDialog").close();
    renderAll();
  });

  byId("exportJson").addEventListener("click", () => {
    download("gestao-obras-casa-germinada.json", JSON.stringify(state, null, 2), "application/json");
  });
  byId("importJson").addEventListener("click", () => byId("importJsonInput").click());
  byId("importJsonInput").addEventListener("change", (event) => {
    importJsonFile(event.target.files?.[0]);
  });
  byId("exportCsv").addEventListener("click", exportCsv);
  byId("printReport").addEventListener("click", openPdfReportDialog);
  byId("openPdfReport").addEventListener("click", openPdfReportDialog);
  byId("cancelPdfReport").addEventListener("click", () => byId("pdfReportDialog").close());
  byId("pdfReportForm").addEventListener("submit", (event) => {
    event.preventDefault();
    generatePdfReport();
  });
}

byId("formDate").value = todayIso();
renderAll();
wireEvents();
setInterval(refreshWorkModeDate, 60000);
