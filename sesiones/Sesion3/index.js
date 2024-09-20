
console.log("Sesion3")

//Capturamos botones

const btn1 = document.querySelector("#btn1")

console.log("boton" , btn1);

//Capturamos elh1 y miramos lo que hay dentro 
const titulo = document.querySelector("h1")

//propiedades
console.log('h1' , titulo)

//dentro
console.log ('interior el h1: ', titulo.innerHTML);

//Cambiamos el h1 con un nuevo texto desde javascript
titulo.innerHTML = "<em> Otro Titulo</em>"

// Escuchamos evento click del boton1

btn1.addEventListener("click", fnBoton1)

function fnBoton1(){
    console.log("click en boton1");
}

// lo mismo para el boton2 pero en forma resumida
document.querySelector("#btn2").addEventListener
("mouseover", function(){
    console.log("Raton sobrel el  boton2")
})

const operacion = "2+3 "
console.log("operacion:" , operacion)
console.log("El resultado es: " , eval(operacion));
