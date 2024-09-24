console.log('Sesion 4');


// array
const frutas =  ['pera', 'manzana', 'platano', 9, 32, "34"]

// acceso a posicion del array
console.log(frutas[2]);

// array de dos dimensiones
const barquitos = [
    ["1A","1B","1C"],
    ["2A","2B","2C"],
    ["3A","3B","3C"]
]

console.log(barquitos[2][1]);

// Objetos javascript
const persona = {
    nombre :'Pepe',
    apellidos : 'Lotillas Rotas'

}
console.log ('nombre = ', persona.nombre);

// arrays de objetos
const arraypersonas = [
    {
        nombre :'Pepe',
        apellidos : 'Lotillas Rotas'
    
    },
    {
        nombre :'Sara',
        apellidos : 'Lotillas Rotas'
    
    },
    {
        nombre :'Andres',
        apellidos : 'Roto Rotas'
    
    }
]

console.log(arraypersonas[2].apellidos);
const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
  ];
  console.log('la nota de sistemas operativos de Maria sanches es:  ', (alumnes[1].moduls[2].nota));
  console.log('Nombre del segundo modulo de Pere es: ' ,(alumnes[2].moduls[1].nom));

  // Recorrer elementos de un array con for

  for(let i=0;i<arraypersonas.length;i++){
    console.log('nombre de ', arraypersonas[i].nombre );
  }

  // Generando html a partir de un array
  //Creamos lista desordenada con los nombres de los alumnos
  let listahtml = '<table>'
  listahtml += `<tr>
  <td>Nombre</td>
  <td>Apellidos</td>
  </tr>

  `  
  for(let i=0;i<arraypersonas.length;i++){
  listahtml += `
    
    
    
    <tr><td>${arraypersonas[i].nombre}  </td>   
    
    <td>${arraypersonas[i].apellidos} </td></tr>
    

  `
}
  listahtml +='</table>'

  document.querySelector('#milista').innerHTML =listahtml;