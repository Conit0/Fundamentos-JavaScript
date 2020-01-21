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

#16 Estructuras repetitivas: while

Uncaught ReferenceError: sacha is not defined => puede que el error se deba a un objeto que no esta definido o quiza mal escrito.

While = mientras. Ejecutara lo que este entre llaves mientras la condici�n sea verdadera.

debugger;
La sentencia debugger invoca cualquier funcionalidad de depuraci�n disponible, tiene la misma funci�n que un breakpoint. Si la funcionalidad de depuraci�n no est� disponible, esta sentencia no tiene efecto alguno.

Cuando hacemos que uno de estos ciclos colapse la p�gina evitando que carge usaremos la sentencia debugger y si tenemos el inspector de elementos en la pesta�a de consola abierta en el navegador que carge la p�gina dentendra la ejecuci�n del programa al leer esa palabrita.

Una vez tengamos la p�gina abierta junto con el inspector de elemento en la pesta�a consola, cargamos el archivo o la direcci�n de la p�gina, despues de esto nos manda automaticamente a la pesta�a sources (inspector de elementos) esta parte nos mostrara una serie de herramientas m�s como un reproductor que consta de: 
1. Un boton de play para correr el proceso hasta que se vuelva a encontrar con un debugger
2. Con la segunda opci�n va pasando a la siguente l�nea, proceso por proceso, uno por uno
3. Las otras flechas son diversas formas de pasar por cada proceso.
4. Tenemos la opci�n de crear breakpoint o debugger de manera interantiva dentro de la pesta�a source a travez de los n�meros que identifican a cada l�nea de c�digo.
A esta funci�n tambi�n podemos acceder sin necesidad de invocar la sentencia <<debugger>>, desde el inspector de elemento en la pesta�a Sources en contraremos los mismo controles pero ahora evaluaremos todo el c�digo y no dedes una parte en especifico como si lo hariamos con la sentencia debugger.

Recuerda que las funciones y los metodos de JavaScript deben llevar par�ntesis para ser invocadas y as� funcionar.

enlaces::::::::::::::::::::::::::===============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/debugger

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#17 Estructuras repetitivas: do-while
Otra estructura repetitiva es el do-while. A diferencia de la instrucci�n while, un bucle do�while se ejecuta una vez antes de que se eval�e la expresi�n condicional.

Se diferencia del while ya que ejecuta al menos una vez el c�digo, cuantas veces sucede algo (contador)

La sentencia do...while crea un bucle que ejecuta una sentencia especificada, hasta que la condici�n de comprobaci�n se eval�a como falsa. La condici�n se eval�a despu�s de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

En Argentina cuando alguien te molesta se le dice -Anda a ver a la esquina si llueve- 

enlaces::::::::::::::::::::::==========>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/do...while

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#18 Condicional m�ltiple: switch
Nos permite decidir que c�digo ejecutar de acuerdo a m�ltiples condiciones

La declaraci�n switch eval�a una expresi�n, comparando el valor de esa expresi�n con una instancia case, y ejecuta declaraciones asociadas a ese case, as� como las declaraciones en los case que siguen, una vez se haya cerrado con un brake continuara con los demas case, detro de esta estructura encontramos el caso default que es como un else donde llegara si no encuentra el valor solicitado dentro de los case. Cuando olvidamos cerrar un case tomara tambi�n el siguiente y lo mostrara o se producira un error eso depende mucho del contexto.

prompt = esta funci�n muestra una pregunta y pide datos

enlaces::::::::::::::::::::::::::=================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch

eliminar acentos
https://www.lawebdelprogramador.com/codigo/JavaScript/4380-Eliminar-acentos-con-replace-utilizando-una-expresion-regular.html

https://stackoverflow.com/questions/12145296/jquery-what-does-the-e-in-function-e-stand-for/12145342#12145342

comentario:::::::::::::::::::::::::==============>
La verdad es que me cost� entender la funci�n, pero ya. La detallo a continuaci�n por si a alguien le puede ser de ayuda.

