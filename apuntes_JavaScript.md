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

#16 Estructuras repetitivas: while

Uncaught ReferenceError: sacha is not defined => puede que el error se deba a un objeto que no esta definido o quiza mal escrito.

While = mientras. Ejecutara lo que este entre llaves mientras la condición sea verdadera.

debugger;
La sentencia debugger invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint. Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno.

Cuando hacemos que uno de estos ciclos colapse la página evitando que carge usaremos la sentencia debugger y si tenemos el inspector de elementos en la pestaña de consola abierta en el navegador que carge la página dentendra la ejecución del programa al leer esa palabrita.

Una vez tengamos la página abierta junto con el inspector de elemento en la pestaña consola, cargamos el archivo o la dirección de la página, despues de esto nos manda automaticamente a la pestaña sources (inspector de elementos) esta parte nos mostrara una serie de herramientas más como un reproductor que consta de: 
1. Un boton de play para correr el proceso hasta que se vuelva a encontrar con un debugger
2. Con la segunda opción va pasando a la siguente línea, proceso por proceso, uno por uno
3. Las otras flechas son diversas formas de pasar por cada proceso.
4. Tenemos la opción de crear breakpoint o debugger de manera interantiva dentro de la pestaña source a travez de los números que identifican a cada línea de código.
A esta función también podemos acceder sin necesidad de invocar la sentencia <<debugger>>, desde el inspector de elemento en la pestaña Sources en contraremos los mismo controles pero ahora evaluaremos todo el código y no dedes una parte en especifico como si lo hariamos con la sentencia debugger.

Recuerda que las funciones y los metodos de JavaScript deben llevar paréntesis para ser invocadas y así funcionar.

enlaces::::::::::::::::::::::::::===============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/debugger

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#17 Estructuras repetitivas: do-while
Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

Se diferencia del while ya que ejecuta al menos una vez el código, cuantas veces sucede algo (contador)

La sentencia do...while crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

En Argentina cuando alguien te molesta se le dice -Anda a ver a la esquina si llueve- 

enlaces::::::::::::::::::::::==========>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/do...while

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#18 Condicional múltiple: switch
Nos permite decidir que código ejecutar de acuerdo a múltiples condiciones

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen, una vez se haya cerrado con un brake continuara con los demas case, detro de esta estructura encontramos el caso default que es como un else donde llegara si no encuentra el valor solicitado dentro de los case. Cuando olvidamos cerrar un case tomara también el siguiente y lo mostrara o se producira un error eso depende mucho del contexto.

prompt = esta función muestra una pregunta y pide datos

enlaces::::::::::::::::::::::::::=================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch

eliminar acentos
https://www.lawebdelprogramador.com/codigo/JavaScript/4380-Eliminar-acentos-con-replace-utilizando-una-expresion-regular.html

https://stackoverflow.com/questions/12145296/jquery-what-does-the-e-in-function-e-stand-for/12145342#12145342

comentario:::::::::::::::::::::::::==============>
La verdad es que me costó entender la función, pero ya. La detallo a continuación por si a alguien le puede ser de ayuda.

