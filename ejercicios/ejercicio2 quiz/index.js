let quiz = [
    {
        pregunta: "¿Cuál es la capital de Perú?",
        correcta: 0,
        respuestas: [
            "Lima",
            "Bogotá",
            "Sucre",
            "Madrid"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de España?",
        correcta: 3,
        respuestas: [
            "Roma",
            "Lisboa",
            "París",
            "Madrid"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Colombia?",
        correcta: 1,
        respuestas: [
            "Caracas",
            "Bogotá",
            "Lima",
            "Quito"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Argentina?",
        correcta: 0,
        respuestas: [
            "Buenos Aires",
            "Montevideo",
            "Santiago",
            "Lima"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Chile?",
        correcta: 0,
        respuestas: [
            "Santiago",
            "Lima",
            "Buenos Aires",
            "Bogotá"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Ecuador?",
        correcta: 0,
        respuestas: [
            "Quito",
            "Lima",
            "Bogotá",
            "Asunción"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Brasil?",
        correcta: 0,
        respuestas: [
            "Brasilia",
            "Río de Janeiro",
            "Sao Paulo",
            "Salvador"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Bolivia?",
        correcta: 1,
        respuestas: [
            "La Paz",
            "Sucre",
            "Cochabamba",
            "Santa Cruz"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Paraguay?",
        correcta: 0,
        respuestas: [
            "Asunción",
            "Montevideo",
            "Lima",
            "Buenos Aires"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        correcta: 2,
        respuestas: [
            "Quito",
            "Bogotá",
            "Caracas",
            "Lima"
        ]
    }
];

let indicePregunta = 0; // Índice para rastrear la pregunta actual

// Mostrar pregunta
function mostrarpreguntas() {
    // Verificar si ya no hay más preguntas
    if (indicePregunta >= quiz.length) {
        document.querySelector('#quiz').innerHTML = '<h2>¡No hay más preguntas disponibles!</h2>';
        return; // Detener la función si ya no hay preguntas
    }

    // Seleccionar la pregunta según el índice
    let preguntaSeleccionada = quiz[indicePregunta];

    // Guardar la respuesta correcta en una variable
    let respuestaCorrecta = preguntaSeleccionada.correcta;

    // Generar el HTML para la pregunta y sus respuestas
    let listahtml = `
        <h2 id="question" class="mt-4">${preguntaSeleccionada.pregunta}</h2>
        <div id="answers" class="d-grid gap-2 mt-3">
            <button class="btn btn-primary" id="answer1">${preguntaSeleccionada.respuestas[0]}</button>
            <button class="btn btn-primary" id="answer2">${preguntaSeleccionada.respuestas[1]}</button>
            <button class="btn btn-primary" id="answer3">${preguntaSeleccionada.respuestas[2]}</button>
            <button class="btn btn-primary" id="answer4">${preguntaSeleccionada.respuestas[3]}</button>
        </div>
        <div id="result" class="alert mt-3" style="display: none;"></div>
        <button id="next-question" class="btn btn-secondary mt-3">Siguiente Pregunta</button>
    `;

    // Inyectar el HTML generado
    document.querySelector('#quiz').innerHTML = listahtml;

    // Añadir los eventos para las respuestas
    document.querySelectorAll('#answers button').forEach((button, index) => {
        button.addEventListener('click', () => seleccionar(index, respuestaCorrecta));
    });

    // Añadir el evento para la siguiente pregunta
    document.querySelector('#next-question').addEventListener('click', () => {
        indicePregunta++; // Avanzar al siguiente índice
        mostrarpreguntas(); // Mostrar la siguiente pregunta
    });
}

// Seleccionar una respuesta y verificar si es correcta
function seleccionar(indiceSeleccionado, respuestaCorrecta) {
    let resultDiv = document.querySelector('#result');

    // Verificar si la respuesta seleccionada es la correcta
    if (indiceSeleccionado === respuestaCorrecta) {
        resultDiv.textContent = '¡Correcto!';
        resultDiv.className = 'alert alert-success ';
    } else {
        resultDiv.textContent = 'Incorrecto. Inténtalo de nuevo.';
        resultDiv.className = 'alert alert-danger ';
    }

    // Mostrar el resultado
    resultDiv.style.display = 'block';
}

mostrarpreguntas();

    

 
 








