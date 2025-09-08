import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Juego from './Juego';
import { useRef } from 'react';
import './App.css'; 

function App() {

  const musicaFondoRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio musicaFondoRef={musicaFondoRef} />} />
        <Route path="/juego" element={<Juego musicaFondoRef={musicaFondoRef} />} />
      </Routes>
    </Router>
  );
}

export default App;