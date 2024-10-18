
console.log('hola')
//Ejercicio 1
function generarnumerorandom() { 
const nummaximo = document.querySelector('#num2').value

const numminimo = document.querySelector('#num1').value

console.log(nummaximo , numminimo)

const numrandom = Math.floor(Math.random(numminimo) * nummaximo);

console.log(numrandom);

const divnumerorandom=document.querySelector('#numeroAleatorio'); 
divnumerorandom.innerHTML = '';
divnumerorandom.innerHTML= numrandom;

}

document.getElementById('generarnumero').addEventListener('click', function(event){
    event.preventDefault();
    generarnumerorandom();
})

//Ejercicio 2


let texto = document.querySelector('#texto');


    console.log(texto)
