//Inicia la calculadora
console.log("Calculadora inicialitzada!");

//Capturar clics en los botones
document.getElementById('btn1').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn2').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn3').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn4').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn5').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn6').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn7').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn8').addEventListener('click' , function(){
    console.log('i');
});
document.getElementById('btn9').addEventListener('click' , function(){
    console.log('i');
});
//Mostrar numero en la pantalla

document.getElementById('btn1').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "1";
});

//Añadir numeros consecutivos

let entradaActual = '';
document.getElementById('btn1').addEventListener('click', function(){
    entradaActual += '1';
    document.getElementById('pantalla').textContent = entradaActual;

});
//Asegurar operadores
document.getElementById('btnSuma').addEventListener('click', function(){
    entradaActual += '+';
    document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btnResta').addEventListener('click', function(){
    entradaActual -= '-';
    document.getElementById('pantalla').textContent = entradaActual;
});

//Realizar calculo

document.getElementById('btnIgual').addEventListener('click', function(){
    const resultat = eval(entradaActual);
    console.log('Resultat: ', resultat);
    document.getElementById('pantalla').textContent = resultat; //despeja el resultado en la consola)

})