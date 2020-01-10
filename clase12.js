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

/*
//Función anonima
const esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}
*/
//Arrow function = misma función de ↑↑↑↑↑↑↑↑↑↑↑
//Cuando tenemos un sólo parametro en la función podemos obviar los paréntesis
//También podemos obviar las llaves {} y la sentencia return, cuando lo único que hace la función es retornar un valor

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//También podemos quitar persona desestructurando el objeto y tendra que estar dentro de paréntesis

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad>= MAYORIA_DE_EDAD

function imprimirMayorEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

//Me parece que siempre tiene que tener un nombre para poder invocarla
const permitirAcceso = persona => {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  } else {
    console.log('Entra puto')
  }
}

/**
 * Reto: la funcion es menor de edad que retorna la negación de la llamada a esMayorDeEdad o a MAYORIA_DE_EDAD
 * 
 const esMenorDeEdad = persona => !esMayorDeEdad(persona)
 const esMenorDeEdad = ({ edad }) => edad<MAYORIA_DE_EDAD
 const esMenorDeEdad = ({ edad }) => edad>=MAYORIA_DE_EDAD
 */
