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
  //debugger //Funcionara cuando invoquemos la función
  return this.altura > 1.8
} 

var jonny = new Persona('Jonathan', 'Cardozo', '1.92');
var aleja = new Persona('Aleja', 'De Mi Corazón', '1.72')
var arturo = new Persona('Arturo','Martinez', '1.82')

/**
 * Intentar hacer estas funciones que contiene un this en su 
 * interior y queremos pasarla a arrow funtion el valor que 
 * tendra this es el mismo que el objeto del navegador window
 * es necesario tener en cuenta el valor que adoptara << this >>
 * y de que ambito o scope (alcance) tomara el objeto para 
 * actuar como su referencia
 * Por eso al invocar estas funciones tendremos como resultado 
 * undefined
 * 
Persona.prototype.saludar = () => {
  console.log(` Hola, me shamo ${this.nombre} ${this.apellido}`)
}
//Al realizar la comparación de > que 1.8 el resultado sera false en todos los casos pues la instacia << this.altura >> adopta el valor de undefined que nunca sera mayor a 1.8
Persona.prototype.soyAlto = () => {
  //debugger //Funcionara cuando invoquemos la función
  return this.altura > 1.8
} 
 */