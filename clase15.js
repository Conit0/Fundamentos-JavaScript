var contador = 0
//almacena 
var mensaje = ""

//0.25 = 25%
const llueve = () => Math.random() < 0.25

//Esto hara algo, almenos una, vez hasta que se cumpla una condición.
do {
  contador++

  (contador !== 1 ? mensaje = `${contador} veces`: mensaje = `${contador} vez`)
} while (!llueve());
console.log (`Fui a ver si llovia ${mensaje}`)


//Resolver el bug de una veces
/** Forma de resolver el bug
if (contador==1) {
  console.log(`Fui a ver si llovia ${contador} vez`)
} else {
  console.log(`Fui a ver si llovia ${contador} veces`)
}
*/