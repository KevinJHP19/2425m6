
console.log("Hola")


let quiz = [
    {
        pregunta: "¿Cuál es la capital de Perú?",
        correcta: 1,
        respuestas: [
            "Lima",
            "Bogotá",
            "Sucre",
            "Madrid"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de España?",
        correcta: 1,
        respuestas: [
            "Madrid",
            "Lisboa",
            "París",
            "Roma"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Colombia?",
        correcta: 1,
        respuestas: [
            "Bogotá",
            "Caracas",
            "Lima",
            "Quito"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Argentina?",
        correcta: 1,
        respuestas: [
            "Buenos Aires",
            "Montevideo",
            "Santiago",
            "Lima"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Chile?",
        correcta: 1,
        respuestas: [
            "Santiago",
            "Lima",
            "Buenos Aires",
            "Bogotá"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Ecuador?",
        correcta: 1,
        respuestas: [
            "Quito",
            "Lima",
            "Bogotá",
            "Asunción"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Brasil?",
        correcta: 1,
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
        correcta: 1,
        respuestas: [
            "Asunción",
            "Montevideo",
            "Lima",
            "Buenos Aires"
        ]
    },
    {
        pregunta: "¿Cuál es la capital de Venezuela?",
        correcta: 1,
        respuestas: [
            "Caracas",
            "Bogotá",
            "Quito",
            "Lima"
        ]
    }
];

for(let i=0;i<quiz.length;i++){

    document.querySelector('#question').innerHTML=quiz[i].pregunta;
    document.querySelector('#answer1').innerHTML=quiz[i].respuestas[0];
    document.querySelector('#answer2').innerHTML=quiz[i].respuestas[1];
    document.querySelector('#answer3').innerHTML=quiz[i].respuestas[2];
    document.querySelector('#answer4').innerHTML=quiz[i].respuestas[3];


}



