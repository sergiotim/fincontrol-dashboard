export type TransactionStatus = 'Pago' | 'Pendente' | 'Atrasado';
export type TransactionType = 'entrada' | 'saida';

export interface Transaction {
  id: number;
  date: string;
  description: string;
  client: string;
  value: number;
  status: TransactionStatus;
  type: TransactionType;
  category: string;
}

export interface FinancialData {
  month: string;
  receita: number;
  despesa: number;
}

export interface ExpenseCategory {
  name: string;
  value: number;
  color: string;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Ativo' | 'Inativo' | 'Em Negociação';
  contractValue: number;
}