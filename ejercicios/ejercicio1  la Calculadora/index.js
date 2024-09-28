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
document.getElementById('btn2').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "2";

});
document.getElementById('btn3').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "3";

});
document.getElementById('btn4').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "4";

});
document.getElementById('btn5').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "5";

});
document.getElementById('btn6').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "6";

});
document.getElementById('btn7').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "7";

});
document.getElementById('btn8').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "8";

});
document.getElementById('btn9').addEventListener('click', function(){
    document.getElementById('pantalla').textContent = "9";

});

//Añadir numeros consecutivos

let entradaActual = '';
document.getElementById('btn1').addEventListener('click', function(){
    entradaActual += '1';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn2').addEventListener('click', function(){
    entradaActual += '2';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn3').addEventListener('click', function(){
    entradaActual += '3';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn4').addEventListener('click', function(){
    entradaActual += '4';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn5').addEventListener('click', function(){
    entradaActual += '5';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn6').addEventListener('click', function(){
    entradaActual += '6';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn7').addEventListener('click', function(){
    entradaActual += '7';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn8').addEventListener('click', function(){
    entradaActual += '8';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn9').addEventListener('click', function(){
    entradaActual += '9';
    document.getElementById('pantalla').textContent = entradaActual;

});
document.getElementById('btn0').addEventListener('click', function(){
    entradaActual += '0';
    document.getElementById('pantalla').textContent = entradaActual;

});

//Asegurar operadores
document.getElementById('btnSuma').addEventListener('click', function(){
    entradaActual += '+';
    document.getElementById('pantalla').textContent = entradaActual;
});
document.getElementById('btnResta').addEventListener('click', function(){
    entradaActual += '-';
    document.getElementById('pantalla').textContent = entradaActual;
});

//Realizar calculo

document.getElementById('btnIgual').addEventListener('click', function(){
    const resultat = eval(entradaActual);
    console.log('Resultat: ', resultat);
    document.getElementById('pantalla').textContent = resultat; //despeja el resultado en la consola)

})
// Limpiar la pantalla

document.getElementById('btnBorrar').addEventListener('click', function() {
    entradaActual = '';
    document.getElementById('pantalla').textContent = '0';
  });
// Control de errores

document.getElementById('btnIgual').addEventListener('click', function() {
    try {
      if (entradaActual !== '') {
        const resultat = eval(entradaActual);
        document.getElementById('pantalla').textContent = resultat;
      } else {
        console.log('No hi ha res a calcular');
      }
    } catch (error) {
      console.log('Error en l\'operació:', error);
      document.getElementById('pantalla').textContent = 'Error';
    }
  });