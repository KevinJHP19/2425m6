console.log('Hola')




const btn = document.querySelector('#toggleButton');

btn.addEventListener('click', mostrarocultar)

function mostrarocultar(){

    let div =document.querySelector('#miDiv');
    if(div.style.display =='block'){
    div.style.display = 'none'
    console.log('El div se oculta')
    } else{
        div.style.display = 'block'
        console.log('El div se muestra')
    }

}