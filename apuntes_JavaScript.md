2. Primeros pasos en JavaScript

#3 Variables
Los lenguajes de programaci�n pueden clasificarse seg�n su tipado o por el tipo de datos que aceptan sus variables. Tenemos lenguajes de tipado din�mico o est�tico y aquellos de tipado fuerte o d�bil (tambi�n conocidos como no-tipados) 

Este �ltimo grupo distingue a los lenjuages seg�n si permiten o no violaciones de los tipos de datos una vez declarados.

Tipado fuerte, no permiten operar tipos de datos distintos sin antes realizar una conversi�n, leguajes imperativos; Java &  Python.

En otro lado, los lenguajes de tipado blando o d�bil son aquellos que realizan las necesarias conversiones de forma interna para permitir el tratamiento ambig�ode las variables seg�n se requieran en tiempo de ejecuci�n. Mucho lenguajes declarativos como Haskell o Lisp pertenece a este grupo.
Para muchos Javascript en cuanto al tratamiento de las variables es considerado como un peligro potencial que hay que saber manejar.

Javascript pertenece al grupo de lenguajes imperativos pero, sin embargo, se caracteriza por estructuras de tipado d�bil donde la declaraci�n de variables no exige la asociaci�n con un tipo de datos de forma impl�cita y un�voca.
Un tipado blando (o no tipado) significa que las variables son declaradas sin un tipo: los valores pueden modificarse, compararse y operar entre ellos sin necesidad de realizar una conversi�n previa.

Para estos tipos de varaibles JavaScript los asigna de forma interna
var x = 15; // Number (int) declaration
var y = 15.6 // Number (float) declaration
var z = 'Hello World' // String declaration
var arr = []; // Array literal declaration
var obj = {}; // Object literal declaration


Para convertir una cadena en un n�mero, podemos utilizar cualquiera de los siguientes m�todos:
var foo = '5';
console.log( typeof parseInt( foo ) );
console.log( typeof parseFloat( foo ) );
console.log( typeof ( foo - 0 ) );
console.log( typeof ( foo * 1 ) );
console.log( typeof ( foo / 1 ) );
console.log( typeof ( +foo ) );

Los ejemplos anteriores son f�ciles de seguir: parseInt y parseFloat obtienen la parte entera o flotante de una cadena; las operaciones aritm�ticas (�-�, �*� y �/�) convierten internamente las cadenas en n�meros tal y como vimos m�s arriba. Finalmente, el operador unario �+� al, no precisar de pasos adicionales, es la forma m�s r�pida y elegante de realizar la conversi�n.

El paso contrario, de n�mero a cadena, se realiza mediante el m�todo nativo toString:
var foo = 1;
console.log( typeof ( foo.toString() ) ); // string

Para pasar un n�mero o una cadena a un objeto Booleano, podemos utilizar el recurso de la doble negaci�n �!!�:
var foo = 'Hello World';
console.log( !foo ); // false
console.log( !!foo ); // true

En Conclusi�n JavaScript es un lengueje no tipado con gran flexibilidad para definir variables que es un foco para posibles errores. Conocer la forma como JavaScript maneja los tipos de datos es importante para evitar las incongruencias derivadas de una coerci�n inesperada de valores.

enlaces::::::::::::::::=========>
https://es.stackoverflow.com/questions/79809/cual-es-la-diferencia-de-usar-let-en-vez-de-var-en-javascript
https://stackoverflow.com/questions/44604212/when-to-use-const-with-objects-in-javascript

Guias m�s relevantes para la escritura de JS:
https://standardjs.com/
https://github.com/airbnb/javascript
https://google.github.io/styleguide/jsguide.html

un buen libro para los que empiezan con este lenguaje : https://www.ebooks.com/1993212/you-don-t-know-js-up-going/simpson-kyle/
https://developer.mozilla.org/es/docs/Web/JavaScript

Enlace para manejar EMMET
https://docs.emmet.io/abbreviations/syntax/

�M�s informaci�n sobre el tipado debil de Javascript?
http://www.etnassoft.com/2011/01/27/tipado-blando-en-javascript/


comentario::::::::::::::::========>
Es importante considerar que hay m�ltiples gu�as de estilo y al final s�lo son eso, gu�as.
Mi recomendaci�n es que cada que entren a un proyecto sigan la gu�a de estilos que est� usando el proyecto y que encuentren una gu�a que les guste para sus proyectos personales o proyectos nuevos.
Y recuerden que todo el c�digo en un proyecto deber�a parecer que lo escribi� una sola persona, sin importar cu�ntas personas hayan contribuido.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#4 Variables: Strings 
Hubo que revisar la sintaxis de las eclaraciones ya que manejan camelCase ademas de que este bien escritas las palabras.

