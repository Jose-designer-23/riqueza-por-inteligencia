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

      <div className="caja_inicio">

        <div className="estructura_inicio">
          <h1 className="titulo_inicio">Riqueza por Inteligencia</h1>
          <p className="estructura_argumento text-md"><b className="negrita">¿Serás capaz de llegar a la pregunta 15 y llevarte un millón de euros?</b>
            <span className="block"></span>
            <span className="sm:block"></span>
             El juego consta de 15 preguntas, cada vez que aciertes pasas a la siguiente
            <span className="sm:block"></span>
             pregunta, si fallas se termina el juego y perderás todo el dinero acumulado. </p>

            <p className="titulo_comodines_inicio">Comodines: </p>
            <p className="explicacion_comodines text-md">En el juego hay 2 comodines que podrás usar una vez por partida.</p>
            <p className="argumento_comodines text-md"><span className="negrita">50%:</span> Este comodín te eliminará 2 respuestas incorrectas de la pregunta. </p>
            <p className="argumento_comodines text-md"><span className="negrita">Aleatorio:</span> Este comodín eliminara al azar entre 1 y 3 respuestas incorrectas. </p>

          <button
            onClick={() => setMostrarModal(true)}
            className="fondo_boton_ininio boton_link"
          >
            Empezar a Jugar
          </button>

          <div className="estructura_contribuciones">
              Música de fondo de <a className="linea_enlace" href="https://www.bensound.com" target="_blank" rel="noreferrer">Bensound</a><br/>
              Sonido de acierto y fallo de <a className="linea_enlace" href="https://www.zapsplat.com" target="_blank" rel="noreferrer">Zapsplat</a><br/>
              Sonido de celebracion de <a  className="linea_enlace" href="https://pixabay.com/es/users/hot_dope-27442149/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=111355"> Dmitrii</a> en <a  className="linea_enlace" href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=111355">Pixabay</a>
          </div>

        </div>


      {mostrarModal && (
                <div className="caja_modal_categoria bg-opacity-80">
                    <div className="estructura_modal_categoria">
                        <h2 className="titulo_modal_categoria">Elige la temática de las preguntas</h2>
                        <div className="estructura_seleccion_categoria">
                            <button
                                onClick={() => handleStartGame('entretenimiento')}
                                className="estilo_botones_categoria"
                            >
                                Entretenimiento
                            </button>
                            <button
                                onClick={() => handleStartGame('culturaGeneral')}
                                className="estilo_botones_categoria"
                            >
                                Cultura General
                            </button>
                            <button
                                onClick={() => handleStartGame('deportes')}
                                className="estilo_botones_categoria"
                            >
                                Deportes
                            </button>
                        </div>
                        <button
                            onClick={() => setMostrarModal(false)}
                            className="volver_inicio"
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