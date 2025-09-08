# 💰 Riqueza por Inteligencia 🧠

¡Bienvenido a **Riqueza por Inteligencia**, un cautivador juego de preguntas y respuestas inspirado en el famoso programa de televisión **¿Quién quiere ser millonario?**!

Este proyecto es una muestra de desarrollo web centrado en **React**, donde se combinan efectos visuales, interactividad y una lógica de juego clara para ofrecer una experiencia divertida y desafiante.

---

## ✨ Características Principales

### 🎮 Experiencia de Juego y Navegación

* **Navegación Intuitiva:**
    * **Pantalla de Inicio:** Explica las reglas del juego y los comodines para una comprensión clara antes de empezar.
    * **Botón de inicio:** Comienza el juego y te lleva a la pantalla de preguntas.
* **Mecánica de Alto Riesgo:**
    * Acertar 15 preguntas seguidas para ganar un millón de euros.
    * Fallar una sola pregunta significa perder todo el dinero y terminar la partida.
* **Comodines Estratégicos:**
    * **50%:** Elimina dos de las cuatro respuestas incorrectas, aumentando tus posibilidades.
    * **Aleatorio:** Elimina un número aleatorio de respuestas incorrectas (entre 1 y 3).
    * *Nota: Cada comodín solo se puede usar una vez por partida.*
* **Feedback Visual y de Audio:**
    * Los botones de respuesta cambian de color: se ponen **verdes** al acertar y **rojos** al fallar.
    * Al usar los comodines, se deshabilita y se oscurece el botón del comodín utilizado y las respuestas incorrectas seleccionadas al azar, mostrandose el icono de "prohibido".
    * Disfruta de una música de fondo envolvente, efectos de sonido para aciertos y errores, y una emocionante canción de celebración al ganar el gran premio.
* **Finales Dinámicos:** Al terminar el juego, se muestra un modal personalizado que te da la enhorabuena por la victoria o te anima a intentarlo de nuevo.

---

## 🛠️ Funcionalidades y Tecnologías Utilizadas

Este proyecto ha sido desarrollado con **React**, mostrando un manejo avanzado de sus **hooks** para una gestión de estado y efectos eficiente.

### Hooks de React:

* [**`useState`**](https://es.react.dev/reference/react/useState): Utilizado para manejar el estado de componentes clave como la pregunta actual, el progreso del juego, el dinero acumulado y el uso de los comodines.
* [**`useEffect`**](https://es.react.dev/reference/react/useEffect): Empleado para manejar los "efectos secundarios" del juego. Esto incluye la reproducción de la música y efectos de sonido en momentos específicos, y para barajar el orden de las preguntas al inicio de cada partida.
* [**`useRef`**](https://es.react.dev/reference/react/useRef): Usado para referenciar elementos del DOM, como los archivos de audio, sin causar re-renderizados innecesarios, lo que optimiza el rendimiento.
* [**`useNavigate`**](https://reactrouter.com/en/main/hooks/use-navigate): Facilita la navegación fluida entre la página de inicio y la pantalla de juego.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha el juego en tu entorno local, sigue estos sencillos pasos:

### Requisitos Previos

* Node.js (se recomienda la versión LTS)
* npm o Yarn

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/riqueza-por-inteligencia.git](https://github.com/Jose-designer-23/riqueza-por-inteligencia.git)
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd riqueza-por-inteligencia
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm start
    ```
    Una vez iniciado, abre tu navegador y visita `http://localhost:3000` para empezar a jugar.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego, no dudes en abrir un *issue* o enviar un *pull request*.

---

## ✍️ Autor

* [Jose-designer-23](https://github.com/Jose-designer-23)

---