Los metodos o funciones predeterminadas cuentan con dos par�ntesis para ser invocadas: toUpperCase() toLowerCase() chartAt() 
Y las propiedades que invocamos no llevan los par�ntesis: nombre.length
Metodos llevan parentesis al final
Propiedades NO usan par�ntesis

Si asignamos un valor (otro nombre) a la variable nombre no sera posible que se actualice la variable que estaba contando en primer lugar la cantidad de letras pues tendra almacenado a�n el valor anterior y si queremos mostrar el otro se requiere actualizar tambi�n esa variable que cuenta para que adopte el nuevo conteo de letras de nombre.

Se puede concatenar por medio de las comillas invertidas a esto de le llama interpolaci�n de texto dentro de las comillas invertidas  `${variable}` dentro de estas podemos separar con un espacio normal y as� se vera en la interfaz, podemos agregar funciones dentro de estos corchetes a las variables de JavaScript `${variable.toUpperCase()}`

str es una abreviaci�n para un string

enlaces::::::::::========>
https://tutobasico.com/convenciones-javascript/    == Este enlace meciona algunas buenas practicas al momento de escribir c�digo JavaScrip como:
	& Usar gui�n  bajo delante de variables o propiedades privadas
	& La primera letra en may�scula para los nombres de clases y constructores (PascalCase) 

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr#Par.C3.A1metros
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

**Interpolaci�n de texto :: **
http://librosweb.es/tutorial/las-nuevas-cadenas-de-texto-de-javascript-6/

comentario::::::::::::::::==============>
var nombre=�Francisco�, apellido='Velasco�
console.log(�Mi nombre es � + nombre +� y apellido es: � + apellido);
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primerletranombre = nombre.charAt(0)
var cantidadletrasnombre= nombre.length
var nombreCompleto = nombre + � � +apellido
var nombreCompleto2 = ${nombre} ${apellido.toUpperCase()}
var str = nombre.substr(1,2)
var str = nombre.substr(8,8)
var str = nombre.substr(7,8)

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#5 Variables: n�meros
Modulo global de matem�ticas (Math)
Math.round = para redondear el n�mero decimal con el que estamos interactuando.
toFixed(n) = con este metodo tomamos n cantidad de decimales, y al parecer tambi�n los convierte en string 
parseFloat() se usa para convertir a n�mero flotante o para especificarlo, donde <<parse>> significa an�lisis sint�ctico o transformar, leer, asignar (de ah� la expreci�n parsear) y <<Float>> representa el punto flotante.

Es com�n que en algunas ocaciones olvidemos alg�n caracter y nos arroje un error de variable no definida. Hay que tener en cuenta la precisi�n con la que calcula los valores definidos dentro de las variables.

enlaces::::::::::::::::::::==========>
http://www.etnassoft.com/2014/06/10/let-la-nueva-forma-de-declarar-variables-en-javascript/
http://www.etnassoft.com/2016/11/16/guia-definitiva-del-recolector-de-basura-en-javascript/

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#6 Funciones
fracciones de c�digo reutilizable, podemos asignarle parametros entre los par�ntesis para hacerla reutilizable, podemos alterar el orden de las variables lo que resultaria confuso pero se puede, pues tomara el primer valor para la variable que se haya definido primero dentro de los parametros asignados, si obviamos alguna variable el compilador tratara de ejecutarla as� tenga que mostrar undefined.

enlaces:::::::::::===========>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Palabras_Reservadas

comentario::::::::::::::::::================>
Falso Sacha!! En realidad Javascript es compilado no interpretado como mencionaste en el minuto 7:52, JS utiliza la t�cnica JIT (Just In Time). Cumple con las caracter�sticas de los lenguajes compilados con la excepci�n de no exportar un build ejecutable. Como el browser es un interprete de HTML y CSS suele confundirse, pero hay que recordar que para correr JS en el navegador (o correr JS en general) es necesario un Engine.

