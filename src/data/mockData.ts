import type {
  Client,
  ExpenseCategory,
  FinancialData,
  Transaction,
} from "../types";

export const CHART_DATA: FinancialData[] = [
  { month: "Jan", receita: 12000, despesa: 8500 },
  { month: "Fev", receita: 15500, despesa: 9000 },
  { month: "Mar", receita: 14000, despesa: 11000 },
  { month: "Abr", receita: 18000, despesa: 10500 },
  { month: "Mai", receita: 22000, despesa: 13000 },
  { month: "Jun", receita: 25000, despesa: 14000 },
];

export const EXPENSE_DISTRIBUTION: ExpenseCategory[] = [
  { name: "Infraestrutura", value: 3500, color: "#0d6efd" }, // Blue
  { name: "Pessoal", value: 8000, color: "#6610f2" }, // Purple
  { name: "Impostos", value: 1250, color: "#dc3545" }, // Red
  { name: "Serviços", value: 2100, color: "#ffc107" }, // Yellow
  { name: "Outros", value: 950, color: "#adb5bd" }, // Gray
];

export const TRANSACTIONS_DATA: Transaction[] = [
  {
    id: 1,
    date: "12/06/2024",
    description: "Honorários Mensais",
    client: "Tech Solutions Ltda",
    value: 4500.0,
    status: "Pago",
    type: "entrada",
    category: "Vendas",
  },
  {
    id: 2,
    date: "14/06/2024",
    description: "Licença de Software",
    client: "Microsoft",
    value: 850.0,
    status: "Pago",
    type: "saida",
    category: "Infraestrutura",
  },
  {
    id: 3,
    date: "15/06/2024",
    description: "Consultoria Tributária",
    client: "Varejo Express S.A.",
    value: 2500.0,
    status: "Pendente",
    type: "entrada",
    category: "Vendas",
  },
  {
    id: 4,
    date: "18/06/2024",
    description: "Manutenção Servidor",
    client: "AWS Services",
    value: 320.0,
    status: "Atrasado",
    type: "saida",
    category: "Infraestrutura",
  },
  {
    id: 5,
    date: "20/06/2024",
    description: "Renovação Certificado Digital",
    client: "Certisign",
    value: 210.0,
    status: "Pendente",
    type: "saida",
    category: "Impostos",
  },
  {
    id: 6,
    date: "22/06/2024",
    description: "Imposto de Renda (IRPJ)",
    client: "Receita Federal",
    value: 1250.0,
    status: "Atrasado",
    type: "saida",
    category: "Impostos",
  },
  {
    id: 7,
    date: "25/06/2024",
    description: "Desenvolvimento Web",
    client: "StartUp Inovação",
    value: 6000.0,
    status: "Pago",
    type: "entrada",
    category: "Vendas",
  },
  {
    id: 8,
    date: "26/06/2024",
    description: "Aluguel Escritório",
    client: "Imobiliária Central",
    value: 2000.0,
    status: "Pendente",
    type: "saida",
    category: "Infraestrutura",
  },
];

export const INITIAL_CLIENTS: Client[] = [
  {
    id: 1,
    name: "Tech Solutions Ltda",
    email: "financeiro@techsolutions.com",
    phone: "(11) 99999-1001",
    status: "Ativo",
    contractValue: 4500,
  },
  {
    id: 2,
    name: "Varejo Express S.A.",
    email: "contato@varejoexpress.com.br",
    phone: "(21) 98888-2002",
    status: "Em Negociação",
    contractValue: 2500,
  },
  {
    id: 3,
    name: "StartUp Inovação",
    email: "ceo@startupinova.com",
    phone: "(31) 97777-3003",
    status: "Ativo",
    contractValue: 6000,
  },
  {
    id: 4,
    name: "Grupo Comercial",
    email: "adm@grupocomercial.com",
    phone: "(11) 96666-4004",
    status: "Inativo",
    contractValue: 0,
  },
];