var reemplazarAcentos = function(cadena){
	var chars = {
		"�":"a", "�":"e", "�":"i", "�":"o", "�":"u",
		"�":"a", "�":"e", "�":"i", "�":"o", "�":"u", "�":"n",
		"�":"A", "�":"E", "�":"I", "�":"O", "�":"U",
        "�":"A", "�":"E", "�":"I", "�":"O", "�":"U", "�":"N"
    }
Aqu� lo �nico que se hace es guardar un objeto con la correspondencia de cada letra con tilde a una sin tilde. Es decir: �� equivaldr�a a �a�

var expr = /[�����������]/ig;
Esta variable fue la que me cost� entender, pero lo cierto es que no tiene ninguna dificultad. Simplemente es una expresi�n de javascript que permite determinar un criterio de b�squeda en un string. Es decir, si utilizaramos un match (funci�n de b�squeda en JS) con la variable expresi�n sobre una variable que contenga la palabra �cami�n� nos localizar�a la letra o con tilde, porque as� se especifica en el criterio de b�squeda. Puedes leer m�s acerca de la expresi�n aqu�: https://www.w3schools.com/jsref/jsref_regexp_charset.asp (el ig en vez de solamente g, indica que no se distingue entre may�sculas y min�sculas)

var res = cadena.replace(expr,function(e){return chars[e]});
Aqu�, lo que se hace es obtener todas las letras con tilde y reemplazarlas por letras sin tilde. No entend�a tampoco porque utiliza la letra e como par�metro, pero resulta que simplemente sirve como referencia al par�metro inicial (en este caso, cadena). Puedes leer m�s al respecto de e como par�metro aqu�: https://stackoverflow.com/a/12145342

Espero que les sea de ayuda y gracias a @juanseg por compartir el c�digo. Me supuso un peque�o reto entenderlo.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
4. Array�s
Los arrays son estructuras que nos permiten organizar elementos dentro de una colecci�n. Estos elementos pueden ser n�meros, strings, booleanos, objetos, etc

#19 Introducci�n a arrays

Podemos cargar el array [] muchas cosas; objetos, numeros, texto, funciones o mezclar cosas dentro del mismo array, JavaScript lo permite.

Ademas use (Math.ceil(Math.random() * 100)) para mostrar una altura aleatoria dentro del objeto a esa clave. ceil parece arrojar un n�mero alto mientras que floor el n�mero es menor.

colecci�n de datos
var array = [a, b, c, d]
acceder a un dato especifico del array, donde la cuenta del indice empieza desde cero
array[0]
acceder a un dato de la lista de la colecci�n y a una de sus claves (para el caso de un objeto)
array[3].apellido otra forma array[3]['apellido']

enlaces:::::::::::::::::::::::::::::====================>
https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings

comentario:::::::::::::::::::::::::::::::::===============>
people.forEach( (person) => { console.log(`${person.name}${person.lastName} is ${person.height} mts`) } );
Yo us� el metodo forEach() de los arrays de javascript para poder recorrer las personas usando Arrow Function.
Para m�s info ver: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

comentario:::::::::::::::::::::::::::::::==============>
Otra forma de iterar los objetos es usar for of. �sta forma es muy usada para iterar arrays de objetos
for (let persona of personas){
  console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}

comentario:::::::::::::::::::::::::::::::==============>
Aunque no es la clase de f�sica, dejo este hilo sobre abreviatura de unidades, metros solo se abrevia como m.
https://es.wikipedia.org/wiki/Wikiproyecto:Correcci�n_de_errores_menores/Unidades_y_s�mbolos

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#20 Filtrar un array

comentario::::::::::::::::::::::::::================>
El par�metro persona hace referencia a cada uno de los elementos dentro del array llamado personas.
Recuerda tambi�n, que se est� pasando como par�metro del m�todo personas.filter() la constante esAlta, que guarda nuestra arrow function, de ah� la referencia al array que mencion� antes.
Espero te sirva, un saludo.

comentarios::::::::::::::::::::=================>
Una pregunta, �por qu� si �esAlta� es una funci�n, no se le ponen ()?
let personasAltas = personas.filter(esAlta)
---------------------------------
Esta forma de pasar funciones como par�metros de otra funci�n para que se ejecuten en alg�n momento particular dentro del c�digo de dicha funci�n, se conoce tambien como callback, y una manera de verlo es que en este caso la funci�n se pasa como referencia, es decir, se pasa el c�digo de la funci�n � no el resultado de haberla ejecutado, que es cuando se le colocan los par�ntesis funci�n() � para usar el resultado y no la definici�n de esta.
-----------------------------------
Ya me explicaron porqu�, es porque cuando se llama a una funci�n, normalmente queremos que se ejecute directamente, que es cuando se le colocan () . Pero si la funci�n la usamos como un par�metro, no estamos esperando que se ejecute directamente, necesitamos que la otra funci�n la llame para que se �active� , entonces es cuando no se le colocan los par�ntesis (Creo que me expliqu� bien c:)
---------------------------------------
Te podr�a decir que son caprichos de javascript; pues la mayor�a de las veces cuando se pasa un funci�n c�mo par�metro, no es necesario escribir los par�ntesis.
Pero en s� depende de c�mo est� estructurado lo que deseas hacer. En �ste caso las funciones modificadoras de arreglos como filter autom�ticamente pasan el par�metro persona (de acuerdo al ejemplo de la clase) a la funci�n es Alta.
----------------------------------------
Pones par�ntesis luego de la funci�n �nicamente cuando la quieres llamar, si lo que quieres es pasarla como argumento, es decir referenciarla se maneja igual que una variable, es decir s�lo pasas el nombre de la funci�n. Si no cada vez que llegues a esa l�nea se va a ejecutar la funci�n, y le pasar�s undefined al .map si es una funci�n que no devuelve nada y si es una funci�n que devuelve un valor terminar�s pasando el valor como argumento
--------------------------------------------
Las variables tienen valores fijos. Siempre que las llamamos nos devuelven el mismo resultado.

var patito = "patito";

alert(patito); // "patito"
alert(patito); // "patito"
alert(patito); // "patito"
alert(patito); // "patito" (siempre es lo mismo)
En cambio, las funciones pueden devolvernos diferentes resultados dependiendo de los datos que enviemos en los argumentos (o sea, dentro de los par�ntesis).

functionpatito(nombre) {
  return"el patito se llama: " + nombre;
}
alert(patito("Juan")); // "el patito se llama: Juan"
alert(patito("Pedro")); // "el patito se llama: Pedro"
alert(patito("Don Pato")); // "el patito se llama: Don Pato"

Tu tranquilo. Sigue con el curso que vas a ir entendiendo todos estos conceptos a medida que avances. 
-------------------------------------------------------
La variable es como una memoria entonces no va con par�ntesis ya que va a guardar el nombre de la variavle que puede ser x o z o y ya que genera un valor
-------------------------------------------------
�Para qu� necesitas recibir un par�metro en esa funci�n?
Los par�metros son �tiles cuando necesitas que una funci�n devuelva diferentes resultado dependiendo del argumento que les enviemos. Pero no todas los necesitan.

// No recibe par�metros
const imprimirColorBlanco = () => console.log("blanco :D");
imprimirColorBlanco(); // blanco :D
imprimirColorBlanco(); // blanco :D
imprimirColorBlanco(); // blanco :D

// S� recibe par�metros
const imprimirMensaje = (mensaje) => console.log(mensaje);
imprimirMensaje("hola"); // hola
imprimirMensaje("levillagra"); // levillagra
imprimirMensaje("disfruta"); // disfruta
imprimirMensaje("el curso :P"); // el curso :P

comentario:::::::::::::::::::::::::::::::==============>
El Object.assign() funciona bien para copiar objetos cuando no tienes mas objetos dentro del objeto. En ese caso se crea una referencia y si modificas la copia, tambi�n modificaras el original.
Lo que puedes hacer para copiar un objeto sin temor a modificar el original usa: JSON.parse(JSON.stringify(miObjeto)).

Para el tema del filter, ese es el m�todo correcto para filtrar un array. No te modifica el array que filtras, solo te devuelve un array con los objetos que cumplan la condici�n.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#21 Transformar un array

Map devuelve un nuevo array modificando cada uno de los elementos que le vayamos pasando de l array original. Este metodo siempre devulve un array nuevo sin emabargo es preciso indicar la creaci�n de un nuevo objeto para que el objeto original no se vea afectado en el futuro.

El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.

Para verificar la difencia que hay entre los arrays comparamos sus indices

Cuando queremos retornar un nuevo objeto es necesario hacer uso de la desestructuraci�n de los objetos  y dentro de la funci�n que retornara ese objeto tendremos que a ese objeto nuevo que nace apartir de otro para no modificar el original y crear uno nuevo lo envolvemos dentro de par�ntesis para que este nuevo objeto sea generado dentro del cuerpo de la funci�n. 

enlaces::::::::::::::::::::::::::::::===================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in


comentario:::::::::::::::::::::::::::::::::====================>
**map ** retorna un nuevo arreglo (en otro espacio de memoria)
foreach simplemente itera sobre los elementos aplicando la funci�n dada,
forin es mas recomendada para la iteraci�n sobre objetos no sobre arrays

comentario:::::::::::::::::::::::::::::::::====================>
Otro ejemplo envolviendo las llaves entre par�ntesis para indicar que se devuelve un nuevo objeto y no que se trata del cuerpo de la funci�n:
const users = personas.map(({edad, altura, dinero}) => ({edad, altura, dinero}))

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#22 Reducir un array a un valor

El m�todo reduce() nos permite reducir, mediante una funci�n que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor �nico.

con esta funci�n podremos representar mejor los arrays asiendo que sean m�s f�ciles de interpretar:
console.table([]) 
Y de esta manera logramos ver las columnas de las claves que hemos establesido.
console.table(personas, ["nombre", "edad"])

la funcion que hacemos de reducer, no retorna valores hasta haber terminado de iterar todo el arreglo por eso la variable en este caso se situa despues de la funci�n si la colocamos antes habra un error. 

La funci�n reduce() permite lograr objetivos que generalmente de manera estructurada cuestan un poco de trabajo lograr. El dominio de este tipo de funciones nos permitir�n logra una c�digo m�s limpio y mucho m�s f�cil de leer.

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
Imagina qe tenemos una empresa y ya viene el d�a del ni�o, por lo que van a hacer una fiesta para los trabajadores y los ni�os. para esto necesitamos saber cuantos hijos tienen cada uno de los trabajadores.
Si ya tenemos un Array con los trabajadores y cada Objeto tiene un atributo con la cantidad de hijos, de ah� podemos sacar ese numero.
//lista de objetos
var adrian= { nombre: 'Adri�n',apellido: 'Garcia',hijos: 2}
var dama= {nombre: 'Dam�ris',	apellido: 'Soto',	hijos: 1}
var neft= {	nombre: 'Nefteradi',	apellido: 'Luna',	hijos: 4}
//tenemos el listado de todos los trabajadores que son cientos
var personas = [adrian, dama, neft]
const reducir = (acum, persona) => {
	return acum + persona.hijos
}
//Array.reduce(funcion, valor inicial)
var totalNi�os = personas.reduce(reducir, 0)
console.log(`Tenemos que hacer ${totalNi�os} bolsas de dulces`)

comentario::::::::::::::::::::::::::::=============>
Que quieren decir los � ?
---------------------------------------.
Indica que se va acopiar todos los atributos del objetos, a excepci�n de los que se escriban luego de los �
ejemplo:
persona ={
	nombre: 'juan',
	apellido: 'p�rez',
	edad: 28
}
persona2 ={
        ...persona,
	edad: 32
}
Lo que hace ese c�digo es copiar el objeto persona a persona2, conservando todos los atributos, a excepci�n de la edad, que pasa de ser 28 a 32.
De esta manera estas creando un nuevo objeto independiente, ya que si escrib�s:
var persona2 = persona
estas diciendo que persona2 es el mismo objeto que persona, por lo tanto cada modificaci�n que le hagas a persona2 lo sufrir� persona.

comentario::::::::::::::::::::::::::::=============>
M�todo Reduce()
Bueno, para aclarar un poco la explicaci�n de la clase, ya que se omiten algunas cosillas:
Este m�todo lo que hace es aplicar una funci�n a un acumulador y a cada valor de un array con el fin de reducirlo a un �nico valor.
personas.reduce(reducer, 0)
Esta funci�n (en �ste caso reducer) tiene 4 argumentos; dos de ellos omitidos en la clase por fines pr�cticos:
Valor Anterior => Que es el valor devuelto en la llamada anterior de la funci�n o el ValorInicial si es que se provey�.
-Valor Actual => Elemento actual que est� siendo procesado en el array. En �ste caso libros.

�ndice Actual => �ndice del elemento actual que est� siendo procesado en el array.

Array => O sea, el array sobre el cual se llam� el m�todo reduce. En �ste caso, Personas.

Entonces, el m�todo reduce, tiene dos par�metros, la funci�n con sus 4 par�metros opcionales y el:
Valor Inicial => Objeto a usar como primer argumento en la primera llamada de la funci�n. En �ste caso 0.
Si en ValorInicial ponemos un n�mero 100, entonces ese 100 se sumar� a los 684 libros.


comentario::::::::::::::::::::::::::::=============>
Por que no necesito declarar la varible acum al usarla con el metodo reuce ?
---------------------------------------------------
dentro del reducer acum es un parametro de entrada
--------------------------------------------------
Javascript permite crear variables sin utilizar las palabras reservadas let, var o const. Sin embargo, tengo entendido que esto no es una buena pr�ctica. Para evitar que javascript procese este tipo de declaraciones puedes agregar al inicio de tu archivo .js la instrucci�n �use strict�.


comentario::::::::::::::::::::::::================>
A mi parecer creo que faltaron m�todos muy importantes como:
pop()
push()
shift()
unshift()
split()
splice()
slice()
Tambi�n trabajar con arreglos multidimensionales, que a mi parecer es algo con lo que se trabaja la mayor parte del tiempo�espero que actualicen el curso porque si faltaron bastantes cosas.
--------------------------------------
estoy de acuerdo, creo que falto mas profundizar m�s en los arrays, y las estructura de control, le falta la calidad que alcanz� el curso de python de david aroesti, esperemos a la siguiente iteraci�n, y habr� que complementar este curso leyendo un par de libros.
---------------------------------
Te colaboro con algunas definiciones:
//pop() agrega elementos al inicio del Array
//push() elimina el ultimo elemento del Array
//shift() elimina el primer elemento del Array
//unshift() Agrega un elemento al comienzo del Array.
//slice() Te permite obtener una porcion o �revanada� del arreglo. ej: personas.slice(4,6) �esto devuelve a las personas 5 y 6�
//splice() Te permite eliminar elementos de un Array, el primer parametro es la posici�n y el segundo parametro la cantidad de elementos a eliminar ej: personas.splice(4,1) solo eliminara una persona, en este caso el que este en la posici�n 4.

comentario:::::::::::::::::::::::::::::==================>
En esta funci�n:

const reducer = (acum, persona) => acum + persona.cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)

