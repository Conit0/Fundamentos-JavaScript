
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
  //Aquí asignamos un objeto como nombre de variable para obtener este mismo resultado (desglosa, desestructura)
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)
imprimirNombreMayusculas({ nombre: 'Pepito' })

//Código para imprimir nombre y edad.
/*
function imprimirEdad(persona)
{
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, me llamo ${nombre.charAt(0).toUpperCase()}${nombre.substr(1, nombre.length-1)} y tengo ${edad} años`);
}
var avatar = {nombre: 'serio', edad: 19}

imprimirEdad(avatar)
*/