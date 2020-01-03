//Declarando objetos, definir cuáles seran sus atributos y asignarle valores a cada uno de ellos, pasar objetos como parametros hacia las funciones y acceder a los atributos de ellos dentro de esas funciones.
var sacha = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  edad: 27
}
var dario = {
  nombre: 'Dario',
  apellido: 'Sunisky',
  edad: 27
}
//En este caso desglosaremos el objeto dentro de los parametros de la función, que es una nueva funcionalidad.
function imprimirNombreMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}
imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)

imprimirNombreMayusculas({ nombre: 'Pepito' })

/* Cuando dejamos la función sin parametros dara un error pues el compilador tratara de acceder al atributo ({ nombre }) de algo que esta indefinido (undefined) por lo tanto no podra acceder a nombre, hay que tener en cuenta que no podemos desglosar un objeto si no estamos seguros que siempre le vamos a enviar el objeto que espera
imprimirNombreMayusculas()

 y que siempre sea el mismo por que tampoco podemos cambiar el obeto dentro de los paramentros de la función por otro atributo con diferente contenido
imprimirNombreMayusculas({ apellido: 'Cardozo' })
*/

/* //Otra forma
function imprimirNombreMayusculas(persona) {
  console.log(persona.nombre.toUpperCase())
}
imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)
*/

/* //Otra forma
function imprimirNombreMayusculas(persona) {
  var nombre = persona.nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)
*/

/* //Esta es una forma de ver  los nombres
function imprimirNombreMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreMayusculas(sacha.nombre)
imprimirNombreMayusculas(dario.nombre)
*/