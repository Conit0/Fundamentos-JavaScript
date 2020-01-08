// Datos primitivos
var  x = 4, y = '4'

/*
Con los objetos cambia la comparación
ya sea con == o con === entre estos dos objetos el resultado será false
Seria diferente si asignamos así: var otroNombre = nombre| con esto la comparación (=== ==) arroja true, en este ejemplo si modificamos la clave de nombre 
otronombre.nombre = 'Canseko'
también se altera la clave de nombre del objeto <<nombre>> pues ambos estan ocupando el mismo espacio de memoria.
*/

//A estos objetos los llamamos literales, pues lo estamos creando, escribiendolos acá 
var nombre = {
  nombre: 'Jonathan'
}

var otroNombre = {
  nombre: 'Jonathan'
}

/*
Al desglosar los atributos del objeto nombre dentro del objeto otroNombre la comparación tambien arroja false pues estamos creando un nuevo objeto que representa otro lugar o posición en la memoria ram
var otroNombre = {
  ...nombre
}
*/