var reemplazarAcentos = function(cadena){
	var chars = {
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
        "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"
    }
Aquí lo único que se hace es guardar un objeto con la correspondencia de cada letra con tilde a una sin tilde. Es decir: “á” equivaldría a “a”

var expr = /[áàéèíìóòúùñ]/ig;
Esta variable fue la que me costó entender, pero lo cierto es que no tiene ninguna dificultad. Simplemente es una expresión de javascript que permite determinar un criterio de búsqueda en un string. Es decir, si utilizaramos un match (función de búsqueda en JS) con la variable expresión sobre una variable que contenga la palabra “camión” nos localizaría la letra o con tilde, porque así se especifica en el criterio de búsqueda. Puedes leer más acerca de la expresión aquí: https://www.w3schools.com/jsref/jsref_regexp_charset.asp (el ig en vez de solamente g, indica que no se distingue entre mayúsculas y minúsculas)

var res = cadena.replace(expr,function(e){return chars[e]});
Aquí, lo que se hace es obtener todas las letras con tilde y reemplazarlas por letras sin tilde. No entendía tampoco porque utiliza la letra e como parámetro, pero resulta que simplemente sirve como referencia al parámetro inicial (en este caso, cadena). Puedes leer más al respecto de e como parámetro aquí: https://stackoverflow.com/a/12145342

Espero que les sea de ayuda y gracias a @juanseg por compartir el código. Me supuso un pequeño reto entenderlo.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
4. Array´s
Los arrays son estructuras que nos permiten organizar elementos dentro de una colección. Estos elementos pueden ser números, strings, booleanos, objetos, etc

#19 Introducción a arrays

Podemos cargar el array [] muchas cosas; objetos, numeros, texto, funciones o mezclar cosas dentro del mismo array, JavaScript lo permite.

Ademas use (Math.ceil(Math.random() * 100)) para mostrar una altura aleatoria dentro del objeto a esa clave. ceil parece arrojar un número alto mientras que floor el número es menor.

colección de datos
var array = [a, b, c, d]
acceder a un dato especifico del array, donde la cuenta del indice empieza desde cero
array[0]
acceder a un dato de la lista de la colección y a una de sus claves (para el caso de un objeto)
array[3].apellido otra forma array[3]['apellido']

enlaces:::::::::::::::::::::::::::::====================>
https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings

comentario:::::::::::::::::::::::::::::::::===============>
people.forEach( (person) => { console.log(`${person.name}${person.lastName} is ${person.height} mts`) } );
Yo usé el metodo forEach() de los arrays de javascript para poder recorrer las personas usando Arrow Function.
Para más info ver: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

comentario:::::::::::::::::::::::::::::::==============>
Otra forma de iterar los objetos es usar for of. Ésta forma es muy usada para iterar arrays de objetos
for (let persona of personas){
  console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}

comentario:::::::::::::::::::::::::::::::==============>
Aunque no es la clase de física, dejo este hilo sobre abreviatura de unidades, metros solo se abrevia como m.
https://es.wikipedia.org/wiki/Wikiproyecto:Corrección_de_errores_menores/Unidades_y_símbolos

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#20 Filtrar un array

comentario::::::::::::::::::::::::::================>
El parámetro persona hace referencia a cada uno de los elementos dentro del array llamado personas.
Recuerda también, que se está pasando como parámetro del método personas.filter() la constante esAlta, que guarda nuestra arrow function, de ahí la referencia al array que mencioné antes.
Espero te sirva, un saludo.

comentarios::::::::::::::::::::=================>
Una pregunta, ¿por qué si “esAlta” es una función, no se le ponen ()?
let personasAltas = personas.filter(esAlta)
---------------------------------
Esta forma de pasar funciones como parámetros de otra función para que se ejecuten en algún momento particular dentro del código de dicha función, se conoce tambien como callback, y una manera de verlo es que en este caso la función se pasa como referencia, es decir, se pasa el código de la función … no el resultado de haberla ejecutado, que es cuando se le colocan los paréntesis función() … para usar el resultado y no la definición de esta.
-----------------------------------
Ya me explicaron porqué, es porque cuando se llama a una función, normalmente queremos que se ejecute directamente, que es cuando se le colocan () . Pero si la función la usamos como un parámetro, no estamos esperando que se ejecute directamente, necesitamos que la otra función la llame para que se “active” , entonces es cuando no se le colocan los paréntesis (Creo que me expliqué bien c:)
---------------------------------------
Te podría decir que son caprichos de javascript; pues la mayoría de las veces cuando se pasa un función cómo parámetro, no es necesario escribir los paréntesis.
Pero en sí depende de cómo esté estructurado lo que deseas hacer. En éste caso las funciones modificadoras de arreglos como filter automáticamente pasan el parámetro persona (de acuerdo al ejemplo de la clase) a la función es Alta.
----------------------------------------
Pones paréntesis luego de la función únicamente cuando la quieres llamar, si lo que quieres es pasarla como argumento, es decir referenciarla se maneja igual que una variable, es decir sólo pasas el nombre de la función. Si no cada vez que llegues a esa línea se va a ejecutar la función, y le pasarás undefined al .map si es una función que no devuelve nada y si es una función que devuelve un valor terminarás pasando el valor como argumento
--------------------------------------------
Las variables tienen valores fijos. Siempre que las llamamos nos devuelven el mismo resultado.

var patito = "patito";

alert(patito); // "patito"
alert(patito); // "patito"
alert(patito); // "patito"
alert(patito); // "patito" (siempre es lo mismo)
En cambio, las funciones pueden devolvernos diferentes resultados dependiendo de los datos que enviemos en los argumentos (o sea, dentro de los paréntesis).

functionpatito(nombre) {
  return"el patito se llama: " + nombre;
}
alert(patito("Juan")); // "el patito se llama: Juan"
alert(patito("Pedro")); // "el patito se llama: Pedro"
alert(patito("Don Pato")); // "el patito se llama: Don Pato"

Tu tranquilo. Sigue con el curso que vas a ir entendiendo todos estos conceptos a medida que avances. 
-------------------------------------------------------
La variable es como una memoria entonces no va con paréntesis ya que va a guardar el nombre de la variavle que puede ser x o z o y ya que genera un valor
-------------------------------------------------
¿Para qué necesitas recibir un parámetro en esa función?
Los parámetros son útiles cuando necesitas que una función devuelva diferentes resultado dependiendo del argumento que les enviemos. Pero no todas los necesitan.

// No recibe parámetros
const imprimirColorBlanco = () => console.log("blanco :D");
imprimirColorBlanco(); // blanco :D
imprimirColorBlanco(); // blanco :D
imprimirColorBlanco(); // blanco :D

// Sí recibe parámetros
const imprimirMensaje = (mensaje) => console.log(mensaje);
imprimirMensaje("hola"); // hola
imprimirMensaje("levillagra"); // levillagra
imprimirMensaje("disfruta"); // disfruta
imprimirMensaje("el curso :P"); // el curso :P

comentario:::::::::::::::::::::::::::::::==============>
El Object.assign() funciona bien para copiar objetos cuando no tienes mas objetos dentro del objeto. En ese caso se crea una referencia y si modificas la copia, también modificaras el original.
Lo que puedes hacer para copiar un objeto sin temor a modificar el original usa: JSON.parse(JSON.stringify(miObjeto)).

Para el tema del filter, ese es el método correcto para filtrar un array. No te modifica el array que filtras, solo te devuelve un array con los objetos que cumplan la condición.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#21 Transformar un array

Map devuelve un nuevo array modificando cada uno de los elementos que le vayamos pasando de l array original. Este metodo siempre devulve un array nuevo sin emabargo es preciso indicar la creación de un nuevo objeto para que el objeto original no se vea afectado en el futuro.

El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.

Para verificar la difencia que hay entre los arrays comparamos sus indices

Cuando queremos retornar un nuevo objeto es necesario hacer uso de la desestructuración de los objetos  y dentro de la función que retornara ese objeto tendremos que a ese objeto nuevo que nace apartir de otro para no modificar el original y crear uno nuevo lo envolvemos dentro de paréntesis para que este nuevo objeto sea generado dentro del cuerpo de la función. 

enlaces::::::::::::::::::::::::::::::===================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in


comentario:::::::::::::::::::::::::::::::::====================>
**map ** retorna un nuevo arreglo (en otro espacio de memoria)
foreach simplemente itera sobre los elementos aplicando la función dada,
forin es mas recomendada para la iteración sobre objetos no sobre arrays

comentario:::::::::::::::::::::::::::::::::====================>
Otro ejemplo envolviendo las llaves entre paréntesis para indicar que se devuelve un nuevo objeto y no que se trata del cuerpo de la función:
const users = personas.map(({edad, altura, dinero}) => ({edad, altura, dinero}))

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#22 Reducir un array a un valor

El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.

con esta función podremos representar mejor los arrays asiendo que sean más fáciles de interpretar:
console.table([]) 
Y de esta manera logramos ver las columnas de las claves que hemos establesido.
console.table(personas, ["nombre", "edad"])

la funcion que hacemos de reducer, no retorna valores hasta haber terminado de iterar todo el arreglo por eso la variable en este caso se situa despues de la función si la colocamos antes habra un error. 

La función reduce() permite lograr objetivos que generalmente de manera estructurada cuestan un poco de trabajo lograr. El dominio de este tipo de funciones nos permitirán logra una código más limpio y mucho más fácil de leer.

enlaces:::::::::::::::::::::::==================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
https://medium.com/@xadrijo/un-vistazo-a-la-funci%C3%B3n-reduce-en-javascript-f4459bc4e3aa
http://juanlopez.com.ar/javascript-metodo-reduce-para-arrays/
https://developer.mozilla.org/es/docs/Web/API/Console/tabla
https://www.freecodecamp.org/news/learn-reduce-in-10-minutes/
https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc

comentario::::::::::::::::::::::::::::=============>
para iterar sobre arrays se usa forEach al contrario del for

comentario::::::::::::::::::::::::::::=============>
Imagina qe tenemos una empresa y ya viene el día del niño, por lo que van a hacer una fiesta para los trabajadores y los niños. para esto necesitamos saber cuantos hijos tienen cada uno de los trabajadores.
Si ya tenemos un Array con los trabajadores y cada Objeto tiene un atributo con la cantidad de hijos, de ahí podemos sacar ese numero.
//lista de objetos
var adrian= { nombre: 'Adrián',apellido: 'Garcia',hijos: 2}
var dama= {nombre: 'Damáris',	apellido: 'Soto',	hijos: 1}
var neft= {	nombre: 'Nefteradi',	apellido: 'Luna',	hijos: 4}
//tenemos el listado de todos los trabajadores que son cientos
var personas = [adrian, dama, neft]
const reducir = (acum, persona) => {
	return acum + persona.hijos
}
//Array.reduce(funcion, valor inicial)
var totalNiños = personas.reduce(reducir, 0)
console.log(`Tenemos que hacer ${totalNiños} bolsas de dulces`)

comentario::::::::::::::::::::::::::::=============>
Que quieren decir los … ?
---------------------------------------.
Indica que se va acopiar todos los atributos del objetos, a excepción de los que se escriban luego de los …
ejemplo:
persona ={
	nombre: 'juan',
	apellido: 'pérez',
	edad: 28
}
persona2 ={
        ...persona,
	edad: 32
}
Lo que hace ese código es copiar el objeto persona a persona2, conservando todos los atributos, a excepción de la edad, que pasa de ser 28 a 32.
De esta manera estas creando un nuevo objeto independiente, ya que si escribís:
var persona2 = persona
estas diciendo que persona2 es el mismo objeto que persona, por lo tanto cada modificación que le hagas a persona2 lo sufrirá persona.

comentario::::::::::::::::::::::::::::=============>
Método Reduce()
Bueno, para aclarar un poco la explicación de la clase, ya que se omiten algunas cosillas:
Este método lo que hace es aplicar una función a un acumulador y a cada valor de un array con el fin de reducirlo a un único valor.
personas.reduce(reducer, 0)
Esta función (en éste caso reducer) tiene 4 argumentos; dos de ellos omitidos en la clase por fines prácticos:
Valor Anterior => Que es el valor devuelto en la llamada anterior de la función o el ValorInicial si es que se proveyó.
-Valor Actual => Elemento actual que está siendo procesado en el array. En éste caso libros.

Índice Actual => Índice del elemento actual que está siendo procesado en el array.

Array => O sea, el array sobre el cual se llamó el método reduce. En éste caso, Personas.

Entonces, el método reduce, tiene dos parámetros, la función con sus 4 parámetros opcionales y el:
Valor Inicial => Objeto a usar como primer argumento en la primera llamada de la función. En éste caso 0.
Si en ValorInicial ponemos un número 100, entonces ese 100 se sumará a los 684 libros.


comentario::::::::::::::::::::::::::::=============>
Por que no necesito declarar la varible acum al usarla con el metodo reuce ?
---------------------------------------------------
dentro del reducer acum es un parametro de entrada
--------------------------------------------------
Javascript permite crear variables sin utilizar las palabras reservadas let, var o const. Sin embargo, tengo entendido que esto no es una buena práctica. Para evitar que javascript procese este tipo de declaraciones puedes agregar al inicio de tu archivo .js la instrucción “use strict”.


comentario::::::::::::::::::::::::================>
A mi parecer creo que faltaron métodos muy importantes como:
pop()
push()
shift()
unshift()
split()
splice()
slice()
También trabajar con arreglos multidimensionales, que a mi parecer es algo con lo que se trabaja la mayor parte del tiempo…espero que actualicen el curso porque si faltaron bastantes cosas.
--------------------------------------
estoy de acuerdo, creo que falto mas profundizar más en los arrays, y las estructura de control, le falta la calidad que alcanzó el curso de python de david aroesti, esperemos a la siguiente iteración, y habrá que complementar este curso leyendo un par de libros.
---------------------------------
Te colaboro con algunas definiciones:
//pop() agrega elementos al inicio del Array
//push() elimina el ultimo elemento del Array
//shift() elimina el primer elemento del Array
//unshift() Agrega un elemento al comienzo del Array.
//slice() Te permite obtener una porcion o “revanada” del arreglo. ej: personas.slice(4,6) “esto devuelve a las personas 5 y 6”
//splice() Te permite eliminar elementos de un Array, el primer parametro es la posición y el segundo parametro la cantidad de elementos a eliminar ej: personas.splice(4,1) solo eliminara una persona, en este caso el que este en la posición 4.

comentario:::::::::::::::::::::::::::::==================>
En esta función:

const reducer = (acum, persona) => acum + persona.cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)

