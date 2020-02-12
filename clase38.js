const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedio un error al obtener al personaje ${id}`);
}

//Marcamos la función como << async >> para poder usar << await >>
async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  //Para poder usar ↑↑↑ hay que poner toda la parte asincrona dentro de un bloque << try{}catch(){} >> 
  try {
    //Esta línea (varaible) se ejecutara asincronamente, tiene un valor asincrono
    //una vez se resuelvan todas las promesas guardara el resultado en << promesas >> para ello usamos la palabra clave << await >>
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}
//Se resulven las promesas y nos trae el << log >> de los personajes en el orden establecido ahora esta manera de trabajar con promesas es muy usada puesto que clrifica el código mucho más.
obtenerPersonajes()