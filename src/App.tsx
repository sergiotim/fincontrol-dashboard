// src/App.tsx
import { useState, useMemo } from "react";
import { Menu, Plus } from "lucide-react";
import { Sidebar } from "./components/layout/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { FinancialView } from "./pages/Financial";
import { ClientsView } from "./pages/Clients";
import { TransactionModal } from "./components/shared/TransactionModal";
import { ClientModal } from "./components/shared/ClientModal";
import { INITIAL_CLIENTS, TRANSACTIONS_DATA } from "./data/mockData";
import type { Client, TransactionStatus } from "./types";

// CSS Global customizado (estilos que estavam no final do seu arquivo)
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Estados de Modais
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  // Estados de Dados
  const [clientsList, setClientsList] = useState<Client[]>(INITIAL_CLIENTS);
  const [filterStatus, setFilterStatus] = useState<TransactionStatus | "Todos">(
    "Todos"
  );

  // Lógica de KPIs e Filtros (Pode ser movida para hooks se crescer muito)
  const filteredTransactions = useMemo(() => {
    if (filterStatus === "Todos") return TRANSACTIONS_DATA;
    return TRANSACTIONS_DATA.filter((t) => t.status === filterStatus);
  }, [filterStatus]);

  const kpis = useMemo(() => {
    const totalReceita = TRANSACTIONS_DATA.filter(
      (t) => t.type === "entrada"
    ).reduce((acc, curr) => acc + curr.value, 0);
    const totalDespesa = TRANSACTIONS_DATA.filter(
      (t) => t.type === "saida"
    ).reduce((acc, curr) => acc + curr.value, 0);
    return {
      totalReceita,
      totalDespesa,
      lucro: totalReceita - totalDespesa,
      pendencias: TRANSACTIONS_DATA.filter(
        (t) => t.status === "Pendente" || t.status === "Atrasado"
      ).length,
    };
  }, []);

  // Handlers
  const handleSaveTransaction = () => {
    setIsModalOpen(false);
    alert("Salvo!");
  };

  const handleAddClient = (newClientData: Omit<Client, "id">) => {
    const newId =
      clientsList.length > 0
        ? Math.max(...clientsList.map((c) => c.id)) + 1
        : 1;
    setClientsList([...clientsList, { id: newId, ...newClientData }]);
    setIsClientModalOpen(false);
  };

  const handleDeleteClient = (id: number) => {
    if (confirm("Remover cliente?"))
      setClientsList(clientsList.filter((c) => c.id !== id));
  };

  const getStatusBadgeClass = (status: TransactionStatus) => {
    switch (status) {
      case "Pago":
        return "bg-success bg-opacity-10 text-success";
      case "Pendente":
        return "bg-warning bg-opacity-10 text-warning";
      case "Atrasado":
        return "bg-danger bg-opacity-10 text-danger";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div
      className="d-flex min-vh-100 bg-light"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main
        className="flex-grow-1 p-4"
        style={{
          marginLeft: isSidebarOpen ? "260px" : "0",
          transition: "margin 0.3s",
        }}
      >
        {/* Mobile Header Toggle */}
        <div className="d-md-none mb-4">
          <button
            className="btn btn-dark"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Header Dinâmico */}
        <header className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold text-dark mb-1">
              {activeTab === "dashboard"
                ? "Painel Financeiro"
                : activeTab === "financial"
                ? "Gestão Financeira"
                : "Meus Clientes"}
            </h2>
          </div>
          {activeTab === "dashboard" && (
            <button
              className="btn btn-primary d-flex align-items-center gap-2 shadow-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={18} />
              <span className="d-none d-md-inline">Novo Lançamento</span>
            </button>
          )}
        </header>

        {/* Renderização Condicional */}
        {activeTab === "dashboard" && (
          <Dashboard
            kpis={kpis}
            filteredTransactions={filteredTransactions}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            getStatusBadgeClass={getStatusBadgeClass}
          />
        )}
        {activeTab === "financial" && <FinancialView />}
        {activeTab === "clients" && (
          <ClientsView
            clients={clientsList}
            onAddClientClick={() => setIsClientModalOpen(true)}
            onDeleteClient={handleDeleteClient}
            onEditClient={() => {}}
          />
        )}
      </main>

      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTransaction}
      />
      <ClientModal
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
        onSave={handleAddClient}
      />
    </div>
  );
}
