import './App.css';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import preguntas from './data/preguntas';


//Funcion para desordenar preguntas del array
const mezclarPreguntas = (array) => {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

const Juego = ({musicaFondoRef, stopMusic}) => {
    
    const [preguntaActual, setPreguntaActual] = useState(0);

    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

    const [preguntasBarajadas, setPreguntasBarajadas] = useState([]);

    const [dineroAcumulado, setDineroAcumulado] = useState(0);

    const [mostrarModal, setMostrarModal] = useState(false);

    const [respuestasDeshabilitadas, setRespuestasDeshabilitadas] = useState([]);

    const [comodin5050Usado, setComodin5050Usado] = useState(false);

    const [comodinAleatorioUsado, setComodinAleatorioUsado] = useState(false);

    const [musicaSonando, setMusicaSonando] = useState(false);

    const [ganaste, setGanaste] = useState(false);

    const musicaAciertoRef = useRef(null);

    const musicaFalloRef = useRef(null);

    const celebracionRef = useRef(null);

    const navigate = useNavigate();

    const location = useLocation();

    const categoria = location.state?.categoria || 'entretenimiento';

    useEffect(() => {
        musicaAciertoRef.current = new Audio("/sounds/acierto.mp3");
        musicaFalloRef.current = new Audio("/sounds/fallo.mp3");
        celebracionRef.current = new Audio("/sounds/celebracion.mp3");
        musicaFalloRef.current.volume = 1.0;

        if (musicaFondoRef.current && !musicaFondoRef.current.paused) {
            setMusicaSonando(true);
        }
    
    }, []);


    const premios = [
        100,
        200,
        300,
        500,
        1000,
        2000,
        4000,
        8000,
        16000,
        32000,
        64000,
        125000,
        250000,
        500000,
        1000000
    ];


    //Usamos useEffect al inicio para barajar las preguntas
   useEffect(() => {
        if (preguntas[categoria]) {
            setPreguntasBarajadas(mezclarPreguntas(preguntas[categoria]));
        } else {
            console.error(`La categoría "${categoria}" no existe.`);
            navigate('/');
        }
    }, [categoria, navigate]);

    //Esperamos a que las preguntas se barajen antes de renderizar
    if (preguntasBarajadas.length === 0) {
        return <div>Cargando preguntas...</div>
    }

    const pregunta = preguntasBarajadas[preguntaActual];

    const respuestaPulsada = (correcta, index) => {

        setRespuestaSeleccionada(index);

         if (correcta) {
          musicaAciertoRef.current.currentTime = 0;
          musicaAciertoRef.current.play();
        } else {
            musicaFalloRef.current.play();
            musicaFalloRef.current.volume = 1.0;
            musicaFondoRef.current.pause();
            setMusicaSonando(false);
        }

        setTimeout(() => {
            const siguientePregunta = preguntaActual + 1;
            if (correcta) {
                // Si la respuesta es correcta, actualizamos el dinero al valor del siguiente premio.
                // Usamos "siguientePregunta - 1" para obtener el índice del premio recién ganado.
                const nuevoDinero = premios[siguientePregunta - 1];
                setDineroAcumulado(nuevoDinero);

                if (siguientePregunta < preguntasBarajadas.length) {
                    setPreguntaActual(siguientePregunta);
                    setRespuestaSeleccionada(null);
                    setRespuestasDeshabilitadas([]);
                } else {
                    // Si es la última pregunta y aciertas, mostramos el modal de haber ganado la partida.
                    celebracionRef.current.play();
                    celebracionRef.current.loop = true;
                    if (musicaFondoRef.current) {
                        musicaFondoRef.current.pause();
                        setMusicaSonando(false);
                    }
                    setGanaste(false);
                    setMostrarModal(true);
                }
            } else {
                // Si la respuesta es incorrecta, mostramos el modal de haber perdido la partida.
                setGanaste(true);
                setMostrarModal(true);
            }
        }, 1000);
    };

    const toggleMusica = () => {
        if (musicaFondoRef.current) {
            if (musicaSonando) {
                musicaFondoRef.current.pause();
                setMusicaSonando(false);
            } else {
                musicaFondoRef.current.play().catch(error => {
                    console.error("Error al reproducir la música de fondo:", error);
                });
                setMusicaSonando(true);
            }
        }
    };


    const usarComodin5050 = () => {
        if (comodin5050Usado || respuestaSeleccionada !== null) return;
        setComodin5050Usado(true);

        const respuestasIncorrectas = pregunta.respuesta
            .map((resp, index) => (resp.correcta ? null : index))
            .filter(index => index !== null);

        const aDeshabilitar = mezclarPreguntas(respuestasIncorrectas).slice(0, 2);
        setRespuestasDeshabilitadas(aDeshabilitar);
    };

    const usarComodinAleatorio = () => {
        if (comodinAleatorioUsado || respuestaSeleccionada !== null) return;
        setComodinAleatorioUsado(true);

        const respuestasIncorrectas = pregunta.respuesta
            .map((resp, index) => (resp.correcta ? null : index))
            .filter(index => index !== null);
        
        const numeroAleatorio = Math.floor(Math.random() * 3) + 1; // 1, 2 o 3
        const aDeshabilitar = mezclarPreguntas(respuestasIncorrectas).slice(0, numeroAleatorio);
        setRespuestasDeshabilitadas(aDeshabilitar);
    };

    // Función para reiniciar el juego
    const reiniciarJuego = () => {
        setPreguntaActual(0);
        setRespuestaSeleccionada(null);
        setDineroAcumulado(0);
        setPreguntasBarajadas(mezclarPreguntas(preguntas[categoria]));
        setMostrarModal(false);
        setRespuestasDeshabilitadas([]);
        setComodin5050Usado(false);
        setComodinAleatorioUsado(false);
        setGanaste(false);
         if (musicaFondoRef.current) {
            musicaFondoRef.current.play();
            celebracionRef.current.pause();
        }
        stopMusic();
        navigate('/');
  
    };

    return (

        <div className="estructura_boton_musica">
            <button onClick={toggleMusica} className="estilo_boton_musica bg-opacity-50">
                {musicaSonando ? (
                    // Icono de sonido
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 5.05a1 1 0 01.782 0A10.001 10.001 0 0118 10a10.001 10.001 0 01-2.561 4.95a1 1 0 01-1.34-1.503A8.001 8.001 0 0016 10a8.001 8.001 0 00-1.879-4.507 1 1 0 01-.157-1.443z" clipRule="evenodd" />
                    </svg>
                ) : (
                    // Icono de sonido silenciado
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 8l-6 6M9 8l6 6" />
                    </svg>
                )}
            </button>
            <div className="estructura_dinero">
                <div className="fondo_dinero borde_dinero">
                    <p className="texto_dinero">Dinero acumulado: {dineroAcumulado.toLocaleString()}€</p>
                </div>
                
               
                <div className="fondo_dinero caja_comodines">
                  <p className="texto_comodines">Comodines:</p>
                  <div className="separacion_comodines">
                    <button
                        onClick={usarComodin5050}
                        className={`estilo_comodines ${comodin5050Usado ? 'boton_deshabilitado' : 'boton_habilitado'}`}
                        disabled={comodin5050Usado}
                    >
                        50%
                    </button>
                    <button
                        onClick={usarComodinAleatorio}
                        className={`estilo_comodines ${comodinAleatorioUsado ? 'boton_deshabilitado' : 'boton_habilitado'}`}
                        disabled={comodinAleatorioUsado}
                    >
                        &#x1F500;
                    </button>
                  </div>
                </div>
            </div>
      
            

            <div className="caja_pregunta">
                <div className="estructura_pregunta fondo_pregunta">
                    <h1 className="espacio_pregunta texto_titulo">Riqueza por Inteligencia</h1>
                    <p className="texto_numero_pregunta">Pregunta {preguntaActual + 1}:</p>
                    <p className="espacio_pregunta texto_pregunta">{pregunta.pregunta}</p>
                    <div className="estructura_botones">
                        {pregunta.respuesta.map((respuesta, index) => (
                            <button
                                key={index}
                                onClick={() => respuestaPulsada(respuesta.correcta, index)}
                                className={
                                    `diseño_botones
                                    ${respuestaSeleccionada === index
                                        ? (respuesta.correcta ? 'correcta2' : 'incorrecta2')
                                        : respuestasDeshabilitadas.includes(index)
                                            ? 'boton_deshabilitado'
                                            : 'boton_habilitado'
                                    }`
                                }
                                disabled={respuestaSeleccionada !== null || respuestasDeshabilitadas.includes(index)}
                            >
                                {respuesta.texto}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
            

            {mostrarModal && (
                <div className="caja_modal bg-opacity-80">
                    <div className="estructura_modal">
                        {ganaste ? (
                            <>
                                <h2 className="titulo_modal_derrota">¡Qué pena, ibas bastante bien!</h2>
                                <p className="texto_modal_derrota">
                                    Te quedaste con: <span className="dinero_derrota">0€</span>
                                </p>

                                <button
                                    onClick={reiniciarJuego}
                                    className="boton_volver_jugar"
                                >
                                    Volver a Jugar
                                </button>
                            </>

                        ) : (
                            <>
                                <img 
                                    src="/imgs/confetti-40.gif" 
                                    alt="Confeti de celebración" 
                                    className="estilo_confeti"
                                    />

                                <div className="posicion_modal_victoria">
                                    <h2 className="titulo_modal_victoria ">¡Enhorabuena! Tu inteligencia te hizo amasar una gran riqueza. </h2>
                                    <p className="texto_modal_victoria">
                                        Conseguiste ganar: <span className="dinero_victoria">{dineroAcumulado.toLocaleString()}€</span>
                                    </p>
                                    <button
                                        onClick={reiniciarJuego}
                                        className="boton_volver_jugar"
                                    >
                                        Volver a Jugar
                                    </button>
                                </div>

                            </>

                        )
                    }

                    
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Juego