export const TransactionModal = ({ isOpen, onClose, onSave }: any) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Novo Lançamento</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSave();
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Descrição</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex: Consultoria"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Valor (R$)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0,00"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Tipo</label>
                    <select className="form-select">
                      <option value="entrada">Entrada</option>
                      <option value="saida">Saída</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cliente/Fornecedor</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="modal-footer bg-light px-0 pb-0">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClose}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Salvar Lançamento
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
