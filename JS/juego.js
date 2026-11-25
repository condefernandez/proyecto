

let puntaje = 0;

function comprobarRespuesta(respuesta, correcta) {

    if (respuesta == correcta) {

        alert("¡Respuesta correcta!");

        puntaje = puntaje + 1;

    } else {

        alert("Respuesta incorrecta.");

    }

}

function iniciarJuego() {

    puntaje = 0;

    // Pregunta 1

    let respuesta1 = Number(prompt(
        "PREGUNTA 1 DE 5" +
        "¿Sobre qué personaje trata esta página?" +
        "1. Manuel Segura López" +
        "2. San Martín" +
        "3. William Shakespeare"
    ));

    comprobarRespuesta(respuesta1, 1);


    // Pregunta 2

    let respuesta2 = Number(prompt(
        "PREGUNTA 2 DE 5" +
        "¿Qué título recibe Manuel Segura López?" +
        "1. Rey" +
        "2. Beato" +
        "3. Presidente"
    ));

    comprobarRespuesta(respuesta2, 2);


    // Pregunta 3

    let respuesta3 = Number(prompt(
        "PREGUNTA 3 DE 5" +
        "¿A qué grupo pertenece Manuel Segura López?" +
        "1. Beatos Mártires Escolapios" +
        "2. Próceres argentinos" +
        "3. Escritores ingleses"
    ));

    comprobarRespuesta(respuesta3, 1);


    // Pregunta 4

    let respuesta4 = Number(prompt(
        "PREGUNTA 4 DE 5" +
        "¿En qué sección se puede conocer su relación con la Iglesia?" +
        "1. Muerte" +
        "2. Vida del Beato" +
        "3. Su rol en la Iglesia"
    ));

    comprobarRespuesta(respuesta4, 3);


    // Pregunta 5

    let respuesta5 = Number(prompt(
        "PREGUNTA 5 DE 5" +
        "¿Qué tres aspectos de Manuel Segura López presenta la página?" +
        "1. Sus viajes, deportes y estudios" +
        "2. Su vida, su rol en la Iglesia y su muerte" +
        "3. Su familia, sus amigos y sus vacaciones"
    ));

    comprobarRespuesta(respuesta5, 2);


    // Resultado final

    alert(
        "¡Juego terminado!" +
        "Tu puntaje final es: " + puntaje + " de 5"
    );

}
