//Prototipo/clasee/función Personas, los protortipos se definen por medio de una función
//Los parametros seran los que van a permitiri inicializar o crear otra persona
//Ejecutar esta función creara otra persona, en otros lenjuages se conoce como constructor

//Con los parametros también podemos recibir cambios echos desde la instancía de un objeto

//this hace referencia a ese objeto << jonny >> lo que va seguido del punto << this.nombre >> es un atributo a la vez que alude a el, a la vez que retorna de manera implicita el objeto que se esta creando mediante << new >>. Con this es un poco complejo porque no hay una estructura creada aún para ese objeto que no existe y le estamos asignando su atributos en seguida de << this >> que es quien representa de manera abstracta un objeto que sera creado

function Persona(nombre, apellido, altura) {
  // console.log('Mierda coño');
  this.nombre = nombre
  this.apellido = apellido
  //Pdemos decir que cuando se cree un objeto persona una de sus calves (atributos) sera predefinida o podemos hacer que se estableca por parametro como ↑↑↑
  this.edad = 20
  this.altura = altura
}

// Si la propiedad no existe en ninguno de los prototipos, entonces el valor devuelto es undefined.
//Por medio del << prototype >> estamos heredando
Persona.prototype.saludar = function () {
  //Hace parte del reto
  if (this.altura >=1.8) {
  console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)
  console.log(`Soy muy alyo mido ${this.altura}`)
  } else {
  console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)
  console.log(`Soy más bajx según el estandar y mido ${this.altura}`)
  }
}

//<< new >> crea un nuevo objeto con el prototipo de << Personas >> mistras el this de la función de arriba hace referencia a ese objeto que se esta creando aquí ↑↑
var jonny = new Persona('Jonathan', 'Cardozo', '1.9');

//Si quisieramos que esa persona tenga una función para saludar 
//En pantalla veremos como se ha creado un objeto con estos cambios
// jonny.saludar()

//De esta manera podemos crear distintas personas (objetos) que tamnbién reaccionaran a la función << saludar() >>
//Cada uno de ellos guardara internamente sus valores dentro de las claves del objeto instaciadas por << this >> y que queremos que guarde, en este caso solo estamos guardando el nombre y el apellido 

var aleja = new Persona('Aleja', 'De Mi Corazón', '1.7')
var arturo = new Persona('Arturo','Martinez', '1.8')

/**
 * Mal escrito a pesar que funciona
function Persona(nombre, apelliddo) {
  var obj = {}
  obj.nombre = nombre
  obj.apellido = apellido
  return obj
}
var sacha = Persona('Sacha', 'Lifszyc')
 */

/**
 * Convertida a función construcutor
class Persona {
  constructor(nombre, apellido) {
    // console.log('Mierda coño');
    this.nombre = nombre;
    this.apellido = apellido;
  }
  saludar() {
    console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`);
  }
}
*/

/**Reto
 * Agregar el atributo (clave) altura que se le tiene que pasar
 * al constructor
 * Agregar la función al prototipo de persona que sea soyAltx 
 * si mide más de 1.8 mts
 */