class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  //Recibimos como parametro esta función y podemos colocarle el nombre que deseemos y sera opcional y tal vez la mandan o tal vez no 
  saludar(fn) {
    //Declarando (desglosando, desestrucuturando) las variables de este modo estamos indicando que sacaremos dos atributos de << this >>
    var { nombre, apellido } = this
    console.log(` Hola, me shamo ${nombre} ${apellido}`)
    // esta función se va ejecutar cuando sea asignada como parametro de lo contrario sera falsa.
    //Pregunttamos dentro de un << if >> si nos vino algo del parametro que tenemos en << saludar >> el bloque de código se ejecuta si es verdadera 
    // Método
    if (fn) {
      //Podemos colocar << false >> como último parametro o usar un valor que sea evaluado como << false >> o solo omitirlo para que sea evaluado como << undefined >> para cuando lleve a la función << esDev >> y sea evaluado << false >> dentro de la condición.
      fn(nombre, apellido)
      //debugger //uso esta sentencia para comprobar lo que menciono que al pasar el parametro dentro de la función se ejecutara este << if >> por lotanto es << true >>
    }
  } 
  // Getter
  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(fn) {
    // var { nombre, apellido } = this 
    var nombre = this.nombre
    var apellido = this.apellido
    console.log(`Hola me llamo ${nombre} ${apellido} y soy el/la putas`)
    if (fn) {
      //Cualquier cosa que lo evalue como verdadero, colocar un booleano hace que sea más lejible
      fn(nombre, apellido, true)
    }
  }
}
//Traemos los valores por parametro y adicional un valor booleano << esDev >> para saber si es desarrollador
function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`)
  }
}

var jonny = new Persona('Jonathan', 'Cardozo', '1.92');
var aleja = new Persona('Aleja', 'De Mi Corazón', '1.72')
var arturo = new Desarrollador('Arturo','Canseko', '1.82')

jonny.saludar(responderSaludo)
aleja.saludar()
arturo.saludar(responderSaludo)

/*
 * Podemos desestructurar o desglosar el nombre y el apellido y acontinuación reducir un poco más el código
 * 
  saludar() {
    var nombre = this.nombre
    var apellido = this.apellido
    console.log (`Hola me llamo ${nombre} ${apellido} y soy el/la putas`)
    if (fn) {
      //Cualquier cosa que lo evalue como verdadero, pero hace que sea más lejible colocar un booleano
      fn(nombre, apellido, true)
    }
 */

 /*
 * 
 * en este caso la varaible tiene el mismo nombre que el atributo del objeto del que hago referencia de esta forma reducimos las cosas un poco más, sacando dos varaibles de un un objeto << this >> 
  saludar() {
    var { nombre, apellido } = this
    console.log (`Hola me llamo ${nombre} ${apellido} y soy el/la putas`)
    if (fn) {
      //Cualquier cosa que lo evalue como verdadero, pero hace que sea más lejible colocar un booleano
      fn(nombre, apellido, true)
    }
 */