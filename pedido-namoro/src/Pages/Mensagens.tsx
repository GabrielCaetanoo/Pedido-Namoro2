import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        navigate("/pedido"); // Navega diretamente após a última mensagem
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index, mensagens.length, navigate]);

  return <h3>{mensagens[index]}</h3>;
}