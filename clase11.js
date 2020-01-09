var jonathan = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  edad: 23,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 14
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  // si (esta condición) { entonces ejecuta este código} sino {ejecuata este otro pedazo de código}
  if (persona.ingeniero) {
    console.log(`Ingeniero`)
  }
  if (persona.cocinero) {
    console.log(`Cocinero`)
  }
  if (persona.cantante) {
    console.log(`Cantante`)
  }
  if (persona.dj) {
    console.log(`Dj`)
  } else { // La otra parate del if
    console.log('No es un DJ')
  }
  if (persona.guitarrista) {
    console.log(`Guitarrista`)
  }
  if (persona.drone) {
    console.log(`Piloto de drone`)
  }
}

// imprimirProfesiones(jonathan)
// var mayoriaDeEdad = 18 definir una variable global ya que la usaremos constantemente
const MAYORIA_DE_EDAD = 18 //variable dentro del scope (alcance) global con tipo de variable constante, definida de este modo para dar un valor fijo


function esMayorDeEdad(persona) {
  //Esta funcion retornara un valor booleano que sera usuado dentro de otra función
  return persona.edad >= MAYORIA_DE_EDAD
}

  function imprimirMayorEdad(persona) {
    //Dentro de los parametros de este if albergamos el valor booleano resultado de la función esMayorDeEdad y por medio del if muestra un resiltado para verdadero y otro para falso. 
   if (esMayorDeEdad(persona)) {
     console.log(`${persona.nombre} es mayor de edad`)
   } else {
     console.log(`${persona.nombre} es menor de edad`)
   }
 }
 
//  imprimirMayorEdad(jonathan)


 /**
  * Otra forma de realizar el Reto
  * 
    var user = {
    name: prompt('What´s is your name?'),
    age: prompt('How old are you?')
  }
  // document.write(` Hola señor ${user.name} me alegra verlo tan vigoroso a sus ${user.age} años de edad`)
  function edad(user) {
    let {name} = user
    let {age} = user

    if (age >= 0 && age < 18) {
      console.log(`${name} tiene ${age} añitos es menor de edad`)
    } else if (age >= 18) {
      console.log(`${name} tiene ${age} años es mayor de edad`)
    } else {
      console.log(`${name} ingresaste ${age} que es una edad invalidad`)
    }
    
  }
  edad(user)
  */
