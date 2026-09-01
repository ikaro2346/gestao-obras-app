const STORAGE_KEY = "gestao-obras-casa-germinada-v3";
const BACKUP_KEY = "gestao-obras-backups-v1";
const DRAFT_KEY = "gestao-obras-lancamento-rascunho-v1";
const PORTFOLIO_KEY = "gestao-obras-portfolio-v1";
const SAFETY_BACKUP_KEY = "gestao-obras-backup-seguranca-v1";
const SCHEMA_VERSION = 7;

const seedData = {
  "project": {
    "name": "Casa Germinada",
    "document": "66.726.572/0001-60",
    "phone": "77991828792",
    "email": "nossoempreendimentoltda@gmail.com",
    "address": "Rua I, Quadra L, Lote 4, Bairro São Pedro",
    "city": "Vitoria da Conquista - Bahia",
    "allocationMethod": "equal"
  },
  "units": [
    {
      "id": 1,
      "name": "Geral",
      "area": 0,
      "status": "Custo comum"
    },
    {
      "id": 2,
      "name": "Casa 01",
      "area": 0,
      "status": "Em execução"
    },
    {
      "id": 3,
      "name": "Casa 02",
      "area": 0,
      "status": "Em execução"
    }
  ],
  "phases": [
    {
      "id": 1,
      "name": "CNPJ + Documentações",
      "budget": 0.0,
      "start": "",
      "end": "",
      "status": "Em execução",
      "progress": 0
    },
    {
      "id": 2,
      "name": "Empreiteiros",
      "budget": 0.0,
      "start": "",
      "end": "",
      "status": "Em execução",
      "progress": 0
    },
    {
      "id": 3,
      "name": "Gabarito",
      "budget": 0.0,
      "start": "2026-06-01",
      "end": "2026-06-02",
      "status": "Em execução",
      "progress": 0
    },
    {
      "id": 4,
      "name": "Ferramentas",
      "budget": 0.0,
      "start": "",
      "end": "",
      "status": "Em execução",
      "progress": 0
    },
    {
      "id": 5,
      "name": "Alvenaria + Estrutura",
      "budget": 0.0,
      "start": "",
      "end": "",
      "status": "Em execução",
      "progress": 0
    },
    {
      "id": 6,
      "name": "Fundação",
      "budget": 0.0,
      "start": "2026-06-02",
      "end": "",
      "status": "Em execução",
      "progress": 0
    },
    {
      "id": 7,
      "name": "Eletrica",
      "budget": 0.0,
      "start": "",
      "end": "",
      "status": "Em execução",
      "progress": 0
    }
  ],
  "catalog": [
    {
      "type": "Serviços",
      "description": "Criação CNPJ",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Alvará CNPJ",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Compra Xiaomi",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Transferencia Escritura",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Alvará Construção",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Planta Baixa",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Prego 18x27 Belgo",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Linha de Pedreiro nylon Am 0,80m x 100 mts (COLLINS)",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Piquetes 90 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Pinus 3 m x 0,10 m x 0,02 m",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Certificado Digital CNPJ",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Pá de Bico Cabo 120 cm (Tramontina)",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Enxada Larga 30 cm x 24 cm com Cabo 1, m ( Max)",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Picareta Alvião c/ Cabo ( Max )",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Empreita 1 Prestação",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Limpeza Terreno",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Lona Plastica Preta 6X100 Lonax",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Carrinho de mão extraforte (Tramontina)",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Disco corte Diamantado 110 x 20 mm Bom corte",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Água + Luz + Guardar Materias/Ferramentas",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Disco serra circular 4.3/8 24 DT Thompson",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Lapis Carpinteiro irwin",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Bloco Ceramico 9x19x29",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Cimento Cp II F 32 Montes Claros 50 kg",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Tabuas Pinho 3 metros 30 x 2 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Arame recozido torcido bwg 18 rl 1kg",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Coluna pronta 7 x17 5/16 (8mm) - 6mt",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Sapata Dobrada 45 80x80 vergalhão 8,0 mm (5/16)",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Treliça Ind Leve H8 - 6mt",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Vergalhão 8 mm (5/16)",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Areia Fina",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Areia Grossa",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Brita 0",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Dam Certidão Informativa",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Certidão de interior Teor",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Contador",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Betoneira 400 l prime Motor mono - Menegotti",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Bloco estrutural 14x19x39 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Canaleta estrutural 9x19x39 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Canaleta estrutural 14x19x39 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Empreita 2 parcela",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Dam Laudo de avaliação",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Extenção 25 metros",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Mangueira 20 metros",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Pintura asfaltica Acqua - Bd 18 l Quartzo",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Broxa 180 x 75 mm Condor",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Dam ITBI",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Bloco estrutural 19x19x39 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Canaleta estrutural 19x19x39 cm",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Disco corte inox 4 1/2x1,0x7/8 RANGER",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "IPTU 2026",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Ingrax graxa auto 500 g calcio2",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Planilha controle de custos",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Frete Blocos Janivaldo",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Empreita 3 parcela",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Peneira de feijão",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Luva mão Galvanizada",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Plug femea 10a",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Plug macho 10 a",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Te extenção",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Laudêmio",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Empreita 4 parcela",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Protocolo",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Certidão Nascimento",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Cascalho",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Terra aterro",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Documento de arrecadação judicial e extrajudicial",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "Cobranças Publicas",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Documentação",
      "description": "A.R.T",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Empreita 5 parcela",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Celular Pedreiro",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Eletroduto corrugado 25 mm 50 mt",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Material",
      "description": "Kit Padrão Monofasico Padrão Forte",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    },
    {
      "type": "Serviços",
      "description": "Empreita 6 parcela",
      "defaultValue": 0,
      "measure": "un",
      "favorite": false
    }
  ],
  "transactions": [
    {
      "id": 1,
      "phaseId": 3,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Limpeza Terreno",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 2500.0,
      "total": 2500.0,
      "date": "2026-06-02",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 2,
      "phaseId": 3,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Planta Baixa",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 50.0,
      "total": 50.0,
      "date": "2026-05-29",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 3,
      "phaseId": 3,
      "unit": "Geral",
      "type": "Material",
      "description": "Prego 18x27 Belgo",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 15.9,
      "total": 15.9,
      "date": "2026-05-29",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 4,
      "phaseId": 3,
      "unit": "Geral",
      "type": "Material",
      "description": "Linha de Pedreiro nylon Am 0,80m x 100 mts (COLLINS)",
      "supplier": "",
      "quantity": 5.0,
      "measure": "un",
      "unitValue": 10.4,
      "total": 52.0,
      "date": "2026-05-29",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 5,
      "phaseId": 3,
      "unit": "Geral",
      "type": "Material",
      "description": "Piquetes 90 cm",
      "supplier": "",
      "quantity": 40.0,
      "measure": "un",
      "unitValue": 6.0,
      "total": 240.0,
      "date": "2026-05-30",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 6,
      "phaseId": 3,
      "unit": "Geral",
      "type": "Material",
      "description": "Pinus 3 m x 0,10 m x 0,02 m",
      "supplier": "",
      "quantity": 30.0,
      "measure": "un",
      "unitValue": 11.17,
      "total": 335.0,
      "date": "2026-05-30",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 7,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Pá de Bico Cabo 120 cm (Tramontina)",
      "supplier": "",
      "quantity": 2.0,
      "measure": "un",
      "unitValue": 65.26,
      "total": 130.52,
      "date": "2026-06-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 8,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Enxada Larga 30 cm x 24 cm com Cabo 1, m ( Max)",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 50.86,
      "total": 50.86,
      "date": "2026-06-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 9,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Picareta Alvião c/ Cabo ( Max )",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 65.22,
      "total": 65.22,
      "date": "2026-06-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 10,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Lona Plastica Preta 6X100 Lonax",
      "supplier": "",
      "quantity": 60.0,
      "measure": "un",
      "unitValue": 1.8,
      "total": 108.0,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 11,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Carrinho de mão extraforte (Tramontina)",
      "supplier": "",
      "quantity": 2.0,
      "measure": "un",
      "unitValue": 315.04,
      "total": 630.08,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 12,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Betoneira 400 l prime Motor mono - Menegotti",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 5000.0,
      "total": 5000.0,
      "date": "2026-06-11",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 13,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Extenção 25 metros",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 228.46,
      "total": 228.46,
      "date": "2026-06-16",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 14,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Mangueira 20 metros",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 132.66,
      "total": 132.66,
      "date": "2026-06-16",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 15,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Planilha controle de custos",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 49.0,
      "total": 49.0,
      "date": "2026-06-25",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 16,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Peneira de feijão",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 27.9,
      "total": 27.9,
      "date": "2026-06-30",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 17,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Luva mão Galvanizada",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 12.1,
      "total": 12.1,
      "date": "2026-06-30",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 18,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Plug femea 10a",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 4.2,
      "total": 4.2,
      "date": "2026-07-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 19,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Plug macho 10 a",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 4.5,
      "total": 4.5,
      "date": "2026-07-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 20,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Te extenção",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 8.0,
      "total": 8.0,
      "date": "2026-07-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 21,
      "phaseId": 4,
      "unit": "Geral",
      "type": "Material",
      "description": "Luva mão Galvanizada",
      "supplier": "",
      "quantity": 2.0,
      "measure": "un",
      "unitValue": 12.1,
      "total": 24.2,
      "date": "2026-07-03",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 22,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Cimento Cp II F 32 Montes Claros 50 kg",
      "supplier": "",
      "quantity": 40.0,
      "measure": "un",
      "unitValue": 46.0,
      "total": 1840.0,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 23,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Disco corte Diamantado 110 x 20 mm Bom corte",
      "supplier": "",
      "quantity": 5.0,
      "measure": "un",
      "unitValue": 14.92,
      "total": 74.6,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 24,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Disco corte inox 4 1/2x1,0x7/8 RANGER",
      "supplier": "",
      "quantity": 10.0,
      "measure": "un",
      "unitValue": 0.91,
      "total": 9.1,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 25,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Disco serra circular 4.3/8 24 DT Thompson",
      "supplier": "",
      "quantity": 3.0,
      "measure": "un",
      "unitValue": 8.69,
      "total": 26.07,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 26,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Lapis Carpinteiro irwin",
      "supplier": "",
      "quantity": 5.0,
      "measure": "un",
      "unitValue": 1.76,
      "total": 8.8,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 27,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Prego 18x27 Belgo",
      "supplier": "",
      "quantity": 10.0,
      "measure": "un",
      "unitValue": 14.38,
      "total": 143.8,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 28,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Tabuas Pinho 3 metros 30 x 2 cm",
      "supplier": "",
      "quantity": 20.0,
      "measure": "un",
      "unitValue": 34.0,
      "total": 680.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 29,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Vergalhão 8 mm (5/16)",
      "supplier": "",
      "quantity": 15.0,
      "measure": "un",
      "unitValue": 29.0,
      "total": 435.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 30,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Sapata Dobrada 45 80x80 vergalhão 8,0 mm (5/16)",
      "supplier": "",
      "quantity": 16.0,
      "measure": "un",
      "unitValue": 30.0,
      "total": 480.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 31,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Areia Fina",
      "supplier": "",
      "quantity": 15.0,
      "measure": "un",
      "unitValue": 72.46,
      "total": 1086.96,
      "date": "2026-06-08",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 32,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Areia Grossa",
      "supplier": "",
      "quantity": 15.0,
      "measure": "un",
      "unitValue": 98.55,
      "total": 1478.26,
      "date": "2026-06-08",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 33,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Brita 0",
      "supplier": "",
      "quantity": 7.0,
      "measure": "un",
      "unitValue": 142.86,
      "total": 1000.0,
      "date": "2026-06-08",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 34,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Bloco estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 600.0,
      "measure": "un",
      "unitValue": 3.5,
      "total": 2100.0,
      "date": "2026-06-12",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 35,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 300.0,
      "measure": "un",
      "unitValue": 3.6,
      "total": 1080.0,
      "date": "2026-06-12",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 36,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Ingrax graxa auto 500 g calcio2",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 18.87,
      "total": 18.87,
      "date": "2026-06-16",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 37,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Pintura asfaltica Acqua - Bd 18 l Quartzo",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 350.0,
      "total": 350.0,
      "date": "2026-06-22",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 38,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Broxa 180 x 75 mm Condor",
      "supplier": "",
      "quantity": 2.0,
      "measure": "un",
      "unitValue": 15.0,
      "total": 30.0,
      "date": "2026-06-22",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 39,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 19x19x39 cm",
      "supplier": "",
      "quantity": 75.0,
      "measure": "un",
      "unitValue": 5.43,
      "total": 407.25,
      "date": "2026-06-25",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 40,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Bloco estrutural 19x19x39 cm",
      "supplier": "",
      "quantity": 150.0,
      "measure": "un",
      "unitValue": 5.15,
      "total": 772.5,
      "date": "2026-06-25",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 41,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Frete Blocos Janivaldo",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 250.0,
      "total": 250.0,
      "date": "2026-06-26",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 42,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Cimento Cp II F 32 Montes Claros 50 kg",
      "supplier": "",
      "quantity": 40.0,
      "measure": "un",
      "unitValue": 45.0,
      "total": 1800.0,
      "date": "2026-07-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 43,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Bloco estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 400.0,
      "measure": "un",
      "unitValue": 3.75,
      "total": 1500.0,
      "date": "2026-07-01",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 44,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 100.0,
      "measure": "un",
      "unitValue": 3.85,
      "total": 385.0,
      "date": "2026-07-07",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 45,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 50.0,
      "measure": "un",
      "unitValue": 3.75,
      "total": 187.5,
      "date": "2026-07-07",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 46,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 60.0,
      "measure": "un",
      "unitValue": 3.85,
      "total": 231.0,
      "date": "2026-07-09",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 47,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Bloco estrutural 14x19x39 cm",
      "supplier": "",
      "quantity": 270.0,
      "measure": "un",
      "unitValue": 3.75,
      "total": 1012.5,
      "date": "2026-07-09",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 48,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Treliça Ind Leve H8 - 6mt",
      "supplier": "",
      "quantity": 10.0,
      "measure": "un",
      "unitValue": 39.0,
      "total": 390.0,
      "date": "2026-07-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 49,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Cimento Cp II F 32 Montes Claros 50 kg",
      "supplier": "",
      "quantity": 25.0,
      "measure": "un",
      "unitValue": 45.0,
      "total": 1125.0,
      "date": "2026-07-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 50,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Pintura asfaltica Acqua - Bd 18 l Quartzo",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 350.0,
      "total": 350.0,
      "date": "2026-07-13",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 51,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Cascalho",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 700.0,
      "total": 700.0,
      "date": "2026-07-17",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 52,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Cascalho",
      "supplier": "",
      "quantity": 4.0,
      "measure": "un",
      "unitValue": 380.0,
      "total": 1520.0,
      "date": "2026-07-18",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 53,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Terra aterro",
      "supplier": "",
      "quantity": 4.0,
      "measure": "un",
      "unitValue": 280.0,
      "total": 1120.0,
      "date": "2026-07-18",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 54,
      "phaseId": 6,
      "unit": "Geral",
      "type": "Material",
      "description": "Cascalho",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 380.0,
      "total": 380.0,
      "date": "2026-07-22",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 55,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Criação CNPJ",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 600.0,
      "total": 600.0,
      "date": "2026-02-27",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 56,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Alvará CNPJ",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 359.77,
      "total": 359.77,
      "date": "2026-05-14",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 57,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Transferencia Escritura",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 500.0,
      "total": 500.0,
      "date": "2026-05-28",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 58,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Alvará Construção",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 1000.0,
      "total": 1000.0,
      "date": "2026-05-28",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 59,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "IPTU 2026",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 115.64,
      "total": 115.64,
      "date": "2026-06-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 60,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Dam Certidão Informativa",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 57.37,
      "total": 57.37,
      "date": "2026-06-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 61,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Certidão de interior Teor",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 118.78,
      "total": 118.78,
      "date": "2026-06-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 62,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Contador",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 350.0,
      "total": 350.0,
      "date": "2026-06-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 63,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Dam Laudo de avaliação",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 52.23,
      "total": 52.23,
      "date": "2026-06-15",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 64,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Dam ITBI",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 2000.0,
      "total": 2000.0,
      "date": "2026-06-25",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 65,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Laudêmio",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 20.0,
      "total": 20.0,
      "date": "2026-07-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 66,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Contador",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 350.0,
      "total": 350.0,
      "date": "2026-07-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 67,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Protocolo",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 20.0,
      "total": 20.0,
      "date": "2026-07-16",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 68,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Certidão Nascimento",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 64.82,
      "total": 64.82,
      "date": "2026-07-17",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 69,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Documento de arrecadação judicial e extrajudicial",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 43.86,
      "total": 43.86,
      "date": "2026-07-17",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 70,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Documento de arrecadação judicial e extrajudicial",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 43.86,
      "total": 43.86,
      "date": "2026-07-17",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 71,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "Cobranças Publicas",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 137.1,
      "total": 137.1,
      "date": "2026-07-22",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 72,
      "phaseId": 1,
      "unit": "Geral",
      "type": "Documentação",
      "description": "A.R.T",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 108.39,
      "total": 108.39,
      "date": "2026-07-22",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 73,
      "phaseId": 7,
      "unit": "Geral",
      "type": "Material",
      "description": "Eletroduto corrugado 25 mm 50 mt",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 100.9,
      "total": 100.9,
      "date": "2026-08-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 74,
      "phaseId": 7,
      "unit": "Geral",
      "type": "Material",
      "description": "Kit Padrão Monofasico Padrão Forte",
      "supplier": "",
      "quantity": 2.0,
      "measure": "un",
      "unitValue": 143.9,
      "total": 287.8,
      "date": "2026-08-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 75,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Compra Xiaomi",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 1250.0,
      "total": 1250.0,
      "date": "2026-05-26",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 76,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Empreita 1 Prestação",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 5000.0,
      "total": 5000.0,
      "date": "2026-06-02",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 77,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Água + Luz + Guardar Materias/Ferramentas",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 300.0,
      "total": 300.0,
      "date": "2026-06-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 78,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Empreita 2 parcela",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 3750.0,
      "total": 3750.0,
      "date": "2026-06-12",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 79,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Empreita 3 parcela",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 5000.0,
      "total": 5000.0,
      "date": "2026-06-26",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 80,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Empreita 4 parcela",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 5000.0,
      "total": 5000.0,
      "date": "2026-07-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 81,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Empreita 5 parcela",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 5000.0,
      "total": 5000.0,
      "date": "2026-07-24",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 82,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Água + Luz + Guardar Materias/Ferramentas",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 300.0,
      "total": 300.0,
      "date": "2026-07-27",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 83,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Material",
      "description": "Celular Pedreiro",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 1300.0,
      "total": 1300.0,
      "date": "2026-07-31",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 84,
      "phaseId": 2,
      "unit": "Geral",
      "type": "Serviços",
      "description": "Empreita 6 parcela",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 5000.0,
      "total": 5000.0,
      "date": "2026-08-07",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 85,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Bloco Ceramico 9x19x29",
      "supplier": "",
      "quantity": 6500.0,
      "measure": "un",
      "unitValue": 1.3,
      "total": 8450.0,
      "date": "2026-06-03",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 86,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Arame recozido torcido bwg 18 rl 1kg",
      "supplier": "",
      "quantity": 10.0,
      "measure": "un",
      "unitValue": 13.0,
      "total": 130.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 87,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Coluna pronta 7 x17 5/16 (8mm) - 6mt",
      "supplier": "",
      "quantity": 30.0,
      "measure": "un",
      "unitValue": 75.0,
      "total": 2250.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 88,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Treliça Ind Leve H8 - 6mt",
      "supplier": "",
      "quantity": 20.0,
      "measure": "un",
      "unitValue": 29.0,
      "total": 580.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 89,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Vergalhão 8 mm (5/16)",
      "supplier": "",
      "quantity": 15.0,
      "measure": "un",
      "unitValue": 29.0,
      "total": 435.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 90,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 9x19x39 cm",
      "supplier": "",
      "quantity": 600.0,
      "measure": "un",
      "unitValue": 2.7,
      "total": 1620.0,
      "date": "2026-06-06",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 91,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Cimento Cp II F 32 Montes Claros 50 kg",
      "supplier": "",
      "quantity": 25.0,
      "measure": "un",
      "unitValue": 45.0,
      "total": 1125.0,
      "date": "2026-07-10",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 92,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Canaleta estrutural 19x19x39 cm",
      "supplier": "",
      "quantity": 65.0,
      "measure": "un",
      "unitValue": 5.5,
      "total": 357.5,
      "date": "2026-08-03",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 93,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Areia Fina",
      "supplier": "",
      "quantity": 1.0,
      "measure": "un",
      "unitValue": 1100.0,
      "total": 1100.0,
      "date": "2026-08-03",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    },
    {
      "id": 94,
      "phaseId": 5,
      "unit": "Geral",
      "type": "Material",
      "description": "Cimento Cp II F 32 Montes Claros 50 kg",
      "supplier": "",
      "quantity": 40.0,
      "measure": "un",
      "unitValue": 46.5,
      "total": 1860.0,
      "date": "2026-08-05",
      "financialStatus": "Pago",
      "dueDate": "",
      "payment": "",
      "document": "",
      "notes": ""
    }
  ],
  "trash": []
};