D�nde estar�amos pasando el par�metro de �acum� cuando invocamos la funci�n?
No termino de entender c�mo funciona.
Alguien podr�a explicarme?
--------------------------   ---------------------------
es un poquito complejo, pero te lo har� facil.

en una funci�n tradicional tienes esto:

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

//tambi�n puedes meter en una variable objetos, clases, arreglos, promesas, eventos, listeners, jsons, lo que quieras.
la funci�n que incluiste en tu pregunta es un �arrow function�. No explicar� la diferencia o la raz�n de ser del arrow function, para eso tienes https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch.

RESPUESTA
en el caso de tu funcion, lo que est�s haciendo es guardar en la constante �reducer� la arrow function:

(acum, persona) => { ... }
y como es obvio, los par�metros es aquello detr�s de la flecha del arrow, que es acum y persona.

�donde le pasas los par�metros? no lo haces. arrow function est� dise�ado para recibir la data dentro del scope donde se encuentre, es decir, si tu tienes una clase o un componente con 20 variables y 20 funciones dentro, cualquier arrow function que est� dentro de esa clase/componente tendr� acceso a cada variable y funci�n.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#23 C�mo funcionan las clases en JavaScript'

Las clases son funciones cuya sintaxis tiene dos componentes:
	expresiones
	declaraciones
