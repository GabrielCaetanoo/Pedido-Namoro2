import { Link } from "react-router-dom";
import './HomePage.css'; // Aqui você importa o estilo da página

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Ana Luiza Forti Neves</h1>
      <p className="home-description">
        Está preparada para uma surpresa? Escaneie o QR Code para começar.
      </p>
      <Link to="/mensagens" className="start-button">Começar</Link>
    </div>
  );
}
