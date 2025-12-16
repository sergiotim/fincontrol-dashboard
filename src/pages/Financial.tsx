import { AlertCircle, ArrowDownCircle, ArrowUpCircle, FileText } from "lucide-react";
import { EXPENSE_DISTRIBUTION } from "../data/mockData";
import { formatCurrency } from "../utils/formatters";

export const FinancialView = () => (
  <div className="row g-4">
    <div className="col-12">
      <div className="card border-0 shadow-sm bg-primary text-white overflow-hidden mb-3" style={{ background: 'linear-gradient(45deg, #0d6efd, #0a58ca)' }}>
        <div className="card-body p-4 position-relative">
          <div className="row align-items-center relative z-1">
            <div className="col-md-8">
              <h3 className="fw-bold mb-2">Relatórios Financeiros Avançados</h3>
              <p className="mb-0 opacity-75">Acompanhe seus orçamentos e planeje o fluxo de caixa futuro.</p>
            </div>
            <div className="col-md-4 text-end d-none d-md-block">
              <FileText size={64} className="opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Budget Table */}
    <div className="col-lg-8">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-header bg-white border-0 py-3">
          <h5 className="card-title fw-bold mb-0">Orçamento vs Realizado</h5>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="bg-light text-secondary">
              <tr>
                <th className="border-0 ps-4">Categoria</th>
                <th className="border-0">Budget</th>
                <th className="border-0">Realizado</th>
                <th className="border-0 pe-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {EXPENSE_DISTRIBUTION.map((cat, idx) => (
                <tr key={idx}>
                  <td className="ps-4 fw-medium text-secondary">{cat.name}</td>
                  <td>{formatCurrency(cat.value * 1.2)}</td>
                  <td className="fw-bold">{formatCurrency(cat.value)}</td>
                  <td className="pe-4">
                    <div className="progress" style={{ height: 6 }}>
                      <div 
                        className={`progress-bar ${cat.value > (cat.value * 1.1) ? 'bg-danger' : 'bg-success'}`} 
                        role="progressbar" 
                        style={{ width: `${(cat.value / (cat.value * 1.2)) * 100}%` }}
                      ></div>
                    </div>
                    <small className="text-muted mt-1 d-block" style={{fontSize: '0.7rem'}}>
                      {Math.round((cat.value / (cat.value * 1.2)) * 100)}% utilizado
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Summary Card */}
    <div className="col-lg-4">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <h5 className="fw-bold mb-4">Previsão de Caixa</h5>
          
          <div className="d-flex align-items-center mb-4">
            <div className="bg-success bg-opacity-10 p-3 rounded me-3">
              <ArrowUpCircle className="text-success" size={24} />
            </div>
            <div>
              <small className="text-muted d-block">A Receber (Próx 7 dias)</small>
              <h4 className="fw-bold mb-0">{formatCurrency(12500)}</h4>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4">
            <div className="bg-danger bg-opacity-10 p-3 rounded me-3">
              <ArrowDownCircle className="text-danger" size={24} />
            </div>
            <div>
              <small className="text-muted d-block">A Pagar (Próx 7 dias)</small>
              <h4 className="fw-bold mb-0">{formatCurrency(4200)}</h4>
            </div>
          </div>

          <hr className="my-4" />

          <div className="alert alert-info border-0 d-flex gap-3 mb-0">
            <AlertCircle size={20} className="flex-shrink-0 mt-1" />
            <small>O imposto trimestral vence dia 30/06. Verifique o saldo.</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);