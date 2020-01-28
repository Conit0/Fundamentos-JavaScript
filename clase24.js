// alert('Jotica es magia')
function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}
/**********"HEREDANDO"************/
//Le asignaremos un prototipo a los parametros "clases" de esta función (con esto generamos la herencia). Hay formas más sencillas de hacer esto↓↓ 
function heredaDe(prototipoHijo, prototipoPadre) {
  //Función que no hace nada, es anonima y lleva un nombre que trata de diferenciarla (dummy) fn, noop ... 
  var fn = function () {}
   //Al prototipo de esta función le asignamos el protoripo padre
  fn.prototype = prototipoPadre.prototype
   //Le decimos ↓↓ que su prototipo es un nuevo objeto << fn >> y con ello nos evitamos estar pisando el prototype inicial que se le asigno al parametro "clase" << prototipoPadre >> es por eso que lo pasamos a otro objeto
  prototipoHijo.prototype = new fn
  //Además asignamos la función constructora de la "clase hija" << prototipoHijo >> y con esto evitamos que se este llamando al constructor del << prototipoPadre >> 
  prototipoHijo.prototype.constructor = prototipoHijo
}

/**
 * Para lograr que ↓este↓ prototipo herede del prototipo << Persona >> ES6 permite varias formas con este avanze en el lenguaje 
 */
function Desarrollador (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

//Colocando el mecanismo de herencia justo despues de la función << Desarrollador >> evitando así, volver a pisar el saludo con el de la << Persona >>
heredaDe(Desarrollador, Persona)

//De esta manera pisamos la función << Persona >> 
Desarrollador.prototype.saludar = function () {
  console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy el/la putas`)
}

/* heredaDe(Desarrollador, Persona) 
Cuando se encuentra en esta posición y en vez de << Persona >> asignamos << Desarrollador >>}
En consola: 
    var aleja = new Desarrollador('Aleja', 'De Mi Corazón', '1.72')
    aleja.saludar()
      Hola, me shamo Aleja De Mi Corazón
vemos como en consola muestra el mensaje para << Persona >> en vez de << Desarrollador >> 
Esto pasas por que el mecanismo de herencia deberia ser llamado inmediatamente despues de llamar la función << Desarrollador >> y con esto NO estaremos pisando la función << saludar >> del prototipo << Persona >> 
*/

/* REQUERIREMOS DE ESTOS OBJETOS PARA PODER REAILIZAR LAS PRUEBAS, por ahora han sido comentados para poder exponer mejor el ejemplo de la clase.y es necesario cambiar la instancia del objeto << Persona >> por el de << Desarrollador >> y ver en consola como raccionan estos objetos ante la herencia prototipal que se maneja en JavaScript
var jonny = new Persona('Jonathan', 'Cardozo', '1.92');
var aleja = new Persona('Aleja', 'De Mi Corazón', '1.72')
var arturo = new Persona('Arturo','Martinez', '1.82')
*/



/**↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

/**Comentario_Comentario_Comentario_Comentario_Comentario
 * 
 Ya se puede utilizar el sintax sugar Extends para la herencia de clases. Aquí hay muy buenos ejemplos desde lo más simple hasta lo más complejo como lo vimos en esta clase.
link:
http://javascript.info/class-inheritance

classPersona{
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto() {
    returnthis.altura > 1.8
  }
}

classDesarrolladorextendsPersona{
  saludo() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}
 */