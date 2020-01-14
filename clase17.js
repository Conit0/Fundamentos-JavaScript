var jonathan = {
  nombre: 'Jonathan',
  apellido: 'Cardozo',
  altura: 1.73
}
var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}
var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}
var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}
var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}
//También se puede agregar diversas cosas a los objetos, me parece que actuan como variables
var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: (Math.ceil(Math.random() * 100))
}

//Esta es una colección (array) y se enmarcan dentro de los corchetes
var personas = [jonathan, alan, martin, dario, vicky, paula]

//El length indicara cuantos elementos tiene un elemento
for (let i = 0; i < personas.length; i++) {
  //Esta varaiabe almacena una valor cada vez que el for la recorre
  const persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

/**
 * Usando el metodo forEach()
 people.forEach( (person) => { console.log(`${person.name}${person.lastName} is ${person.height} mts`) } );
 */