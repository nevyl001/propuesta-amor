import { useState } from "react";
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
    <div className="container">
      {!accepted ? (
        <>
          <h1>¿Quieres ser mi novia? 💖</h1>
          <div className="buttons">
            <button onClick={() => setAccepted(true)}>Sí 💍</button>
            <button onMouseEnter={moveNoButton} style={noBtnStyle}>
              No 🙈
            </button>
          </div>
        </>
      ) : (
        <h2>¡Sabía que dirías que sí! 😍</h2>
      )}
    </div>
  );
}

export default App;
