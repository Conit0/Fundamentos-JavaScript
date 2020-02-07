const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

/* Esta función la pasaremos como parámetro a << $.get >> 
const onPeopleResponse = function (person) {
  console.log(`Hola soy, ${person.name}`)
}*/
//Hacemos que la función acepte el  parametro << callback >> también suele llamarse (cd, fn)
function obtenerPersonaje(id, callback) {
  //Nos permite ver la diferencia entre requests paralelos y en serie
  console.log(id);
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  //Ejecutara la función que le pasamos
  $.get(url, opts, function (person) {
    console.log(`Hola soy, ${person.name}`)
    //Hacemos esto para que al momento que se envie si existe
    if (callback) {
      //Se invovara la función
      callback()
    }
  })}

//Es importante que la función que colocamos como parametro no se este ejecutado ya sea una declaración o referencia
//Así es como pedimos los datos en serie (en orden)
//Esta lógica también es conocida como CallbackHell
//Nuestro código empezara a verse de forma vertical y no es muy claro donde termina cada uno de los callbacks haciendolos un infierno.
obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {
            obtenerPersonaje(7)
          })
        })
      })
    })
  })
})

//De este modo se ejecutaria primero el id 2 pues esta puesto como parametro lo que eventualmente la ejecutaria primero
// obtenerPersonaje(1, obtenerPersonaje(2,obtenerPersonaje(3)))
