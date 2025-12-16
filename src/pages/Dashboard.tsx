import React from 'react';
import {
  AlertCircle,
  ArrowDownCircle,
  ArrowUpCircle,
  DollarSign,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Importações dos seus componentes e dados
import { KPICard } from "../components/shared/KPICard";
import { formatCurrency } from "../utils/formatters";
import { CHART_DATA, EXPENSE_DISTRIBUTION } from "../data/mockData";
import type { Transaction, TransactionStatus } from "../types";

// Definição da tipagem das Props (Substituindo o 'any')
interface DashboardProps {
  kpis: {
    totalReceita: number;
    totalDespesa: number;
    lucro: number;
    pendencias: number;
  };
  filteredTransactions: Transaction[];
  filterStatus: TransactionStatus | 'Todos';
  setFilterStatus: (status: TransactionStatus | 'Todos') => void;
  getStatusBadgeClass: (status: TransactionStatus) => string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  kpis,
  filteredTransactions,
  filterStatus,
  setFilterStatus,
  getStatusBadgeClass,
}) => {
  return (
    <>
      {/* KPI CARDS */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <KPICard
            title="Receita Total"
            value={formatCurrency(kpis.totalReceita)}
            icon={ArrowUpCircle}
            colorClass="text-success"
            subtext="+12% vs mês anterior"
          />
        </div>
        <div className="col-md-3">
          <KPICard
            title="Despesas"
            value={formatCurrency(kpis.totalDespesa)}
            icon={ArrowDownCircle}
            colorClass="text-danger"
            subtext="-5% vs mês anterior"
          />
        </div>
        <div className="col-md-3">
          <KPICard
            title="Lucro Líquido"
            value={formatCurrency(kpis.lucro)}
            icon={DollarSign}
            colorClass="text-primary"
            subtext="Margem saudável"
          />
        </div>
        <div className="col-md-3">
          <KPICard
            title="Pendências"
            value={kpis.pendencias}
            icon={AlertCircle}
            colorClass="text-warning"
            subtext="Faturas em aberto"
          />
        </div>
      </div>

      {/* CHART SECTION */}
      <div className="row g-4 mb-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title fw-bold mb-0">
                Evolução Financeira (Semestre)
              </h5>
            </div>
            <div className="card-body">
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={CHART_DATA}>
                    <defs>
                      <linearGradient
                        id="colorReceita"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="5%" stopColor="#0d6efd" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#0d6efd" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="colorDespesa"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="5%" stopColor="#dc3545" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#dc3545" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e9ecef"
                    />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(val) => `R$${val / 1000}k`}
                    />
                    <Tooltip
                      formatter={(value: number | undefined) => value !== undefined ? formatCurrency(value) : ''}
                    />
                    <Area
                      type="monotone"
                      dataKey="receita"
                      stroke="#0d6efd"
                      fillOpacity={1}
                      fill="url(#colorReceita)"
                      name="Receita"
                    />
                    <Area
                      type="monotone"
                      dataKey="despesa"
                      stroke="#dc3545"
                      fillOpacity={1}
                      fill="url(#colorDespesa)"
                      name="Despesas"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title fw-bold mb-0">
                Distribuição de Despesas
              </h5>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={EXPENSE_DISTRIBUTION.map((item) => ({ ...item, [item.name]: item.value }))}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {EXPENSE_DISTRIBUTION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number | undefined) => value !== undefined ? formatCurrency(value) : ''}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRANSACTIONS SECTION */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
              <h5 className="card-title fw-bold mb-0">Transações Recentes</h5>
              <div className="btn-group" role="group">
                {["Todos", "Pago", "Pendente", "Atrasado"].map((status) => (
                  <button
                    key={status}
                    type="button"
                    className={`btn btn-sm px-3 ${
                      filterStatus === status
                        ? "btn-dark"
                        : "btn-outline-secondary border-0 bg-light"
                    }`}
                    onClick={() => setFilterStatus(status as any)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light text-secondary">
                  <tr>
                    <th
                      className="border-0 ps-4 py-3 text-uppercase fs-7"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Descrição
                    </th>
                    <th
                      className="border-0 py-3 text-uppercase fs-7"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Cliente
                    </th>
                    <th
                      className="border-0 py-3 text-uppercase fs-7"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Data
                    </th>
                    <th
                      className="border-0 py-3 text-uppercase fs-7"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Valor
                    </th>
                    <th
                      className="border-0 pe-4 py-3 text-uppercase fs-7 text-end"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((t: Transaction) => (
                    <tr key={t.id}>
                      <td className="ps-4 py-3">
                        <div className="d-flex align-items-center">
                          <div
                            className={`rounded-circle p-2 me-3 ${
                              t.type === "entrada"
                                ? "bg-success bg-opacity-10 text-success"
                                : "bg-danger bg-opacity-10 text-danger"
                            }`}
                          >
                            {t.type === "entrada" ? (
                              <ArrowUpCircle size={16} />
                            ) : (
                              <ArrowDownCircle size={16} />
                            )}
                          </div>
                          <span className="fw-medium text-dark">
                            {t.description}
                          </span>
                        </div>
                      </td>
                      <td className="text-secondary">{t.client}</td>
                      <td className="text-secondary">{t.date}</td>
                      <td
                        className={`fw-bold ${
                          t.type === "entrada" ? "text-dark" : "text-danger"
                        }`}
                      >
                        {t.type === "saida" && "- "}
                        {formatCurrency(t.value)}
                      </td>
                      <td className="pe-4 text-end">
                        <span
                          className={`badge rounded-pill fw-normal px-3 py-2 ${getStatusBadgeClass(
                            t.status
                          )}`}
                        >
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};