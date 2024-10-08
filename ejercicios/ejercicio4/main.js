console.log('hola');

function agrupar() {
    // Obtener valores de los campos
    const inputnombre = document.querySelector('#nombre').value; 
    console.log("El nombre es ", inputnombre);

    const inputap1 = document.querySelector('#ap1').value;
    const inputap2 = document.querySelector('#ap2').value;
    console.log("Los apellidos son", inputap1, inputap2);

    // Concatenar los apellidos
    const textoapellido = " " + inputap1 + " " + inputap2;

    const inputdni = document.querySelector('#dni').value;
    console.log("El dni es", inputdni);

    const inputimagen = document.querySelector('#inputimagen').value;
    console.log(" La URL es ", inputimagen);

    // Actualizar los spans
    const span1 = document.querySelector('#elnombre');
    span1.innerHTML = inputnombre;

    const span2 = document.querySelector('#apellidos');
    span2.innerHTML = textoapellido;

    const span3 = document.querySelector('#eldni');
    span3.innerHTML = inputdni;

    const divimagen = document.querySelector('#imagen');

    const imagen= `<img src="${inputimagen}" class="card-img-top" >`

    divimagen.innerHTML= imagen;
    
}

// Evento del botón para agrupar los datos
document.getElementById('btncrear').addEventListener('click', function(event) {
    event.preventDefault();  // Evitar el comportamiento predeterminado
    agrupar();  
});



