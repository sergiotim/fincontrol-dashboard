import React from "react";
import { LayoutDashboard, Wallet, Users, DollarSign } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void; // Mantive a prop caso queira usar um botão de fechar no futuro
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
}) => {
  return (
    <aside
      className={`bg-dark text-white d-flex flex-column p-3 fixed-top h-100 ${
        isSidebarOpen ? "d-flex" : "d-none d-md-flex"
      }`}
      style={{ width: "260px", zIndex: 1040, transition: "all 0.3s" }}
    >
      <div className="d-flex align-items-center mb-5 mt-2 px-2">
        <div className="bg-primary rounded p-1 me-2">
          <DollarSign size={24} className="text-white" />
        </div>
        <h4 className="m-0 fw-bold">FinControl</h4>
      </div>

      <nav className="nav flex-column gap-2">
        <a
          href="#"
          className={`nav-link d-flex align-items-center px-3 rounded ${
            activeTab === "dashboard"
              ? "bg-primary text-white"
              : "text-secondary hover-light"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("dashboard");
          }}
        >
          <LayoutDashboard size={20} className="me-3" />
          Dashboard
        </a>
        <a
          href="#"
          className={`nav-link d-flex align-items-center px-3 rounded ${
            activeTab === "financial"
              ? "bg-primary text-white"
              : "text-secondary hover-light"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("financial");
          }}
        >
          <Wallet size={20} className="me-3" />
          Financeiro
        </a>
        <a
          href="#"
          className={`nav-link d-flex align-items-center px-3 rounded ${
            activeTab === "clients"
              ? "bg-primary text-white"
              : "text-secondary hover-light"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("clients");
          }}
        >
          <Users size={20} className="me-3" />
          Clientes
        </a>
      </nav>

      <div className="mt-auto px-3 py-4 border-top border-secondary">
        <small className="text-secondary">Usuário Logado</small>
        <div className="d-flex align-items-center mt-2">
          <div
            className="bg-secondary rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: 32, height: 32 }}
          >
            <span>AD</span>
          </div>
          <div>
            <p className="mb-0 fs-6 fw-medium">Admin User</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
