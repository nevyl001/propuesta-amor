import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import parejaImg from "./assets/pareja.jpg";
import felicesImg from "./assets/felices.jpg";
import "./App.css";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    setNoBtnStyle({
      position: "absolute",
      transform: `translate(${x}px, ${y}px)`,
      transition: "transform 0.2s",
    });
  };

  useEffect(() => {
    if (accepted) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [accepted]);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4">
      {!accepted && (
        <img
          src={parejaImg}
          alt="Nosotros"
          className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
        />
      )}

      {!accepted ? (
        <>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            ¿Puedo ser tu Novio? 💖
          </h1>
          <div className="flex gap-6 relative flex-wrap justify-center">
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
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              No 🙈
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-pink-600 mt-6">
            ¡Sabía que dirías que sí! 😍
          </h2>
          <img
            src={felicesImg}
            alt="Felices"
            className="w-64 h-64 mt-6 rounded-2xl object-cover shadow-lg"
          />
        </>
      )}
    </div>
  );
}

export default App;
