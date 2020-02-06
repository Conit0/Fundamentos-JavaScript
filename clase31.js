//
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//Este metodo nos permite hacer un request y aceptara varios parametros
//replace es el método que tienen todos los strings 
// $.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`), { crossDomain: true }
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

//Para poder hacer un request con jQuery llamamos al método << $.get() >> nos permitiria hacerlo y llevara varios parametros
//la función sólo se ejecutara si el request es exitoso y la ejecutara el método, simplemente es un parámetro 
$.get(lukeUrl, opts, function (luke) {
  //Se mostrara un array con los parametros que recive la función 
  // console.log(arguments)
  console.log(`Hola soy ${luke.name}`);
})

/**
 * Otra forma de entender esto es:
 *saber que la función se esta pasando como parámetro 
 y la terminara ejecutando el método jQuery << $.get() >>
 Además cambiamos algunos nombres para ser más especificos y generales
 coonst onPeopleResponse = function (person) {
   console.log(`Hola yo soy, ${persona.name}`)
 }
 $.get(lukeUrl, opts, onPopleResponse)
 */
