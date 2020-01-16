var jonathan = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  altura: 1.73,
  cantidadDeLibros: 111
}
var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}
var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}
//También se puede agregar diversas cosas a los objetos, me parece que actuan como variables
var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.72,
  cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [jonathan, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajs = personas.filter(esBaja)

const pasarAlturaACms = persona => ({...persona, altura: persona.altura * 100})

var personasCms = personas.map(pasarAlturaACms)

/** una forma de hacerlo declarando el acumulador para que almacene el valor de la suma total de libros de los objetos del array personas
var acum = 0
for (var i = 0; i < personas.length; i++) {
  acum = acum + personas[i].cantidadDeLibros
}
 */

//Forma más prolija
//Como sólo vamos a necesitar un valor del obejto cambiamos todo el array por la clave del objeto especifica sin necesidad de envolverlo en paréntesis pues ya hay un par envolviendo dos parametros
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

/** const reducer = (acum, persona) => {
  return acum + persona.cantidadDeLibros
} */

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
console.table([`En total todos tienen ${totalDeLibros} libros`])