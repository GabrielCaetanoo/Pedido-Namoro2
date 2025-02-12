import { useEffect, useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");
  const frase = "Ana, tenho algo especial para te dizer...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < frase.length) {
        setTexto((prev) => prev + frase[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <h1 style={{ textAlign: "center" }}>{texto}</h1>;
}
