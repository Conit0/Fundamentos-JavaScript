//Creamos el parametro altura y la guardamos dentro de un atributo altura para todas las personas
function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

//Al intentar convertir a arrow functions el valor booleano que retorna es false en todos los casos
Persona.prototype.saludar = function () {
  console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  //retornara un valor booleano al llamar la función 
  return this.altura > 1.8
} 

var jonny = new Persona('Jonathan', 'Cardozo', '1.92');
var aleja = new Persona('Aleja', 'De Mi Corazón', '1.72')
var arturo = new Persona('Arturo','Martinez', '1.82')

/**
 * Al colocar el código en este orden de ejecución vemos que no funciona arrojando el error:
 * Uncaught TypeError: arturo.soyAlto is not a function
    at <anonymous>:1:8
 *por eso es necesario tener claro el orden de ejecución
jonny.soyAlto()
aleja.soyAlto()
arturo.soyAlto()

Persona.prototype.soyAlto = function () {
  //retornara un valor booleano al llamar la función 
  return this.altura > 1.8
} 
 */

