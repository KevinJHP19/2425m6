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

// Mostrar pregunta aleatoria
function mostrarpreguntas() {
    // Seleccionar un índice aleatorio para la pregunta
    let indicePregunta = Math.floor(Math.random() * quiz.length);
    
    // Seleccionar la pregunta según el índice aleatorio
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
    document.getElementById('answer1').addEventListener('click', () => seleccionar(0, respuestaCorrecta));
    document.getElementById('answer2').addEventListener('click', () => seleccionar(1, respuestaCorrecta));
    document.getElementById('answer3').addEventListener('click', () => seleccionar(2, respuestaCorrecta));
    document.getElementById('answer4').addEventListener('click', () => seleccionar(3, respuestaCorrecta));

    // Añadir el evento para la siguiente pregunta
    document.getElementById('next-question').addEventListener('click', () => {
        mostrarpreguntas(); // Mostrar otra pregunta aleatoria
    });
}

// Seleccionar una respuesta y verificar si es correcta
function seleccionar(indiceSeleccionado, respuestaCorrecta) {
    let resultDiv = document.querySelector('#result');

    // Verificar si la respuesta seleccionada es la correcta
    if (indiceSeleccionado === respuestaCorrecta) {
        resultDiv.textContent = '¡Correcto!';
        resultDiv.className = 'alert alert-success';
        moverjugador(true)
    } else {
        resultDiv.textContent = 'Incorrecto. Inténtalo de nuevo.';
        resultDiv.className = 'alert alert-danger';
        moverjugador(false)
    }
    
    
    // Mostrar el resultado
    resultDiv.style.display = 'block';
}
    // Crear las variables
let casillas = document.querySelectorAll('.div');  
let encerts = 0;
let errors = 0;
let posicioActual = 1;

// Mostrar el estado inicial en la consola
console.log('Posición inicial:', posicioActual, 'Encerts:', encerts, 'Errors:', errors);

// Función para mover al jugador
function moverjugador(adelante) {
    // Si la respuesta es correcta
    if (adelante) {
        posicioActual += 1;  // Avanza una casilla
        encerts += 1;        // Incrementa los aciertos
        console.log('¡Respuesta correcta! Nueva posición:', posicioActual, 'Encerts:', encerts, 'Errors:', errors);

        // Cambiar el color de la casilla actual y la anterior
        if (posicioActual > 1) {
            casillas[posicioActual - 2].classList.add('div-gray');  // La anterior se vuelve gris
        }
        casillas[posicioActual - 1].classList.add('div-point');      // La actual se vuelve roja

    // Si la respuesta es incorrecta
    } else {
        // Retroceder 3 casillas
        posicioActual -= 3;  
        
        // Asegurarse de que no sea menor que 1
        if (posicioActual < 1) {
            posicioActual = 1;
        }

        errors += 1;  // Incrementa los errores
        console.log('¡Respuesta incorrecta! Nueva posición:', posicioActual, 'Encerts:', encerts, 'Errors:', errors);

        // Limpiar las clases de todas las casillas y establecer la casilla actual
        for (let i = 0; i < casillas.length; i++) {
            casillas[i].classList.remove('div-gray', 'div-point');  // Eliminar clases de todas las casillas
        }
        casillas[posicioActual - 1].classList.add('div-point');  // La actual se vuelve roja
    }

    comprobarfinaldeljuego();  // Verificar si el juego ha terminado
}

// Función para comprobar si el juego ha terminado
function comprobarfinaldeljuego() {
    if (posicioActual === 20) {
        console.log(`¡Has llegado a la casilla 20! Felicidades. Aciertos: ${encerts}, Errores: ${errors}`);
        document.getElementById('next-question').style.display = "none";  // Desactivar el botón de "Siguiente Pregunta"
    }
}

    
    mostrarpreguntas();





