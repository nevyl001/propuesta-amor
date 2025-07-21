import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import parejaImg from "./assets/pareja.jpg";
import felicesImg from "./assets/felices.jpg";
import foto6 from "./assets/foto6.jpg";
import foto7 from "./assets/foto7.jpg";
import foto8 from "./assets/foto8.jpg";
import foto9 from "./assets/foto9.jpg";
import foto10 from "./assets/foto10.jpg";

import "./App.css";

const carruselFotos = [foto6, foto7, foto8, foto9, foto10];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log("Autoplay bloqueado, esperando interacción...");
        });
      }
    };
    window.addEventListener("click", playMusic, { once: true });
    window.addEventListener("touchstart", playMusic, { once: true });

    return () => {
      window.removeEventListener("click", playMusic);
      window.removeEventListener("touchstart", playMusic);
    };
  }, []);

  useEffect(() => {
    if (accepted) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [accepted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carruselFotos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    setNoBtnStyle({
      position: "absolute",
      transform: `translate(${x}px, ${y}px) scale(1.1)`,
      transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      zIndex: 50,
    });
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4">
      <audio ref={audioRef} src="/musica.mp3" loop />

      {!accepted && (
        <img
          src={parejaImg}
          alt="Nosotros"
          className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
        />
      )}

      {!accepted ? (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-6 break-words max-w-xs sm:max-w-md md:max-w-xl">
            ¿Puedo ser tu Novio? 💖
          </h1>

          {/* Contenedor con altura para que el botón "No" nunca desaparezca */}
          <div className="relative h-32 flex gap-6 flex-wrap justify-center items-center">
            <button
              onClick={() => setAccepted(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Sí 👩‍❤️‍👨
            </button>
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              style={noBtnStyle}
              className="bg-pink-500 hover:scale-90 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              No 🙈
            </button>
          </div>

          {/* Carrusel una imagen por una, con fade */}
          <div className="w-full mt-12 flex justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative overflow-hidden rounded-2xl shadow-xl">
              {carruselFotos.map((foto, index) => (
                <img
                  key={index}
                  src={foto}
                  alt={`Foto ${index}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                    index === currentIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-pink-600 mt-6">
            ¡Sabía que dirías que sí!!! 😍
          </h2>
          <img
            src={felicesImg}
            alt="Felices"
            className="w-64 h-64 mt-6 rounded-2xl object-cover shadow-lg"
          />
          {/* 🎉 Texto adicional después del "Sí" */}
          <div className="mt-6 max-w-xl text-center px-4">
            <p className="text-2xl font-semibold text-pink-600 mb-4">
              Este es solo el comienzo... 💖
            </p>
            <p className="text-lg sm:text-xl text-rose-500 font-medium leading-relaxed">
              Gracias por decir que sí. A partir de ahora, prometo hacerte
              sonreír cada día, abrazarte en los momentos difíciles y celebrar
              cada instante a tu lado. 💞 Nuestro viaje juntos será el más
              hermoso que hayamos vivido jamás. 🌈✨
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
