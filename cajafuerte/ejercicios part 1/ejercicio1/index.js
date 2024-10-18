console.log('Hola')



const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
const btn3 = document.querySelector('#boton3')

btn1.addEventListener('click', fnBoton1)
btn2.addEventListener('click', fnBoton2)
btn3.addEventListener('click', fnBoton3)

function fnBoton1(){
    console.log("Precionaste el primer boton");
}
function fnBoton2(){
    console.log("Precionaste el segundo boton");
}
function fnBoton3(){
    console.log("Precionaste el tercer boton");
}