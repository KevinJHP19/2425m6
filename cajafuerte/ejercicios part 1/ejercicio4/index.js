console.log('Hola')

const btn = document.querySelector('#boton')

btn.addEventListener('click', generar)



function generar(){

    let numrandom = Math.floor(Math.random(1)*100);
    let divresult = document.querySelector('#resultat');

    divresult.innerHTML = numrandom;
}