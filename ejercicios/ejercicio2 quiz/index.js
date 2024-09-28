
console.log("Hola")
let numerorandom = Math.floor(Math.random() * 10);
    console.log(numerorandom);

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
    
    let numerorandom = Math.floor(Math.random() * 10);
    console.log(numerorandom);

    let listahtml = `<h2 id="question" class="mt-4">${quiz[numerorandom].pregunta}</h2>
      <div id="answers" class="d-grid gap-2 mt-3">
        <button class="btn btn-primary" id="answer1">${quiz[numerorandom].respuestas[0]}</button>
        <button class="btn btn-primary" id="answer2">${quiz[numerorandom].respuestas[1]}</button>
        <button class="btn btn-primary" id="answer3">${quiz[numerorandom].respuestas[2]}</button>
        <button class="btn btn-primary" id="answer4">${quiz[numerorandom].respuestas[3]}</button>
      </div>
      <div id="result" class="alert mt-3" style="display: none;"></div>
      <button id="next-question" class="btn btn-secondary mt-3" style="display: none;">Siguiente Pregunta</button>
    </div>
    `
    document.querySelector('#quiz').innerHTML =listahtml;
}


    const btnsiguiente = document.querySelector("#next-question") 
btnsiguiente.addEventListener("click", )

 
 








