const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  // console.log(id);
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  //Encadenamos aparte otro método << .fail() >> que recibira otro callback que se ejecutara si ocurre un error (sin internet)
  $.get(url, opts, callback).fail(function () {
    //obtenemos id del parámetro de la función
    console.log(`Ocurrio un error. No se pudo optener el personaje ${id}`);
  })

}

obtenerPersonaje(1, function (person) {
  console.log(`Hola soy, ${person.name}`)
  obtenerPersonaje(2, function (person) {
    console.log(`Hola soy, ${person.name}`)
    obtenerPersonaje(3, function (person) {
      console.log(`Hola soy, ${person.name}`)
      obtenerPersonaje(4, function (person) {
        console.log(`Hola soy, ${person.name}`)
        obtenerPersonaje(5, function (person) {
          console.log(`Hola soy, ${person.name}`)
          obtenerPersonaje(6, function (person) {
            console.log(`Hola soy, ${person.name}`)
            obtenerPersonaje(7, function (person) {
              console.log(`Hola soy, ${person.name}`) 
            })
          })
        })
      })
    })
  })
})


/**
 * Otra forma de colocar la función
 $
   .get(url, opts, callback)
   .fail(() => {
     console.log(`Sucedio un error.
     No se pudo optener el personaje ${id}`)
   })
 
 */