En esta clase veremos el uso de this. Dentro de una funci�n, el valor de this depende de c�mo es llamada �sta.

JavaScript en un lenguaje orientado a objetos basado en prototipos, en lugar de estar basado en clases. Debido a esta b�sica diferencia, es menos evidente entender c�mo JavaScript nos permite crear herencia entre objetos, y heredar las propiedades y sus valores.

Cuando se habla de objetos en JavaScrip estamos hablando de prototipos y no tanto de clases como en otros lenguajes P.O.O, cambian esos conceptos al igual que no existe la herencia, pues estas llamdas "clases" terminan siendo prototipos en JavaScript.

Para definir un prototipo hay que definir una << funci�n nombreFunci�n () {} >>, luego dentro de los par�ntesis pondremos los parametros que va a requerir inicializar o crear una nueva persona, esto tambi�n es conocido en otros lenguajes como un constrcutor

new palabra reservada de JavaScript para indicar que se crearan nuevos objetos dado un prototipo, obviar el uso de este operador arroja como resultado undefined

El  operador new crea una instancia de un objeto definido por el usuario o uno de los tipos de objetos incorporados que tienen una funci�n de construcci�n. 

La palabra clave this de una funci�n se comporta un poco diferente en Javascript en comparaci�n con otros lenguajes. Adem�s tiene algunas diferencias entre el modo estricto y el modo no estricto.
En general, el valor de this est� determinado por c�mo se invoca a la funci�n. No puede ser establecida mediante una asignaci�n en tiempo de ejecuci�n, y puede ser diferente cada vez que la funci�n es invocada. ES5 introdujo el m�todo bind() para establecer el valor de la funci�n this independientemente de como es llamada, y ES2015 introdujo las funciones flecha que no proporcionan su propio "binding" de this (se mantiene el valor de this del contexto l�xico que envuelve a la funci�n)

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

