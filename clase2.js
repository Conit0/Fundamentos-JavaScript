// console.log('Hola Hectarea de Mundo')

var nombre = `Jonathan`, apellido = 'Cardozo'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

//chartAt() significa caracter en la posición por lo que requiere la posición del caracter al que queremos acceder
var primeraLetraNombre = nombre.charAt(0)
//Atributo length
var cantidadLetrasNombre = nombre.length

//Concatenamos un espacio ' ' 
var nombreCompleto = nombre + ' ' + apellido

//Concatenar por interpolación de texto
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

//Acceder a un sub-string
// var  str = nombre.charAt(1) + nombre.charAt(2)
//con substr
var str = nombre.substr(1, 4)

//Hayando la última letra de mi nombre
var name = prompt('Escibe tu nombre y sabras cual es la última letra deste')
var ultima = name.substr(-1)
//Utilice el parametro negativo en el metodo subtr(-1) para obtener la letra final del string
alert(`La misteriosa última letra de tu nombre es: ${ultima.toUpperCase()}`)
// console.log(name.substr(-1))
