import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mensagens.css";
import momento1 from "../assets/imagens/FOTO1.jpg";
import momento2 from "../assets/imagens/FOTO2.jpeg";
import momento3 from "../assets/imagens/FOTO3.jpg";
import momento4 from "../assets/imagens/FOTO4.jpg";
import momento5 from "../assets/imagens/FOTO5.jpg";
import momento6 from "../assets/imagens/FOTO6.jpg";
import momento7 from "../assets/imagens/FOTO7.jpeg"; // Imagem única
import momento8 from "../assets/imagens/FOTO8.jpeg"; // Imagem única

export default function Mensagens() {
  const mensagens = [
    { texto: "Desde que te conheci, minha vida mudou...", imagem: momento1 },
    { texto: "Você é incrível e me faz muito feliz...", imagem: momento2 },
    { texto: "Eu queria te perguntar algo importante...", imagem: momento3 },
    { texto: "Lembra daquele dia especial? Foi incrível!", imagem: momento4 },
    { texto: "Eu nunca me senti tão bem ao lado de alguém...", imagem: momento5 },
    { texto: "Só queria te lembrar o quanto você é especial para mim! ❤️", imagem: momento6 },
    { texto: "Cada momento ao seu lado se torna inesquecível...", imagem: momento7 },
    { texto: "Obrigado por ser essa pessoa maravilhosa na minha vida! 💖", imagem: momento8 }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFade(true); // Fade in
    const timeout = setTimeout(() => {
      setFade(false); // Fade out antes de mudar a mensagem
    }, 2500);

    return () => clearTimeout(timeout);
  }, [index]);

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

 // const handleSkip = () => {
  //  if (index < mensagens.length - 1) {
    //  setIndex((prev) => prev + 1);
    // } else {
    //  navigate("/pedido");
   // }
  // };

  return (
    <div className="page-container">
      <div className={`mensagem-box ${fade ? "fade-in" : "fade-out"}`}>
<img
  src={mensagens[index].imagem}
  alt="Memória"
  className="mensagem-imagem"
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.src = "/pedido-namoro/pedido-namoro/src/assets/imagens/default.jpg"; // Substitua pelo caminho correto da imagem padrão
  }}
/>
        <h3 className="mensagem">{mensagens[index].texto}</h3>
      </div>
      
    </div>
  );
}
//   //// </div>button onClick={handleSkip} className="skip-button">Pular</button> ////