import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Mensagens from "./Pages/Mensagens";
import PedidoPage from "./Pages/PedidoFinal"; // A página do pedido de namoro
import Musica from "./components/Musica"; // Importe o componente Musica

export default function App() {
  return (
    <Router>
      <Musica /> {/* Coloque o componente Musica fora das rotas para que toque em todas as páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mensagens" element={<Mensagens />} />
        <Route path="/pedido" element={<PedidoPage />} />
      </Routes>
    </Router>
  );
}
