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