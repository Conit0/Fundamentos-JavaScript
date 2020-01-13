var jonathan = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  edad: 23,
  peso: 59
}
console.log(`Este man, ${jonathan.nombre} esta pesando ${jonathan.peso}kg mijo ud esta muy flaco`)

const aumentarDePeso = persona => persona.peso += CAMBIO_PESO
const adelgazar = persona => persona.peso -= CAMBIO_PESO

//De esta manera evitamos numbers magics
const CAMBIO_PESO = 0.3
const DIAS_PLAZO = 365

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jonathan.peso - 3
var dias = 0

//Mientras esta condición sea verdadera entonces se ejecutara el lo que esta entre llaves, una vez identifique false terminara
while (jonathan.peso > META) {
  //Nos permite detener la ejecución del código en un lugar especifico
  // debugger
  if (comeMucho()) {
    aumentarDePeso(jonathan)
  } 
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(jonathan)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${jonathan.nombre} adelgazó 3kg`)