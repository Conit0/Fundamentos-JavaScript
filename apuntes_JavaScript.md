2. Primeros pasos en JavaScript

#3 Variables
Los lenguajes de programación pueden clasificarse según su tipado o por el tipo de datos que aceptan sus variables. Tenemos lenguajes de tipado dinámico o estático y aquellos de tipado fuerte o débil (también conocidos como no-tipados) 

Este último grupo distingue a los lenjuages según si permiten o no violaciones de los tipos de datos una vez declarados.

Tipado fuerte, no permiten operar tipos de datos distintos sin antes realizar una conversión, leguajes imperativos; Java &  Python.

En otro lado, los lenguajes de tipado blando o débil son aquellos que realizan las necesarias conversiones de forma interna para permitir el tratamiento ambigüode las variables según se requieran en tiempo de ejecución. Mucho lenguajes declarativos como Haskell o Lisp pertenece a este grupo.
Para muchos Javascript en cuanto al tratamiento de las variables es considerado como un peligro potencial que hay que saber manejar.

Javascript pertenece al grupo de lenguajes imperativos pero, sin embargo, se caracteriza por estructuras de tipado débil donde la declaración de variables no exige la asociación con un tipo de datos de forma implícita y unívoca.
Un tipado blando (o no tipado) significa que las variables son declaradas sin un tipo: los valores pueden modificarse, compararse y operar entre ellos sin necesidad de realizar una conversión previa.

Para estos tipos de varaibles JavaScript los asigna de forma interna
var x = 15; // Number (int) declaration
var y = 15.6 // Number (float) declaration
var z = 'Hello World' // String declaration
var arr = []; // Array literal declaration
var obj = {}; // Object literal declaration


Para convertir una cadena en un número, podemos utilizar cualquiera de los siguientes métodos:
var foo = '5';
console.log( typeof parseInt( foo ) );
console.log( typeof parseFloat( foo ) );
console.log( typeof ( foo - 0 ) );
console.log( typeof ( foo * 1 ) );
console.log( typeof ( foo / 1 ) );
console.log( typeof ( +foo ) );

Los ejemplos anteriores son fáciles de seguir: parseInt y parseFloat obtienen la parte entera o flotante de una cadena; las operaciones aritméticas (‘-‘, ‘*’ y ‘/’) convierten internamente las cadenas en números tal y como vimos más arriba. Finalmente, el operador unario ‘+’ al, no precisar de pasos adicionales, es la forma más rápida y elegante de realizar la conversión.

El paso contrario, de número a cadena, se realiza mediante el método nativo toString:
var foo = 1;
console.log( typeof ( foo.toString() ) ); // string

Para pasar un número o una cadena a un objeto Booleano, podemos utilizar el recurso de la doble negación ‘!!’:
var foo = 'Hello World';
console.log( !foo ); // false
console.log( !!foo ); // true

En Conclusión JavaScript es un lengueje no tipado con gran flexibilidad para definir variables que es un foco para posibles errores. Conocer la forma como JavaScript maneja los tipos de datos es importante para evitar las incongruencias derivadas de una coerción inesperada de valores.

enlaces::::::::::::::::=========>
https://es.stackoverflow.com/questions/79809/cual-es-la-diferencia-de-usar-let-en-vez-de-var-en-javascript
https://stackoverflow.com/questions/44604212/when-to-use-const-with-objects-in-javascript

Guias más relevantes para la escritura de JS:
https://standardjs.com/
https://github.com/airbnb/javascript
https://google.github.io/styleguide/jsguide.html

un buen libro para los que empiezan con este lenguaje : https://www.ebooks.com/1993212/you-don-t-know-js-up-going/simpson-kyle/
https://developer.mozilla.org/es/docs/Web/JavaScript

Enlace para manejar EMMET
https://docs.emmet.io/abbreviations/syntax/

¿Más información sobre el tipado debil de Javascript?
http://www.etnassoft.com/2011/01/27/tipado-blando-en-javascript/


comentario::::::::::::::::========>
Es importante considerar que hay múltiples guías de estilo y al final sólo son eso, guías.
Mi recomendación es que cada que entren a un proyecto sigan la guía de estilos que está usando el proyecto y que encuentren una guía que les guste para sus proyectos personales o proyectos nuevos.
Y recuerden que todo el código en un proyecto debería parecer que lo escribió una sola persona, sin importar cuántas personas hayan contribuido.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#4 Variables: Strings 
Hubo que revisar la sintaxis de las eclaraciones ya que manejan camelCase ademas de que este bien escritas las palabras.