Para mas info sugiero leer los siguientes Links:
JS Un lenguaje compilado o interpretado = https://medium.com/@pharesdiego/javascript-un-lenguaje-compilado-o-interpretado-962ee405e123
JS Compilado o Interpretado? <- Este lo escrib� yo xD = 
Aqu� dejo una charla interesante de la JSConf 2017 donde explican un poco mas sobre los Javascript Engines: https://www.youtube.com/watch?v=p-iiEDtpy6I&feature=youtu.be
Mas detalladamente explicado en la serie de libros YDKJS : https://github.com/getify/You-Dont-Know-JS

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#7 El alcance de las funciones
Toda variable que no este definida dentro de una funci�n va estar definida dentro del alcance global y vamos a poder acceder a ella dentro del objeto global es decir dentro del navegador (DOM)

enlaces:::::::::::::::==========>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String#M%C3%A9todos

comentarios::::::::::::::::::::::::================>
�En la pr�ctica que beneficios tiene trabajar con variables locales o globales?

En react no sientes tanto ese beneficio debido al scope de �.this�, todo permanece dentro del scope de la clase bajo this.
Cuando usas react hooks todo react se convierte en javascript plano, y pierdes el scope de this. En ese punto ya puedes pensar en variables locales y globales, peeeeero:
Nunca vas a ocupar este feature en react. Asi no funciona react. Para eso usar los props si quieres que una variable pase entre componentes, los states son para manejar variables locales, y una variable local la manejas con tecnologias como redux.
Si usas javascript con jquery en un entorno m�s tradicional, si usas variables globales y locales de la misma manera que redux cre un estado �nico. Muchos lenguajes orientados a objetos como PHP o C# usan la caracteristica de tener diferentes scopes.

comentarios::::::::::::::::::::::::=====================>
�mbito
En JavaScript, las instrucciones que se encuentran fuera de una funci�n se considera que est�n en el �mbito global. Este es el espacio en el que escribimos las instrucciones hasta que se define una funci�n u otra clase de estructura de datos. Las variables definidas en el �mbito global tienen un alcance global y, por lo tanto, se pueden usar desde cualquier parte del c�digo, pero las declaradas dentro de las funciones tienen un alcance local, lo que significa que solo se pueden usar dentro de la funci�n en la que se han declarado. Esta es otra ventaja de las funciones; son lugares especiales en el c�digo donde podemos almacenar informaci�n a la que no se podr� acceder desde otras partes del c�digo. Esta segregaci�n nos ayuda a evitar generar duplicados que pueden conducir a errores, como sobrescribir el valor de una variable cuando el valor anterior a�n era requerido por la aplicaci�n.
El siguiente ejemplo ilustra c�mo se definen los diferentes �mbitos y qu� debemos esperar cuando accedemos desde un �mbito a variables que se han definido en un �mbito diferente.

var variableGlobal = 5;
functionmifuncion(){
 var variableLocal = "El valor es ";
 alert(variableLocal + variableGlobal); // "El valor es 5"
}
mifuncion();
alert(variableLocal); 

Debido a que las variables declaradas en diferentes �mbitos se consideran diferentes variables, dos variables con el mismo nombre, una en el �mbito global y otra en el �mbito local (dentro de una funci�n), se considerar�n dos variables distintas (se les asigna un espacio de memoria diferente).

Extraido del libro �El gran libro de HTML5 CSS3 y JavaScript 3ed� J.D Gauchat.

comentario::::::::::::::::::::::::=============>
Recuerda que de todas maneras no todo es escribir la menor cantidad de l�neas, es acerca de hacer el c�digo entendible. Y recuerda: no escribimos c�digo para comunicarnos con las m�quinas, escribimos c�digo para comunicarnos entre desarrolladores

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#8 Objetos
En el caso que tuvieramos que obtener m�s nombres como en el ejemplo anterior, podriasmos seguir declarando variables para cada nombre nuevo y colocar dentro de los parametro de la funci�n el nombre que le hayamos dado a cada variable para que impirmiera el resultado. Para evitar extendernos demaciado y resulta m�s prolijo empezar a usar los  <<objetos>> 

{} esto delimita un objeto; un objeto en programaci�n es la representacion de caractericticas que hay en com�n con los entes de la aparente realidad.

estructura de un objeto
var objeto = {
    clave: 'valor',
    clave: 'valor',
    key: value
}


#8 Objetos
El concepto de Objetos en JavaScript puede entenderse con objetos tangibles de la vida real.

Un objeto es un entidad independiente con propiedades y tipos. Comp�ralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un dise�o, tiene peso y un material con la que fue hecha, etc. De la misma manera, los objetos de JavaScript pueden tener propiedades, las cuales definen sus caracter�sticas.

