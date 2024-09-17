console.log('Hola sesion 2')
//Pedir datos con prompt

/*const numero = prompt('Introduce un numero: ')

console.log('numero: ', numero);
const numero2 = prompt('Introduce un numero: ')

console.log('numero: ' , numero2);
console.log('suma: ', parseInt(numero) + parseInt(numero2));*/

//Juego de los numeros
const numeroadivinar = 10 
let intentos = 0
let numerointroducido = -1
while(intentos>3 && numeroadivinar !=numerointroducido){
    console.log('intentos' , intentos);
    numerointroducido = prompt('Introduce un numero: ')

    console.log('numerointroducido: ' + numerointroducido);
    
    if(numerointroducido>numeroadivinar){
        console.log('El numero es menor')
    }else if (numerointroducido<numeroadivinar){
        console.log('El numero es mayor')
    }else{
        console.log('El numero es igual')
    }
    intentos= intentos + 1

    
}
    