En esta clase veremos c�mo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

Entendamos que el prototipo es un objeto m�s de JavaScript , si lo modificamos en cierta altura del c�digo desde all� quedara modificado.

Es importante donde colocamos las funciones que va a tener el prototipo es importate que las coloquemos todas juntas, ya que vamos a ir creando objetos (personas) con esos prototipos y queresmos que tenga todas las funciones, a menos que m�s adelante en el c�digo queramos modificar de alguna forma ese prototipo, pero lo m�s com�n es siempre definir la funci�n/es ("clases" o m�s bien prototipos) arriba y luego irlas usando en nuestro c�digo en vez de modificarlas a medida que pasa nuestro c�digo, es cuesti�n de darles un orden al iniciar el c�digo y con ello tenerlas ascecibles hacia todos los objetos que vayamos creando

output = se refiere a los valores de salida que arroja la consola


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#25 El contexto de las funciones: qui�n es this

Para colocar un debugger dentro de una arrow function conviene dejar los corchetes para que funcione, el debugger nos mostrara que la palabra calve this 

Al rastrear el this por medio del debugger se�ala que es equivalente al objeto  window el objeto global de la p�gina
Al hacer la comparaci�n << this.altura > 1.8 >> es << window.altura > 1.8 >> y el punto indica que entraremos a alguno de los atributos o claves del objeto window y al no encontrar el atributo altura el resultado de esta instancia sera << undefined >> y no sera nunca mayor que ocho que daria como resultado errores en los resultados.
Y esto de que no esperamos que << this >> no es lo que esperabamos es uno de los errores m�s comunes en JavaScript, quizas no en los primeros pasos pero a medida que avanzamos como desarrolladores con est� tegnologia, lo que pasa es que al usarlo dentro de las arrow funtions estas asigna una funci�n pero cambia el << this >> dentro de la funci�n lo que hace es apuntar al << this >> que este fuera de esta funci�n y << this >> dentro del ambito global representa analogamente a window

