import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Inicio = ({playMusic}) => {

  const [mostrarModal, setMostrarModal] = useState(false);
    const navigate = useNavigate();

    const handleStartGame = (categoria) => {
        setMostrarModal(false);
        playMusic();
        navigate('/juego', { state: { categoria } });
    };

  return (

      <div className="caja_inicio lg:max-w-4xl mx-auto">

        <div className=" bg-[#f1f0dc] rounded-xl shadow-xl p-2 border-8 border-violet-600  flex flex-col items-center justify-center text-center ">
          <h1 className="sm:text-4xl text-2xl font-bold mb-4">Riqueza por Inteligencia</h1>
          <p className="sm:text-lg text-md mb-6 text-justify font-semibold p-2">Serás capaz de llegar a la pregunta 15 y llevarte un millón de euros? El juego consta de 15 preguntas, 
            cada vez que aciertes pasas a la siguiente pregunta, si fallas se termina el juego y perderás todo el dinero acumulado. </p>

            <p className="font-bold text-center text-xl sm:text-2xl mb-2">Comodines: </p>
            <p className="font-semibold p-2 text-justify text-md sm:text-lg">En el juego hay 2 comodines que podrás usar una vez por partida.</p>
            <p className="p-2 text-justify text-md sm:text-lg"><span className="font-bold">50%:</span> Este comodín te eliminará 2 respuestas incorrectas de la pregunta. </p>
            <p className="p-2 text-justify text-md sm:text-lg"><span className="font-bold">Aleatorio:</span> Este comodín eliminara al azar entre 1 y 3 respuestas incorrectas. </p>

          <button
            onClick={() => setMostrarModal(true)}
            className="bg-[#f3f1f1] boton_link"
          >
            Empezar a Jugar
          </button>

          <div className="text-xs mt-3 max-w-sm">
              Música de fondo de <a className="underline" href="https://www.bensound.com" target="_blank" rel="noreferrer">Bensound</a><br/>
              Sonido de acierto y fallo de <a className="underline" href="https://www.zapsplat.com" target="_blank" rel="noreferrer">Zapsplat</a><br/>
              Sonido de celebracion de <a  className="underline" href="https://pixabay.com/es/users/hot_dope-27442149/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=111355"> Dmitrii</a> en <a  className="underline" href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=111355">Pixabay</a>
          </div>

        </div>


      {mostrarModal && (
                <div className="fixed inset-0 bg-violet-900 bg-opacity-80 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm w-full">
                        <h2 className="text-2xl font-bold mb-6">Elige la temática de las preguntas</h2>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => handleStartGame('ocio')}
                                className="bg-purple-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                            >
                                Ocio
                            </button>
                            <button
                                onClick={() => handleStartGame('culturaGeneral')}
                                className="bg-purple-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                            >
                                Cultura General
                            </button>
                            <button
                                onClick={() => handleStartGame('deportes')}
                                className="bg-purple-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                            >
                                Deportes
                            </button>
                        </div>
                        <button
                            onClick={() => setMostrarModal(false)}
                            className="mt-4 text-gray-500 hover:text-gray-700 font-semibold"
                        >
                            Volver
                        </button>
                    </div>
                </div>
            )}


      </div>

      
            
  
    
  );
};

export default Inicio;