Los metodos o funciones predeterminadas cuentan con dos paréntesis para ser invocadas: toUpperCase() toLowerCase() chartAt() 
Y las propiedades que invocamos no llevan los paréntesis: nombre.length
Metodos llevan parentesis al final
Propiedades NO usan paréntesis

Si asignamos un valor (otro nombre) a la variable nombre no sera posible que se actualice la variable que estaba contando en primer lugar la cantidad de letras pues tendra almacenado aún el valor anterior y si queremos mostrar el otro se requiere actualizar también esa variable que cuenta para que adopte el nuevo conteo de letras de nombre.

Se puede concatenar por medio de las comillas invertidas a esto de le llama interpolación de texto dentro de las comillas invertidas  `${variable}` dentro de estas podemos separar con un espacio normal y así se vera en la interfaz, podemos agregar funciones dentro de estos corchetes a las variables de JavaScript `${variable.toUpperCase()}`

str es una abreviación para un string

enlaces::::::::::========>
https://tutobasico.com/convenciones-javascript/    == Este enlace meciona algunas buenas practicas al momento de escribir código JavaScrip como:
	& Usar guión  bajo delante de variables o propiedades privadas
	& La primera letra en mayúscula para los nombres de clases y constructores (PascalCase) 

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr#Par.C3.A1metros
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

**Interpolación de texto :: **
http://librosweb.es/tutorial/las-nuevas-cadenas-de-texto-de-javascript-6/

comentario::::::::::::::::==============>
var nombre=‘Francisco’, apellido='Velasco’
console.log(‘Mi nombre es ’ + nombre +’ y apellido es: ’ + apellido);
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primerletranombre = nombre.charAt(0)
var cantidadletrasnombre= nombre.length
var nombreCompleto = nombre + ’ ’ +apellido
var nombreCompleto2 = ${nombre} ${apellido.toUpperCase()}
var str = nombre.substr(1,2)
var str = nombre.substr(8,8)
var str = nombre.substr(7,8)

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#5 Variables: números
Modulo global de matemáticas (Math)
Math.round = para redondear el número decimal con el que estamos interactuando.
toFixed(n) = con este metodo tomamos n cantidad de decimales, y al parecer también los convierte en string 
parseFloat() se usa para convertir a número flotante o para especificarlo, donde <<parse>> significa análisis sintáctico o transformar, leer, asignar (de ahí la expreción parsear) y <<Float>> representa el punto flotante.

Es común que en algunas ocaciones olvidemos algún caracter y nos arroje un error de variable no definida. Hay que tener en cuenta la precisión con la que calcula los valores definidos dentro de las variables.

enlaces::::::::::::::::::::==========>
http://www.etnassoft.com/2014/06/10/let-la-nueva-forma-de-declarar-variables-en-javascript/
http://www.etnassoft.com/2016/11/16/guia-definitiva-del-recolector-de-basura-en-javascript/

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#6 Funciones
fracciones de código reutilizable, podemos asignarle parametros entre los paréntesis para hacerla reutilizable, podemos alterar el orden de las variables lo que resultaria confuso pero se puede, pues tomara el primer valor para la variable que se haya definido primero dentro de los parametros asignados, si obviamos alguna variable el compilador tratara de ejecutarla así tenga que mostrar undefined.

enlaces:::::::::::===========>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Palabras_Reservadas

comentario::::::::::::::::::================>
Falso Sacha!! En realidad Javascript es compilado no interpretado como mencionaste en el minuto 7:52, JS utiliza la técnica JIT (Just In Time). Cumple con las características de los lenguajes compilados con la excepción de no exportar un build ejecutable. Como el browser es un interprete de HTML y CSS suele confundirse, pero hay que recordar que para correr JS en el navegador (o correr JS en general) es necesario un Engine.

