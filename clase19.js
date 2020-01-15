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
  altura: 1.72
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.8

var personas = [jonathan, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajs = personas.filter(esBaja)

//Al ser un sólo parametro obviamos los paréntesis
//Para tener el mismo efecto de las funciones que sólo retornan un valor usamos un par de paréntesis para envolver el objeto que sera retornado
const pasarAlturaACms = persona => ({...persona, altura: persona.altura * 100})

{
   /*
   persona.altura = persona.altura * 100 o mejor así: persona.altura *= 100
   return persona //Con esta forma estamos modificando la clave altura dentro del array original personas
   */
  /*
   Para evitar eso creamos otro array apartir de ese así
   Nuevo objeto con return y apertura de llaves
    return {
    ...persona,
    altura: persona.altura * 100 //situando la operación aquí no es necesario hacer que adquiera el valor de la operación por medio del =
  }
  */
}

//Podriamos poner una función anonima dentro de los parametros de la función pasarAlturaACms pero resulta más prolijo declararla fuera con ello comprenderemos mejor lo que hace el programa
var personasCms = personas.map(pasarAlturaACms)
