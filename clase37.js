const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }
function obtenerPersonaje(id) {
  return new Promise ((resolve, reject) => {
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

//Recorremos el array y retornamos cada uno de sus elementos como una promesa
var ids = [1, 2 ,3, 4, 5, 6, 7]
/*Esta varriable recorrera (mapeara) el array contenido en << ids >> así se tornaran en promesas atravez de una función
var promesas = ids.map(function (id) {
  return obtenerPersonaje(id)
}) Las arrow functions son más lejibles*/
var promesas =ids.map(id => obtenerPersonaje(id))

//Para obtener los valores de esas↑↑↑ promesas cuando se resuelvan 
//Llamamos a este método que tiene la clase de promesas 
Promise
  .all(promesas) //Lo podemos encadenar de vuelta con ↓↓↓
  .then(personajes => console.log(personajes)) //Tendremos un array con los los valores que esperamos de cada una de las promesas << personajes >> 
  .catch(onError) //onError se va ejecutar si falla alguna de las promesas del array

  //Esto quire decir que tienen un gran potencial frente a los callBacks podemos encadenarlas en paralelo (con los callBacks resulta más díficil)
  //Además es código mucho más prolijo y en paralelo

/* obtenerPersonaje(1)
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
    //De esta forma el método << then >> vamos devolver una promesa pues esta función lo hace
    return obtenerPersonaje(2) //Al resolverse esta promesa pasara a << then >> y así...
    })
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
    //De esta forma el método << then >> vamos devolver una promesa pues esta función lo hace
    return obtenerPersonaje(3)
    })
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
    //De esta forma el método << then >> vamos devolver una promesa pues esta función lo hace
    return obtenerPersonaje(4)
    })
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
    //De esta forma el método << then >> vamos devolver una promesa pues esta función lo hace
    return obtenerPersonaje(5)
    })
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
    //De esta forma el método << then >> vamos devolver una promesa pues esta función lo hace
    return obtenerPersonaje(6)
    })
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
    return obtenerPersonaje(7)
  })
  .then((personaje) => {
    console.log(`El inverosimil personaje es ${personaje.name}`);
  })
  //Este sera el mismo para todos
  .catch(onError)
*/