Para mas info sugiero leer los siguientes Links:
JS Un lenguaje compilado o interpretado = https://medium.com/@pharesdiego/javascript-un-lenguaje-compilado-o-interpretado-962ee405e123
JS Compilado o Interpretado? <- Este lo escribí yo xD = 
Aquí dejo una charla interesante de la JSConf 2017 donde explican un poco mas sobre los Javascript Engines: https://www.youtube.com/watch?v=p-iiEDtpy6I&feature=youtu.be
Mas detalladamente explicado en la serie de libros YDKJS : https://github.com/getify/You-Dont-Know-JS

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#7 El alcance de las funciones
Toda variable que no este definida dentro de una función va estar definida dentro del alcance global y vamos a poder acceder a ella dentro del objeto global es decir dentro del navegador (DOM)

enlaces:::::::::::::::==========>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String#M%C3%A9todos

comentarios::::::::::::::::::::::::================>
¿En la práctica que beneficios tiene trabajar con variables locales o globales?

En react no sientes tanto ese beneficio debido al scope de “.this”, todo permanece dentro del scope de la clase bajo this.
Cuando usas react hooks todo react se convierte en javascript plano, y pierdes el scope de this. En ese punto ya puedes pensar en variables locales y globales, peeeeero:
Nunca vas a ocupar este feature en react. Asi no funciona react. Para eso usar los props si quieres que una variable pase entre componentes, los states son para manejar variables locales, y una variable local la manejas con tecnologias como redux.
Si usas javascript con jquery en un entorno más tradicional, si usas variables globales y locales de la misma manera que redux cre un estado único. Muchos lenguajes orientados a objetos como PHP o C# usan la caracteristica de tener diferentes scopes.

comentarios::::::::::::::::::::::::=====================>
Ámbito
En JavaScript, las instrucciones que se encuentran fuera de una función se considera que están en el ámbito global. Este es el espacio en el que escribimos las instrucciones hasta que se define una función u otra clase de estructura de datos. Las variables definidas en el ámbito global tienen un alcance global y, por lo tanto, se pueden usar desde cualquier parte del código, pero las declaradas dentro de las funciones tienen un alcance local, lo que significa que solo se pueden usar dentro de la función en la que se han declarado. Esta es otra ventaja de las funciones; son lugares especiales en el código donde podemos almacenar información a la que no se podrá acceder desde otras partes del código. Esta segregación nos ayuda a evitar generar duplicados que pueden conducir a errores, como sobrescribir el valor de una variable cuando el valor anterior aún era requerido por la aplicación.
El siguiente ejemplo ilustra cómo se definen los diferentes ámbitos y qué debemos esperar cuando accedemos desde un ámbito a variables que se han definido en un ámbito diferente.

var variableGlobal = 5;
functionmifuncion(){
 var variableLocal = "El valor es ";
 alert(variableLocal + variableGlobal); // "El valor es 5"
}
mifuncion();
alert(variableLocal); 

Debido a que las variables declaradas en diferentes ámbitos se consideran diferentes variables, dos variables con el mismo nombre, una en el ámbito global y otra en el ámbito local (dentro de una función), se considerarán dos variables distintas (se les asigna un espacio de memoria diferente).

Extraido del libro “El gran libro de HTML5 CSS3 y JavaScript 3ed” J.D Gauchat.

comentario::::::::::::::::::::::::=============>
Recuerda que de todas maneras no todo es escribir la menor cantidad de líneas, es acerca de hacer el código entendible. Y recuerda: no escribimos código para comunicarnos con las máquinas, escribimos código para comunicarnos entre desarrolladores

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#8 Objetos
En el caso que tuvieramos que obtener más nombres como en el ejemplo anterior, podriasmos seguir declarando variables para cada nombre nuevo y colocar dentro de los parametro de la función el nombre que le hayamos dado a cada variable para que impirmiera el resultado. Para evitar extendernos demaciado y resulta más prolijo empezar a usar los  <<objetos>> 

{} esto delimita un objeto; un objeto en programación es la representacion de caractericticas que hay en común con los entes de la aparente realidad.

estructura de un objeto
var objeto = {
    clave: 'valor',
    clave: 'valor',
    key: value
}


#8 Objetos
El concepto de Objetos en JavaScript puede entenderse con objetos tangibles de la vida real.

Un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, tiene peso y un material con la que fue hecha, etc. De la misma manera, los objetos de JavaScript pueden tener propiedades, las cuales definen sus características.

JavaScript está diseñado sobre un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

