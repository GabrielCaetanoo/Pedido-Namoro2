import { useState, useEffect } from "react";
import "./PedidoFinal.css";

export default function PedidoPage() {
  const [showModal, setShowModal] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showFunnyModal, setShowFunnyModal] = useState(false); // Novo estado para o modal engraçado
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [attempts, setAttempts] = useState(0); // Contador de tentativas

  // Função para calcular uma posição aleatória dentro dos limites da tela
  const getRandomPosition = () => {
    const buttonWidth = 100; // Largura aproximada do botão
    const buttonHeight = 50; // Altura aproximada do botão

    const maxTop = window.innerHeight - buttonHeight;
    const maxLeft = window.innerWidth - buttonWidth;

    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    return { top: newTop, left: newLeft };
  };

  // Atualiza a posição inicial do botão "Não" ao carregar a página
  useEffect(() => {
    setNoButtonPosition(getRandomPosition());
  }, []);

  const handleYesClick = () => {
    setShowModal(true);
    setShowHearts(true);
  };

  const handleNoClick = () => {
    setAttempts(attempts + 1); // Incrementa o contador de tentativas
    setNoButtonPosition(getRandomPosition());

    // Exibe o modal engraçado após 3 tentativas
    if (attempts >= 3) {
      setShowFunnyModal(true);
    }
  };

  return (
    <div className="page-container">
      <div className="pedido-container">
        <h1 className="pedido-title">A pergunta que vai mudar tudo...</h1>
        <p className="pedido-message">Você aceita namorar comigo?</p>
        <button className="yes-button" onClick={handleYesClick}>
          Sim, aceito!
        </button>
        <button
          className="no-button"
          onClick={handleNoClick}
          style={{ position: "absolute", top: noButtonPosition.top, left: noButtonPosition.left }}
        >
          Não
        </button>
      </div>

      {/* Modal de confirmação */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Te amo! ❤️</h2>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}

      {/* Modal engraçado */}
      {showFunnyModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Você está tentando muito! 😂</h2>
            <p>Será que você não quer reconsiderar?</p>
            <button onClick={() => setShowFunnyModal(false)}>Fechar</button>
          </div>
        </div>
      )}

      {/* Efeito de corações */}
      {showHearts && (
        <div className="hearts">
          {Array.from({ length: 50 }).map((_, index) => (
            <span key={index} className="heart">❤️</span>
          ))}
        </div>
      )}
    </div>
  );
}