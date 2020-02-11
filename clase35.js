const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }
//Modificamos para que reciva una promesa en vez de un callback
function obtenerPersonaje(id) {
  //creamos el objeto << Promise >> que tendra una función con dos parámetros y dentro hacemos el llamado asincrono
  return new Promise ((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    //En vez de llamar al callback llamaremos una función que recibe una data para resolver la promesa
    .get(url, opts, function (data) {
      //Cuando se ejecute le pasaremos la << data >> (el personaje)
      //y sólo sucedera hasta que el << get >> sea exitoso
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

//usamos esta función para pasarle un parametro al método << .catch >>
function onError() {
  console.log(`Sucedio un error al obtener al personaje ${personaje.name}`);
}

obtenerPersonaje(9)
  //La forma de obtener el valor que esperamos de una promesa
  //le pasamos una función que se ejecuta cuando la promesa se resulve
  .then(function (personaje) {
    console.log(`El personaje es ${personaje.name}`);
  })
  //Con ella vemos si ocurre algún error
  .catch(onError)

/*
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
*/