JavaScript est� dise�ado sobre un paradigma simple basado en objetos. Un objeto es una colecci�n de propiedades, y una propiedad es una asociaci�n entre un nombre (o clave) y un valor. Un valor de una propiedad puede ser una funci�n, en cuyo caso la propiedad es conocida. Adem�s de los objetos que est�n predefinidos en el navegador, puedes definir tus propios objetos.

enlaces:::::::::::::::::::===============>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos

comentarios::::::::::::::::::===============>
Al momento de declarar los objetos, al no tener una clase como base, si queremos seguir un est�ndar, �se le deber�a asignar un nombre que inicie con may�scula (como una clase) o seguir una min�scula (como variable con camel case)? Gracias!
-------------------------------------
En los objetos de JS se utiliza camel case.
En el nuevo estandar de ECMAScript 6 ya se soportan clases y en estas si es necesario -por buena practica- iniciarlas con mayuscula para diferenciar que se refiere a una clase.

comentarios::::::::::::::::::::::::=============>
�Qu� funci�n cumplen los par�metros dentro de las funciones?
-------------------
Los par�metros en las funciones son datos que les pasamos para que realicen alguna acci�n con ella, por ejemplo si eres un dise�ador y tu funci�n es dise�ar pero debo pasarte un par�metro que es la idea te la pasar�a de la siguiente manera:
functiondesigner (idea) {
  makeAnAwesomeDesign(idea)
}
-----------------
Los par�metros son la informaci�n que reciben las funciones para calcular y entregar un resultado.
functionadd(n1, n2) {
  return n1 + n2;
}
Los argumentos son la informaci�n que enviamos a las funciones para que la procesen y nos devuelvan un resultado.
const result = add(1, 2);
Dicho de otra forma: los argumentos se env�an y los par�metros se reciben.

comentario:::::::::::::::::::::==============>
La declaraci�n de tu objeto esta bien. Solo te aconsejar�a:

Usar const en lugar de var. Siempre que no tengas que reasignar de nuevo un valor a tu variable. Para ese caso usa let le falto poner los backticks en el return:
return `Mi nombre completo es ${this.nombre} ${this.apellido}}`

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#9 Desestructurar objetos
Esta es una de las nuevas caractaristicas del estandar ES6 (EcmaScript 2015) y debido a su propia estructura, puede ser extremadamente flexibley, gracias a esa versatilidad, toda nueva caracter�stica puede ser explotada hasta sus l�mites te�ricos.
Esto trata de incorporar lo mejor de otros lenjuages y de manera paulatina a JavaScript

La desestructuraci�n podemos definirla como una expresi�n que permite asignar valores a nombres conforme a una estructura de tabla dada. Ejemplo con array:

[ myVarOne, myVarTwo ] = [ 'foo', 'bar' ];
 
console.info( myVarOne );  //foo
console.info( myVarTwo ); //bar

Como ocurre con cualquier variable en Javascript, �sta ha de ser declarada para evitar contaminar el espacio global. Durante la desestructuraci�n, la declaraci�n puede realizarse tanto en la misma instrucci�n como con anterioridad. Ejemplo con arrays:

var a, b;
let c, d;
[ a, b, c, d ] = [ 'La', 'donna', 'e', 'mobile' ];
var [ e, f ] = [ 'cual', 'piuma' ];
let [ g, h ] = [ 'al', 'vento' ];
console.info( a, b, c, d, e, f, g, h );
// La donna e mobile cual piuma al vento

EJEMPLOS CON OBJETOS
Es posible usar objetos s�lo con remplazar los corchetes [] con llaves {} 

var obj = {
    foo: 'Hello',
    bar: 'World'
};
var { foo, bar } = obj;
console.info( foo, bar ); // Hello World

Cuando el objeto no contiene las claves que solicitamos, se les asocia automaticamente el valor por defecto para estos casos 'undefined'
var { a, b } = obj;
console.info( a, b ); // undefined undefined

Si las varables ya estan declaradas, no podremos usar s�lo llaves para indicar el primer conjunto
var obj = {
       foo: 'Hello',
       bar: 'World'
};
var foo, bar;
{ foo, bar } = obj //SyntaxError

Este error se da porque las llaves estan indicando un bloque/contexto (esta estructura el valida en JavaScript) para que funcione en este caso tenemos que enmarcar la instrucci�n entre par�ntesis:
( { foo, bar } = obj );
console.info( foo, bar ); // Hello World

