//Juego de los numeros


document.querySelector(input)
const numeroadivinar = 10 
let intentos = 0
let numerointroducido = -1
while(intentos<3 && numeroadivinar !=numerointroducido){
    console.log('intentos' , intentos);
    numerointroducido = ('Introduce un numero: ')

    console.log('numerointroducido: ' + numerointroducido);
    
    if(numerointroducido>numeroadivinar){
        console.log('El numero es menor')
    }else if (numerointroducido<numeroadivinar){
        console.log('El numero es mayor')
    }else{
        console.log('El numero es igual')
    }
    intentos++

    
}