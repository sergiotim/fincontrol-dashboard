import { Edit, Mail, MoreVertical, Phone, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { Client } from "../types";
import { formatCurrency } from "../utils/formatters";

export const ClientsView = ({ clients, onAddClientClick, onDeleteClient, onEditClient }: any) => {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  
  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = () => setActiveMenuId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Previne fechar imediatamente
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold mb-1">Diretório de Clientes</h4>
              <p className="text-muted mb-0">Gerencie sua base de contatos e contratos ativos.</p>
            </div>
            {/* BOTÃO NOVO CLIENTE AGORA FUNCIONAL */}
            <button className="btn btn-primary d-flex align-items-center gap-2" onClick={onAddClientClick}>
              <Plus size={18} /> Novo Cliente
            </button>
          </div>
        </div>
      </div>
      
      {clients.map((client: Client) => (
        <div key={client.id} className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100 hover-shadow transition-all position-relative">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                    <span className="fw-bold fs-5">{client.name.substring(0,1).toUpperCase()}</span>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark">{client.name}</h6>
                    <span className={`badge rounded-pill mt-1 fw-normal ${client.status === 'Ativo' ? 'bg-success bg-opacity-10 text-success' : client.status === 'Inativo' ? 'bg-secondary bg-opacity-10 text-secondary' : 'bg-warning bg-opacity-10 text-warning'}`}>
                      {client.status}
                    </span>
                  </div>
                </div>
                
                {/* BOTÃO 3 PONTINHOS (MENU SUSPENSO) */}
                <div className="position-relative">
                  <button 
                    className="btn btn-link text-secondary p-0" 
                    onClick={(e) => toggleMenu(e, client.id)}
                  >
                    <MoreVertical size={18}/>
                  </button>
                  
                  {activeMenuId === client.id && (
                    <div className="position-absolute end-0 mt-1 bg-white rounded shadow border py-1" style={{ width: '150px', zIndex: 10 }}>
                      <button 
                        className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 text-secondary hover-bg-light w-100 text-start"
                        onClick={() => onEditClient(client.name)}
                      >
                        <Edit size={14} /> Editar
                      </button>
                      <button 
                        className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 text-danger hover-bg-light w-100 text-start"
                        onClick={() => onDeleteClient(client.id)}
                      >
                        <Trash2 size={14} /> Remover
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <hr className="border-light my-3" />
              
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="d-flex align-items-center text-secondary fs-7">
                  <Mail size={16} className="me-2" />
                  {client.email}
                </div>
                <div className="d-flex align-items-center text-secondary fs-7">
                  <Phone size={16} className="me-2" />
                  {client.phone}
                </div>
              </div>

              <div className="bg-light rounded p-2 d-flex justify-content-between align-items-center">
                <small className="text-muted fw-medium">Contrato Mensal</small>
                <span className="fw-bold text-dark">{formatCurrency(client.contractValue)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {clients.length === 0 && (
        <div className="col-12 text-center py-5">
           <p className="text-muted">Nenhum cliente cadastrado.</p>
        </div>
      )}
    </div>
  );
};