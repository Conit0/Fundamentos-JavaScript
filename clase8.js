
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

function imprimirNombreMayusculas(persona) {
  //Aquí asignamos un objeto como nombre de variable para obtener este mismo resultado
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)

//De esta manera tenemos que tener en cuenta cómo se comporta JavaScript al pasar objetos como parametros ¿queremos que se modifiquen esos objetos que pasamos por parametros? ¿queremos tener ese efecto de lado? puede ser que sí querempos que la función tome el objeto y lo modifique o también puede ser que queramos que se modifique ese objeto y mantenga el anterior al cambio. Eso depende de nosotros y la solución que estemos buscando.

//con esta función se pretende alterara el valor que reside dentro de un objeto en este caso la edad.
function cumples(persona) {
  return {
    ...persona, //Devuelve un nuevo objeto por medio de los tres puntos
    edad: persona.edad += 2 //aumenta en uno la edad
  }
}
var viejoSacha = cumples (sacha) //Aquí se alamacena el resultado del nuevo resultado que se ha asignadoz

//cumples(sacha) salida -> {nombre: "Jonathan", apellido: "Cardozo", edad: 28} // incrementa la edad como esta determinado dentro de la función


/*
//Ahora cambiaremos los parametros y solo le pasaramos la edad
function cumples1(edad) {
  edad += 1
}
//cumples(sacha.edad) en esta salida los datos de la edad no son alterados porque no esta en el ambito del objeto
*/