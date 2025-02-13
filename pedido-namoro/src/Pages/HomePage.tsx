import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const [tempoDesdeConheceu, setTempoDesdeConheceu] = useState("");

  useEffect(() => {
    const dataQueSeConheceram = new Date("2025-01-18T21:19:00"); // Ajuste a data exata

    const atualizarTempo = () => {
      const agora = new Date();
      const diferencaMs = agora.getTime() - dataQueSeConheceram.getTime();

      const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencaMs / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencaMs / (1000 * 60)) % 60);

      setTempoDesdeConheceu(`${dias} dias, ${horas} horas e ${minutos} minutos`);
    };

    atualizarTempo();
    const intervalo = setInterval(atualizarTempo, 60000); // Atualiza a cada minuto

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Ana Luiza Forti Neves</h1>
      <p className="home-description">
        Já faz <span className="contador">{tempoDesdeConheceu}</span> desde que nos conhecemos 💖
      </p>
      <Link to="/mensagens" className="start-button">Começar</Link>
    </div>
  );
}
