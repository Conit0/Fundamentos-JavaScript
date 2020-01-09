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

imprimirProfesiones(jonathan)

/**
 * Reto para saber si tiene la mayoría de edad
 * 
  function imprimirMayorEdad(persona) {
   console.log(`${persona.nombre} es:`)
   if (persona.edad >= 18) {
     console.log('mayor de edad')
   } else {
     console.log('menor de edad')
   }
 }
 
 imprimirMayorEdad(jonathan)
 */

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
