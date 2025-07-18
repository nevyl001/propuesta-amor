import { useState } from "react";
import parejaImg from "./assets/pareja.jpg";

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

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4">
      {/* Imagen centrada arriba */}
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
            ¿Quieres ser mi novia? 💖
          </h1>
          <div className="flex gap-6 relative flex-wrap justify-center">
            <button
              onClick={() => setAccepted(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Sí 💍
            </button>
            <button
              onMouseEnter={moveNoButton}
              style={noBtnStyle}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              No 🙈
            </button>
          </div>
        </>
      ) : (
        <h2 className="text-3xl font-semibold text-pink-600 mt-6">
          ¡Sabía que dirías que sí! 😍
        </h2>
      )}
    </div>
  );
}

export default App;