Se pueden ignorar valores en los dos conjuntos por medio de un elisi�n (esto se e llama a dos comas consecutivas que no encierren ning�n valor):
var [ a, , b, , c ] = [ 'la', 'donna', 'e', 'mobile', 'cual', 'piuma' ];
console.info( a, b, c ); // la e cual

Ignorando valores con la elisi�n en las dos partes del conjunto:
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
	console.log(`Hola me llamo ${nombre} y tengo ${edad} a�os`)
}
saludar(obj1) // Salida ->  Hola me llamo victor y tengo 19 a�os

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#10 Par�metros como referencia o como valor

Podemos acceder a un explorador de archivos desde el navegador.

JavaScript se comporta distinto con los objetos, los objetos que pasamos por parametros se pasan por referencia eso quiere decir que si los modificamos dentro del cuerpo de una funci�n su valor se va ver modificado fuera de esa funci�n tambi�n.

al tomar los parametros que declaramos en la funci�n que pude ser un objeto si es un objeto dentro de la funci�n

//Esto va dentro de la funci�n
return {
     ...persona,
     edad: persona.edad += 2 // esto aumentara en dos la clave edad del objeto que  sea instanciado dentro de los parametros al invocar la funci�n.
}

function cumples(persona) {
	  persona.edad += 1
}
cumples(jonathan) //Al invocar esta funci�n y pasar el obejto como parametro d
*****salida-> {nombre: "Jonathan", apellido: "Cardozo", edad: 28}

cumples(sacha.edad)

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#11 Comparaciones en JavaScript

Me doy cuenta que cuando tienes un objeto y el nombre de ese objeto es igual al nombre de alguna de las claves que hay dentro del mostrara un error, pero ahora que recargo nuevamente el navegador y luego de haber cambiado las varaibles y volverlas a cambiar para que el nombre de la varaible coincidiera con una de las claves del objeto y comfirmar mi teor�a me doy cuenta que no es cierto y que posiblemente era el cache de la p�gina.

Evaluando el comportamiento de distintos tipos de datos (primitivos)

por medio de == hacemos una comparaci�n que busca coincidencias entre las dos comparaciones as� tenga que convertir el valor de las dos comparaciones y con esto cambiar sus tipos de datos. Con el === (triple igual) comparamos a un nivel m�s estricto es m�s recomendable su uso, a nivel laboral no es permitido su uso ni en comentarios para el uso en producci�n.

La comparaci�n no reacciona a los objetos igual como lo hace con los tipos de datos primitivos, cuando hacemos un comparaci�n ( == o ===) de objetos en JavaScript este pregunta por la referencia a la variable que estamos utilizando.  


enlaces::::::::::::::::::::::::::::========================>
https://www.todojs.com/tipos-datos-javascript-es6/	

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

3. Estructuras de control y funciones
Estas permitiran si un c�digo se ejecuta, no se ejecuta, si se ejecuta multiples veces o hasta que se cumpla determinada condici�n.

#12 Condicionales
los condicionales especifican si un c�digo se ejecuta o no

`${}` o tambi�n llamados template scripts con ellos podremos colocar las varaibles y texto para mostrar sin necesidad de concatenarlos con el signo m�s+

comentarios:::::::::::::::::::::::::::::::::::::================>
En las soluciones de los retos he visto mucho
 persona.edad >= 18 ? true:false
Esto es una forma de hacer los condicionales m�s cortos?
--------------------------------------------
si quieres tener mas lifehacks
(condici�n) && (solo si se cumple)
(condici�n) || (solo si no cumple, como tener solo el 'else')
---------------------------------------------
si es un condicional de una sola linea y se llama operador ternario, lo que hace es tener una condici�n persona.edad >= 18 luego sigue el signo de interrogaci�n ? y va el valor que retorna si la condici�n se cumple o no se cumple separado por dos puntos.
condici�n ? se cumple: no se cumple

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#13 Funciones que retornan valores

Entender el contexto del programa y del c�digo nos ayuda a mejorarlo y detectar fallos.
Haciendo uso de las funciones podemos almacenar el valor de una variable dentro de una funci�n  y esta funci�n nos retornara un valor que podremos usar dentro de otra funci�n donde esta albergada la l�gica.

