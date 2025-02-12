import { useState } from "react";
import "./Musica.css"; // Importe o CSS

export default function Musica() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("/Duas Metades.mp3");

  const playAudio = () => {
    audio.play().then(() => setIsPlaying(true)).catch((error) => {
      console.error("Erro ao reproduzir áudio:", error);
    });
  };

  return (
    <div className="container">
      {!isPlaying && (
        <button className="button" onClick={playAudio}>
          Tocar Música
        </button>
      )}
      {isPlaying && <p>🎶</p>}
    </div>
  );
}
