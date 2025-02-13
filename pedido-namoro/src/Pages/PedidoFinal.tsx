import { useState } from "react";
import "./PedidoFinal.css";

export default function PedidoPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="page-container">
      <div className="pedido-container">
        <h1 className="pedido-title">A pergunta que vai mudar tudo...</h1>
        <p className="pedido-message">Você aceita namorar comigo?</p>
        <button className="yes-button" onClick={handleClick}>Sim, aceito!</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Te amo! ❤️</h2>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