para indicar que una varaible debe conserve fijo su valor declaramos la variable como <<const>> y una practica para darles el nombre a estas es usuar todo en may�sculas y separar las palabras por guiones bajos: 
var mayoriaDeEdad = 18   //formato para los nombres de las varaibles
const MAYORIA_DE_EDAD = 18 //formato para los nombres de las constantes
En caso de no tener que re-asignar este valor usamos <<const>> minimizando el estado de mutaci�n "mutable state" reduciendo procesos.

enlaces:::::::::::::::::::::::::::::::::::==============>
https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#14 Arrow functions
En JavaScript existe otro modo de escribir funciones, podemos asignar a una varaible un funci�n (no todos los lenguajes lo permiten)  al hacer esto la funci�n asignada a la variable, si no tiene nombre, pasa ser anonima. Suelen ser declaradas como <<const>> para as� entender que tienen asignada una funci�n. 

=> a esto le llamamos arrow functions

function nombreFuncion (persona){ ...}   //function estandar
nombreFuncion (persona) =>  //Arrow function. cuando tenemos s�lo un parametro podemos obviar los par�ntesis.

Estas dos son practicamente equivalente pues dentro del manejo de algunos contextos la (=>) arrow function hace algo m�s.

//Cuando tenemos un s�lo parametro en la funci�n podemos obviar los par�ntesis
//Tambi�n podemos obviar las llaves {} y la sentencia return, cuando lo �nico que hace la funci�n es retornar un valor

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//Tambi�n podemos quitar persona desestructurando el objeto y tendra que estar dentro de par�ntesis
const esMayorDeEdad = ({ edad }) => edad>= MAYORIA_DE_EDAD
//En la �nea de c�digo que arriba, hay una constante a la que le asignamos una funci�n a esta funci�n como parametro le pasamos un objeto desestrucuturado que tiene una edad y nos retornara un valor indicando si es mayor a MAYORIA_DE_EDAD (este valor es booleano). Esta forma es un poco m�s compleja al momento de entender la funci�n, pero es la que esta m�s generalizadoa en el hambito productivo.

enlaces:::::::::::::::::::::::::::==================>
Aqu� les dejo documentaci�n acerca de las Arrow functions me ayudo mucho a entender esta nueva nomenclatura https://desarrolloweb.com/articulos/arrow-functions-es6.html

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#15 Estructuras repetitivas: for
bucle para  = loop for
Lo que hace esta instrucci�n es repetir determinada condci�n por eso es llamada bucle.
Despues del <<for>> hay unos par�ntesis () su interior esta formado por tres partes; inicial, condici�n y el incremento. for (var i = 1; i <= 365; i++)
dentro de los par�ntesis tenemos un contador con nombre de variable <<i>>

Hay que recordar que cuando tenemos un objeto y ese objeto lo usamos dentro de otra funci�n  y lo modificamos este objeto se va a ver modificado fuera de la funci�n tambi�n, sino queremos que eso ocurra tendremos que crear un nuevo objeto desglosando o desestructurando el original.

Podemos evitar magics numbers declarandolos como variables (let, const, var) en el ambito donde se requieran, por lo general si son valores que no necesitamos que sean alterados y al contrario mantengan su valor usaremos <<const>> esto nos permitira que tener un referencia de ese n�mero (una idea de lo que hace por su nombre de variable) para entender mejor el c�digo cuando llegue la hora de darle una repasada.

enlaces:::::::::::::::::::::==================>
https://itqna.net/questions/878/what-are-magic-numbers-javascript


comentario:::::::::::::::::::::::============>
Ya te hicieron la observaci�n, y es cierta, el c�digo limpio es aquel que puede entenderse sin necesidad de dejar comentarios, hay libros que hablan al respecto, por ejemplo �Clean Code� de Robert Martin, en el cual hay un cap�tulo dedicado a la parte de generar comentarios.

Al contrario de lo que expones, tener tantos comentarios para un equipo de trabajo refleja que tu c�digo es o muy confuso o est� mal programado (aunque no lo sea) y que necesario dar una explicaci�n detallada de cada proceso.

En las empresas donde he trabajado, tenemos como regla que no exista comentarios en repositorios de trabajo compartido, ya que si tenemos que hacer una obersaci�n lo colocamos en la secci�n de �issues�, puedes tenerlos en entornos de trabajo local, pero puedes ser penalizado si te realizan una revisi�n de c�digo.

Recomiendo usarlos si apenas est�s iniciando y te sirve para recordar cosas claves, o alg�n tipo de ejecuci�n solamente.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

