console.log(' Hola sesion de repaso')

 let elemento1 =document.querySelector('#c1').innerHTML;
 const elemento3 =document.querySelector('#c3').innerHTML;

 console.log(elemento1)
 console.log(elemento3)

 let arraylist = document.querySelectorAll(".cuadrado");

 console.log(arraylist[1].innerHTML)

 for(let i=0; i<arraylist.length;i++){
    
    console.log(arraylist[i].innerHTML)

 }
    
  arraylist[1].classList.remove('c2')
  arraylist[1].classList.add('alerta')
  

console.log(arraylist[1].classList)