let state = loadState();
let portfolio = loadPortfolio(state);
state = migrateState(activeProjectRecord()?.data || state);
let selectNewPhaseAfterSave = false;
let editingTransactionId = null;
let lastDeletedTransactionId = null;
let undoTimer = null;
let deferredInstallPrompt = null;
let waitingServiceWorker = null;
let refreshingApp = false;

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const dateFmt = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" });
const percentFmt = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1, minimumFractionDigits: 1 });

saveAutomaticBackup();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return migrateState(structuredClone(seedData));
  try {
    return migrateState(JSON.parse(saved));
  } catch {
    try {
      const backups = JSON.parse(localStorage.getItem(BACKUP_KEY) || "[]");
      if (backups[0]?.data) return migrateState(backups[0].data);
    } catch {
      // O dado inicial continua sendo o último recurso seguro.
    }
    return migrateState(structuredClone(seedData));
  }
}

function saveState() {
  state = migrateState(state);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (portfolio) {
      portfolio.projects = portfolio.projects.map((entry) => entry.id === portfolio.activeProjectId
        ? { ...entry, name: state.project.name, data: structuredClone(state), updatedAt: new Date().toISOString() }
        : entry
      );
      localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(portfolio));
    }
    saveAutomaticBackup();
  } catch {
    alert("Não foi possível salvar os dados neste navegador. Exporte um backup JSON antes de continuar.");
  }
}