Dónde estaríamos pasando el parámetro de ‘acum’ cuando invocamos la función?
No termino de entender cómo funciona.
Alguien podría explicarme?
--------------------------   ---------------------------
es un poquito complejo, pero te lo haré facil.

en una función tradicional tienes esto:

functionreducer() {
//your code
}
en una variable tradicional tienes lo siguiente:

var name = "name";
const lastName = "lastname";
en js tradicional, puedes igualar una constante/variable a lo que quieras, ejemplo:

functionjump() {...}

var jumpVar = jump;
const jumpConst = jump;

// estas tres lineas hacen lo mismo
jumpVar();
jumpConst();
jump();

//también puedes meter en una variable objetos, clases, arreglos, promesas, eventos, listeners, jsons, lo que quieras.
la función que incluiste en tu pregunta es un “arrow function”. No explicaré la diferencia o la razón de ser del arrow function, para eso tienes https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch.

RESPUESTA
en el caso de tu funcion, lo que estás haciendo es guardar en la constante “reducer” la arrow function:

(acum, persona) => { ... }
y como es obvio, los parámetros es aquello detrás de la flecha del arrow, que es acum y persona.

¿donde le pasas los parámetros? no lo haces. arrow function está diseñado para recibir la data dentro del scope donde se encuentre, es decir, si tu tienes una clase o un componente con 20 variables y 20 funciones dentro, cualquier arrow function que esté dentro de esa clase/componente tendrá acceso a cada variable y función.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

5. Programación Orientada a Objetos en JavaScript:
JavaScript dispone de fuertes capacidades de programación orientada a objetos, a pesar de que han tenido lugar algunos debates respecto a las diferencias de sus capacidades en comparación con otros lenguajes

#23 Cómo funcionan las clases en JavaScript'

Las clases son funciones cuya sintaxis tiene dos componentes:
	expresiones
	declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

JavaScript en un lenguaje orientado a objetos basado en prototipos, en lugar de estar basado en clases. Debido a esta básica diferencia, es menos evidente entender cómo JavaScript nos permite crear herencia entre objetos, y heredar las propiedades y sus valores.

Cuando se habla de objetos en JavaScrip estamos hablando de prototipos y no tanto de clases como en otros lenguajes P.O.O, cambian esos conceptos al igual que no existe la herencia, pues estas llamdas "clases" terminan siendo prototipos en JavaScript.

Para definir un prototipo hay que definir una << función nombreFunción () {} >>, luego dentro de los paréntesis pondremos los parametros que va a requerir inicializar o crear una nueva persona, esto también es conocido en otros lenguajes como un constrcutor

new palabra reservada de JavaScript para indicar que se crearan nuevos objetos dado un prototipo, obviar el uso de este operador arroja como resultado undefined

El  operador new crea una instancia de un objeto definido por el usuario o uno de los tipos de objetos incorporados que tienen una función de construcción. 

