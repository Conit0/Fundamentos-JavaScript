//esta varaible es global y podra ser accedida por medio del objeto window del navegador(DocumentObjectModel)
var nombre = "Jonathan" 

//podemos evitar contaminar la funcion agregando el parametro a la función
function imprimirNombreMayusculas(nombre) {
  //en este caso la varaible nombre sólo existira dentro del alcance local de la función sin importar el alcance global
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreMayusculas(nombre)

//La varaible nombre declarada dentro de la función no aparecera dentro del contexto global