function createLocalId(prefix) {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function loadPortfolio(initialState) {
  try {
    const saved = JSON.parse(localStorage.getItem(PORTFOLIO_KEY) || "null");
    if (saved?.activeProjectId && Array.isArray(saved.projects) && saved.projects.length) {
      return {
        activeProjectId: saved.activeProjectId,
        projects: saved.projects.map((entry) => ({
          ...entry,
          data: migrateState(entry.data)
        }))
      };
    }
  } catch {
    // A obra atual será usada para reconstruir o portfólio local.
  }
  const id = createLocalId("obra");
  return {
    activeProjectId: id,
    projects: [{
      id,
      name: initialState.project?.name || "Obra principal",
      data: migrateState(initialState),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }]
  };
}

function activeProjectRecord() {
  return portfolio?.projects.find((entry) => entry.id === portfolio.activeProjectId);
}

function blankProjectState(project) {
  return migrateState({
    project: {
      name: project.name,
      document: project.document || "",
      phone: "",
      email: "",
      address: project.address || "",
      city: project.city || "",
      allocationMethod: "equal"
    },
    units: [{ id: 1, name: "Geral", area: 0, status: "Custo comum" }],
    phases: [{ id: 1, name: "Planejamento", budget: 0, start: "", end: "", status: "Planejada" }],
    catalog: [],
    transactions: [],
    trash: []
  });
}

function normalizedImportKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function transactionImportKey(item, phases = []) {
  const phase = phases.find((entry) => Number(entry.id) === Number(item.phaseId));
  return [
    normalizedImportKey(phase?.name || ""),
    normalizedImportKey(item.unit || "Geral"),
    normalizedImportKey(item.type),
    normalizedImportKey(item.description),
    Number(item.quantity || 0).toFixed(2),
    Number(item.unitValue || 0).toFixed(2),
    Number(item.total || 0).toFixed(2),
    String(item.date || "")
  ].join("|");
}

function mergeSeedSpreadsheetData(next) {
  if (normalizedImportKey(next.project?.name) !== normalizedImportKey(seedData.project.name)) return next;

  const phaseByName = new Map(next.phases.map((phase) => [normalizedImportKey(phase.name), phase]));
  seedData.phases.forEach((seedPhase) => {
    const key = normalizedImportKey(seedPhase.name);
    const existing = phaseByName.get(key);
    if (existing) {
      existing.budget = Number(seedPhase.budget || existing.budget || 0);
      existing.start = existing.start || seedPhase.start || "";
      existing.end = existing.end || seedPhase.end || "";
      existing.status = existing.status || seedPhase.status || "Em execução";
      existing.progress = Math.max(Number(existing.progress || 0), Number(seedPhase.progress || 0));
      return;
    }

    const phase = { ...seedPhase, id: nextId(next.phases) };
    next.phases.push(phase);
    phaseByName.set(key, phase);
  });

  const catalogKeys = new Set(next.catalog.map((item) =>
    `${normalizedImportKey(item.type)}|${normalizedImportKey(item.description)}`
  ));
  seedData.catalog.forEach((seedItem) => {
    const key = `${normalizedImportKey(seedItem.type)}|${normalizedImportKey(seedItem.description)}`;
    if (!catalogKeys.has(key)) {
      next.catalog.push({ ...seedItem });
      catalogKeys.add(key);
    }
  });

  const transactionKeys = new Set(next.transactions.map((item) => transactionImportKey(item, next.phases)));
  seedData.transactions.forEach((seedItem) => {
    const seedPhase = seedData.phases.find((phase) => Number(phase.id) === Number(seedItem.phaseId));
    const targetPhase = phaseByName.get(normalizedImportKey(seedPhase?.name || ""));
    const transaction = {
      ...seedItem,
      id: nextId(next.transactions),
      phaseId: targetPhase?.id ?? seedItem.phaseId
    };
    const key = transactionImportKey(transaction, next.phases);
    if (!transactionKeys.has(key)) {
      next.transactions.push(transaction);
      transactionKeys.add(key);
    }
  });

  return next;
}

function resetSpreadsheetImport(next) {
  if (normalizedImportKey(next.project?.name) !== normalizedImportKey(seedData.project.name)) return next;

  const expectedTotal = seedData.transactions.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const currentTotal = next.transactions.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const empreitaPhase = next.phases.find((phase) => Number(phase.id) === 2);
  const hasWrongPhaseMap = normalizedImportKey(empreitaPhase?.name) !== "empreiteiros";
  const hasDifferentSpreadsheetTotals = next.transactions.length !== seedData.transactions.length || Math.abs(currentTotal - expectedTotal) > 0.001;
  if (!hasWrongPhaseMap && !hasDifferentSpreadsheetTotals) return next;

  next.project = { ...seedData.project, ...(next.project || {}) };
  next.units = structuredClone(seedData.units);
  next.phases = structuredClone(seedData.phases);
  next.catalog = structuredClone(seedData.catalog);
  next.transactions = structuredClone(seedData.transactions);
  next.trash = [];
  return next;
}

function migrateState(data) {
  const previousSchemaVersion = Number(data?.schemaVersion || 0);
  const next = structuredClone(data || seedData);
  next.schemaVersion = SCHEMA_VERSION;
  next.project = {
    ...seedData.project,
    ...(next.project || {}),
    allocationMethod: next.project?.allocationMethod || "equal"
  };
  next.units = Array.isArray(next.units) ? next.units.map((unit, index) => ({
    id: Number(unit.id || index + 1),
    name: String(unit.name || "Sem vínculo"),
    area: Number(unit.area || 0),
    status: String(unit.status || "Planejada")
  })) : [];
  next.phases = Array.isArray(next.phases) ? next.phases.map((phase, index) => ({
    id: Number(phase.id || index + 1),
    name: String(phase.name || "Etapa sem nome"),
    budget: Number(phase.budget || 0),
    start: String(phase.start || ""),
    end: String(phase.end || ""),
    status: String(phase.status || "Em execução"),
    progress: Math.min(100, Math.max(0, Number(phase.progress || 0)))
  })) : [];
  next.catalog = Array.isArray(next.catalog) ? next.catalog.map((item) => ({
    type: String(item.type || "Material"),
    description: String(item.description || ""),
    defaultValue: Number(item.defaultValue || 0),
    measure: String(item.measure || "un"),
    favorite: Boolean(item.favorite)
  })).filter((item) => item.description) : [];
  next.transactions = Array.isArray(next.transactions) ? next.transactions.map((item, index) => {
    const quantity = Number(item.quantity || 0);
    const unitValue = Number(item.unitValue || 0);
    return {
      ...item,
      id: Number(item.id || index + 1),
      phaseId: item.phaseId === null ? null : Number(item.phaseId || 0),
      unit: String(item.unit || ""),
      type: String(item.type || "Material"),
      description: String(item.description || ""),
      supplier: String(item.supplier || ""),
      quantity,
      measure: String(item.measure || "un"),
      unitValue,
      total: Number(item.total ?? (quantity * unitValue).toFixed(2)),
      date: String(item.date || todayIso()),
      financialStatus: String(item.financialStatus || "Pago"),
      dueDate: String(item.dueDate || ""),
      payment: String(item.payment || ""),
      document: String(item.document || ""),
      notes: String(item.notes || "")
    };
  }) : [];
  next.trash = Array.isArray(next.trash) ? next.trash : [];
  if (previousSchemaVersion < 5) mergeSeedSpreadsheetData(next);
  if (previousSchemaVersion < 7) resetSpreadsheetImport(next);
  return next;
}

function saveAutomaticBackup() {
  try {
    const today = todayIso();
    const projectId = portfolio?.activeProjectId || "obra-legada";
    let backups = [];
    try {
      backups = JSON.parse(localStorage.getItem(BACKUP_KEY) || "[]");
    } catch {
      backups = [];
    }
    if (backups.some((backup) => backup.date === today && backup.projectId === projectId)) return;
    backups.unshift({
      date: today,
      projectId,
      createdAt: new Date().toISOString(),
      data: structuredClone(state)
    });
    localStorage.setItem(BACKUP_KEY, JSON.stringify(backups.slice(0, 14)));
  } catch {
    // A falha do backup não deve impedir o uso do aplicativo.
  }
}

function savePortfolioSafetyBackup(reason) {
  try {
    localStorage.setItem(SAFETY_BACKUP_KEY, JSON.stringify({
      createdAt: new Date().toISOString(),
      reason,
      portfolio: structuredClone(portfolio)
    }));
    return true;
  } catch {
    return false;
  }
}

function loadPortfolioSafetyBackup() {
  try {
    const backup = JSON.parse(localStorage.getItem(SAFETY_BACKUP_KEY) || "null");
    return backup?.portfolio?.projects?.length ? backup : null;
  } catch {
    return null;
  }
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

function financialStatus(item) {
  const status = String(item.financialStatus || "Pago");
  return ["Pago", "A pagar", "Previsto", "Cancelado"].includes(status) ? status : "Previsto";
}

function financialStatusClass(status) {
  return {
    "Pago": "status-paid",
    "A pagar": "status-pending",
    "Previsto": "status-planned",
    "Cancelado": "status-cancelled"
  }[status] || "status-planned";
}

function paidTransactions(items = state.transactions) {
  return items.filter((item) => financialStatus(item) === "Pago");
}

function pendingTransactions(items = state.transactions) {
  return items.filter((item) => financialStatus(item) === "A pagar");
}

function phaseTotal(id, transactions = state.transactions) {
  return paidTransactions(transactions)
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

function latestTransaction(items = state.transactions) {
  return [...items].sort((a, b) => {
    const dateCompare = String(b.date || "").localeCompare(String(a.date || ""));
    return dateCompare || Number(b.id || 0) - Number(a.id || 0);
  })[0];
}

function catalogItems() {
  const fromTransactions = state.transactions.map((item) => ({
    type: item.type,
    description: item.description,
    defaultValue: item.unitValue || 0,
    measure: item.measure || "un",
    favorite: false
  }));
  const byName = [...(state.catalog || []), ...fromTransactions].reduce((acc, item) => {
    if (!item.description) return acc;
    const key = item.description.trim().toLowerCase();
    if (!acc[key]) {
      acc[key] = {
        type: item.type || "Material",
        description: item.description.trim(),
        defaultValue: Number(item.defaultValue || 0),
        measure: item.measure || "un",
        favorite: Boolean(item.favorite)
      };
    } else if (item.favorite) {
      acc[key].favorite = true;
    }
    return acc;
  }, {});
  return Object.values(byName).sort((a, b) =>
    Number(b.favorite) - Number(a.favorite) ||
    a.description.localeCompare(b.description, "pt-BR")
  );
}

function findCatalogItem(description) {
  const key = String(description || "").trim().toLowerCase();
  return catalogItems().find((item) => item.description.trim().toLowerCase() === key);
}

function billableUnits() {
  return state.units.filter((unit) => unit.name !== "Geral");
}

function unitDirectTotal(unitName) {
  return paidTransactions(state.transactions)
    .filter((item) => item.unit === unitName)
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
}

function sharedTotal() {
  return unitDirectTotal("Geral");
}

function unitAllocatedTotal(unitName) {
  if (unitName === "Geral") return sharedTotal();
  const units = billableUnits();
  const method = state.project.allocationMethod || "equal";
  if (method === "area") {
    const totalArea = units.reduce((sum, unit) => sum + Number(unit.area || 0), 0);
    if (totalArea > 0) {
      const unitArea = Number(units.find((unit) => unit.name === unitName)?.area || 0);
      return unitDirectTotal(unitName) + (sharedTotal() * (unitArea / totalArea));
    }
  }
  const split = units.length || 1;
  return unitDirectTotal(unitName) + (sharedTotal() / split);
}

function filteredTransactions() {
  const search = byId("searchInput")?.value.trim().toLowerCase() || "";
  const phase = byId("phaseFilter")?.value || "Todas";
  const type = byId("typeFilter")?.value || "Todos";
  const unit = byId("unitFilter")?.value || "Todas";
  const status = byId("statusFilter")?.value || "Todos";
  const supplier = byId("supplierFilter")?.value.trim().toLowerCase() || "";
  const start = byId("startDateFilter")?.value || "";
  const end = byId("endDateFilter")?.value || "";

  return state.transactions.filter((item) => {
    const searchable = [item.description, item.supplier, item.document, item.notes]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const matchesSearch = !search || searchable.includes(search);
    const matchesPhase = phase === "Todas" || item.phaseId === Number(phase);
    const matchesType = type === "Todos" || item.type === type;
    const matchesUnit = unit === "Todas" || item.unit === unit;
    const matchesStatus = status === "Todos" || financialStatus(item) === status;
    const matchesSupplier = !supplier || String(item.supplier || "").toLowerCase().includes(supplier);
    const matchesStart = !start || String(item.date || "") >= start;
    const matchesEnd = !end || String(item.date || "") <= end;
    return matchesSearch && matchesPhase && matchesType && matchesUnit &&
      matchesStatus && matchesSupplier && matchesStart && matchesEnd;
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
  const duration = start && end
    ? Math.max(1, Math.round((new Date(`${end}T00:00:00Z`) - new Date(`${start}T00:00:00Z`)) / 86400000) + 1)
    : null;
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
  const realizedItems = paidTransactions(items);
  const phases = selectedPhaseId === null
    ? state.phases
    : state.phases.filter((phase) => phase.id === selectedPhaseId);
  const rows = phases.map((phase) => {
    const phaseItems = realizedItems.filter((item) => item.phaseId === phase.id);
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
    const orphanItems = realizedItems.filter((item) => !knownIds.has(item.phaseId));
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
  const realizedItems = paidTransactions(items);
  const spent = realizedItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const material = realizedItems
    .filter((item) => item.type === "Material")
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
  const budget = phaseRows.reduce((sum, phase) => sum + Number(phase.budget || 0), 0);
  return {
    budget,
    spent,
    material,
    other: spent - material,
    balance: budget - spent,
    count: realizedItems.length
  };
}

function renderSelects() {
  const selectedUnitFilter = byId("unitFilter")?.value || "Todas";
  const selectedPhaseFilter = byId("phaseFilter")?.value || "Todas";
  const selectedTypeFilter = byId("typeFilter")?.value || "Todos";
  const selectedPdfUnit = byId("pdfUnit")?.value || "Todas";
  const selectedPdfPhase = byId("pdfPhase")?.value || "Todas";
  const unitOptions = state.units
    .map((unit) => `<option value="${escapeHtml(unit.name)}">${escapeHtml(unit.name)}</option>`)
    .join("");
  byId("unitFilter").innerHTML = '<option value="Todas">Todas as unidades</option>' + unitOptions;
  byId("unitFilter").value = Array.from(byId("unitFilter").options).some((option) => option.value === selectedUnitFilter)
    ? selectedUnitFilter
    : "Todas";
  byId("formUnit").innerHTML = unitOptions;
  byId("pdfUnit").innerHTML = '<option value="Todas">Todas as unidades</option>' + unitOptions;
  byId("pdfUnit").value = Array.from(byId("pdfUnit").options).some((option) => option.value === selectedPdfUnit)
    ? selectedPdfUnit
    : "Todas";

  const phaseOptions = ['<option value="Todas">Todas as etapas</option>']
    .concat(state.phases.map((phase) => `<option value="${phase.id}">${escapeHtml(phase.name)}</option>`))
    .join("");
  byId("phaseFilter").innerHTML = phaseOptions;
  byId("phaseFilter").value = Array.from(byId("phaseFilter").options).some((option) => option.value === selectedPhaseFilter)
    ? selectedPhaseFilter
    : "Todas";
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
  byId("typeFilter").value = Array.from(byId("typeFilter").options).some((option) => option.value === selectedTypeFilter)
    ? selectedTypeFilter
    : "Todos";
  byId("formType").innerHTML = types
    .map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`)
    .join("");

  const catalog = catalogItems();
  byId("catalogList").innerHTML = catalog
    .map((item) => `<option value="${escapeHtml(item.description)}" label="${item.favorite ? "Favorito - " : ""}${escapeHtml(item.type)} | ${escapeHtml(item.measure)}${item.defaultValue ? ` - ${money.format(item.defaultValue)}` : ""}"></option>`)
    .join("");

  const suppliers = Array.from(new Set(state.transactions.map((item) => item.supplier).filter(Boolean))).sort();
  byId("supplierList").innerHTML = suppliers.map((item) => `<option value="${escapeHtml(item)}"></option>`).join("");
}

function renderDashboard() {
  const items = filteredTransactions();
  const realizedItems = paidTransactions(items);
  const pendingItems = pendingTransactions(items);
  const today = todayIso();
  const todayItems = paidTransactions(state.transactions).filter((item) => item.date === today);
  const todayTotal = todayItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const last = latestTransaction(paidTransactions(state.transactions));
  const totalReal = realizedItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const pendingTotal = pendingItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const overdueCount = pendingItems.filter((item) => item.dueDate && item.dueDate < today).length;
  const selectedPhase = byId("phaseFilter")?.value || "Todas";
  const budgetPhases = selectedPhase === "Todas"
    ? state.phases
    : state.phases.filter((phase) => phase.id === Number(selectedPhase));
  const totalPlanned = budgetPhases.reduce((sum, phase) => sum + Number(phase.budget || 0), 0);
  const hasPartialBudgetContext = (byId("unitFilter")?.value || "Todas") !== "Todas" ||
    Boolean(byId("startDateFilter")?.value) ||
    Boolean(byId("endDateFilter")?.value) ||
    !["Todos", "Pago"].includes(byId("statusFilter")?.value || "Todos");
  const [topPhaseLabel, topPhaseAmount] = topEntry(totalsBy(realizedItems, (item) => phaseName(item.phaseId)));
  const [topTypeLabel, topTypeAmount] = topEntry(totalsBy(realizedItems, (item) => item.type));

  byId("projectTitle").textContent = state.project.name || "Gestão de Obras";
  byId("projectMeta").textContent = [state.project.address, state.project.city].filter(Boolean).join(" | ");
  byId("totalReal").textContent = money.format(totalReal);
  byId("launchCount").textContent = `${realizedItems.length} pagos | ${items.length} registros`;
  byId("totalPlanned").textContent = money.format(totalPlanned);
  byId("budgetStatus").textContent = hasPartialBudgetContext
    ? "Orçamento integral das etapas; filtros afetam o realizado"
    : totalPlanned > 0
    ? `${Math.round((totalReal / totalPlanned) * 100)}% do orçamento usado`
    : "Informe o orçamento nas etapas";
  byId("topPhase").textContent = topPhaseLabel;
  byId("topPhaseValue").textContent = money.format(topPhaseAmount);
  byId("topType").textContent = topTypeLabel;
  byId("topTypeValue").textContent = money.format(topTypeAmount);
  byId("pendingTotal").textContent = money.format(pendingTotal);
  byId("pendingCount").textContent = overdueCount
    ? `${pendingItems.length} pendência(s), ${overdueCount} vencida(s)`
    : `${pendingItems.length} pendência(s) filtrada(s)`;
  byId("todayLabel").textContent = formatDate(today);
  byId("todaySummary").innerHTML = `
    <article class="today-item"><span>Gasto hoje</span><strong>${money.format(todayTotal)}</strong></article>
    <article class="today-item"><span>Lançamentos hoje</span><strong>${todayItems.length}</strong></article>
    <article class="today-item"><span>Último gasto</span><strong>${last ? money.format(last.total) : "-"}</strong></article>
  `;

  const max = Math.max(...state.phases.map((phase) => phaseTotal(phase.id, realizedItems)), 1);
  byId("phaseBars").innerHTML = state.phases.map((phase) => {
    const real = phaseTotal(phase.id, realizedItems);
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
    const status = financialStatus(item);
    const statusLabel = escapeHtml(status);
    return `
      <article class="activity-item">
        <div class="activity-top">
          <span>${description}</span>
          <span>${money.format(item.total)}</span>
        </div>
        <div class="muted">${formatDate(item.date)} | ${phase} | ${type}${supplier}</div>
        <span class="badge">${unit}</span>
        <span class="badge ${financialStatusClass(status)}">${statusLabel}</span>
      </article>
    `;
  }).join("") || '<p class="muted">Nenhum lançamento encontrado.</p>';

  const rankingLimit = Number(byId("rankingLimit")?.value || 5);
  const ranking = rankedItems(realizedItems).slice(0, rankingLimit);
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
          <div><span>Realizado</span><strong>${money.format(phaseTotal(phase.id, realizedItems))}</strong></div>
          <div><span>Avanço físico</span><strong>${Number(phase.progress || 0).toLocaleString("pt-BR")}%</strong></div>
        </div>
      </article>
    `;
  }).join("");

  const abcItems = materialAbcItems(realizedItems);
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
    const status = financialStatus(item);
    const statusLabel = escapeHtml(status);
    const measure = escapeHtml(item.measure || "un");
    const dueDate = item.dueDate ? `<br><span class="muted">Vence em ${formatDate(item.dueDate)}</span>` : "";
    return `
      <tr>
        <td>${formatDate(item.date)}</td>
        <td>${phase}<br><span class="muted">${unit}</span><br><span class="badge ${financialStatusClass(status)}">${statusLabel}</span></td>
        <td><strong>${description}</strong><br><span class="muted">${item.quantity} ${measure} x ${money.format(item.unitValue)} | ${type}${payment}${documentRef}</span></td>
        <td>${supplier}${dueDate}${notes}</td>
        <td class="number">${money.format(item.total)}</td>
        <td class="number">
          <div class="row-actions">
            ${status === "A pagar" ? `<button class="table-action" type="button" data-mark-paid="${item.id}">Marcar pago</button>` : ""}
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
        <span class="badge">${escapeHtml(phase.status || "Em execução")}</span>
        <dl>
          <div><dt>Orçado</dt><dd>${money.format(budget)}</dd></div>
          <div><dt>Realizado</dt><dd>${money.format(real)}</dd></div>
          <div><dt>Saldo</dt><dd>${budget > 0 ? money.format(balance) : "-"}</dd></div>
          <div><dt>Uso</dt><dd>${percent}</dd></div>
          <div><dt>Início</dt><dd>${formatDate(schedule.start)}</dd></div>
          <div><dt>Fim</dt><dd>${formatDate(schedule.end)}</dd></div>
          <div><dt>Duração</dt><dd>${schedule.duration === null ? "-" : `${schedule.duration} dias`}</dd></div>
          <div><dt>Avanço físico</dt><dd>${Number(phase.progress || 0).toLocaleString("pt-BR")}%</dd></div>
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
  const totalReal = paidTransactions(state.transactions).reduce((sum, item) => sum + Number(item.total || 0), 0);
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
      : `${money.format(allocated - direct)} de custo comum (${state.project.allocationMethod === "area" ? "por área" : "igual"})`;
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
  const realizedItems = paidTransactions(state.transactions);
  const totalReal = realizedItems.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const totalBudget = state.phases.reduce((sum, phase) => sum + Number(phase.budget || 0), 0);
  const material = realizedItems
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

  byId("rankingRows").innerHTML = rankedItems(realizedItems).slice(0, 15).map((item, index) => {
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

  byId("abcRows").innerHTML = materialAbcItems(realizedItems).map((item) => {
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

function renderProjectSelector() {
  byId("projectSelector").innerHTML = portfolio.projects
    .map((entry) => `<option value="${escapeHtml(entry.id)}">${escapeHtml(entry.name || entry.data?.project?.name || "Obra")}</option>`)
    .join("");
  byId("projectSelector").value = portfolio.activeProjectId;
}

function renderAll() {
  renderProjectSelector();
  renderSelects();
  renderDashboard();
  renderTransactions();
  renderUnits();
  renderPhases();
  renderReport();
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? "-" : dateFmt.format(date);
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
  const headers = ["Data", "Unidade", "Etapa", "Tipo", "Descricao", "Fornecedor", "Quantidade", "Unidade medida", "Valor unitario", "Total", "Situacao", "Vencimento", "Pagamento", "Documento", "Observacoes"];
  const csvNumber = (value) => Number(value || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const csvText = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  const rows = state.transactions.map((item) => [
    formatDate(item.date),
    item.unit,
    phaseName(item.phaseId),
    item.type,
    item.description,
    item.supplier || "",
    csvNumber(item.quantity),
    item.measure || "un",
    csvNumber(item.unitValue),
    csvNumber(item.total),
    financialStatus(item),
    item.dueDate ? formatDate(item.dueDate) : "",
    item.payment || "",
    item.document || "",
    item.notes
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map(csvText).join(";"))
    .join("\r\n");
  download("lancamentos-casa-germinada.csv", `\uFEFF${csv}`, "text/csv;charset=utf-8");
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

function pdfSummaryHtml(totals, budgetComparable = true) {
  const balance = budgetComparable && totals.budget > 0 ? money.format(totals.balance) : "-";
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

function pdfPhaseSummaryHtml(rows, budgetComparable = true) {
  const body = rows.map((phase) => {
    const used = budgetComparable && phase.percentUsed !== null ? `${percentFmt.format(phase.percentUsed * 100)}%` : "-";
    return `
      <tr>
        <td><strong>${escapeHtml(phase.name)}</strong></td>
        <td class="num">${phase.count}</td>
        <td class="num">${money.format(phase.budget)}</td>
        <td class="num">${money.format(phase.material)}</td>
        <td class="num">${money.format(phase.other)}</td>
        <td class="num">${money.format(phase.spent)}</td>
        <td class="num">${budgetComparable && phase.budget > 0 ? money.format(phase.balance) : "-"}</td>
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
    const status = financialStatus(item);
    return `
      <tr>
        <td>${formatDate(item.date)}</td>
        ${showPhase ? `<td>${escapeHtml(phaseName(item.phaseId))}</td>` : ""}
        <td>${escapeHtml(item.unit || "Sem vínculo")}</td>
        <td><strong>${escapeHtml(item.description)}</strong>${supplier}${documentRef}${notes}</td>
        <td>${escapeHtml(item.type)}</td>
        <td>${escapeHtml(status)}</td>
        <td class="num">${Number(item.quantity || 0).toLocaleString("pt-BR")} ${escapeHtml(item.measure || "un")}</td>
        <td class="num">${money.format(Number(item.unitValue || 0))}</td>
        <td class="num"><strong>${money.format(Number(item.total || 0))}</strong></td>
      </tr>
    `;
  }).join("");
  const columns = showPhase ? 9 : 8;

  return `
    <table class="detail-table">
      <thead>
        <tr>
          <th>Data</th>
          ${showPhase ? "<th>Etapa</th>" : ""}
          <th>Unidade</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Situação</th>
          <th class="num">Qtd.</th>
          <th class="num">Unitário</th>
          <th class="num">Total</th>
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="${columns}">Nenhum lançamento encontrado para os filtros escolhidos.</td></tr>`}</tbody>
    </table>
  `;
}

function pdfSummarySectionsHtml(items, phaseRows, budgetComparable = true) {
  const realizedItems = paidTransactions(items);
  const typeMap = totalsBy(realizedItems, (item) => item.type || "Sem tipo");
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
  const topRows = rankedItems(realizedItems).slice(0, 10).map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(item.description)}</td>
      <td>${escapeHtml(item.mainPhase)}</td>
      <td class="num">${money.format(item.total)}</td>
    </tr>
  `).join("");

  return `
    ${pdfPhaseSummaryHtml(phaseRows, budgetComparable)}
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
  const budgetComparable = filters.unit === "Todas" && !filters.start && !filters.end;
  let content = pdfSummarySectionsHtml(items, phaseRows, budgetComparable);

  if (filters.type === "phases") {
    content = `${pdfPhaseSummaryHtml(phaseRows, budgetComparable)}${pdfPhaseDetailsHtml(phaseRows)}`;
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
        ${pdfSummaryHtml(totals, budgetComparable)}
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
    schemaVersion: SCHEMA_VERSION,
    project: {
      ...seedData.project,
      ...data.project,
      allocationMethod: data.project.allocationMethod || "equal"
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
      end: phase.end || "",
      status: String(phase.status || "Em execução"),
      progress: Math.min(100, Math.max(0, Number(phase.progress || 0)))
    })),
    catalog: Array.isArray(data.catalog)
      ? data.catalog.map((item) => ({
        type: String(item.type || "Material"),
        description: String(item.description || ""),
        defaultValue: Number(item.defaultValue || 0),
        measure: String(item.measure || "un"),
        favorite: Boolean(item.favorite)
      })).filter((item) => item.description)
      : [],
    transactions: data.transactions.map((item, index) => {
      const quantity = Number(item.quantity || 0);
      const unitValue = Number(item.unitValue || 0);
      return {
        id: Number(item.id || index + 1),
        phaseId: item.phaseId === null ? null : Number(item.phaseId || 0),
        unit: String(item.unit || ""),
        type: String(item.type || "Material"),
        description: String(item.description || ""),
        supplier: String(item.supplier || ""),
        quantity,
        measure: String(item.measure || "un"),
        unitValue,
        total: Number(item.total ?? (quantity * unitValue).toFixed(2)),
        date: String(item.date || todayIso()),
        financialStatus: String(item.financialStatus || "Pago"),
        dueDate: String(item.dueDate || ""),
        payment: String(item.payment || ""),
        document: String(item.document || ""),
        notes: String(item.notes || "")
      };
    }),
    trash: Array.isArray(data.trash) ? data.trash : []
  };
}

function validatePortfolioImport(data) {
  if (data?.portfolioVersion !== 1 || !Array.isArray(data.projects) || !data.projects.length) {
    return null;
  }
  const projects = data.projects.map((entry, index) => {
    if (!entry?.data) throw new Error(`A obra ${index + 1} do backup completo não contém dados.`);
    const validated = validateImportState(entry.data);
    return {
      id: String(entry.id || createLocalId("obra")),
      name: String(entry.name || validated.project.name || `Obra ${index + 1}`),
      data: validated,
      createdAt: entry.createdAt || new Date().toISOString(),
      updatedAt: entry.updatedAt || new Date().toISOString()
    };
  });
  const activeProjectId = projects.some((entry) => entry.id === data.activeProjectId)
    ? data.activeProjectId
    : projects[0].id;
  return { activeProjectId, projects };
}

function importJsonFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedPortfolio = validatePortfolioImport(parsed);
      const imported = importedPortfolio ? null : validateImportState(parsed);
      const message = importedPortfolio
        ? "Este backup vai substituir todas as obras salvas neste navegador. Deseja continuar?"
        : "Importar este JSON vai sobrescrever os dados da obra atual. Deseja continuar?";
      const confirmed = confirm(message);
      if (!confirmed) return;
      const backupCreated = savePortfolioSafetyBackup("Antes da importação");
      if (!backupCreated) {
        const continueWithoutBackup = confirm("Não foi possível criar a cópia de segurança automática. Deseja continuar a importação mesmo assim?");
        if (!continueWithoutBackup) return;
      }
      if (importedPortfolio) {
        portfolio = importedPortfolio;
        state = migrateState(activeProjectRecord().data);
      } else {
        state = imported;
      }
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
  byId("phaseStatus").value = phase?.status || "Em execução";
  byId("phaseProgress").value = Number(phase?.progress || 0);
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
  byId("formMeasure").value = item.measure || "un";
  byId("formValue").value = item.unitValue || "";
  byId("formFinancialStatus").value = financialStatus(item);
  byId("formDueDate").value = item.dueDate || "";
  byId("formPayment").value = item.payment || "";
  byId("formDocument").value = options.keepDocument ? item.document || "" : "";
  byId("formDate").value = options.keepDate ? item.date || todayIso() : todayIso();
  byId("formNotes").value = item.notes || "";
  byId("transactionDetails").open = Boolean(
    item.supplier || item.payment || item.document || item.notes || item.dueDate ||
    financialStatus(item) !== "Pago"
  );
  updateTransactionTotalPreview();
  updateFavoriteButton();
}

function transactionFromForm(id) {
  const quantity = Number(byId("formQuantity").value || 0);
  const unitValue = Number(byId("formValue").value || 0);
  const previous = state.transactions.find((item) => item.id === Number(id));
  const timestamp = new Date().toISOString();
  return {
    ...(previous || {}),
    id,
    phaseId: Number(byId("formPhase").value),
    unit: byId("formUnit").value,
    type: byId("formType").value,
    description: byId("formDescription").value.trim(),
    supplier: byId("formSupplier").value.trim(),
    quantity,
    measure: byId("formMeasure").value,
    unitValue,
    total: Number((quantity * unitValue).toFixed(2)),
    date: byId("formDate").value,
    financialStatus: byId("formFinancialStatus").value,
    dueDate: byId("formDueDate").value,
    payment: byId("formPayment").value,
    document: byId("formDocument").value.trim(),
    notes: byId("formNotes").value.trim(),
    createdAt: previous?.createdAt || timestamp,
    updatedAt: timestamp
  };
}

function rememberCatalogItem(item) {
  if (!item.description) return;
  const previous = findCatalogItem(item.description);
  state.catalog = [
    ...(state.catalog || []).filter((entry) => String(entry.description || "").trim().toLowerCase() !== item.description.toLowerCase()),
    {
      type: item.type,
      description: item.description,
      defaultValue: item.unitValue,
      measure: item.measure || "un",
      favorite: Boolean(previous?.favorite)
    }
  ];
}

function resetTransactionForm(form = byId("transactionForm")) {
  editingTransactionId = null;
  form.reset();
  localStorage.removeItem(DRAFT_KEY);
  byId("formQuantity").value = 1;
  byId("formMeasure").value = "un";
  byId("formFinancialStatus").value = "Pago";
  byId("formDate").value = todayIso();
  byId("transactionDetails").open = false;
  byId("transactionSubmit").textContent = "Adicionar lançamento";
  byId("cancelTransactionEdit").hidden = true;
  updateTransactionTotalPreview();
  updateFavoriteButton();
}

function saveTransactionDraft() {
  if (editingTransactionId) return;
  const draft = {
    phaseId: byId("formPhase").value,
    unit: byId("formUnit").value,
    type: byId("formType").value,
    description: byId("formDescription").value,
    supplier: byId("formSupplier").value,
    quantity: byId("formQuantity").value,
    measure: byId("formMeasure").value,
    unitValue: byId("formValue").value,
    date: byId("formDate").value,
    financialStatus: byId("formFinancialStatus").value,
    dueDate: byId("formDueDate").value,
    payment: byId("formPayment").value,
    document: byId("formDocument").value,
    notes: byId("formNotes").value
  };
  if (draft.description || draft.supplier || draft.unitValue || draft.notes) {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } else {
    localStorage.removeItem(DRAFT_KEY);
  }
}

function restoreTransactionDraft() {
  try {
    const draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
    if (!draft?.description) return;
    byId("formPhase").value = draft.phaseId || byId("formPhase").value;
    byId("formUnit").value = draft.unit || byId("formUnit").value;
    byId("formType").value = draft.type || "Material";
    byId("formDescription").value = draft.description || "";
    byId("formSupplier").value = draft.supplier || "";
    byId("formQuantity").value = draft.quantity || 1;
    byId("formMeasure").value = draft.measure || "un";
    byId("formValue").value = draft.unitValue || "";
    byId("formDate").value = draft.date || todayIso();
    byId("formFinancialStatus").value = draft.financialStatus || "Pago";
    byId("formDueDate").value = draft.dueDate || "";
    byId("formPayment").value = draft.payment || "";
    byId("formDocument").value = draft.document || "";
    byId("formNotes").value = draft.notes || "";
    byId("transactionDetails").open = Boolean(draft.supplier || draft.dueDate || draft.payment || draft.document || draft.notes);
    updateTransactionTotalPreview();
    updateFavoriteButton();
  } catch {
    localStorage.removeItem(DRAFT_KEY);
  }
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
  byId("formMeasure").value = item.measure || "un";
  if (item.defaultValue && !Number(byId("formValue").value || 0)) {
    byId("formValue").value = item.defaultValue;
  }
  updateTransactionTotalPreview();
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const item = findCatalogItem(byId("formDescription")?.value);
  const favorite = Boolean(item?.favorite);
  byId("toggleFavoriteDescription").textContent = favorite ? "★" : "☆";
  byId("toggleFavoriteDescription").setAttribute("aria-pressed", String(favorite));
  byId("toggleFavoriteDescription").title = favorite ? "Remover dos favoritos" : "Marcar como favorito";
}

function toggleFavoriteDescription() {
  const description = byId("formDescription").value.trim();
  if (!description) {
    alert("Informe uma descrição antes de marcar como favorita.");
    return;
  }
  const key = description.toLowerCase();
  const existing = (state.catalog || []).find((item) => String(item.description || "").trim().toLowerCase() === key);
  const payload = {
    type: existing?.type || byId("formType").value,
    description,
    defaultValue: Number(existing?.defaultValue ?? (byId("formValue").value || 0)),
    measure: existing?.measure || byId("formMeasure").value || "un",
    favorite: !Boolean(existing?.favorite)
  };
  const formSelections = {
    phase: byId("formPhase").value,
    unit: byId("formUnit").value,
    type: byId("formType").value
  };
  state.catalog = [
    ...(state.catalog || []).filter((item) => String(item.description || "").trim().toLowerCase() !== key),
    payload
  ];
  saveState();
  renderSelects();
  byId("formPhase").value = formSelections.phase;
  byId("formUnit").value = formSelections.unit;
  byId("formType").value = formSelections.type;
  updateFavoriteButton();
}

function updateTransactionTotalPreview() {
  const quantity = Number(byId("formQuantity")?.value || 0);
  const unitValue = Number(byId("formValue")?.value || 0);
  byId("formTotalPreview").textContent = money.format(quantity * unitValue);
}

function findPossibleDuplicate(item) {
  return state.transactions.find((entry) =>
    entry.id !== item.id &&
    entry.date === item.date &&
    String(entry.description || "").trim().toLowerCase() === item.description.toLowerCase() &&
    String(entry.supplier || "").trim().toLowerCase() === item.supplier.toLowerCase() &&
    Math.abs(Number(entry.total || 0) - Number(item.total || 0)) < 0.01
  );
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

function openSettingsDialog() {
  const project = state.project || {};
  const safetyBackup = loadPortfolioSafetyBackup();
  byId("settingsProjectName").value = project.name || "";
  byId("settingsDocument").value = project.document || "";
  byId("settingsPhone").value = project.phone || "";
  byId("settingsEmail").value = project.email || "";
  byId("settingsAddress").value = project.address || "";
  byId("settingsCity").value = project.city || "";
  byId("settingsAllocation").value = project.allocationMethod || "equal";
  byId("restoreSafetyBackup").hidden = !safetyBackup;
  byId("restoreSafetyBackup").title = safetyBackup
    ? `Cópia criada em ${new Date(safetyBackup.createdAt).toLocaleString("pt-BR")}`
    : "";
  byId("settingsDialog").showModal();
}

function restorePortfolioSafetyBackup() {
  const backup = loadPortfolioSafetyBackup();
  if (!backup) {
    alert("Nenhum backup de segurança está disponível.");
    return;
  }
  const restoredPortfolio = validatePortfolioImport({
    portfolioVersion: 1,
    ...backup.portfolio
  });
  const createdAt = new Date(backup.createdAt).toLocaleString("pt-BR");
  const confirmed = confirm(`Restaurar a cópia de segurança criada em ${createdAt}?\nOs dados atuais serão guardados para permitir desfazer esta restauração.`);
  if (!confirmed) return;

  const currentPortfolio = structuredClone(portfolio);
  portfolio = restoredPortfolio;
  state = migrateState(activeProjectRecord().data);
  localStorage.setItem(SAFETY_BACKUP_KEY, JSON.stringify({
    createdAt: new Date().toISOString(),
    reason: "Antes da restauração",
    portfolio: currentPortfolio
  }));
  saveState();
  resetTransactionForm();
  byId("settingsDialog").close();
  renderAll();
  alert("Backup restaurado com sucesso.");
}

function switchActiveProject(projectId) {
  if (projectId === portfolio.activeProjectId) return;
  saveState();
  const target = portfolio.projects.find((entry) => entry.id === projectId);
  if (!target) return;
  portfolio.activeProjectId = projectId;
  state = migrateState(target.data);
  localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(portfolio));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  resetTransactionForm();
  renderAll();
}

function createProjectFromForm() {
  const project = {
    name: byId("newProjectName").value.trim(),
    address: byId("newProjectAddress").value.trim(),
    city: byId("newProjectCity").value.trim()
  };
  if (!project.name) return;
  saveState();
  const id = createLocalId("obra");
  const data = blankProjectState(project);
  portfolio.projects.push({
    id,
    name: project.name,
    data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  portfolio.activeProjectId = id;
  state = data;
  saveState();
  resetTransactionForm();
  byId("newProjectForm").reset();
  byId("newProjectDialog").close();
  renderAll();
}

function renderTrash() {
  byId("trashList").innerHTML = (state.trash || []).map((item) => `
    <article class="trash-item">
      <div>
        <strong>${escapeHtml(item.description)}</strong>
        <span class="muted">${formatDate(item.date)} | ${escapeHtml(phaseName(item.phaseId))} | ${money.format(item.total)}</span>
      </div>
      <div class="trash-item-actions">
        <button class="ghost-button" type="button" data-restore-transaction="${item.id}">Restaurar</button>
        <button class="delete-button" type="button" data-purge-transaction="${item.id}">Excluir definitivamente</button>
      </div>
    </article>
  `).join("") || '<p class="muted">A lixeira está vazia.</p>';
}

function openTrashDialog() {
  renderTrash();
  byId("trashDialog").showModal();
}

function showUndoDelete(item) {
  lastDeletedTransactionId = item.id;
  byId("undoMessage").textContent = `"${item.description}" foi movido para a lixeira.`;
  byId("undoToast").hidden = false;
  clearTimeout(undoTimer);
  undoTimer = setTimeout(() => {
    byId("undoToast").hidden = true;
    lastDeletedTransactionId = null;
  }, 8000);
}

function moveTransactionToTrash(id) {
  const item = state.transactions.find((entry) => entry.id === Number(id));
  if (!item) return;
  state.transactions = state.transactions.filter((entry) => entry.id !== item.id);
  state.trash = [
    { ...item, deletedAt: new Date().toISOString() },
    ...(state.trash || []).filter((entry) => entry.id !== item.id)
  ];
  if (editingTransactionId === item.id) resetTransactionForm();
  saveState();
  renderAll();
  showUndoDelete(item);
}

function restoreTransaction(id) {
  const item = (state.trash || []).find((entry) => entry.id === Number(id));
  if (!item) return;
  const restored = { ...item };
  delete restored.deletedAt;
  if (state.transactions.some((entry) => entry.id === restored.id)) {
    restored.id = nextId(state.transactions);
  }
  state.trash = state.trash.filter((entry) => entry.id !== item.id);
  state.transactions.push(restored);
  saveState();
  renderAll();
  renderTrash();
  byId("undoToast").hidden = true;
  lastDeletedTransactionId = null;
}

function registerPwa() {
  if (typeof navigator === "undefined" || typeof window === "undefined") return;
  const installButton = byId("installApp");
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (!isStandalone && location.protocol !== "file:") {
    installButton.hidden = false;
  }
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js")
      .then((registration) => {
        registration.update().catch(() => {});

        if (registration.waiting) {
          waitingServiceWorker = registration.waiting;
          byId("refreshApp").hidden = false;
        }

        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              waitingServiceWorker = worker;
              byId("refreshApp").hidden = false;
            }
          });
        });

        ["focus", "online"].forEach((eventName) => {
          window.addEventListener(eventName, () => registration.update().catch(() => {}));
        });
        document.addEventListener("visibilitychange", () => {
          if (!document.hidden) registration.update().catch(() => {});
        });
      })
      .catch(() => {});

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshingApp) return;
      refreshingApp = true;
      window.location.reload();
    });
  }
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
  });
}

function showInstallHelp() {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
  const message = isMobile
    ? "Para instalar no celular:\n\n1. Abra este site no Chrome.\n2. Toque nos três pontinhos do navegador.\n3. Escolha \"Adicionar à tela inicial\" ou \"Instalar app\"."
    : "Para instalar no computador:\n\n1. Abra este site no Chrome ou Edge.\n2. Clique no ícone de instalação na barra de endereço.\n3. Se não aparecer, abra o menu de três pontinhos e escolha \"Salvar e compartilhar\" > \"Instalar página como app\".";
  alert(message);
}

function wireEvents() {
  byId("projectSelector").addEventListener("change", (event) => {
    switchActiveProject(event.target.value);
  });
  byId("newProject").addEventListener("click", () => byId("newProjectDialog").showModal());
  byId("cancelNewProject").addEventListener("click", () => byId("newProjectDialog").close());
  byId("newProjectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    createProjectFromForm();
  });

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
  byId("formDescription").addEventListener("input", updateFavoriteButton);
  byId("toggleFavoriteDescription").addEventListener("click", toggleFavoriteDescription);
  ["formQuantity", "formValue"].forEach((id) => {
    byId(id).addEventListener("input", updateTransactionTotalPreview);
  });
  byId("transactionForm").addEventListener("input", saveTransactionDraft);
  byId("transactionForm").addEventListener("change", saveTransactionDraft);
  byId("cancelDescription").addEventListener("click", () => byId("descriptionDialog").close());
  byId("descriptionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const description = byId("descriptionName").value.trim();
    if (!description) return;
    const item = {
      type: byId("descriptionType").value,
      description,
      defaultValue: Number(byId("descriptionDefaultValue").value || 0),
      measure: byId("formMeasure").value || "un",
      favorite: Boolean(findCatalogItem(description)?.favorite)
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

  ["searchInput", "phaseFilter", "typeFilter", "unitFilter", "statusFilter", "supplierFilter", "startDateFilter", "endDateFilter"].forEach((id) => {
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
    byId("unitFilter").value = "Todas";
    byId("statusFilter").value = "Todos";
    byId("supplierFilter").value = "";
    byId("startDateFilter").value = "";
    byId("endDateFilter").value = "";
    renderDashboard();
    renderTransactions();
  });

  byId("transactionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = transactionFromForm(editingTransactionId || nextId(state.transactions));
    const duplicate = findPossibleDuplicate(item);
    if (duplicate) {
      const confirmed = confirm(`Já existe um lançamento parecido em ${formatDate(duplicate.date)}, no valor de ${money.format(duplicate.total)}.\nDeseja salvar mesmo assim?`);
      if (!confirmed) return;
    }
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
    const paidButton = event.target.closest("[data-mark-paid]");
    if (paidButton) {
      const id = Number(paidButton.dataset.markPaid);
      state.transactions = state.transactions.map((entry) => entry.id === id
        ? { ...entry, financialStatus: "Pago", paidAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        : entry
      );
      saveState();
      renderAll();
      return;
    }

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
    const confirmed = confirm(`Mover o lançamento "${item.description}" para a lixeira?`);
    if (!confirmed) return;
    moveTransactionToTrash(id);
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
      end: byId("phaseEnd").value,
      status: byId("phaseStatus").value,
      progress: Math.min(100, Math.max(0, Number(byId("phaseProgress").value || 0)))
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

  byId("openSettings").addEventListener("click", openSettingsDialog);
  byId("cancelSettings").addEventListener("click", () => byId("settingsDialog").close());
  byId("restoreSafetyBackup").addEventListener("click", restorePortfolioSafetyBackup);
  byId("settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.project = {
      ...state.project,
      name: byId("settingsProjectName").value.trim(),
      document: byId("settingsDocument").value.trim(),
      phone: byId("settingsPhone").value.trim(),
      email: byId("settingsEmail").value.trim(),
      address: byId("settingsAddress").value.trim(),
      city: byId("settingsCity").value.trim(),
      allocationMethod: byId("settingsAllocation").value
    };
    saveState();
    byId("settingsDialog").close();
    renderAll();
  });
  byId("exportPortfolio").addEventListener("click", () => {
    saveState();
    download(
      `backup-todas-obras-${todayIso()}.json`,
      JSON.stringify({ portfolioVersion: 1, ...portfolio }, null, 2),
      "application/json"
    );
  });

  byId("trashTransactions").addEventListener("click", openTrashDialog);
  byId("closeTrash").addEventListener("click", () => byId("trashDialog").close());
  byId("trashList").addEventListener("click", (event) => {
    const restoreButton = event.target.closest("[data-restore-transaction]");
    if (restoreButton) {
      restoreTransaction(restoreButton.dataset.restoreTransaction);
      return;
    }
    const purgeButton = event.target.closest("[data-purge-transaction]");
    if (!purgeButton) return;
    const id = Number(purgeButton.dataset.purgeTransaction);
    const item = (state.trash || []).find((entry) => entry.id === id);
    if (!item) return;
    const confirmed = confirm(`Excluir definitivamente "${item.description}"?\nDepois disso não será possível recuperar.`);
    if (!confirmed) return;
    state.trash = state.trash.filter((entry) => entry.id !== id);
    saveState();
    renderTrash();
  });

  byId("undoDelete").addEventListener("click", () => {
    if (lastDeletedTransactionId !== null) {
      restoreTransaction(lastDeletedTransactionId);
    }
  });

  byId("installApp").addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      showInstallHelp();
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    byId("installApp").hidden = true;
  });

  byId("refreshApp").addEventListener("click", () => {
    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
      return;
    }
    window.location.reload();
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
restoreTransactionDraft();
wireEvents();
registerPwa();
setInterval(refreshWorkModeDate, 60000);
