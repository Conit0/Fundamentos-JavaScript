//
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` ya no la necesitamos
const opts = { crossDomain: true }

const onPeopleResponse = function (person) {
  console.log(`Hola soy, ${person.name}`)
}
function obtenerPersonaje(id) {
  //con esto tenemos la url 
  //Generamos la url apartir del parámetro << id >>
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  //colocamos esto dentro para que lo ejecute cuando llamemos la función con el << id >> que le queramos pasar
  $.get(url, opts, onPeopleResponse)
}

//Vemos el asincronismo de JavaScript en su máximo esplendor 
//Donde es "imposible" saber en que orden llegara la data 
//Lamamos varios métodos asincronico y no sabemos en que orden llegaran las respuestas
//esto dependera del servidor y de cuanto tarde en responder cada uno de los requets 
//iniciamos los requets en este orden pero no sabemos en que orden nos van a llegar 
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

/* Este << for >> nos permitira ver como trae todo siempre de forma aleatoria
son 89 personajes pero si colocamos un número mayor veremos << 404 >> aparecinedo en desorden por el asincronismo
  for (i = 0; i < 89; i++) {
    obtenerPersonaje(i)
    console.log(`Hola soy el ${i.name}`);
    
  }*/