enlaces:::::::::::::::::::===============>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos

comentarios::::::::::::::::::===============>
Al momento de declarar los objetos, al no tener una clase como base, si queremos seguir un estándar, ¿se le debería asignar un nombre que inicie con mayúscula (como una clase) o seguir una minúscula (como variable con camel case)? Gracias!
-------------------------------------
En los objetos de JS se utiliza camel case.
En el nuevo estandar de ECMAScript 6 ya se soportan clases y en estas si es necesario -por buena practica- iniciarlas con mayuscula para diferenciar que se refiere a una clase.

comentarios::::::::::::::::::::::::=============>
¿Qué función cumplen los parámetros dentro de las funciones?
-------------------
Los parámetros en las funciones son datos que les pasamos para que realicen alguna acción con ella, por ejemplo si eres un diseñador y tu función es diseñar pero debo pasarte un parámetro que es la idea te la pasaría de la siguiente manera:
functiondesigner (idea) {
  makeAnAwesomeDesign(idea)
}
-----------------
Los parámetros son la información que reciben las funciones para calcular y entregar un resultado.
functionadd(n1, n2) {
  return n1 + n2;
}
Los argumentos son la información que enviamos a las funciones para que la procesen y nos devuelvan un resultado.
const result = add(1, 2);
Dicho de otra forma: los argumentos se envían y los parámetros se reciben.

comentario:::::::::::::::::::::==============>
La declaración de tu objeto esta bien. Solo te aconsejaría:

Usar const en lugar de var. Siempre que no tengas que reasignar de nuevo un valor a tu variable. Para ese caso usa let le falto poner los backticks en el return:
return `Mi nombre completo es ${this.nombre} ${this.apellido}}`

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#9 Desestructurar objetos
Esta es una de las nuevas caractaristicas del estandar ES6 (EcmaScript 2015) y debido a su propia estructura, puede ser extremadamente flexibley, gracias a esa versatilidad, toda nueva característica puede ser explotada hasta sus límites teóricos.
Esto trata de incorporar lo mejor de otros lenjuages y de manera paulatina a JavaScript

La desestructuración podemos definirla como una expresión que permite asignar valores a nombres conforme a una estructura de tabla dada. Ejemplo con array:

[ myVarOne, myVarTwo ] = [ 'foo', 'bar' ];
 
console.info( myVarOne );  //foo
console.info( myVarTwo ); //bar

Como ocurre con cualquier variable en Javascript, ésta ha de ser declarada para evitar contaminar el espacio global. Durante la desestructuración, la declaración puede realizarse tanto en la misma instrucción como con anterioridad. Ejemplo con arrays:

var a, b;
let c, d;
[ a, b, c, d ] = [ 'La', 'donna', 'e', 'mobile' ];
var [ e, f ] = [ 'cual', 'piuma' ];
let [ g, h ] = [ 'al', 'vento' ];
console.info( a, b, c, d, e, f, g, h );
// La donna e mobile cual piuma al vento

EJEMPLOS CON OBJETOS
Es posible usar objetos sólo con remplazar los corchetes [] con llaves {} 

var obj = {
    foo: 'Hello',
    bar: 'World'
};
var { foo, bar } = obj;
console.info( foo, bar ); // Hello World

Cuando el objeto no contiene las claves que solicitamos, se les asocia automaticamente el valor por defecto para estos casos 'undefined'
var { a, b } = obj;
console.info( a, b ); // undefined undefined

Si las varables ya estan declaradas, no podremos usar sólo llaves para indicar el primer conjunto
var obj = {
       foo: 'Hello',
       bar: 'World'
};
var foo, bar;
{ foo, bar } = obj //SyntaxError

Este error se da porque las llaves estan indicando un bloque/contexto (esta estructura el valida en JavaScript) para que funcione en este caso tenemos que enmarcar la instrucción entre paréntesis:
( { foo, bar } = obj );
console.info( foo, bar ); // Hello World

Se pueden ignorar valores en los dos conjuntos por medio de un elisión (esto se e llama a dos comas consecutivas que no encierren ningún valor):
var [ a, , b, , c ] = [ 'la', 'donna', 'e', 'mobile', 'cual', 'piuma' ];
console.info( a, b, c ); // la e cual

