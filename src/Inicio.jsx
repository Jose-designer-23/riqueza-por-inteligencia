import { Link } from 'react-router-dom';
import './App.css';

const Inicio = ({musicaFondoRef}) => {

  const handleStartGame = () => {
    if(!musicaFondoRef.current){
      musicaFondoRef.current = new Audio("/sounds/Floating-Lanterns-The-Mini-Vandals.mp3");
      musicaFondoRef.current.loop = true;
    }

    musicaFondoRef.current.play().catch(error => {
      console.error("Error al reproducir la música de fondo:", error);
    })
  }

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

          <Link 
            to="/juego" 
            className="bg-[#f3f1f1] boton_link"
            onClick={handleStartGame}
          >
            Empezar a Jugar
          </Link>

          <div className="text-xs mt-3 max-w-sm">
              Música de fondo de <a className="underline" href="https://www.bensound.com" target="_blank" rel="noreferrer">Bensound</a><br/>
              Sonido de acierto y fallo de <a className="underline" href="https://www.zapsplat.com" target="_blank" rel="noreferrer">Zapsplat</a><br/>
              Sonido de celebracion de <a  className="underline" href="https://pixabay.com/es/users/hot_dope-27442149/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=111355"> Dmitrii</a> en <a  className="underline" href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=111355">Pixabay</a>
          </div>

        </div>
      </div>
  
    
  );
};

export default Inicio;