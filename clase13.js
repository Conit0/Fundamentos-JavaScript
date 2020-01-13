var jonathan = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  edad: 23,
  peso: 59
}
//por medio de un ciclo de estos veremos cual fue el cambio en el peso durante un años de este determinado personaje

console.log(`Este man, ${jonathan.nombre} esta pesando ${jonathan.peso}kg mijo ud esta muy flaco`)

//Dentro de esta condición for tenemos:
//Paréntesis que a su vez contiene; una parte inicial que constara de una varaible desde donde empezara el contador allí es donde inicializamos el contador, despues del punto y coma sigue la condición donde estipularemos la distancia o el argumento hasta donde tiene que llegar dicho contador y termine allí de ejecutarse para continuar a la siguiente línea luego del cierre de llave para ese for y por último el incremento para que ese contador se ejecute cada vez que se ejecute o pase por el código que esta entre las llaves este incremento ira aumentando el valor del contador. 

//esta función resivira dos parametros por eso esta entre paréntesis, pesandolo mejor podems estableces el incremento que sera fijo en 200 y poder dejarlo sin llaves {} ni paréntesis.
/**function aumentarDePeso (persona) {
 * return persona.peso += 200
 * } estas dos funciones son eqivalentes*/

 const aumentarDePeso = persona => persona.peso += CAMBIO_PESO
const adelgazar = persona => persona.peso -= CAMBIO_PESO

//De esta manera evitamos numbers magics
const CAMBIO_PESO = 0.2 
const DIAS_PLAZO = 365

for (var i = 1; i <= DIAS_PLAZO; i++) {
  var random = Math.random()
  //Esta varaible esta desestructurando el objeto y con ello lograr que no se modifique el valor inicial del peso
  var { peso } = jonathan
  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso (jonathan)
  } else if (random < 0.5){
    //adelgazar
    //Agrego que al manipular este objeto por medio de esta función el valor original cambiara, sino se quiere eso es necesario de
    adelgazar (jonathan)
  }
}

//Este es el recuento del peso a fin de año
console.log(`Al final del año este man ${jonathan.nombre} pesa ${jonathan.peso.toFixed(1)}kg mijo sigue estando muy flaco`)