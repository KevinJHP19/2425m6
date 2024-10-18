console.log('Hola')


const div =document.querySelector('#miDiv');

const divcambiado = 'Me cambiaron mi div'
const btn = document.querySelector('#boton');


btn.addEventListener('click', canviardiv)


function canviardiv(){

    div.innerHTML = divcambiado;


}