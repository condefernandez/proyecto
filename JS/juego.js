
const preguntas = [
    {
        pregunta: "¿Sobre quién trata esta página?",
        opciones: [
            "Manuel Segura López",
            "William Shakespeare",
            "San Martín"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué tema principal aborda el proyecto?",
        opciones: [
            "La historia de los videojuegos",
            "La vida de un mártir escolapio",
            "Los deportes"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué información se puede consultar en la página?",
        opciones: [
            "Su vida, su rol en la Iglesia y su muerte",
            "Sus videojuegos favoritos",
            "Sus viajes por el mundo"
        ],
        correcta: 0
    }
];

let numeroPregunta = 0;
let puntaje = 0;

const enunciado = document.getElementById("pregunta");
const respuestas = document.getElementById("respuestas");
const resultado = document.getElementById("resultado");
const botonSiguiente = document.getElementById("siguiente");

function mostrarPregunta() {
    resultado.textContent = "";
    botonSiguiente.style.display = "none";

    const actual = preguntas[numeroPregunta];
    enunciado.textContent = actual.pregunta;
    respuestas.innerHTML = "";

    actual.opciones.forEach((opcion, indice) => {
        const boton = document.createElement("button");

        boton.textContent = opcion;
        boton.classList.add("respuesta");

        boton.addEventListener("click", function () {
            comprobarRespuesta(indice);
        });

        respuestas.appendChild(boton);
    });
}

function comprobarRespuesta(indice) {
    const actual = preguntas[numeroPregunta];
    const botones = respuestas.querySelectorAll("button");

    botones.forEach((boton) => {
        boton.disabled = true;
    });

    if (indice === actual.correcta) {
        resultado.textContent = "¡Correcto!";
        puntaje++;
    } else {
        resultado.textContent =
            "Incorrecto. La respuesta correcta es: " +
            actual.opciones[actual.correcta];
    }

    botonSiguiente.style.display = "inline-block";
}

botonSiguiente.addEventListener("click", function () {
    numeroPregunta++;

    if (numeroPregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        enunciado.textContent = "¡Juego terminado!";
        respuestas.innerHTML = "";
        resultado.textContent =
            "Tu puntaje es " + puntaje + " de " + preguntas.length;

        botonSiguiente.textContent = "Volver a jugar";
        botonSiguiente.style.display = "inline-block";

        botonSiguiente.onclick = function () {
            numeroPregunta = 0;
            puntaje = 0;
            botonSiguiente.textContent = "Siguiente pregunta";
            botonSiguiente.onclick = null;
            mostrarPregunta();
        };
    }
});

mostrarPregunta();
