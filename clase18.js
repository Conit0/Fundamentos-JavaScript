var jonathan = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  altura: 1.73
}
var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}
var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}
//También se puede agregar diversas cosas a los objetos, me parece que actuan como variables
var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: (Math.ceil(Math.random() * 100))
}

//Desglosando objeto para obtener una arrow function más reducida
const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [jonathan, alan, martin, dario, vicky, paula]

//La función o metodo filter() lleva como paremtro una condición en este caso nos devolvera un nuevo array apartir de la condición estipulada en la arrowFunction
//La función esAlta albergada como parametro dentro de filter() no requiere de los paréntesis pues sera invocada cuando nosotros la necesitemos
var personasAltas = personas.filter(esAlta)
var personasBajs = personas.filter(esBaja)

/** Otra forma de hacer esto ↑↑↑ es por medio de una función anonima:
 * Pero en ocaciones resulta más prolijo tener la función por separado para entender mejor el código 
 * var personasAltas = personas.filter(function (persona) {return persona.altura > 1.8})
 */
console.log (personasAltas)