La palabra clave this de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el modo estricto y el modo no estricto.
En general, el valor de this está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método bind() para establecer el valor de la función this independientemente de como es llamada, y ES2015 introdujo las funciones flecha que no proporcionan su propio "binding" de this (se mantiene el valor de this del contexto léxico que envuelve a la función)

const test = {
  
	prop: 42,
  
	func: function() {
    
		return this.prop;
  },

};


console.log(test.func());

// expected output: 42

enlaces::::::::::::::::::::::::::==============>
https://www.arkaitzgarro.com/javascript/capitulo-9.html
https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos
https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Inheritance
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/new
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this
https://www.arkaitzgarro.com/javascript/capitulo-9.html
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/prototype

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#24 Modificando un prototipo

En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

Entendamos que el prototipo es un objeto más de JavaScript , si lo modificamos en cierta altura del código desde allí quedara modificado.

Es importante donde colocamos las funciones que va a tener el prototipo es importate que las coloquemos todas juntas, ya que vamos a ir creando objetos (personas) con esos prototipos y queresmos que tenga todas las funciones, a menos que más adelante en el código queramos modificar de alguna forma ese prototipo, pero lo más común es siempre definir la función/es ("clases" o más bien prototipos) arriba y luego irlas usando en nuestro código en vez de modificarlas a medida que pasa nuestro código, es cuestión de darles un orden al iniciar el código y con ello tenerlas ascecibles hacia todos los objetos que vayamos creando

output = se refiere a los valores de salida que arroja la consola


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#25 El contexto de las funciones: quién es this

En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en javascrip es uno de los errores más comunes.
Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

Para colocar un debugger dentro de una arrow function conviene dejar los corchetes para que funcione, el debugger nos mostrara que la palabra calve this 

Al rastrear el this por medio del debugger señala que es equivalente al objeto  window el objeto global de la página
Al hacer la comparación << this.altura > 1.8 >> es << window.altura > 1.8 >> y el punto indica que entraremos a alguno de los atributos o claves del objeto window y al no encontrar el atributo altura el resultado de esta instancia sera << undefined >> y no sera nunca mayor que ocho que daria como resultado errores en los resultados.
Y esto de que no esperamos que << this >> no es lo que esperabamos es uno de los errores más comunes en JavaScript, quizas no en los primeros pasos pero a medida que avanzamos como desarrolladores con esté tegnologia, lo que pasa es que al usarlo dentro de las arrow funtions estas asigna una función pero cambia el << this >> dentro de la función lo que hace es apuntar al << this >> que este fuera de esta función y << this >> dentro del ambito global representa analogamente a window, esto sucede porque las arrow functions cambian quien es << this >> dentro de la función 

Persona.prototype.soyAlto = () => {
  //debugger //Funcionara cuando invoquemos la función
  return this.altura > 1.8
} 

Este es el resultado de this en la consola

Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
Vemos que la comparación this === window arroja como resultado << 
true >> que es el mismo objeto y la misma referencia en memoria

En el contexto de ejecución global (fuera de cualquier función), this se refiere al objeto global, ya sea en modo estricto o no.
console.log(this.document === document); // true
// En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37

***********Llamada simple
function f1(){
  return this;
}
f1() === window; // objeto global

En este caso, el valor de this no está establecido por la llamada. Dado que el código no está en modo estricto, el valor de this debe ser siempre un objeto por lo que por defecto es el objeto global.
function f2(){
  "use strict"; // consultar modo estricto
  return this;
}
f2() === undefined;

En modo estricto, el valor de this se mantiene en lo que está establecida al entrar en el contexto de ejecución. Si no está definido, permanece undefined. También se puede ajustar a cualquier valor, tales como null o 42 o "Yo no soy this".
Nota: En el segundo ejemplo, this debería ser undefined, porque f2 fue llamado sin proporcionar ninguna base (ej. window.f2()). Esta característica no fue implementada en algunos navegadores cuando se comenzó a dar soporte al modo estricto. Como resultado, retorna incorrectamente el objeto window.

La expresión de función flecha tiene una sintaxis más corta que una expresión de función convencional y no vincula sus propios this, arguments, super, o new.target. Las funciones flecha siempre son anónimas. Estas funciones son funciones no relacionadas con métodos y no pueden ser usadas como constructores.

enlaces:::::::::::::::::::::::::::::==============>
https://yeisondaza.com/entendiendo-this-javascript
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/


página::::::::::::::::::::::::::::===============>
this es un keyword de JavaScript que tiene un comportamiento muy diferente a otros lenguajes de programación, así para algunos es considerado uno de los grandes errores de diseño del lenguaje.

comentario:::::::::::::::::::::::::::::::==============>
This en las arrow functions es “window” porque:
Las Arrow functions heredan this de su “parent Scope”, lo que es llamado “lexical Scoping”
Fuente:
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

comentario::::::::::::::::::::::==============>
Recuerdo que tuve problemas par entender esto al principio pero lo entendí así:
Las arrow functions tienen el método .bin() implicitamente y el método .bind() devuelve un nuevo objeto con this haciendo referencia al objeto global(objeto window).

Persona.prototype.soyAlto = () => this.altura > 1.8

es lo mismo que:
Persona.prototype.soyAlto = (function(){
	returnthis.altura > 1.8
}).bind(this)

recomiendo este articulo: Cuando no usar arrow functions en JavaScript
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/


comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
Había olvidado por completo que tanto arrow functions como lambdas carecen de referencia this  https://en.wikipedia.org/wiki/Anonymous_function

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
La sentencia debugger invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint. Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno.
Fuente: MDN
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/debugger
-------------------------------------------------------
Para solventar errores (“bugs” como dicen los programadores) deteniendo tu programa en la linea de codigo donde coloques el debugger y dandote herramientas para ver que sucede

Hace mucho más fácil la gestion por lo poco que he visto, en especial en ciclos

Ejemplos

//mientras 0 sea mayor a uno
while ( 0 < 1) 
{
//haz esto
document.alert("Holaaa")
debugger
}

/*
El codigo correra eternamente, 
Sin debugger la web recargaria para siempre y no podrias hacer nada y seria mas dificl ver el error, compruebalo tu mismo
*/

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
Hola, respecto a las arrow functions se me ocurrio la idea de meterlas dentro del constructor directamente asignandolas dentro de una variable me gustaria saber de alguien mas experimentado, si esta practica es considerada correcta.

// Manera numero 1
functionPersona(name, last_name, age, heigth) {
  this.name = name;
  this.last_name = last_name;
  this.age = age;
  this.heigth = heigth;
  this.sayHey =  () => {
  console.log(`Hola, me llamo ${this.name}`);
  }
}
--------------------------------------------------------------
lo que estás haciendo no es nada nuevo, y es algo bien conocido y usado en muchos lenguajes de programación, no solo Javascript. En C# eso sería un delegado y en ambos lenguajes es la base teórica de los eventos (:
te pondré un código de ejemplo:

// función tradicional
functionsayGoodbye() {
	console.log("adios!");
}

var myExpression = sayGoodbye();

