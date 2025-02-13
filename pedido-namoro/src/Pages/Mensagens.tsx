import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mensagens.css"; // Importação correta do CSS

export default function Mensagens() {
  const mensagens = [
    { texto: "Desde que te conheci, minha vida mudou...", imagem: momento1},
    { texto: "Você é incrível e me faz muito feliz...", imagem: momento2 },
    { texto: "Eu queria te perguntar algo importante...", imagem: momento3 }
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
      <div className="mensagem-box">
        <img src={mensagens[index].imagem} alt="Memória" className="mensagem-imagem" />
        <h3 className="mensagem">{mensagens[index].texto}</h3>
      </div>
    </div>
  );
}
