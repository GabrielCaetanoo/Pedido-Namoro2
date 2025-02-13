import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mensagens.css"; // Importação correta do CSS

export default function Mensagens() {
  const mensagens = [
    "Desde que te conheci, minha vida mudou...",
    "Você é incrível e me faz muito feliz...",
    "Eu queria te perguntar algo importante..."
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < mensagens.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => navigate("/pedido"), 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, mensagens.length, navigate]);

  return (
    <div className="page-container">
      <h3 className="mensagem">{mensagens[index]}</h3>
    </div>
  );
}