Ignorando valores con la elisión en las dos partes del conjunto:
var [ , , , , ] = [ 'la', 'donna', 'e', 'mobile', 'cual', 'piuma' ];

var [ a, b, c, d ] = [ 'la', , 'donna', , 'e', 'mobile' ];
console.info( a, b, c, d ); // la undefined donna undefiend
enlaces:::::::::::::::::::::::::===================>
http://www.etnassoft.com/2016/07/04/desestructuracion-en-javascript-parte-1/

comentario::::::::::::::::::::::===================>
Para agregarle algo a la clase, tambien se puede desestructurar un objeto de un objeto para obtener sus valores ejemplo:
var obj1 = {
	obj2 : {
		nombre: 'victor',
		edad: 19
	             }
	}
functionsaludar(obj){
	var {nombre, edad} = obj.obj2
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
saludar(obj1) // Salida ->  Hola me llamo victor y tengo 19 años

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#10 Parámetros como referencia o como valor

Podemos acceder a un explorador de archivos desde el navegador.

JavaScript se comporta distinto con los objetos, los objetos que pasamos por parametros se pasan por referencia eso quiere decir que si los modificamos dentro del cuerpo de una función su valor se va ver modificado fuera de esa función también.

al tomar los parametros que declaramos en la función que pude ser un objeto si es un objeto dentro de la función

//Esto va dentro de la función
return {
     ...persona,
     edad: persona.edad += 2 // esto aumentara en dos la clave edad del objeto que  sea instanciado dentro de los parametros al invocar la función.
}

function cumples(persona) {
	  persona.edad += 1
}
cumples(jonathan) //Al invocar esta función y pasar el obejto como parametro d
*****salida-> {nombre: "Jonathan", apellido: "Cardozo", edad: 28}

cumples(sacha.edad)

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#11 Comparaciones en JavaScript

Me doy cuenta que cuando tienes un objeto y el nombre de ese objeto es igual al nombre de alguna de las claves que hay dentro del mostrara un error, pero ahora que recargo nuevamente el navegador y luego de haber cambiado las varaibles y volverlas a cambiar para que el nombre de la varaible coincidiera con una de las claves del objeto y comfirmar mi teoría me doy cuenta que no es cierto y que posiblemente era el cache de la página.

Evaluando el comportamiento de distintos tipos de datos (primitivos)

por medio de == hacemos una comparación que busca coincidencias entre las dos comparaciones así tenga que convertir el valor de las dos comparaciones y con esto cambiar sus tipos de datos. Con el === (triple igual) comparamos a un nivel más estricto es más recomendable su uso, a nivel laboral no es permitido su uso ni en comentarios para el uso en producción.

La comparación no reacciona a los objetos igual como lo hace con los tipos de datos primitivos, cuando hacemos un comparación ( == o ===) de objetos en JavaScript este pregunta por la referencia a la variable que estamos utilizando.  


enlaces::::::::::::::::::::::::::::========================>
https://www.todojs.com/tipos-datos-javascript-es6/	

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

3. Estructuras de control y funciones
Estas permitiran si un código se ejecuta, no se ejecuta, si se ejecuta multiples veces o hasta que se cumpla determinada condición.

#12 Condicionales
los condicionales especifican si un código se ejecuta o no

`${}` o también llamados template scripts con ellos podremos colocar las varaibles y texto para mostrar sin necesidad de concatenarlos con el signo más+

comentarios:::::::::::::::::::::::::::::::::::::================>
En las soluciones de los retos he visto mucho
 persona.edad >= 18 ? true:false
Esto es una forma de hacer los condicionales más cortos?
--------------------------------------------
si quieres tener mas lifehacks
(condición) && (solo si se cumple)
(condición) || (solo si no cumple, como tener solo el 'else')
---------------------------------------------
si es un condicional de una sola linea y se llama operador ternario, lo que hace es tener una condición persona.edad >= 18 luego sigue el signo de interrogación ? y va el valor que retorna si la condición se cumple o no se cumple separado por dos puntos.
condición ? se cumple: no se cumple

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#13 Funciones que retornan valores

Entender el contexto del programa y del código nos ayuda a mejorarlo y detectar fallos.
Haciendo uso de las funciones podemos almacenar el valor de una variable dentro de una función  y esta función nos retornara un valor que podremos usar dentro de otra función donde esta albergada la lógica.

para indicar que una varaible debe conserve fijo su valor declaramos la variable como <<const>> y una practica para darles el nombre a estas es usuar todo en mayúsculas y separar las palabras por guiones bajos: 
var mayoriaDeEdad = 18   //formato para los nombres de las varaibles
const MAYORIA_DE_EDAD = 18 //formato para los nombres de las constantes
En caso de no tener que re-asignar este valor usamos <<const>> minimizando el estado de mutación "mutable state" reduciendo procesos.

enlaces:::::::::::::::::::::::::::::::::::==============>
https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#14 Arrow functions
En JavaScript existe otro modo de escribir funciones, podemos asignar a una varaible un función (no todos los lenguajes lo permiten)  al hacer esto la función asignada a la variable, si no tiene nombre, pasa ser anonima. Suelen ser declaradas como <<const>> para así entender que tienen asignada una función. 

=> a esto le llamamos arrow functions

function nombreFuncion (persona){ ...}   //function estandar
nombreFuncion (persona) =>  //Arrow function. cuando tenemos sólo un parametro podemos obviar los paréntesis.

Estas dos son practicamente equivalente pues dentro del manejo de algunos contextos la (=>) arrow function hace algo más.

//Cuando tenemos un sólo parametro en la función podemos obviar los paréntesis
//También podemos obviar las llaves {} y la sentencia return, cuando lo único que hace la función es retornar un valor

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//También podemos quitar persona desestructurando el objeto y tendra que estar dentro de paréntesis
const esMayorDeEdad = ({ edad }) => edad>= MAYORIA_DE_EDAD
//En la ínea de código que arriba, hay una constante a la que le asignamos una función a esta función como parametro le pasamos un objeto desestrucuturado que tiene una edad y nos retornara un valor indicando si es mayor a MAYORIA_DE_EDAD (este valor es booleano). Esta forma es un poco más compleja al momento de entender la función, pero es la que esta más generalizadoa en el hambito productivo.

enlaces:::::::::::::::::::::::::::==================>
Aquí les dejo documentación acerca de las Arrow functions me ayudo mucho a entender esta nueva nomenclatura https://desarrolloweb.com/articulos/arrow-functions-es6.html

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#15 Estructuras repetitivas: for
bucle para  = loop for
Lo que hace esta instrucción es repetir determinada condción por eso es llamada bucle.
Despues del <<for>> hay unos paréntesis () su interior esta formado por tres partes; inicial, condición y el incremento. for (var i = 1; i <= 365; i++)
dentro de los paréntesis tenemos un contador con nombre de variable <<i>>

Hay que recordar que cuando tenemos un objeto y ese objeto lo usamos dentro de otra función  y lo modificamos este objeto se va a ver modificado fuera de la función también, sino queremos que eso ocurra tendremos que crear un nuevo objeto desglosando o desestructurando el original.

Podemos evitar magics numbers declarandolos como variables (let, const, var) en el ambito donde se requieran, por lo general si son valores que no necesitamos que sean alterados y al contrario mantengan su valor usaremos <<const>> esto nos permitira que tener un referencia de ese número (una idea de lo que hace por su nombre de variable) para entender mejor el código cuando llegue la hora de darle una repasada.

enlaces:::::::::::::::::::::==================>
https://itqna.net/questions/878/what-are-magic-numbers-javascript


comentario:::::::::::::::::::::::============>
Ya te hicieron la observación, y es cierta, el código limpio es aquel que puede entenderse sin necesidad de dejar comentarios, hay libros que hablan al respecto, por ejemplo “Clean Code” de Robert Martin, en el cual hay un capítulo dedicado a la parte de generar comentarios.

Al contrario de lo que expones, tener tantos comentarios para un equipo de trabajo refleja que tu código es o muy confuso o está mal programado (aunque no lo sea) y que necesario dar una explicación detallada de cada proceso.

En las empresas donde he trabajado, tenemos como regla que no exista comentarios en repositorios de trabajo compartido, ya que si tenemos que hacer una obersación lo colocamos en la sección de “issues”, puedes tenerlos en entornos de trabajo local, pero puedes ser penalizado si te realizan una revisión de código.

Recomiendo usarlos si apenas estás iniciando y te sirve para recordar cosas claves, o algún tipo de ejecución solamente.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

