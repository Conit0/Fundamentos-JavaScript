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
/*Esta duncion me dice que hay un error por que no defini el parametro 
function onError(personaje) {
  console.log(`Sucedio un error al obtener al personaje ${personaje.name}`);
} La forma correcta*/
function onError(id) {
  console.log(`Sucedio un error al obtener al personaje ${id}`);
}
//Request en serie y no en paralelo
//Ahora el código es más lejible en cadenado uno bajo el otro, los callBacks estaban endenados antes con un ({({({({monton de código anidado})})})})
obtenerPersonaje(1)
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