Persona.prototype.soyAlto = () => {
  //debugger //Funcionara cuando invoquemos la funci�n
  return this.altura > 1.8
} 

Este es el resultado de this en la consola

Window�{parent: Window, opener: null, top: Window, length: 0, frames: Window,��}
Vemos que la comparaci�n this === window arroja como resultado << 
true >>

En el contexto de ejecuci�n global (fuera de cualquier funci�n), this se refiere al objeto global, ya sea en modo estricto o no.
console.log(this.document === document); // true
// En los navegadores web, el objeto window tambi�n es un objeto global:
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37

***********Llamada simple
function f1(){
  return this;
}
f1() === window; // objeto global

En este caso, el valor de this no est� establecido por la llamada. Dado que el c�digo no est� en modo estricto, el valor de this debe ser siempre un objeto por lo que por defecto es el objeto global.
function f2(){
  "use strict"; // consultar modo estricto
  return this;
}
f2() === undefined;

En modo estricto, el valor de this se mantiene en lo que est� establecida al entrar en el contexto de ejecuci�n. Si no est� definido, permanece undefined. Tambi�n se puede ajustar a cualquier valor, tales como null o 42 o "Yo no soy this".
Nota: En el segundo ejemplo, this deber�a ser undefined, porque f2 fue llamado sin proporcionar ninguna base (ej. window.f2()). Esta caracter�stica no fue implementada en algunos navegadores cuando se comenz� a dar soporte al modo estricto. Como resultado, retorna incorrectamente el objeto window.



































































