//arrow function almacenada en una variable
var sayHello = () => {
	console.log("hola ChekeGT!");
}

//abreviado sería así, solo para demostrar una sintaxis limpia
var sayHello = () => console.log(message);
en estos ejemplos tienes una función tradicional. la de toda la vida. las funciones tradicionales pueden ser almacenadas en una variable y eso te permite cosas muy interesantes en tu código.

un arrow function también se puede almacenar en una variable, son idénticos en ese aspecto.

En el caso de los ejemplos, si tu haces:
sayGoodbye();
myExpression();
ambos te darán el mismo resultado. en el primero ejecutas la función, y en el segundo ejecutas la función almacenada en la variable. Con los arrow functions sucede igual.

https://stackoverflow.com/questions/37228121/es6-assign-a-variable-with-an-arrow-function

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#26 La verdad oculta sobre las clases en JavaScript

Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

En algunos lenguajes de programación (POO) y tienes una idea de su funcionamiento una pregunta que surge es : ¿cómo hago para que un prototipo herede de otro?. Pero esto no ocurre exactamente de la forma como ocurre en otros lenjuages (POO) pues JavaScritp no soporta la herencia  por que no soporta las clases, hay prototipos que son objetos y les vamos agregando metodos que reciben funciones, saben quien es << this >> y saben como ejecutarlas, pero no existe un sistema que diga que este prototipo va heredar de otro, lo que sí existe es la HERENCIA PROTOTIPAL.

El prototipo "hijo" tiene que responder a un metodo por lo que va a buscar en el prototipo padre haber si lo encuentra, si no lo encuentra seguira esa cadena de buscar en el prototipo padre hasta llegar al prototipo base de todos los objetos que es object y si este no conoce ese mensaje el interprete nos dara el error que no puede ejecutarse es metodo.


los nombres de variables << fn >> << noop >> usualmente se dan a variables que contienen funciones que no hacen nada, vacia o función dumie 

Los prototipos simpre son los objetos con los que estamos trabajando, todas las funciones tienen << prototype >> y en el caso de los parametros que hay dentro de una función también si dentro del contexto estos parametros representan funciones.Vemos que el prototype es un atributo que tienen todas las funciones y que es un objeto que nos dice que metodos entiende, que atributos tiene, cual es su constructor si lo tiene, y también tiene un atributo que  aparece como << __proto__ >> que apunta al prototipo que tiene el objeto del que se desplieja en este caso es << Object >>  y ahí termina la cadena de adherencia de prototipos

Persona.prototype
    {saludar: ƒ, soyAlto: ƒ, constructor: ƒ}
        saludar: ƒ ()
        soyAlto: ƒ ()
        constructor: ƒ Persona(nombre, apellido, altura)
        __proto__: Object

Ahora vemos este otro caso que es de donde estamos aplicando la cadena de prototipos y la herencia prototipal,  tenemos que es << Persona >> pero con el metodo de la herencia modificamos el constructor como agregar el nuevo metodo de saludar (el nuevo mensaje que va a mostrar) y también vemos que el << __proto__ >> es un Object que tiene otros metodos << saludar >> y << soyAlto >>

Desarrollador.prototype
    Persona {constructor: ƒ, saludar: ƒ}
       constructor: ƒ Desarrollador(nombre, apellido)
       saludar: ƒ ()
       __proto__:
               saludar: ƒ ()
               soyAlto: ƒ ()
               constructor: ƒ Persona(nombre, apellido, altura)
               __proto__: Object

De esta manera es como nosotros podemos hacer (invocar) << atruro.soyAlto >> arrojara << false >> pues el metodo soy alto no existe en el prototipe directamente del desarrollador lo que hace entonces todos lo objetos que sean creados con el porototipo de desarrollador es ver en primer lugar su su propio prototipo lo tiene y sino se van a ir fijando en la cadena (desplegable) de << __proto__ >> si alguno de ellos entiende el método, vemos para el caso de << arturo.soyalto >> encuentra el proto tipo de << Persona >> y también podemos ver que tiene el método << saludar >> pero el de << Desarrollador >> lo pisa ademas vemos que finalmente tenemos otro << __proto__ >> que ahora apunta << Object >> y son todos métodos que tienen todos los  objetos  y todos los atributos que tienen todos los objetos.
Por último cabe destacar de todo esto es que la herencia como se conoce normalmente en la programación orientada a objetos (POO) no existe en JavaScript, no hay clases hay prototipos y existe lo que es la herencia prototipal que nos muestra como al ejecutar un metodo lo que hace es buscar en el prototipo de ese objeto haber si lo encuentra si finalmente no lo encontro este buscar en el << __proto__ >> 	que apunta a << Object >> para intentar resolverlo.

proto surge al desplgar un objeto desde la consola del inspector de elementos

