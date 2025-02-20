import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./Musica.css";

export default function Musica() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/Duas Metades.mp3"));

  useEffect(() => {
    audio.loop = true; // Faz a música repetir
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="musica-container">
      <button className="musica-button" onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      {isPlaying && <span className="musica-animacao">🎵</span>}
    </div>
  );
}
