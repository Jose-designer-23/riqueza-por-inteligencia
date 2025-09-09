import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Juego from './Juego';
import { useRef, useEffect } from 'react';
import './App.css'; 

function App() {

  const musicaFondoRef = useRef(null);

   useEffect(() => {
        musicaFondoRef.current = new Audio("/sounds/Floating-Lanterns-The-Mini-Vandals.mp3");
        musicaFondoRef.current.loop = true;

        // Limpiar la referencia al salir del componente
        return () => {
            if (musicaFondoRef.current) {
                musicaFondoRef.current.pause();
                musicaFondoRef.current.src = "";
            }
        };
    }, []);

    const playMusic = () => {
        if (musicaFondoRef.current) {
            musicaFondoRef.current.play().catch(error => {
                console.error("Error al reproducir la música de fondo:", error);
            });
        }
    };

    const stopMusic = () => {
        if (musicaFondoRef.current) {
            musicaFondoRef.current.pause();
            musicaFondoRef.current.currentTime = 0;
        }
    };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio playMusic={playMusic} />} />
        <Route path="/juego" element={<Juego musicaFondoRef={musicaFondoRef} stopMusic = {stopMusic} />} />
      </Routes>
    </Router>
  );
}

export default App;