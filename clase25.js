// alert('Jotica es magia')
/* Ahora escribiremos esto de otra forma, dentro de una clase↓↓↓
function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
**
*** Estos metodos lo pasamos dentro de la clase
Persona.prototype.saludar = function () {
  console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}
*/

//Decimos que va esxistir la clase << Persona >> 
class Persona {
  //tendra un metodo << constructor >> que es el que se va a ejecutar cuando creemos objetos de esta clase 
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  //Además agregamos el metodo << saludar >>, no hace falta la palabra function
  saludar() {
    console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)

  } 
  soyAlto() {
    return this.altura > 1.8
  }
}

//hacemos la herencia de << Persona >> por medio de la palabra resevada << extends >> 
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    //usamos << super >> le pasamos lo parametros y con ello podemos olvidarnos de << this >> 
    super(nombre, apellido, altura)
    /*Una vez usada la palabra super obivamos estos << this >>
    **Pero no olvidemos que una vez usada esta palabra podremos accerder a << this >> pero antes no pues no lo marcara como un error
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura*/
  }
  saludar() {
    console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy el/la putas`)
  }
}

// var jonny = new Persona('Jonathan', 'Cardozo', '1.92');
// var aleja = new Persona('Aleja', 'De Mi Corazón', '1.72')
// var arturo = new Persona('Arturo','Martinez', '1.82')