*********************enJavaScript (de aquí pa'bajo)

objeto: Los objetos son las entidades básicas de tiempo de ejecución identificables en la programación orientada a objetos. Entonces, un objeto representa una entidad que puede almacenar datos y tiene su interfaz a través de funciones.

clase: También podemos decir que una clase es una colección de objetos de tipos similares.
Una vez que se crea una clase, podemos crear cualquier número de objetos que pertenezcan a esa clase. En realidad, una clase no especifica ningún dato, determina las propiedades o métodos que pueden contener un objeto de esa clase. Las clases normalmente actúan como un tipo de datos incorporado, pero en realidad son tipos de datos definidos por el usuario.

Abstracción de datos: La abstracción de datos es un concepto que oculta los detalles de fondo y representa solo la información necesaria para el mundo exterior . Es el proceso de simplificación del concepto del mundo real en su componente absolutamente necesario.

Por ejemplo, estás montando una bicicleta, solo conoces los métodos esenciales para montar una bicicleta, como acelerar, frenar, cómo cambiar las velocidades, usar el embrague, etc. Simplemente usa el acelerador y su bicicleta comienza a moverse, no necesita saber los detalles de lo que sucede adentro para andar en bicicleta.
Esto se llama abstracción, solo conoce las partes esenciales para andar en bicicleta () sin incluir el proceso de fondo o la explicación.

Encapsulación de datos: Es una técnica que combina mienbros de datos y funciones, opera esos datos en una sóla únidad conocida como clase. Esta técnica básicamente el inpide el acceso a los datos directamente. Las funciones proporcionan la única forma de poder acceder a los datos.
Si desea leer un dato en un objeto, debe llamar a la función miembro en el objeto. La función leerá los datos y le devolverá los datos. Por lo tanto, no tiene acceso a los datos directamente. Como los datos están ocultos, están protegidos contra alteraciones accidentales.

Herencia: Básicamente es un método que proporciona una manera de las capacidades y propiedades de una clase en otra clase. Esta técnica proporciona reutilización de código a los programadores. Podemos formar una nueva clase a partir de una clase existente, donde la clase existente contiene algunas propiedades o métodos que también existen en una clase. Aquí la nueva clase se llama como la clase derivada y la clase existente, es decir, la clase de la que se deriva la nueva clase se llama como la clase base.

Por ejemplo; 'vehículo' es una clase con algunas propiedades y métodos. El 'automóvil' y el 'autobús' también son dos clases que tiene algunas de sus propiedades y métodos que ya existen en la clase 'vehículo'.

Polimorfismo: Es la capacidad de procesar un mensaje o datos en más de una forma. Admite la capacidad de un objeto de una clase para comportase de manera diferente en respuesta a un mensaje o acción.
Considerate a ti como un ejemplo de la vida real, que puede tener diferentes formas de interpretar la información y tener características diferentes como ser: estudiante, amante, payaso, perdido, imbecil, cantante. Esto se llama polimorfismo, ya que tiene algunas formas o características diferentes con respecto a una acción o situación diferente.

Sobrecarga: es la capacidad de una sola función para realizar diferentes tareas dependiendo de la situación. Entonces, el concepto de sobrecarga está relacionado de alguna manera con la propiedad del polimorfismo de OOP. Cuando se debe operar una función u operador existente en un nuevo tipo de datos, se llama como sobrecargado.

La sobrecarga permite crear diferentes métodos con el mismo nombre que difieren entre sí en el tipo de entrada y salida de la función. Se puede usar con funciones y miembros.
*************************enJavaScript (de aquí pa'rriba)

PROTOTIPO: 1. Primer ejemplar que se fabrica de una figura, un invento u otra cosa, y que sirve de modelo para fabricar otras iguales, o molde original con el que se fabrica. 2. Persona o cosa que reúne en grado máximo las características principales de cierto tipo de cosas y puede representarlas. 
3. En el ámbito de la informática, se conoce como prototipo al modelo que se desarrolla de un software para reflejar cómo se comporta un sistema. Estos prototipos se utilizan para comprender cómo funciona el sistema en cuestión.
4 . La noción de prototipo procede de la lengua griega. En concreto, es fruto de la suma de dos componentes de dicha lengua:
-El prefijo “protos-”, que puede traducirse como “el primero”.
-El sustantivo “tipos”, que es sinónimo de “modelo” o “tipo”.
5. Este término se emplea para nombrar al primer dispositivo que se desarrolla de algo y que sirve como modelo para la fabricación de los siguientes o como muestra.
7. es un ejemplar o primer molde en que se fabrica una figura u otra cosa.
8. perfecto y modelo de una virtud, vicio o cualidad.
9. también se puede referir a cualquier tipo de máquina en pruebas, o un objeto diseñado para una demostración de cualquier tipo.
10. prototipado puede ser un modelo del ciclo de vida del software, tal como el desarrollo en espiral o el desarrollo en cascada.

enlaces:::::::::::::::::::::::::::::==============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes
https://www.csetutor.com/basic-concept-of-object-oriented-programming/
https://javascript.info/class-inheritance
https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos


comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes
Estuve leyendo este articulo, no se si el curso se quedo anticuado y ya mejoraron la forma de manejar las clases.
Hice las pruebas y funciona de maravilla, es mas fácil que el prototipado.
classAnimal{
    constructor(nombre){
        this.nombre = nombre
    }
    hablar(){
        console.log(this.nombre +' hace ruido')
    }
}
classPerroextendsAnimal{
    hablar(){
        console.log(this.nombre + ' ladra!')
    }
}

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
javascript no soporta la herencia por que en realidad javascript no tiene clases tiene prototipos a los que les vamos agregando metodos que reciben funciones y saben quien es this saben como ejecutarlas lo que en realidad si existe es la herencia prototifal

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
Qué quiere decir constructor?
------------------------------------
Es una función que se ejecuta cada vez que creamos una nueva instancia del objeto.
-----------------------------------
Es el encargado de crear un nuevo objeto o mejor dicho, una nueva instancia del objeto. Básicamente se encarga de preparar un objeto para su uso.

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
No Clases, por lo tanto no existen herencias, sólo son prototipos que se conectan y hacen que fluya/circule la información.
Si ésta clase fue algo confusa, no se preocupen, sólo fue una explicación a grandes rasgos, en la siguiente clase viene mejor explicado, bueno eso dice Sacha.

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
Ya se puede utilizar el sintax sugar Extends para la herencia de clases. Aquí hay muy buenos ejemplos desde lo más simple hasta lo más complejo como lo vimos en esta clase.
link:
http://javascript.info/class-inheritance

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#27 Clases en JavaScript

Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.
El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

EcmaScript es el estandar en el cual se basa JavaScript para conformarse como lenguaje, siendo todas las funcionalidades del lenguaje. Y aún que usemos la palabra reservada << class >> todo por debajo son prototipos, y aunque quizas de aquí en adelante los empecemos a llamar clases no debemos olvidar que son prototipos.

Podemos ver el siguente objeto << Persona >> en consola que tiene unos atributos, el << __proto__ >> que es un objeto contiene ciertos metodos y su << __proto__ >> es el prototipo << Object >> 
jonny
   Persona {nombre: "Jonathan", apellido: "Cardozo", altura: "1.92"}
        nombre: "Jonathan"
        apellido: "Cardozo"
        altura: "1.92"
        __proto__:
	constructor: class Persona
	saludar: ƒ saludar()
	soyAlto: ƒ soyAlto()
	__proto__: Object

Para hacer que una clase "herede" de otra sólo hace falta la palabra clave << extends >> 

La palabra reservada super llama al constructor de la clase padre


Programación basada ??en prototipos
La programación basada ??en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ??en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.

error==================::::::::::::::::::::::::::>
var aleja = new Desarrollador('Aleja', 'De Mi Corazón', '1.72')

clase25.js:39 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Desarrollador (clase25.js:39)
    at <anonymous>:1:13 //Pimero debemos llamar al constructor << super >> y pasarle los parametros antes de usar << this  >> dentro de la clase padre por así llamarla, luego de esto podremo acceder a << this >> sin que nos marque un error.

enlaces:::::::::::::::::::::::::::::==============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
no existe polimorfismo en javascript?
---------------------------
Sí existe en JS.
Esta guía te puede ayudar: https://developer.mozilla.org/es/docs/Web/JavaScript/Introducción_a_JavaScript_orientado_a_objetos.

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
Es necesario volver a escribir el constructor en la clase Desarrollador ?. Yo hice la prueba omitiendolo ?. Yo hice la prueba sin usarlo y me funcionó bien, aunque no se si eso me puede traer un problema después. Ejm de como lo hice
class Desarrollador extends Persona{
saludar (){
console.log(Hola soy desarrolador mi nombre es ${this.nombre})
}
--------------------------------------
Creo que si no se declara el constructor de forma explícita en la subclase el interprete de Javascript lo hace de forma implícita y llama al constructor de la clase padre con los argumentos enviados a través de la subclase. Por eso te funciona tu código.
En el caso de declarar el constructor hay dos reglas respecto al constructor de una clase que hereda de otra que debes tomar en cuenta:
this no puede ser usado en el constructor de una clase hijo hasta que super() sea llamado.
Los constructores de clases en ES6 deben llamar a super() si son subclases o deben regresar de forma explicita un objeto.
-------------------------------------------------
Si defines un método constructor en la clase que hereda y no llamas a super debe darte el error ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor. La única forma de que te este funcionando sin el super() es que tampoco tengas el método constructor, en este caso Javascript agrega un constructor por default en el que hace la llamada a super.
--------------------------------------
Al escribir **super ** esta invocando el método **constructor ** de tu clase Persona , y en este caso estas enviando en el super los parámetros para aplicar el don’t repeat yourself.

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
En la teoría de Orientado a objetos, cuando una clase hija hereda a una clase padre, también hereda su constructor.
https://javascript.info/class-inheritance en este enlace, en el primer recuadro de código está muy bien explicado.
https://javascript.info/class-inheritance#overriding-constructor en esta sección del mismo enlace te explican muy bien como hacer “overriding constructor”, que es precisamente lo que estás buscando.

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
gente… pregunta, yo hice el experimento sin copiar el constructor de la clase padre y sigue funcionando ~ no entiendo muy bien para qué se usa el super()… es decir, si entiendo pero … si se usa el mismo constructor ¿para qué se duplica?
--------------------------------------------------------
este enlace te lo explica todo: https://stackoverflow.com/questions/39822941/what-does-super-do-without-any-arguments
Tampoco te lies demasiado, con ES6 super queda deprecado en React dentro de su sintaxis, y con React Hooks es todavía más fácil la sintáxis. Está bien aprender super() en React para saber leer código que lo contenga, pero no lo uses. Aprende Hooks
https://reactjs.org/docs/hooks-intro.html
en resumen:
una clase derivada debe usar super() si la clase tiene un constructor. En React todos los componentes extienden de Component por lo que lo necesitan.
Necesitas super() para tener acceso a this o de lo contrario nunca se inicializa this.
Te permite inicializar states y realizar binding dentro del constructor sin necesidad de hacer uso del lifecycle de React para ello.
para acceder a los props dentro del constructor requieres super() y que este obtenga props como parámetro, para hacer this.props.
constructor(props) {
  super(props);
  this.state = {count: props.initialCount};
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
6. Asincronismo

Se aplica a la modalidad de transmisión de datos en la que cada carácter llega precedido por un bit inicial y seguido de un bit final.

#28 Funciones como parámetros

En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

Para entender el asincronismo hay que tener en cuenta que las funciones también pueden ser pasadas como parametros. Dentro de la función también podemos establecer como parametro para que arroge valor false 

Hay ciertos valores que se comportan como true o como false:
	false = << null >> << 0 >> << '' >>
	true = << {object} >> << [] >> << 'holaMundo' >>
En el caso que sean puestos dentro de una estructura de control y evaluados dentro de una condición dara como resultado un valor booleano. Pero dentro de las practicas de programación puede resultar mucho mejor colocar el valor booleano y el código resultara más lejible.
Es importante tener definidos lás variables que le pasaremos a nuestras funciones al ser invocadas lo requeriran

La palabra clave super es usada para llamar funciones del objeto padre.

undefined evaluado como una condición dentro de un << if >> da como resultado false 

enlaces:::::::::::::::::::::================>
https://stackoverflow.com/questions/32647215/declaring-static-constants-in-es6-classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy

comentarios::::::::::::::::::::::::::::::::::==============>
Como puedo declarar una constante dentrode una clase en JS.
Digamos un atributo static.
----------------------------------------------------
Encuentras toda la info aquí: https://stackoverflow.com/questions/32647215/declaring-static-constants-in-es6-classes
En resumen, las constantes estáticas en clases de JavaScript solo están disponibles a partir de ES7 o con babel-preset-stage-0. Con ES6 “normalito” debemos usar getters y setters.

comentarios::::::::::::::::::::::::::::::::::==============>
No me entero de nada con este profesor ??
--------------------------------------------
 Alguna vez me sentí igual. Lo que me ayudo muchisimo fue complementar las clases con lectura sobre el tema.
Te recomiendo darle un vistazo a estos link =
https://wmedia.es/como-aprender-javascript-de-una-vez-por-todas/
https://danielmoralesp.gitbooks.io/javascript-avanzado-en-espanol/content/
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#29Cómo funciona el asincronismo en JavaScript

JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

Apuntes:
Sólo puede ejecutar un tarea a la vez, aunque no es multitarea puede delegar la ejecución de ciertas funciones a otros procesos (EventLoop)
Pila de ejcución o callstack aquí va poniendo las llamdas a funciones según el orden de ejecución del programa, si una función llama a otra esta se agrega a la pila, cuando termina de ejecutar una función la saca de la pila y la bota. En algún momento dado el programa necesita saber algo por medio del navegador y al regresar traera una función a esto se le llama callback una función que JavaScript ejecutara cuando regrese la respuesta del servidor, mientras JavaScript continua con el programa principal, cuando llegue la respuesta la función a ejecutar ira a parar a la cola de tareas donde se ira encolando (peticiones a servidores, interaciones visuales, navegación claid inside, los eventos que se realizan cada cierto tiempo) solo hasta que el programa se quede sin funciones en la pila de ejecución es que va ir a buscar las funciones de la cola de tareas por eso hay que tener cuidado de no generar un cuello de botella en la pila de ejecución, si JavaScript se queda ejecutando tareas muy pesadas las funciones de la cola de tareas van a tardar mucho tiempo en ejecutarse por eso ¡NO BLOQUEAR EL EVENTLOOP!  

enlaces:::::::::::::::::::::================>
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!

https://stackoverflow.com/questions/33768726/blocking-event-loop
https://www.youtube.com/watch?v=PndHsDpEfhU&list=PLImOJ2OqvvkCuDi6E33HXMP23BvYYBHcm
https://www.youtube.com/watch?v=W8AeMrVtFLY
https://github.com/leonardomso/33-js-concepts


comentario::::::::::::::::::::::=============>
Un cuello de botella siempre hará referencia a un elemento que limita una cadena de ejecución. En este caso, si tenemos una función que está tomando mucho tiempo la pila de ejecución se verá sobrecargada y el resto de tu aplicación se pondrá mucho más lenta al punto de no ser usable

comentario::::::::::::::::::::::=============>
¿Cómo bloquear ek eventloop?
-------------------------------------------------------
Puedes bloquear el event loop creando un for loop infinito o un while, o como en el siguiente ejemplo, una función que se llame a sí misma.
functionrepeat(operation, num) {
    if (num <= 0) return
    operation()
    repeat(operation, --num)
}
------------------------------------------
while(true){
console.warn(' NO VOY A BLOQUEAR EL EVENTLOOP')
 } //No! Fuera…!! Impulso de idiotez…!! D:

comentario::::::::::::::::::::::=============>
Según entiendo el código se lee de arriba hacia abajo y después apila de abajo hacia arriba.
--------------------------------------------------
Algo así, el código se va leyendo de arriba a abajo y mientras se vaya encontrando funciones o tareas va a irlas mandando al callstack o al queue.

comentario::::::::::::::::::::::=============>
Transcripción del guión del video
(No tan exacta…)
Asincronismo
Javascript sólo puede hacer una cosa a la vez … pero puede delegar la ejecución de ciertas funciones a otros procesos.
Este modelo de concurrencia se llama EventLoop.
…
JavaScript tiene algo llamado pila de ejecución o callStack donde va poniendo las llamadas a las funciones según el orden de ejecución de nuestro programa; si una función llama a otra, entonces esta se agrega a la pila.
Cuando termina de ejecutar una función la saca de la pila y la desecha.

En algún momento dado nuestro programa necesita algún dato de otro sitio en la web y le pide al navegador que cuándo obtenga los datos ejecute cierta función. Esta tarea que se lleva el navegador se llama ‘callBack’.
Mientras tanto js sigue ejecutando nuestro programa principal y cuando la respuesta llega va a parar a la ‘cola de tareas’.
Aquí las tareas se ordenan una detrás de la otra a medida de que van llegando.

Qué tareas van a parar a esta cola?
• las peticiones a servidores
• las interacciones visuales
• la navegación clayInside (dice esto?)
• los eventos que se realizan cada cierto tiempo

Recién cuando el programa se queda sin funciones en la pila de ejecución es que va a ir a buscar las funciones en la ‘cola de tareas’; por eso es que hay que tener cuidado de no generar un ‘cuello de botella’ en la pila de ejecución.

Si javaScript se queda ejecutando tareas muy pesadas las funciones de la ‘cola de tareas’ van a tardar mucho tiempo en ejecutarse.

Por eso recuerda estas palabras y repitelas todas las noche antes de irte a dormir:
No Voy A Bloquear el EventLoop!

comentarios:::::::::::::::::::::::================>
Ya entiendo porqué JS fue tan odiado, no tiene un buen POO, tampoco es multitarea….
---------------------------------------
Solo odiado por los que unicamente piensan dentro de la caja.
Por eso hay que pensar fuera de la caja
--------------------------------------------
Es odiado porque JS trabaja diferente su POO donde en lugar de hacer copias a lo loco de Propiedades y Métodos entre objetos, los delega entre objetos padres e hijos en el Prototype Chain ahorrándose performance. Pero muchos devs que vienen de otros lenguajes les da flojera tratar de entender esas funcionalidades.
BTW!! Java esta copiando el asincronismo de Javascript en la versión 10 ya viene con Promises. Tambien Kotlin viene con algo parecido a Async/Await 
----------------------------------------
No se trata de flojera, además Javascript no es orientado a objetos, es pura programación estructurada y funcional.
Programación estructurada porque trabaja instrucción a instrucción y funcional porque está todo el tiempo haciendo callbacks.
Lo que ocurre con muchos programadores es que, se pasó de la programación estructurada a la POO. Ese paradigma permitía mejorar mucho el diseño y el mantenimiento del código, básicamente ahorrar costes. Por lo tanto tratar con lenguajes como Javascript se siente como un paso atrás. Ya que mantener código JS en archivos grandes es insufrible por lo que veo.
Como dato personal, espero encontrar formas eficiente de organizar el código a medida que avance en la carrera de JS. Porque la programación estructurada es lo que tiene, que llega un momento en que es insostenible, no hay quien le meta mano.
-----------------------------------------
Lo más importante no es la eficiencia al programar, sino la legibilidad y la ^^cohesión**. La eficiencia solo debe ser tratada cuando haya problemas de eficiencia que podamos medir con pruebas.

Ya que primero estamos las personas, las que leemos y manipulamos el código, y luego las máquinas, las que a día de hoy tienen gran potencia para permitirnos no ser tan eficientes al codificar.

comentario::::::::::::::::::::===========>
esta analogía me pareció muy buena para entender aun mas el asincronismo de JS:
Imagina que te levantas una mañana a preparar tu desayuno. Primero decides tostar tu pan y luego prepararás tu avena. Si fuera una persona síncrona (Blocking) tendrías que esperar a tostar tu pan para recíen preparar tu avena. Pero si fuera una persona asíncrona (Non Blocking) luego de poner a tostar tu pan, vas preparando tu avena. La acción de que salga tu pan de la tostadora sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos (como preparar tu avena) ya podrían irse realizando.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#30 Cómo funciona el tiempo en JavaScript

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

Cómo JavaScript ejecuta algo de manera asincrona
  Tener en cuenta las tareas que se ejecutan de esta manera
   Tareas a tiempo futuro
    Interactuar el DOM , ya sea modificando alguno de sus elementos del documento (titulos, botones, CSS, alert) todo esto también se ejectuta de manera asincrona
    Hacer un pedido de datos externo, un request externo (Vanilla, jQuery, fetch) esto también se ejectuta de manera asincrona y hay que tenerlo en cuenta cuando estamos desarrollando


Tener en mente conceptos como: Call Back, Asincronismo, promesas, async await

    setTimeout(function () {
      console.log('b')
    }, 2000)

enlaces:::::::::::::::::::::::::::::::=============>
https://medium.com/@ubykuo/event-loop-la-naturaleza-asincr%C3%B3nica-de-javascript-78d0a9a3e03d
https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
https://developer.mozilla.org/en-US/docs/Web/JavaScript
http://vanilla-js.com/
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona
https://en.wikipedia.org/wiki/Async/await#In_JavaScript

comentarios::::::::::::::::::::::::==============>
El setTimeOut con tiempo 0 cumple la misma función que el window.onload?
---------------------------------
Son dos conceptos diferentes. El window.onload es un evento del objeto window. Este se ejecuta justo cuando una página termina de cargarse. Es útil cuando necesitas manipular el DOM ya que asi te aseguras que todo el DOM ya ha sido cargado.
Por otro lado el setTimeout, hace parte del API del browser. Es un método, asíncrono, que ejecuta una función después de cierto tiempo. Asi el tiempo sea 0, se ejecutará de inmediato al final del callstack.

comentarios::::::::::::::::::::::::===========>
Si console.log() es una función y se ejecuta en el hilo principal y SetTimeout() también es una función pero se encola para ser ejecutada, como sabemos que funciones javascript se encolan y cuales ejecutan directamente?
---------------------------------------------------
Porque setTimeOut estaría haciendo callBack…
La función console.log(' ') está siendo llamada inmediatamente.
setTimeOut( function(){}, 2000 ) es llamada al instante también, pero la función que hay dentro de esta función es callback y será enviada a la cola de tareas una vez pasen los 2 segundos. Lo que hay en la cola de tareas va a ser ejecutado una vez que JavaScript finalice la pila de ejecución principal.
En sintesis, sabremos que la función será demorada cuando hagamos un callback. Que es una función que tenga como argumento otra función. Es decir que se requiere el resultado de la función b para completar a.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%