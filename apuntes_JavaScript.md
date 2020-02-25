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

5. Programaci�n Orientada a Objetos en JavaScript:
JavaScript dispone de fuertes capacidades de programaci�n orientada a objetos, a pesar de que han tenido lugar algunos debates respecto a las diferencias de sus capacidades en comparaci�n con otros lenguajes

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

En esta clase explicamos por qu� al introducir el arrow function sali� un error. El error del contexto de this en javascrip es uno de los errores m�s comunes.
Recuerda que dentro de la arrow function, this est� haciendo referencia al espacio global, a windows.

Para colocar un debugger dentro de una arrow function conviene dejar los corchetes para que funcione, el debugger nos mostrara que la palabra calve this 

Al rastrear el this por medio del debugger se�ala que es equivalente al objeto  window el objeto global de la p�gina
Al hacer la comparaci�n << this.altura > 1.8 >> es << window.altura > 1.8 >> y el punto indica que entraremos a alguno de los atributos o claves del objeto window y al no encontrar el atributo altura el resultado de esta instancia sera << undefined >> y no sera nunca mayor que ocho que daria como resultado errores en los resultados.
Y esto de que no esperamos que << this >> no es lo que esperabamos es uno de los errores m�s comunes en JavaScript, quizas no en los primeros pasos pero a medida que avanzamos como desarrolladores con est� tegnologia, lo que pasa es que al usarlo dentro de las arrow funtions estas asigna una funci�n pero cambia el << this >> dentro de la funci�n lo que hace es apuntar al << this >> que este fuera de esta funci�n y << this >> dentro del ambito global representa analogamente a window, esto sucede porque las arrow functions cambian quien es << this >> dentro de la funci�n 

Persona.prototype.soyAlto = () => {
  //debugger //Funcionara cuando invoquemos la funci�n
  return this.altura > 1.8
} 

Este es el resultado de this en la consola

Window�{parent: Window, opener: null, top: Window, length: 0, frames: Window,��}
Vemos que la comparaci�n this === window arroja como resultado << 
true >> que es el mismo objeto y la misma referencia en memoria

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

La expresi�n de funci�n flecha tiene una sintaxis m�s corta que una expresi�n de funci�n convencional y no vincula sus propios this, arguments, super, o new.target. Las funciones flecha siempre son an�nimas. Estas funciones son funciones no relacionadas con m�todos y no pueden ser usadas como constructores.

enlaces:::::::::::::::::::::::::::::==============>
https://yeisondaza.com/entendiendo-this-javascript
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/


p�gina::::::::::::::::::::::::::::===============>
this es un keyword de JavaScript que tiene un comportamiento muy diferente a otros lenguajes de programaci�n, as� para algunos es considerado uno de los grandes errores de dise�o del lenguaje.

comentario:::::::::::::::::::::::::::::::==============>
This en las arrow functions es �window� porque:
Las Arrow functions heredan this de su �parent Scope�, lo que es llamado �lexical Scoping�
Fuente:
https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

comentario::::::::::::::::::::::==============>
Recuerdo que tuve problemas par entender esto al principio pero lo entend� as�:
Las arrow functions tienen el m�todo .bin() implicitamente y el m�todo .bind() devuelve un nuevo objeto con this haciendo referencia al objeto global(objeto window).

Persona.prototype.soyAlto = () => this.altura > 1.8

es lo mismo que:
Persona.prototype.soyAlto = (function(){
	returnthis.altura > 1.8
}).bind(this)

recomiendo este articulo: Cuando no usar arrow functions en JavaScript
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/


comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
Hab�a olvidado por completo que tanto arrow functions como lambdas carecen de referencia this  https://en.wikipedia.org/wiki/Anonymous_function

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
La sentencia debugger invoca cualquier funcionalidad de depuraci�n disponible, tiene la misma funci�n que un breakpoint. Si la funcionalidad de depuraci�n no est� disponible, esta sentencia no tiene efecto alguno.
Fuente: MDN
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/debugger
-------------------------------------------------------
Para solventar errores (�bugs� como dicen los programadores) deteniendo tu programa en la linea de codigo donde coloques el debugger y dandote herramientas para ver que sucede

Hace mucho m�s f�cil la gestion por lo poco que he visto, en especial en ciclos

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
lo que est�s haciendo no es nada nuevo, y es algo bien conocido y usado en muchos lenguajes de programaci�n, no solo Javascript. En C# eso ser�a un delegado y en ambos lenguajes es la base te�rica de los eventos (:
te pondr� un c�digo de ejemplo:

// funci�n tradicional
functionsayGoodbye() {
	console.log("adios!");
}

var myExpression = sayGoodbye();

//arrow function almacenada en una variable
var sayHello = () => {
	console.log("hola ChekeGT!");
}

//abreviado ser�a as�, solo para demostrar una sintaxis limpia
var sayHello = () => console.log(message);
en estos ejemplos tienes una funci�n tradicional. la de toda la vida. las funciones tradicionales pueden ser almacenadas en una variable y eso te permite cosas muy interesantes en tu c�digo.

un arrow function tambi�n se puede almacenar en una variable, son id�nticos en ese aspecto.

En el caso de los ejemplos, si tu haces:
sayGoodbye();
myExpression();
ambos te dar�n el mismo resultado. en el primero ejecutas la funci�n, y en el segundo ejecutas la funci�n almacenada en la variable. Con los arrow functions sucede igual.

https://stackoverflow.com/questions/37228121/es6-assign-a-variable-with-an-arrow-function

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#26 La verdad oculta sobre las clases en JavaScript

Los objetos en JavaScript son �contenedores� din�micos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no s�lo se busca en el propio objeto sino tambi�n en el prototipo del objeto, en el prototipo del prototipo, y as� sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

En algunos lenguajes de programaci�n (POO) y tienes una idea de su funcionamiento una pregunta que surge es : �c�mo hago para que un prototipo herede de otro?. Pero esto no ocurre exactamente de la forma como ocurre en otros lenjuages (POO) pues JavaScritp no soporta la herencia  por que no soporta las clases, hay prototipos que son objetos y les vamos agregando metodos que reciben funciones, saben quien es << this >> y saben como ejecutarlas, pero no existe un sistema que diga que este prototipo va heredar de otro, lo que s� existe es la HERENCIA PROTOTIPAL.

El prototipo "hijo" tiene que responder a un metodo por lo que va a buscar en el prototipo padre haber si lo encuentra, si no lo encuentra seguira esa cadena de buscar en el prototipo padre hasta llegar al prototipo base de todos los objetos que es object y si este no conoce ese mensaje el interprete nos dara el error que no puede ejecutarse es metodo.


los nombres de variables << fn >> << noop >> usualmente se dan a variables que contienen funciones que no hacen nada, vacia o funci�n dumie 

Los prototipos simpre son los objetos con los que estamos trabajando, todas las funciones tienen << prototype >> y en el caso de los parametros que hay dentro de una funci�n tambi�n si dentro del contexto estos parametros representan funciones.Vemos que el prototype es un atributo que tienen todas las funciones y que es un objeto que nos dice que metodos entiende, que atributos tiene, cual es su constructor si lo tiene, y tambi�n tiene un atributo que  aparece como << __proto__ >> que apunta al prototipo que tiene el objeto del que se desplieja en este caso es << Object >>  y ah� termina la cadena de adherencia de prototipos

Persona.prototype
    {saludar: �, soyAlto: �, constructor: �}
        saludar: � ()
        soyAlto: � ()
        constructor: � Persona(nombre, apellido, altura)
        __proto__: Object

Ahora vemos este otro caso que es de donde estamos aplicando la cadena de prototipos y la herencia prototipal,  tenemos que es << Persona >> pero con el metodo de la herencia modificamos el constructor como agregar el nuevo metodo de saludar (el nuevo mensaje que va a mostrar) y tambi�n vemos que el << __proto__ >> es un Object que tiene otros metodos << saludar >> y << soyAlto >>

Desarrollador.prototype
    Persona {constructor: �, saludar: �}
       constructor: � Desarrollador(nombre, apellido)
       saludar: � ()
       __proto__:
               saludar: � ()
               soyAlto: � ()
               constructor: � Persona(nombre, apellido, altura)
               __proto__: Object

De esta manera es como nosotros podemos hacer (invocar) << atruro.soyAlto >> arrojara << false >> pues el metodo soy alto no existe en el prototipe directamente del desarrollador lo que hace entonces todos lo objetos que sean creados con el porototipo de desarrollador es ver en primer lugar su su propio prototipo lo tiene y sino se van a ir fijando en la cadena (desplegable) de << __proto__ >> si alguno de ellos entiende el m�todo, vemos para el caso de << arturo.soyalto >> encuentra el proto tipo de << Persona >> y tambi�n podemos ver que tiene el m�todo << saludar >> pero el de << Desarrollador >> lo pisa ademas vemos que finalmente tenemos otro << __proto__ >> que ahora apunta << Object >> y son todos m�todos que tienen todos los  objetos  y todos los atributos que tienen todos los objetos.
Por �ltimo cabe destacar de todo esto es que la herencia como se conoce normalmente en la programaci�n orientada a objetos (POO) no existe en JavaScript, no hay clases hay prototipos y existe lo que es la herencia prototipal que nos muestra como al ejecutar un metodo lo que hace es buscar en el prototipo de ese objeto haber si lo encuentra si finalmente no lo encontro este buscar en el << __proto__ >> 	que apunta a << Object >> para intentar resolverlo.

proto surge al desplgar un objeto desde la consola del inspector de elementos

*********************enJavaScript (de aqu� pa'bajo)

objeto: Los objetos son las entidades b�sicas de tiempo de ejecuci�n identificables en la programaci�n orientada a objetos. Entonces, un objeto representa una entidad que puede almacenar datos y tiene su interfaz a trav�s de funciones.

clase: Tambi�n podemos decir que una clase es una colecci�n de objetos de tipos similares.
Una vez que se crea una clase, podemos crear cualquier n�mero de objetos que pertenezcan a esa clase. En realidad, una clase no especifica ning�n dato, determina las propiedades o m�todos que pueden contener un objeto de esa clase. Las clases normalmente act�an como un tipo de datos incorporado, pero en realidad son tipos de datos definidos por el usuario.

Abstracci�n de datos: La abstracci�n de datos es un concepto que oculta los detalles de fondo y representa solo la informaci�n necesaria para el mundo exterior . Es el proceso de simplificaci�n del concepto del mundo real en su componente absolutamente necesario.

Por ejemplo, est�s montando una bicicleta, solo conoces los m�todos esenciales para montar una bicicleta, como acelerar, frenar, c�mo cambiar las velocidades, usar el embrague, etc. Simplemente usa el acelerador y su bicicleta comienza a moverse, no necesita saber los detalles de lo que sucede adentro para andar en bicicleta.
Esto se llama abstracci�n, solo conoce las partes esenciales para andar en bicicleta () sin incluir el proceso de fondo o la explicaci�n.

Encapsulaci�n de datos: Es una t�cnica que combina mienbros de datos y funciones, opera esos datos en una s�la �nidad conocida como clase. Esta t�cnica b�sicamente el inpide el acceso a los datos directamente. Las funciones proporcionan la �nica forma de poder acceder a los datos.
Si desea leer un dato en un objeto, debe llamar a la funci�n miembro en el objeto. La funci�n leer� los datos y le devolver� los datos. Por lo tanto, no tiene acceso a los datos directamente. Como los datos est�n ocultos, est�n protegidos contra alteraciones accidentales.

Herencia: B�sicamente es un m�todo que proporciona una manera de las capacidades y propiedades de una clase en otra clase. Esta t�cnica proporciona reutilizaci�n de c�digo a los programadores. Podemos formar una nueva clase a partir de una clase existente, donde la clase existente contiene algunas propiedades o m�todos que tambi�n existen en una clase. Aqu� la nueva clase se llama como la clase derivada y la clase existente, es decir, la clase de la que se deriva la nueva clase se llama como la clase base.

Por ejemplo; 'veh�culo' es una clase con algunas propiedades y m�todos. El 'autom�vil' y el 'autob�s' tambi�n son dos clases que tiene algunas de sus propiedades y m�todos que ya existen en la clase 'veh�culo'.

Polimorfismo: Es la capacidad de procesar un mensaje o datos en m�s de una forma. Admite la capacidad de un objeto de una clase para comportase de manera diferente en respuesta a un mensaje o acci�n.
Considerate a ti como un ejemplo de la vida real, que puede tener diferentes formas de interpretar la informaci�n y tener caracter�sticas diferentes como ser: estudiante, amante, payaso, perdido, imbecil, cantante. Esto se llama polimorfismo, ya que tiene algunas formas o caracter�sticas diferentes con respecto a una acci�n o situaci�n diferente.

Sobrecarga: es la capacidad de una sola funci�n para realizar diferentes tareas dependiendo de la situaci�n. Entonces, el concepto de sobrecarga est� relacionado de alguna manera con la propiedad del polimorfismo de OOP. Cuando se debe operar una funci�n u operador existente en un nuevo tipo de datos, se llama como sobrecargado.

La sobrecarga permite crear diferentes m�todos con el mismo nombre que difieren entre s� en el tipo de entrada y salida de la funci�n. Se puede usar con funciones y miembros.
*************************enJavaScript (de aqu� pa'rriba)

PROTOTIPO: 1. Primer ejemplar que se fabrica de una figura, un invento u otra cosa, y que sirve de modelo para fabricar otras iguales, o molde original con el que se fabrica. 2. Persona o cosa que re�ne en grado m�ximo las caracter�sticas principales de cierto tipo de cosas y puede representarlas. 
3. En el �mbito de la inform�tica, se conoce como prototipo al modelo que se desarrolla de un software para reflejar c�mo se comporta un sistema. Estos prototipos se utilizan para comprender c�mo funciona el sistema en cuesti�n.
4 . La noci�n de prototipo procede de la lengua griega. En concreto, es fruto de la suma de dos componentes de dicha lengua:
-El prefijo �protos-�, que puede traducirse como �el primero�.
-El sustantivo �tipos�, que es sin�nimo de �modelo� o �tipo�.
5. Este t�rmino se emplea para nombrar al primer dispositivo que se desarrolla de algo y que sirve como modelo para la fabricaci�n de los siguientes o como muestra.
7. es un ejemplar o primer molde en que se fabrica una figura u otra cosa.
8. perfecto y modelo de una virtud, vicio o cualidad.
9. tambi�n se puede referir a cualquier tipo de m�quina en pruebas, o un objeto dise�ado para una demostraci�n de cualquier tipo.
10. prototipado puede ser un modelo del ciclo de vida del software, tal como el desarrollo en espiral o el desarrollo en cascada.

enlaces:::::::::::::::::::::::::::::==============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes
https://www.csetutor.com/basic-concept-of-object-oriented-programming/
https://javascript.info/class-inheritance
https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos


comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes
Estuve leyendo este articulo, no se si el curso se quedo anticuado y ya mejoraron la forma de manejar las clases.
Hice las pruebas y funciona de maravilla, es mas f�cil que el prototipado.
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
Los objetos en JavaScript son �contenedores� din�micos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no s�lo se busca en el propio objeto sino tambi�n en el prototipo del objeto, en el prototipo del prototipo, y as� sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
javascript no soporta la herencia por que en realidad javascript no tiene clases tiene prototipos a los que les vamos agregando metodos que reciben funciones y saben quien es this saben como ejecutarlas lo que en realidad si existe es la herencia prototifal

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
Qu� quiere decir constructor?
------------------------------------
Es una funci�n que se ejecuta cada vez que creamos una nueva instancia del objeto.
-----------------------------------
Es el encargado de crear un nuevo objeto o mejor dicho, una nueva instancia del objeto. B�sicamente se encarga de preparar un objeto para su uso.

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
No Clases, por lo tanto no existen herencias, s�lo son prototipos que se conectan y hacen que fluya/circule la informaci�n.
Si �sta clase fue algo confusa, no se preocupen, s�lo fue una explicaci�n a grandes rasgos, en la siguiente clase viene mejor explicado, bueno eso dice Sacha.

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
Ya se puede utilizar el sintax sugar Extends para la herencia de clases. Aqu� hay muy buenos ejemplos desde lo m�s simple hasta lo m�s complejo como lo vimos en esta clase.
link:
http://javascript.info/class-inheritance

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#27 Clases en JavaScript

Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.
El m�todo constructor es un m�todo especial para crear e inicializar un objeto creado a partir de una clase.

EcmaScript es el estandar en el cual se basa JavaScript para conformarse como lenguaje, siendo todas las funcionalidades del lenguaje. Y a�n que usemos la palabra reservada << class >> todo por debajo son prototipos, y aunque quizas de aqu� en adelante los empecemos a llamar clases no debemos olvidar que son prototipos.

Podemos ver el siguente objeto << Persona >> en consola que tiene unos atributos, el << __proto__ >> que es un objeto contiene ciertos metodos y su << __proto__ >> es el prototipo << Object >> 
jonny
   Persona {nombre: "Jonathan", apellido: "Cardozo", altura: "1.92"}
        nombre: "Jonathan"
        apellido: "Cardozo"
        altura: "1.92"
        __proto__:
	constructor: class Persona
	saludar: � saludar()
	soyAlto: � soyAlto()
	__proto__: Object

Para hacer que una clase "herede" de otra s�lo hace falta la palabra clave << extends >> 

La palabra reservada super llama al constructor de la clase padre


Programaci�n basada ??en prototipos
La programaci�n basada ??en prototipos es un estilo de programaci�n orientada a objetos en la que las clases no est�n presentes y la reutilizaci�n de comportamiento (conocido como herencia en lenguajes basados ??en clases) se lleva a cabo a trav�s de un proceso de decoraci�n de objetos existentes que sirven de prototipos. Este modelo tambi�n se conoce como programaci�n sin clases, orientada a prototipos o basada en ejemplos.

error==================::::::::::::::::::::::::::>
var aleja = new Desarrollador('Aleja', 'De Mi Coraz�n', '1.72')

clase25.js:39 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Desarrollador (clase25.js:39)
    at <anonymous>:1:13 //Pimero debemos llamar al constructor << super >> y pasarle los parametros antes de usar << this  >> dentro de la clase padre por as� llamarla, luego de esto podremo acceder a << this >> sin que nos marque un error.

enlaces:::::::::::::::::::::::::::::==============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
no existe polimorfismo en javascript?
---------------------------
S� existe en JS.
Esta gu�a te puede ayudar: https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci�n_a_JavaScript_orientado_a_objetos.

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
Es necesario volver a escribir el constructor en la clase Desarrollador ?. Yo hice la prueba omitiendolo ?. Yo hice la prueba sin usarlo y me funcion� bien, aunque no se si eso me puede traer un problema despu�s. Ejm de como lo hice
class Desarrollador extends Persona{
saludar (){
console.log(Hola soy desarrolador mi nombre es ${this.nombre})
}
--------------------------------------
Creo que si no se declara el constructor de forma expl�cita en la subclase el interprete de Javascript lo hace de forma impl�cita y llama al constructor de la clase padre con los argumentos enviados a trav�s de la subclase. Por eso te funciona tu c�digo.
En el caso de declarar el constructor hay dos reglas respecto al constructor de una clase que hereda de otra que debes tomar en cuenta:
this no puede ser usado en el constructor de una clase hijo hasta que super() sea llamado.
Los constructores de clases en ES6 deben llamar a super() si son subclases o deben regresar de forma explicita un objeto.
-------------------------------------------------
Si defines un m�todo constructor en la clase que hereda y no llamas a super debe darte el error ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor. La �nica forma de que te este funcionando sin el super() es que tampoco tengas el m�todo constructor, en este caso Javascript agrega un constructor por default en el que hace la llamada a super.
--------------------------------------
Al escribir **super ** esta invocando el m�todo **constructor ** de tu clase Persona , y en este caso estas enviando en el super los par�metros para aplicar el don�t repeat yourself.

comentarios:::::::::::::::::::::::::::::::::::::::::::::::::================>
En la teor�a de Orientado a objetos, cuando una clase hija hereda a una clase padre, tambi�n hereda su constructor.
https://javascript.info/class-inheritance en este enlace, en el primer recuadro de c�digo est� muy bien explicado.
https://javascript.info/class-inheritance#overriding-constructor en esta secci�n del mismo enlace te explican muy bien como hacer �overriding constructor�, que es precisamente lo que est�s buscando.

comentario:::::::::::::::::::::::::::::::::::::::::::::::::================>
gente� pregunta, yo hice el experimento sin copiar el constructor de la clase padre y sigue funcionando ~ no entiendo muy bien para qu� se usa el super()� es decir, si entiendo pero � si se usa el mismo constructor �para qu� se duplica?
--------------------------------------------------------
este enlace te lo explica todo: https://stackoverflow.com/questions/39822941/what-does-super-do-without-any-arguments
Tampoco te lies demasiado, con ES6 super queda deprecado en React dentro de su sintaxis, y con React Hooks es todav�a m�s f�cil la sint�xis. Est� bien aprender super() en React para saber leer c�digo que lo contenga, pero no lo uses. Aprende Hooks
https://reactjs.org/docs/hooks-intro.html
en resumen:
una clase derivada debe usar super() si la clase tiene un constructor. En React todos los componentes extienden de Component por lo que lo necesitan.
Necesitas super() para tener acceso a this o de lo contrario nunca se inicializa this.
Te permite inicializar states y realizar binding dentro del constructor sin necesidad de hacer uso del lifecycle de React para ello.
para acceder a los props dentro del constructor requieres super() y que este obtenga props como par�metro, para hacer this.props.
constructor(props) {
  super(props);
  this.state = {count: props.initialCount};
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
6. Asincronismo

Se aplica a la modalidad de transmisi�n de datos en la que cada car�cter llega precedido por un bit inicial y seguido de un bit final.

#28 Funciones como par�metros

En JavaScript, los par�metros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser �til colocar un valor por defecto diferente que lo eval�e como verdadero.

Para entender el asincronismo hay que tener en cuenta que las funciones tambi�n pueden ser pasadas como parametros. Dentro de la funci�n tambi�n podemos establecer como parametro para que arroge valor false 

Hay ciertos valores que se comportan como true o como false:
	false = << null >> << 0 >> << '' >>
	true = << {object} >> << [] >> << 'holaMundo' >>
En el caso que sean puestos dentro de una estructura de control y evaluados dentro de una condici�n dara como resultado un valor booleano. Pero dentro de las practicas de programaci�n puede resultar mucho mejor colocar el valor booleano y el c�digo resultara m�s lejible.
Es importante tener definidos l�s variables que le pasaremos a nuestras funciones al ser invocadas lo requeriran

La palabra clave super es usada para llamar funciones del objeto padre.

undefined evaluado como una condici�n dentro de un << if >> da como resultado false 

enlaces:::::::::::::::::::::================>
https://stackoverflow.com/questions/32647215/declaring-static-constants-in-es6-classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy

comentarios::::::::::::::::::::::::::::::::::==============>
Como puedo declarar una constante dentrode una clase en JS.
Digamos un atributo static.
----------------------------------------------------
Encuentras toda la info aqu�: https://stackoverflow.com/questions/32647215/declaring-static-constants-in-es6-classes
En resumen, las constantes est�ticas en clases de JavaScript solo est�n disponibles a partir de ES7 o con babel-preset-stage-0. Con ES6 �normalito� debemos usar getters y setters.

comentarios::::::::::::::::::::::::::::::::::==============>
No me entero de nada con este profesor ??
--------------------------------------------
 Alguna vez me sent� igual. Lo que me ayudo muchisimo fue complementar las clases con lectura sobre el tema.
Te recomiendo darle un vistazo a estos link =
https://wmedia.es/como-aprender-javascript-de-una-vez-por-todas/
https://danielmoralesp.gitbooks.io/javascript-avanzado-en-espanol/content/
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#29C�mo funciona el asincronismo en JavaScript

JavaScript s�lo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecuci�n de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deber�n ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que est�n en la pila de ejecuci�n.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop quedar� bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

Apuntes:
S�lo puede ejecutar un tarea a la vez, aunque no es multitarea puede delegar la ejecuci�n de ciertas funciones a otros procesos (EventLoop)
Pila de ejcuci�n o callstack aqu� va poniendo las llamdas a funciones seg�n el orden de ejecuci�n del programa, si una funci�n llama a otra esta se agrega a la pila, cuando termina de ejecutar una funci�n la saca de la pila y la bota. En alg�n momento dado el programa necesita saber algo por medio del navegador y al regresar traera una funci�n a esto se le llama callback una funci�n que JavaScript ejecutara cuando regrese la respuesta del servidor, mientras JavaScript continua con el programa principal, cuando llegue la respuesta la funci�n a ejecutar ira a parar a la cola de tareas donde se ira encolando (peticiones a servidores, interaciones visuales, navegaci�n claid inside, los eventos que se realizan cada cierto tiempo) solo hasta que el programa se quede sin funciones en la pila de ejecuci�n es que va ir a buscar las funciones de la cola de tareas por eso hay que tener cuidado de no generar un cuello de botella en la pila de ejecuci�n, si JavaScript se queda ejecutando tareas muy pesadas las funciones de la cola de tareas van a tardar mucho tiempo en ejecutarse por eso �NO BLOQUEAR EL EVENTLOOP!  

enlaces:::::::::::::::::::::================>
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!

https://stackoverflow.com/questions/33768726/blocking-event-loop
https://www.youtube.com/watch?v=PndHsDpEfhU&list=PLImOJ2OqvvkCuDi6E33HXMP23BvYYBHcm
https://www.youtube.com/watch?v=W8AeMrVtFLY
https://github.com/leonardomso/33-js-concepts


comentario::::::::::::::::::::::=============>
Un cuello de botella siempre har� referencia a un elemento que limita una cadena de ejecuci�n. En este caso, si tenemos una funci�n que est� tomando mucho tiempo la pila de ejecuci�n se ver� sobrecargada y el resto de tu aplicaci�n se pondr� mucho m�s lenta al punto de no ser usable

comentario::::::::::::::::::::::=============>
�C�mo bloquear ek eventloop?
-------------------------------------------------------
Puedes bloquear el event loop creando un for loop infinito o un while, o como en el siguiente ejemplo, una funci�n que se llame a s� misma.
functionrepeat(operation, num) {
    if (num <= 0) return
    operation()
    repeat(operation, --num)
}
------------------------------------------
while(true){
console.warn(' NO VOY A BLOQUEAR EL EVENTLOOP')
 } //No! Fuera�!! Impulso de idiotez�!! D:

comentario::::::::::::::::::::::=============>
Seg�n entiendo el c�digo se lee de arriba hacia abajo y despu�s apila de abajo hacia arriba.
--------------------------------------------------
Algo as�, el c�digo se va leyendo de arriba a abajo y mientras se vaya encontrando funciones o tareas va a irlas mandando al callstack o al queue.

comentario::::::::::::::::::::::=============>
Transcripci�n del gui�n del video
(No tan exacta�)
Asincronismo
Javascript s�lo puede hacer una cosa a la vez � pero puede delegar la ejecuci�n de ciertas funciones a otros procesos.
Este modelo de concurrencia se llama EventLoop.
�
JavaScript tiene algo llamado pila de ejecuci�n o callStack donde va poniendo las llamadas a las funciones seg�n el orden de ejecuci�n de nuestro programa; si una funci�n llama a otra, entonces esta se agrega a la pila.
Cuando termina de ejecutar una funci�n la saca de la pila y la desecha.

En alg�n momento dado nuestro programa necesita alg�n dato de otro sitio en la web y le pide al navegador que cu�ndo obtenga los datos ejecute cierta funci�n. Esta tarea que se lleva el navegador se llama �callBack�.
Mientras tanto js sigue ejecutando nuestro programa principal y cuando la respuesta llega va a parar a la �cola de tareas�.
Aqu� las tareas se ordenan una detr�s de la otra a medida de que van llegando.

Qu� tareas van a parar a esta cola?
� las peticiones a servidores
� las interacciones visuales
� la navegaci�n clayInside (dice esto?)
� los eventos que se realizan cada cierto tiempo

Reci�n cuando el programa se queda sin funciones en la pila de ejecuci�n es que va a ir a buscar las funciones en la �cola de tareas�; por eso es que hay que tener cuidado de no generar un �cuello de botella� en la pila de ejecuci�n.

Si javaScript se queda ejecutando tareas muy pesadas las funciones de la �cola de tareas� van a tardar mucho tiempo en ejecutarse.

Por eso recuerda estas palabras y repitelas todas las noche antes de irte a dormir:
No Voy A Bloquear el EventLoop!

comentarios:::::::::::::::::::::::================>
Ya entiendo porqu� JS fue tan odiado, no tiene un buen POO, tampoco es multitarea�.
---------------------------------------
Solo odiado por los que unicamente piensan dentro de la caja.
Por eso hay que pensar fuera de la caja
--------------------------------------------
Es odiado porque JS trabaja diferente su POO donde en lugar de hacer copias a lo loco de Propiedades y M�todos entre objetos, los delega entre objetos padres e hijos en el Prototype Chain ahorr�ndose performance. Pero muchos devs que vienen de otros lenguajes les da flojera tratar de entender esas funcionalidades.
BTW!! Java esta copiando el asincronismo de Javascript en la versi�n 10 ya viene con Promises. Tambien Kotlin viene con algo parecido a Async/Await 
----------------------------------------
No se trata de flojera, adem�s Javascript no es orientado a objetos, es pura programaci�n estructurada y funcional.
Programaci�n estructurada porque trabaja instrucci�n a instrucci�n y funcional porque est� todo el tiempo haciendo callbacks.
Lo que ocurre con muchos programadores es que, se pas� de la programaci�n estructurada a la POO. Ese paradigma permit�a mejorar mucho el dise�o y el mantenimiento del c�digo, b�sicamente ahorrar costes. Por lo tanto tratar con lenguajes como Javascript se siente como un paso atr�s. Ya que mantener c�digo JS en archivos grandes es insufrible por lo que veo.
Como dato personal, espero encontrar formas eficiente de organizar el c�digo a medida que avance en la carrera de JS. Porque la programaci�n estructurada es lo que tiene, que llega un momento en que es insostenible, no hay quien le meta mano.
-----------------------------------------
Lo m�s importante no es la eficiencia al programar, sino la legibilidad y la ^^cohesi�n**. La eficiencia solo debe ser tratada cuando haya problemas de eficiencia que podamos medir con pruebas.

Ya que primero estamos las personas, las que leemos y manipulamos el c�digo, y luego las m�quinas, las que a d�a de hoy tienen gran potencia para permitirnos no ser tan eficientes al codificar.

comentario::::::::::::::::::::===========>
esta analog�a me pareci� muy buena para entender aun mas el asincronismo de JS:
Imagina que te levantas una ma�ana a preparar tu desayuno. Primero decides tostar tu pan y luego preparar�s tu avena. Si fuera una persona s�ncrona (Blocking) tendr�as que esperar a tostar tu pan para rec�en preparar tu avena. Pero si fuera una persona as�ncrona (Non Blocking) luego de poner a tostar tu pan, vas preparando tu avena. La acci�n de que salga tu pan de la tostadora ser�a un callback que est� esperando que finalice el proceso para ejecutarse. Pero otros procesos (como preparar tu avena) ya podr�an irse realizando.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#30 C�mo funciona el tiempo en JavaScript

En principio, cualquier tarea que se haya delegado al navegador a trav�s de un callback, deber� esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta raz�n el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de all�, s�lo cuando la cola de tareas se haya vaciado.

C�mo JavaScript ejecuta algo de manera asincrona
  Tener en cuenta las tareas que se ejecutan de esta manera
   Tareas a tiempo futuro
    Interactuar el DOM , ya sea modificando alguno de sus elementos del documento (titulos, botones, CSS, alert) todo esto tambi�n se ejectuta de manera asincrona
    Hacer un pedido de datos externo, un request externo (Vanilla, jQuery, fetch) esto tambi�n se ejectuta de manera asincrona y hay que tenerlo en cuenta cuando estamos desarrollando


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
El setTimeOut con tiempo 0 cumple la misma funci�n que el window.onload?
---------------------------------
Son dos conceptos diferentes. El window.onload es un evento del objeto window. Este se ejecuta justo cuando una p�gina termina de cargarse. Es �til cuando necesitas manipular el DOM ya que asi te aseguras que todo el DOM ya ha sido cargado.
Por otro lado el setTimeout, hace parte del API del browser. Es un m�todo, as�ncrono, que ejecuta una funci�n despu�s de cierto tiempo. Asi el tiempo sea 0, se ejecutar� de inmediato al final del callstack.

comentarios::::::::::::::::::::::::===========>
Si console.log() es una funci�n y se ejecuta en el hilo principal y SetTimeout() tambi�n es una funci�n pero se encola para ser ejecutada, como sabemos que funciones javascript se encolan y cuales ejecutan directamente?
---------------------------------------------------
Porque setTimeOut estar�a haciendo callBack�
La funci�n console.log(' ') est� siendo llamada inmediatamente.
setTimeOut( function(){}, 2000 ) es llamada al instante tambi�n, pero la funci�n que hay dentro de esta funci�n es callback y ser� enviada a la cola de tareas una vez pasen los 2 segundos. Lo que hay en la cola de tareas va a ser ejecutado una vez que JavaScript finalice la pila de ejecuci�n principal.
En sintesis, sabremos que la funci�n ser� demorada cuando hagamos un callback. Que es una funci�n que tenga como argumento otra funci�n. Es decir que se requiere el resultado de la funci�n b para completar a.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#31 Callbacks
= Devoluciones de llamada

En esta clase aprenderemos que son los callbacks y usaremos una librer�a externa que se llama jQuery.
Un callback es una funci�n que se pasa a otra funci�n como un argumento. Esta funci�n se invoca, despu�s, dentro de la funci�n externa para completar alguna acci�n.

CDN = Content Delivery Network = Red de entrega de contenidos = Es una red superpuesta de computadoras que continen copias de datos, colocados en varios puntos de una red con el fin de m�ximizar el ancho de banda para el acceso a los datos del cliente por una red.

Un m�todo que todos los strings tiene es << replace >> 
<< arguments >>  es una varaible que trae por defecto todas las funciones

Revisamos la documentaci�n para el m�todo .get de jQuery 

enlaces::::::::::::::::::::===============>
Si desean acceder a una API con datos de usuarios de Github pueden navegar aqui: https://api.github.com/algunusuario
https://jquery.com/
https://swapi.co/
https://code.jquery.com/
https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos
https://medium.com/jsninja/call-stack-event-loop-and-task-queue-d49eff2ec7bb
https://api.jquery.com/jquery.get/

�hay otras apis del tipo de la de star wars pero con otras pel�culas, series o productos?
�sta est� bastante buena
http://www.omdbapi.com/
Ejemplo:
http://www.omdbapi.com/?apikey=[yourkey]&t=harry+potter

comentarios::::::::::::::::::::::::::::::============>
�Qu� es un API?
------------------------------------------
Application programming interface.
Es b�sicamente est�ndares de comunicaci�n para hacer conexiones clientes servidor, el API m�s utilizado actualmente en web es REST pero GraphQL ha venido ganando much�sima fuerza.
Ten en cuenta que GraphQL no es un API pero m�s bien un lenguaje para hacer peticiones.
As� es, pero el t�rmino API se extiende m�s all� de s�lo eso. Java tiene su propia API por ejemplo, Al igual que iOS y Android. API es una serie de procesos que se deben seguir para establecer comunicaci�n entre dos partes, creo que esa ser�a una buena manera de explicarlo.
De todas maneras a medida que avances con tu carrera personal como desarrollador ir�s experimentando y aprendiendo m�s al respecto

comentarios::::::::::::::::::::::::::::::============>
Cual es la verdadera finalidad de los callback no entend�
------------------------------------------------------------------------
En t�rminos sencillos un callback es una funci�n que se pasa como par�metro a otra funci�n y su finalidad es llevar la respuesta que da un servidor a un request (solicitud) que hayamos mandado
----------------------------------------------------------
Los callbacks son una funci�n pasada como par�metro que va a ser ejecutada en cierto momento. As� logramos tener un c�digo as�ncrono que nos permite postergar la ejecuci�n de cierta tarea hasta que ocurra un evento
En clases posteriores vas a ver una mejor forma de lograr c�digo as�ncrono usando promesas.
---------------------------------------------------------------
Los callback te permiten ejecutar una funci�n cuando algo pasa, si por ejemplo queremos que se env�e una petici�n al servidor cuando presionamos un bot�n los callbacks son los que nos van a permitir realizar esta operaci�n. Piensalo c�mo funciones que ser�n pasadas como argumentos para en caso de que se d� una acci�n sea ejecutada

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#32 Haciendo m�ltiples requests

En esta clase accederemos a m�ltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi.

tener en cuenta que para que la funci�n reaccione al llamarla hay que pasarle dentro de ella el m�todo << $.get >> dentro los par�metros uno de esos par�metros tambi�n estara definido dentro de la funci�n.

enlaces::::::::::::::::::::::::::::::===================>
http://www.enrique7mc.com/2016/05/lista-apis-publicas/

Aqu� un resumen del uso de Ajax con Jquery:
https://webdesign.tutsplus.com/es/tutorials/a-beginners-guide-to-ajax-with-jquery--cms-25126
Documentaci�n
https://www.w3schools.com/jquery/jquery_ajax_intro.asp

Te dejo algunos ejemplos de otras API�s:
https://developer.marvel.com/
https://rickandmortyapi.com/
https://developers.themoviedb.org/3/movies

comentarios::::::::::::::::::::::::===============>
Hay alguna forma de hacer esto sin recurrir a jquery?
---------------------------------------------------------------
broo te tengo la soluci�n

const StarApi = 'https://swapi.co/api/'
const peopleSource = 'people/'
const opts = {crossDomain: true}

asyncfunctionload(){

    asyncfunctionGetData(url, opts){
        const response = await fetch(url);
        const data = await response.json();
        return (data)
    }
    asyncfunctionGetSource(Source){
        constlist = await GetData(`${StarApi}${Source}`);
        return (list)
    }

    const people =  await GetSource(peopleSource)
    functionCharacterName(a){
        console.log(people.results[a].name)
    }
    CharacterName(1)
CharacterName(2)
}
load()

comentarios::::::::::::::::::::::::===============>
Asincronismo
Es llamar a uno o m�ltiples m�todos asincr�nicos, pero sin conocer en qu� orden nos llegar�n las respuestas, eso depende del servidor y de cuanto tarda cada uno de los requests.
B�sicamente, conocemos en qu� orden lanzamos los requests, pero no sabemos en qu� orden nos llegar�n.

comentarios::::::::::::::::::::::::::==============>
Esto de usar APIs es una muy buena herramienta para construir grandes p�ginas.
Les paso �sta web que contiene un listado de APIs p�blicas:
http://www.enrique7mc.com/2016/05/lista-apis-publicas/
Nota: El link originalmente lo comparti� alguien en el curso de jQuery a JS

comentarios::::::::::::::::::::::::::==============>
Resumen de la clase:
Requests en paralelo
Creamos una nueva funci�n y modificamos levemente el c�digo para hacer el callback ingresando solamente el id:
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}
const onPeopleResponse = function(person){
    console.log(person.name)
}

functionobtenerPersonaje(id){
    consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

Dado este c�digo.
En qu� orden nos llegar�n las respuestas?

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

//  3
//  2
//  1

En este request el resultado lleg� en el orden inverso en el que los pedimos.
Por qu� sucede esto?
Por el asincronismo de JS.
No sabemos en qu� orden nos llegar�n las respuestas, esto depende del servidor y de cada uno de los requests.
Iniciamos los requests en un determinado orden pero no sabemos en qu� orden van a llegar.

comentarios::::::::::::::::::::::::::::==========================>
�Por qu� las llamadas se hacen de forma paralela? Si JS no es lenguaje multihilo?
----------------------------------------------------------------
no est�n en paralelo. est�n desincronizadas. es tema de async. son dos cosas muy diferentes.
Imagina lo siguiente:
Vas a tu servicio de correo m�s cercano y env�as 5 cajas a 5 paises. pides que el correo los envie, y cuando lleguen te los regresen.
Tu llegaste al servicio de correo con 5 cajas, y se repartieron 5 cajas al mismo tiempo. Te tom� 3 segundos de diferencia f�sicamente darle cada caja al encargado. En tu pc toma 3 milisegundos ejecutar cada llamada as�ncrona.
No puedes ver que no fueron al mismo tiempo porque sucede en milisegundos (o menos). Los resultados tampoco te llegan al mismo tiempo, cada respuesta se tom� su tiempo en llegar, y si recibieran 200 requests al mismo tiempo, tu pc procesa una por una. Entra a los devtools y revisalo en network. ver�s el orden de las llamadas y su latencia en milisegundos.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#33 Manejando el Orden y el Asincronismo en JavaScript 

Una manera de asegurar que se respete la secuencia en que hemos realizado m�ltiples tareas es utilizando callbacks, con lo que se ejecutar� luego, en cada llamada. Lo importante es que el llamado al callback se haga atrav�s de una funci�n an�nima. Sin embargo, al hacerlo de esta manera generamos una situaci�n poco deseada llamada CallBackHell.

Callbacks Hell o Pyramid of Doom

enlaces::::::::::::::::::::::::::=========================>
https://www.campusmvp.es/recursos/post/Que-es-la-recursividad-o-recursion-Un-ejemplo-con-JavaScript.aspx
https://www.todojs.com/controlar-la-ejecucion-asincrona/
https://api.jquery.com/jquery.get/
https://medium.com/@jmz12/callbacks-promesas-y-async-await-que-alguien-me-explique-514137cb57e2

comentarios:::::::::::::::::::::::::::::::::::::=========================>
Este codigo funciona perfectamente, pero de donde sale el �persona� en function (persona)???
-----------------------------------------------------------------------------
ese persona, es la respuesta del servidor.
esa como tal es una funci�n an�nima la cual la petici�n recibe como par�metro. dentro del objeto de la petici�n ella toma un nombre succes.
pero ya eso es manejo interno
-------------------------------------------------------------------------
La funci�n $.get() de jquery recibe varios par�metros entre ellos una funci�n de callback, en este caso es function (persona) , a su vez esta funci�n de callback recibe varios par�metros Function( PlainObject data, String textStatus, jqXHR jqXHR ) persona son los datos que regresa la llamada get de jQuery (Objeto obtenido de la llamada al servidor).
Puedes consultar la documentaci�n de jQuery:
https://api.jquery.com/jquery.get/

comentarios:::::::::::::::::::::::::::::::::::::=========================>
porqu� el servidor entrega las consultas en desorden ?
------------------------------------------------------------------
El servidor puede demorarse m�s ejecutando una que otra, o simplemente si el paquete de informaci�n se fue por otro camino, se pierde, luego el protocolo de red lo vuelve a pedir, se demora m�s. Se demora tambi�n porque simplemente en tu zona el internet baj� por un momento corto y provoc� un retraso en unos paquetes que ven�an primero, etc�
---------------------------------------------------------------
�Podria decirse entonces que:
Los callback aunque nos permiten mostrar la informaci�n de manera s�ncrona, tambi�n hacen m�s lento la ejecuci�n del c�digo?
(ya que no estamos recibiendo la informaci�n que nos llega m�s r�pido sino la que llega en el orden que precisamos)
--------------------------------------------------------------------
El servidor entrega las respuestas en desorden por muchos factores, por ejemplo si maneja una cach� y tiene algunos datos en cach� estos se responder�n m�s r�pido que los que tiene que buscar en una base de datos.
puede ser latencia de red, incluso hay maneras desde un servidor de asignar recursos por el usuario que ejecuta a petici�n.
pueden hacer muchisimas razones. para ello y es algo que siempre suceder�

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#34 Manejo de errores con callbacks

Para solucionar el problema de quedarnos sin conexi�n, u otro error similar, en medio de una sucesi�n de callbacks utilizamos el m�todo fail().

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#35 Promesas

En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:
	pending (Cuando creamos una promesa)
	fullfilled (S� se resulve exitosamente)resolve = .then(valor => {...}) (llegado a este estado podemos retornar nuevamente una promesa e ir encadenadolas en sucesivas acciones asincronas y puede ser rechazada o resulta)
	rejected (Ocurre alg�n error en la acci�n asincrona que esta resolviendo) reject = .cath(error => {...})
Las promesas se invocan de la siguiente forma:

new Promise( ( resolve, reject ) => {
  // --- llamado as�ncrono
  if( todoOK ) {
     // -- se ejecut� el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )
No olvides ver el material adjunto de esta clase.

Para evitar el problema que surge con los callbacks y es que tenemos un callback y ese callback tiene a otro y... el c�digo se hace bastante ilegible. Usar poliFit detecta si el buscador no soporta las promesas cree la clase de las promesas por nosotros y as� poder utilizarlas nosotros y seri� trasparente para el c�digo. 

Valores que a�n no conocemos, tambi�n pueden resolverse de manera sincrona, es otro objeto de JavaScript << new Promise >> 

Promise {<pending>}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: Object    (depliejo)

__proto__: Promise
constructor: � Promise()
then: � then()
catch: � catch()
finally: � finally()
Symbol(Symbol.toStringTag): "Promise"
__proto__: Object
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: Object
name: "Eeth Koth"
height: "171"
mass: "unknown"
hair_color: "black"
skin_color: "brown"
eye_color: "brown"
birth_year: "unknown"
gender: "male"
homeworld: "https://swapi.co/api/planets/45/"
films: (2) ["https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/"]
species: ["https://swapi.co/api/species/22/"]
vehicles: []
starships: []
created: "2014-12-20T10:26:47.902000Z"
edited: "2014-12-20T21:17:50.427000Z"
url: "https://swapi.co/api/people/54/"

typeof(obtenerPersonaje)
          "function"

typeof(obtenerPersonaje(54))          
"object"

Vemos que los cambios que ocurren al instanciar la funci�n desde la consola, las promesas son objetos esta funci�n s�lo se transforma en objeto una vez le pasemos un parametro de lo contrario llama el contenido de esa funci�n dentro del c�digo. 

enlaces::::::::::::::::::::::======================>
https://medium.com/better-programming/callbacks-vs-promises-in-javascript-1f074e93a3b5


comentarios:::::::::::::::::::::::::::::::::====================>
Conclusi�n podemos decir que definimos un objeto de tipo promesa, si se resuelve la promesa llamamos la funcion resolve() y si falla rechazamos la promesa con reject() luego podemos obtener estos valores con .then() para el resolve() y .catch() para .rejected() | el .then() y .catch() reciben como parametros lo que mandemos de las promesas
------------------------------------------------------------------
si amigo es un poco complejo de digerir al principio esto del asincronismo las promesas es fundamental entenderlas si te vas a un framework como react, yo ahorita estoy en react y si entiendes esto lo dem�s lo aprendes super facil.
Pero mas adelante vas a ver async-await y se hace mucho mas f�cil trabajar con codigo asincrono y hacerlo ver sincrono ya que lo malo de las promesas hay que encadenar los metodos con .then y .catch() 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#36 Promesas Encadenadas

A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecuci�n de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el c�digo sea mucho m�s legible y mantenible.

enlace:::::::::::::::::::::::::::::::==============>
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas#Encadenamiento

comentarios:::::::::::::::::::::================>
Si quisiera obtener los primeros 100 personajes. �Puedo usar lo siguiente?
for(i=1; i <= 100; i++){
	obtenerPersonaje(i)
		.then(personaje => {
		console.log(`El personaje ` i `es ${personajei.name`)
		return obtenerPersonaje(i+1)
	})
	.catch(onError)
------------------------------------------------------------------------
no seria mas efectivo hacer una funcion recursiva de esta maner a

functionObtenerPersonajes(i){
    i+=1
    if(i>100){
        console.log("terminamos")
    } else {
        obtenerPersonaje(i)
        .then(persona=>{
            console.log(`El personaje ${i} es ${persona.name}`)
            return ObtenerPersonajes(i)
        })
        .catch(onError)
    } 
}
ObtenerPersonajes(i)
------------------------------------------------------------------
1?? Si la API nos permitiera hacer una petici�n de x cantidad de personajes al mismo tiempo, eso ser�a lo m�s efectivo. Una sola petici�n, menos tiempo.
Puedes intentar obtener TODOS los personajes con la API en la ruta /people/.
2?? Suponiendo que la API no nos lo permite, la forma en que la hiciste no es muy efectiva, ya que solo llegamos a buscar el primer personaje, pero de la segunda b�squeda ya no estamos resolviendo la promesa.

Para ejecutar todas las promesas podr�as usar Promise.all.
?? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
?? https://stackoverflow.com/questions/31424561/wait-until-all-promises-complete-even-if-some-rejected

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#37 M�ltiples promesas en paralelo

Para hacer el llamado a m�ltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como par�metro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

Promise.all espera a que todo se cumpla (o bien al primer rechazo)
El m�todo Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido conclu�das con �xito, o bien rechaza la petici�n con el motivo pasado por la primera promesa que es rechazada.

enlaces:::::::::::::::::::::====================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/all
https://medium.com/@jonathanrojaslpez/una-mirada-a-las-promesas-en-javascript-eb2743bd1009
https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript

comentarios::::::::::::::::::::::::::::::::::::::::========================>
�Por qu� un array ocupa menos espacio en memoria y corre m�s r�pido que una variable entera?
Por experiencia con unos arrays en google apps script se que es asi y por un poco de teoria
�Pero que sucede en el transfondo de las cosas?
------------------------------------------------------------
Un array no es m�s r�pido que una variable. Si te refieres a un objeto el cual contiene una lista de objetos internamente (similar a como un array almacena data) eso es muy diferente.
Un array es una estructura de datos simple, en el caso de Javascript es un indexado.
En el caso de un objeto es m�s complicado. Javascript tiene que construir el objeto como una estructura de dato m�s compleja debido a que un objeto tambi�n almacena el tipo de objeto, el tipo de dato, su posici�n, m�s objetos con mas tipos etc etc.
Es simplemente por la manera en que internamente el lenguaje construye la estructura. No quiero meterme al transfondo del transfondo, para eso hay libros y cursos enteros.
te dejo esto si quieres empezar entendiendolo un poco m�s.
https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript

comentarios::::::::::::::::::::::::::::::::::::::::=====================>
�C�mo hacer el c�digo para cuando no tengo idea cu�ntos personajes existen?
---------------------------------------------------------------
Tendrias que pensar ya en la l�gica del c�digo. De manera que sea transversal.
Podrias definir una forma de saber cuantas personas van a jugar. Eso se traduce en un m�todo que pueda preguntar (por medio del objeto prompt y asignar turnos de acuerdo al n�mero de participantes.
Ya conociendo ese valor puedes hacer un c�digo que responda con base al n�mero de jugadores.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#38 Async-await: lo �ltimo en asincronismo

Async-await es la manera m�s simple y clara de realizar tareas as�ncronas. Await detiene la ejecuci�n del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definici�n de la funci�n, y encerrar el llamado a Promises.all() dentro de un bloque try � catch.

Vemos como el async await clarifica mucho m�s nuestro c�digo y es algo que hoy en d�a se usa bastante

enlaces:::::::::::::::::::::::::===================>
https://www.youtube.com/watch?v=568g8hxJJp4    P.D. Todo su canal es de JS
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API3
https://www.youtube.com/watch?v=Q3HtXuDEy5s
https://rapidapi.com/blog/most-popular-api/
https://developers.google.com/web/fundamentals/primers/async-functions?hl=es
https://github.com/jhnemogap/notasCursos-Platzi/blob/master/fundamentosJavaScript.md
https://github.com/rulosCodev/fundamentosJs

comentarios::::::::::::::::::::==============>
Async Await, siempre depender� de Promise?
------------------------------------------------------------------
Si te refieres a que para hacer c�digo as�ncrono necesitas partir de una promesa, no. Puedes hacer muchas cosas as�ncronas sin promesas.
Las promesas son un feature de ES6 si no me equivoco, que resuelven como 10 fallos de los callbacks, y dan una mejor estructura para crear c�digo as�ncrono.

comentarios:::::::::::::::::::::::::::::::::::::====================>
async-await es lo mismo que los callbacks y las promesas pero de forma m�s f�cil. En realidad, async-await y las promesas trabajan juntos. Encontr� esta informaci�n para ver ejemplos de async await en acci�n: https://developers.google.com/web/fundamentals/primers/async-functions?hl=es
-----------------------------------------------------
Lo que hace el await es detener la ejecuci�n de la funci�n all� hasta que todas la promesas sean resueltas | var personajes = await Promise.all(promesas) | y reci�n all� ese valor se guarda en la variable personajes y la estructura tiene que estar dentro de un try y catch para obtener el valor de la resoluci�n de la promesa, en llamado as�ncrono el await tiene que estar dentro del try y los errores los recibimos en el catch | en este caso var personajes es un array con las promesas resueltas
Tienes que saber que el .all() se resuelve como un array que preserva el orden de las promesas que le pasamos como parametro hasta que todas se resuelvan

comentario::::::::::::::::::::::::::::::::::::============================>
Qu� es un Polyfill
Un pollyfill, o tambien conocido pollyfiller, es aquel fragmento de codigo (plugin) que permite habilitar cierto codigo que es moderno en navegadores que son muy antiguos, por ejemplo Internet Explorer, lo cual nos permite olvidarnos de dichos navegadores antiguos y poder concentrarnos en el codigo actual o moderno.
Para mas Informacion dejo dos links muy provechosos:
Polyfiills �Qu� son? https://blog.michelletorres.mx/polyfills-que-son/
Pollyfills para CSS3 y HTML5  https://www.imaginanet.com/blog/polyfills-para-css3-y-html5.html

comentario::::::::::::::::::::::::::::::::::::===================>
Async-await es la manera m�s simple y clara de realizar tareas as�ncronas. Await detiene la ejecuci�n del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definici�n de la funci�n, y encerrar el llamado a Promises.all() dentro de un bloque try � catch.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
7. Juego de HTML

#39 Comenzando el juego

Crearemos el juego Simon (Sim�n dice), en el que se van iluminando una secuencia de botones que el jugador tendr� que ir repitiendo, si se equivoca volver� a comenzar. El juego tendr� 10 niveles de dificultad, que deber�n ser superados para ganar.

enlaces::::::::::::::::::::::::::::::::::::::::::::::::==============================>
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

comentarios::::::::::::::::::::::::::::::::====================>
No se de donde sale el classList� alguien me explica?
--------------------------------------------------------------------
classList es una propiedad que retorna el listado de clases que tiene un determinado elemento del dom, en este caso se trae esta lista y se le a�ade la clase hide usando el add.
Puedes ver m�s informaci�n aqu� https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#40 Generando una secuencia de n�meros

Para generar la secuencia del juego usaremos un array con n�meros aleatorios, que representar�n el color del bot�n que se iluminar� cada vez. Usamos new Array() para crear el arreglo de manera din�mica, y llamamos al m�todo fill para rellenar ese array con ceros y poder luego iterar sobre �ste con map().

Podemos colocar el atributo aunque no exista, ya lo definiremos luego si a lugar.
Una clase es un objeto y cuando llamamos ese objeto para optener sus atributos se le llama una instancia.

podemos hacer arrays de dos formas de la forma convencional 
var ambiguo = [1,2,3,4,5,6,7,8,9]
o de la forma GENIAL 
var GENIAL = new Array(9)
Adicional a esto le agregamos un par de cosas para darle valor a esos arrays
var GENIAL = new Array(9).fill(0).map()

new Array(10).fill(0).map(n => Math.random() * 4)
fill() hace que todos los elementos de un array tengan el mismo valor y ese valor va dentro de los par�tesis, seguido ira la funci�n map() y no funcionara si no tiene elementos que esten definidos y tenga un valor as� sea cero, la arrow function tiene << n >> que es igual a cero y se encarga de retornar << Math.random >> que es un valor entre cero y uno y al multiplicarlo por cuatro vamos a obtener un valor cero y cuatro pero nunca va llegar a ser cuatro y va a ser decimal, lo redondeamos hacia abajo encerrandolo en << Math.floor >> y nos quedamos con un valor entrero (3.9 lo pasa a 3)  

window.juego = new Juego() // a modo de prueba podemos asiganar la variable dentro del objeto window y la tendremos disponible para ver el resultado en consola un array con diez valores aleatorios 

para redondear hacia arriba existe la funci�n Math.ceil()
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/ceil

1. defer parece la mejor opci�n de forma general. Salvo que el script manipule o interaccione con el DOM antes de DOMContentLoaded ($( document ).ready en jQuery). Tambi�n ser�a la mejor opci�n si el script tiene dependencias con otros scripts y es importante el orden en el que se ejecuta cada uno.
2. async ser�a ideal para scripts que manipulan o interaccionan con el DOM antes de DOMContentLoaded y/o que no tienen dependencias con otros scripts.
3. Seguir utilizando JS en su forma predeterminada ser�a la �ltima opci�n. Si el script es peque�o, preferible inline, ya que el an�lisis HTML se detendr�a pero ser�a una interferencia muy peque�a en comparaci�n con la solicitud y descarga del archivo.

enlaces:::::::::::::::::::::::::::::::::::::::::::::::::======================>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
https://developer.mozilla.org/en-US/docs/Web/API/Window
https://cybmeta.com/diferencia-async-y-defer
https://www.youtube.com/watch?v=gvicrj31JOM

comentario::::::::::::::::::::::::::::::===============>
Por si desean profundizar en algunos puntos, dejo unos recursos adicionales que me parecieron interesantes:
Arrays:
Hacks for Creating JavaScript Arrays https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
Array.prototype.fill() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

comentarios::::::::::::::::::::::::::::::::::::::::::::::=========================>
separe el archivo en 3, css, js, y html cuando el archivo js lo coloco en head o al inicio del body no lo ejecuta pero cuando lo coloco al final si funciona, a que se debe esto ?
--------------------------------------------------------------
Si tu c�digo JS interact�a con alg�n elemento HTML debe ejecutarse cuando estos elementos HTML ya hayan cargado, de otra forma, JS no podr� encontrar estos elementos y el programa no funcionar�.
Puedes colocar el script al final del documento HTML o darle el atributo defer para que no se ejecute hasta que todo el HTML haya cargado.
?? https://cybmeta.com/diferencia-async-y-defer

comentarios:::::::::::::::::::::::============================>
No me quedo claro el prop�sito de la n en el .map
Cual es su funci�n ah�??
Y si pongo en el .fill(5) ejemplo, que esta sucediendo ahi??
Me altera algo?
----------------------------------------------------------------------------------------------------
Para entender lo que est� pasando debes entender la sintaxis de la funci�n map.
seg�n developer.mozilla.org:
var nuevo_array = arr.map(functioncallback(currentValue, index, array){
    // Elemento devuelto de nuevo_array
}[, thisArg])
te lo explico mejor aqui:

primero a saber que la funci�n map solo la puedes usar como m�todo de un array que ya tengas. Lo que hace map es iterar cada elemento del arreglo, y transformarlo en otro arreglo. Por ende debes almacenar el resultado de map en un arreglo diferente.

var array = otroarray.map();
dentro de map se espera una funci�n de tipo callback, que se va a encargar de ejecutar el trabajo. Para no liartela, te introducir� directamente a las dos mejores maneras de escribirlo:

1)
// le metes un arrow function an�nimo con return
// () => { ... }

var array = otroarray.map( () => {
 //... code here
return (...) 
});
2)
// le metes un arrow function sin brackets, anunciando que el
// resultado de esa linea de c�digo es tu retorno
// () =>  ... 
var array = otroarray.map( () => ... );
https://stackoverflow.com/questions/38282997/rendering-an-array-map-in-react

ahora viene la respuesta a tu pregunta� map es un iterador muy parecido a for, o a un while. �Como sabe �map� el elemento que est� iterando?
con ese m�gico �n� que viste (:
var array = elements.map( (element) => {
 // haces algo con "element"
return (return) // metes a array el element modificado
});
si te fijas, dentro del par�ntesis de la funci�n arrow es donde le mandas cada elemento de tu lista de elementos y puedes alterarlo.

hay m�s cosas que puedes hacer, pero eso ya te lo dejo de tarea investigarlo, como:
le puedes dar a tu arrow function otro par�metros llamado index, y saber la posici�n que est�s iterando, por si quieres que el elemento 10 sea azul y no rojo.
Fill es muy facil, simplemente rellena todo tu arreglo con el mismo dato. si quieres que todo tu arreglo inicial antes de mapear tenga ceros, haces:
// dice, al nuevo arreglo de tama�o 10, llenalo de ceros, luego mapealo
newarray(10).fill(0).map(...
si le pones un 5 como dice en tu pregunta, se llenar� el arreglo nuevo de cincos.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#41 Iluminando la secuencia de colores

En esta clase se observa la diferencia entre el uso de let y var para la declaraci�n de variables y c�mo esta diferencia afecta el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la �ltima asignaci�n que se haga, mientras que con let, conservar� su valor dentro de cada iteraci�n.
Siempre que sea posible debemos usar const sobre let, y let sobre var.

c�mo buscar errores uncaught typeerror en javascript
Resulta que tuve este error por que en la funci�n << transformarNumeroAColor () >> no tenia definido el par�metro << numero >> que es el que recibe << switch (numero) >> y adem�s la l�gica del switch estaba errada (empezaba definiendo cero para el primero y me salte un n�mero para un total de cuatro colores).

el << break >> del switch no se podra ejecutar si lo antecede un << return >> as� que no hace falta colocarlo al final 

<< this.colores[color].classList.add ('light') >> de esta forma asignamos a un elemnto de html cuando tenga derterminado color se le a�ada la clase << light >> luego la eliminamos con esta funci�n albergada dentro del m�todo << setTimeout >> que hara un << remove >> de esa clase   << setTimeout(() => this.apagarColor(color), 350) >>

<< setTimeout(() => this.iluminarColor(color), 1000 * i) >> por su parte esta l�nea nos permite que cada que la recorra el for << i >> aumentara en uno sumando cada vez m�s tiempo al multiplicar por los milisegundos y que no se ejecute de forma a amontonada todos lo colores

dentro del m�todo << iluminarSecuencia >> hay un << for >> tiene una variable << color >> definida como << var >> que por sus caractaristicas ira pisando el resultado que arroja cada recorrido del << for >>. Si usaramos << let >> para que << color >> mantenga cada valor dentro de ese bloque, se suele usar dentro de los ciclos for. Como << color >> no tiene una reasignaci�n (color = .... (reasignaci�n)) para evitarnos bugs siempre es necesario usar << const >> para declarar nuestras variables.

comentarios:::::::::::::::::::::::::::::::====================>
Para los que, tienen �poco tiempo�, desarrollando c�digo, y tienen �algunas� dudas
1- https://www.geeksforgeeks.org/javascript-tutorial/
2-https://developer.mozilla.org/es/docs/Web/JavaScript
3. https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#42 Obteniendo el input del usuario

Para obtener el input del usuario agregamos un manejador para el evento click del mouse usando addEventListener para cada uno de los colores del juego. Utilizando la propiedad target devuelta por el evento click podemos identificar cu�l es el bot�n que ha sido presionado.

Funci�n para reconocer el evento click << agregarEventosClick >> y luego a�adimos el evento que escuchara y la funci�n que se ejecutara con el evento click 

      agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor)
      }
Usualmente el par�metro que recibe la funci�n se nombra << ev >>  
      elegirColor(ev){ //Cuando JS llama esta funci�n perdera un pco el contexto (�qui�n es << this >> dentro de cada una de las funciones?)
        console.log(ev) //Veremos lo que ocurre al hacer click y habra un atributo del evento << target >> y dice en que elemento se realizo el click 
      }

Para decirle que ate el valor de << this >> es necesario pasarlo por el m�todo << bind >> y con esto le estamos diciendo explicitamente que escoja el valor de this y NO lo que esta siendo optenido por medio del atributo target y se ate con ese otro que estamos pasando dentro de .bind
En algunos casos se ve as� 
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
o tambi�n se suele ver de esta manera; definiendo una variable << self >> o << _this >> y obtener esa referencia al << this >> evitando perder la referencia a this y no ver alterado su valor contextual dentro del c�digo.
        var _this = this
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(_this))
o podemos llevar el valor del llamado a la funci�n << this.elegirColor >> sea << this >> colocandolo dentro de la funci�n donde definimos los valores de juego.

      inicializar() {
        this.elegirColor = this.elegirColor.bind(this) //Y ahora este llamado siempre tendra este valor de << this >> 
        btnEmpezar.classList.add('hide')
        this.nivel = 7
        this.colores = {
          celeste, //estando definidos globalmente podemos ahorramos??
          violeta, // celeste: celeste,
          naranja,
          verde
        }
Y si volvemos a revisar la funci�n y el log que lleva dentro pasandole el par�metro << this >>
      elegirColor(ev){
        console.log(this)//Vemos como ahora << this >> es el juego y no cada uno de los botones
      }

enlaces::::::::::::::::::::::::::===================>
https://www.youtube.com/watch?v=gvicrj31JOM (Este video esa en el clase #40)
https://filisantillan.com/this-en-diferentes-situaciones-y-su-comportamiento/

comentarios:::::::::::::::::::::::::::::::::::::=====================>
this es el bot�n porque this en un addEventListener representa al elemento HTML al cual le asignamos ese evento, por ese motivo pasa de ser Game() a ser un elemento HTML.
Lo que hacemos con bind() es decirle: �No!, t� no ser�s un elemento HTML, t� ser�s Game(), digamos que cambiamos su forma de pensar del this.
Por si se les complica this, escrib� un art�culo hace tiempo que explica un poco qui�n realmente es this en diferentes situaciones.
https://filisantillan.com/this-en-diferentes-situaciones-y-su-comportamiento/
https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8
https://medium.com/sngular-devs/comprende-js-call-apply-y-bind-2e27db35b8c2
https://filisantillan.com/this-en-diferentes-situaciones-y-su-comportamiento/

comentarios:::::::::::::::::::::::::::::::::::::=====================>
Excelente clase. El this me ha confundido un poco pero bueno solo es cosa de seguir practicando y mejorando. 
------------------------------------------------------------------
El this hace referencia a un m�todo que pertenece a esa clase.
Por ejemplo:
En la clase Juego est� el m�todo inicializar() el cual est� definido dentro de la misma clase Juego� entonces al llamarlo en el m�todo constructor() se lo llama de la siguiente manera:
this.inicializar() que es lo mismo que decir simb�licamente EstaClase.inicializar()
si el m�todo inicializar() estuviese definido en otra clase, se la llama de la siguiente manera:
NombreClase.inicializar()
Ejemplo: Persona.mostrarNombre()

comentario::::::::::::::::::::::::::::::::::::::::::::===========================>
.-Los event listeners funcionan de manera as�ncrona
.-bind sirve para asignar el this
.-Para entender mejor el bind y el this: https://medium.com/sngular-devs/comprende-js-call-apply-y-bind-2e27db35b8c2
.-Una forma de agilizar los eventListeners:

eventoClick() {
                for(letcolorinthis.colores) {
                    this.colores[color].addEventListener('click', this.elegirColor);
                }
            }

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#43 Agregando la verificaci�n del color elegido

Para agregar atributos al objeto principal en el que est� nuestro c�digo, basta con usar this, haciendo referencia al contexto de la clase, y agregar los atributos con un punto: this.atributo = valor

La verificaci�n del color elegido la haremos creando y removiendo los eventos del click al pasar el juego a cada nuevo nivel.

En este momento aplicaremos la l�gica para ver que pasa con ese boton que toco es incorrecto y pierde el juego o es correcto y tiene que seguir repitiendo la secuencia dependiendo del nivel donde se encuentre, pasar al siguiente nivel y si termina todos lo niveles y gana.

Hacer log del par�metro de esta funci�n vemos dentro de los atributos de este evento << target >> y dentro << dataset >> y dentro << color >> y dentro el valor del color que tenga ese elemento en el que hayamos hecho que reaccionara el evento click
      elegirColor(ev){
        console.log(ev)
      }
Este dataset sale del c�digo HTML por medio de << data-loQueSea='violeta' >>, esto quiere decir que dentro del dataset aparecera un atriburo llamado loQueSea con el valor violeta 

siempre que podamos usaremos const para definir las variables

Recordar que para agragar atributos siempre que queramos lo podemos hacer colocando
        this.nombreDelAtributo = "elValorQueLeVamosADar" //No hace falta colocarlo en el constructor o en otro lugar

Podemos hacer un break pint dentro de la pesta�a << sources >> del inspector de elementos para hacer un debbug de cualquier parte en especifico y poder ver mejor posibles errores en vista que ademas nos da el valor que tenga determinda parte dentro del c�digo.

enlaces:::::::::::::::::::::::::=======================>
https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style/Minimize_nesting
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

comentario::::::::::::::::::::::::::::::::::::::==========================>
Nota: es conveniente colocar desde el constructor del objeto la funci�n bind, para evitar que en las futuras iteraciones la referencia this se dirija a Window en lugar de al objeto (en este caso el juego).

comentarios:::::::::::::::::::::::::::::==================>
No entendi bien la diferencia entre llamar a un metodo con () y sin (). Cuando llamo a this.siguienteNivel() con parentesis NO espera los 700 milisegundos y brilla de inmediato el juego, si lo pongo sin parentesis this.siguienteNivel SI espera los 700 milisegundos y luego de eso brilla el juego.
constructor(){
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel,700)
  }
------------------------------------------------------------------------
referenciaMetodo() ==> significa que estas ejecutando el m�todo.
referenciaMetodo ===> significa que estas referenciando el m�todo.
------------------------------------------------------------------------
Cuando colocas () ejecutas la funci�n � cuando no los colocas estas haciendo referencia a la funci�n (como una variable u objeto) � no la est�s ejecutando
------------------------------------------------------------------------
al utilizar los par�ntesis invocas m�todos, mientras que sin par�ntesis invocas a atributos.
------------------------------------------------------------------------
Los callbacks son funciones que pasas como par�metro a otras funciones.
Imagina el siguiente c�digo:
functionejecutarPatito(callback) {
	/* bla bla bla */
	calback();
	/* bla bla bla */
}
functionpatito() {
	console.log("PATITO!!")
}
ejecuarPatito(patito); // PATITO!!
La funci�n ejecutarPatito se encarga de ponerle los par�ntesis (osea, ejecutar) la funci�n callback (en este caso, la funci�n patito).
Si en cambio utilizas los par�ntesis (ejecutarPatito(patito())) puedes estas llamando a la funci�n callback antes de tiempo y tu c�digo puede no funcionar.

comentarios:::::::::::::::::::=================>
Un peque�o detalle para la usabilidad del juego, la funci�n �agregarEventosClick� que se encuentra en la funci�n �siguienteNivel� deber�a de llamarse una vez se ilumine toda la secuencia completa y deje de iluminar el ultim� color, puesto que sino, podr�amos hacer _click _ en un color mientras se esta iluminando la secuencia�
-------------------------------------------------------------------------
De todas formas creo que se podra hacer click en los colores, debido a los callbacks que se utilizan para iluminar la secuencia, es decir, que mientras se ilumina la secuencia JS agregara los eventListener a los colores, debido a los setTimeOut

comentarios:::::::::::::::::::=================>
Genial la clase. Aunque estoy en desacuerdo con el uso execiso del if y del switch.
-------------------------------------------------------------------------
Hola dslpy, creo que se debe a que es una mala pr�ctica de programaci�n y es un antipatr�n: Flat is better than nested. Pero para ponerlo en palabras simples, uno siempre debe escribir c�digo para leerlo, no solo para solucionar un problema.
Cuanto m�s dificil sea de leer (y entender) un c�digo m�s rapido deber�a ser refactorizado para atacar ese problema, de otro modo el principal afectado ser�s tu mismo cuando tengas que mantenerlo.
M�s info: https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style/Minimize_nesting

comentarios:::::::::::::::::::=================>
Podrian aclararme como y porque se utiliza el [this.subnivel] dentro de this.secuencia?
-------------------------------------------------------------------------
�this.subnivel� se utiliza como �ndice para recorrer el arreglo �this.secuencia�.
Un arreglo se puede recorrer accediendo a sus �ndices, en este ejemplo primera evalua la condici�n y si es verdadera se incrementa en uno la variable �this.subnivel�, la cual en la funci�n siguienteNivel() se vuelve a colocar su valor en 0.
Suponiendo el caso de que estemos en el nivel 1 del juego, la condici�n a evaluar ser�a numeroColor === this.secuencia[0], si estuvieses en el nivel 2, tendriamos numeroColor === this.secuencia[1] ya que en la anterior iteraci�n se incremento en 1 la variable �this.subnivel� y as� sucesivamente.
Te recomiendo esta p�gina para que revises con m�s detalle como funcionan los arreglos y su manera de iterar o acceder a los datos.
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

comentarios:::::::::::::::::::=================>
Hice una version de este proyecto pero usando Arrays en vez de objetos. Me quedo asi:
Repositorio:https://github.com/alanzzant/SimonColors
Website:https://alanzzant.github.io/SimonColors/
---------------------------------------------------------------------
Para hacer host al repo desde GitHub usamos GitHub Pages (solo para sites est�ticos):
Vamos al repo, hacemos click en Settings, bajamos hasta GitHub Pages, seleccionamos la rama/source que debe tener nuestro index.html, esperamos 1 o 2 minutos y ya deberia darnos un mensaje de exito y el link a nuestro site:
_ Your site is published at {url}_
Para mas info puedes seguir el Curso Profesional de Git y GitHub

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#44 Agregando los estados finales del juego

Incluiremos una librer�a de mensajes con estilos mucho m�s agradables que el mensaje b�sico de javascript para mostrar los estados finales del juego al usuario.

Para este caso se requiere inicializar la funci�n << estilosDeAprendizaje >> y veremos que es necesario ademas crear un par�metro donde reciba la coalici�n por la paz en Colombia

enlaces::::::::::::::::::::::::::::::::::::::::::::======================>
https://sweetalert2.github.io/ nueva versi�n
https://sweetalert.js.org/ old versi�n

comentarios::::::::::::::::::::::::::::::===============>
Para ver mi version mejorada y jugar un poquito https://jan888adams.github.io/simon-says-game/simon-says-game/index.html


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#45 Conclusiones del curso

Felicitaciones, ya tienes unas bases s�lidas para continuar aprendiendo frameworks m�s avanzados basados en JavaScript.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

8. Complementos

#46 var, let y const: las diferencias entre ellos

��var�� es la manera m�s antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podr�n ser accedidas, e incluso modificaddas, tanto dentro como fuera de los bloques internos en una funci�n. Pueden ser manupuladas desde el objeto window haciendolas vulnerables. Al pasarlas como referencia, es decir sin la palabra << var >> y solo con el nombre de la variable, tambi�n se puede llegar a reformular el valor de la varaible.

Con ��let�� por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la funci�n.

��const�� al igual que ��let�� se define en el contexto o alcance de un bloque, a diferencia de let y var, las varibles definidas como constantes (const), ya no podr�n ser modificadas ni declaradas nuevamente, en ninguna otra parte de la funci�n o el contexto en el que ya existen.
La recomendaci�n es reducir siempre al m�nimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.

Usar let si es una variable que tenemso que reasignar, si van a ser fijas usa const y con ellas evitaremos que las varaibles se reasignen y provoquen bugs cambiando sus valores como sucede con var (evita su uso)


enlaces:::::::::::::::::::::::=================>
https://www.youtube.com/watch?v=XgSjoHgy3Rk
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const
https://www.w3schools.com/js/js_hoisting.asp
https://cybmeta.com/var-let-y-const-en-javascript

comentario::::::::::::::::::::::::::===================>
Vengo del Java tradicional, b�sicamente let es para declarar la variable como local de un bloque de c�digo, como en comentarios anteriores mencionaron, considero que esta clase deber�an moverla hacia las primeras, mucho del c�digo en el proyecto hubiera tenido m�s sentido para mi si hubiera sabido que las variables necesitan ser declaradas como let para que sean locales.

comentarios::::::::::::::::::::::::::::::==================>
�Qu� es mejor utilizar: var, let o const?
-----------------------------------------------------
Yo te recomiendo que olvides el uso de var debido a que a futuro te puede causar algunos problemas codificando, comienza a usar letpara variables que cambien o se le reasigne un valor a futuro y const para las variables que son inmutables, es decir, que no cambian su valor.
-----------------------------------------------------------
Como comenta el profesor en la ultima parte del video, es mejor utilizar let para las variables que cambiaran su valor y const para las inmutables, de esta forma se pueden evitar bugs a futuro.	

comentarios::::::::::::::::::::::::::::===================>
La principal diferencia entre var, let y const es el alcanc� que tienen y capacidad de alteraci�n de los datos que estas contienen.
let y const tienen un alcance limitado al entorno o funci�n en el que son declarados, ya sea dentro de un for, if o funci�n. Por otro lado var no importa el lugar donde se declare, este ocupa un espacio de memoria y por lo tanto ha sido declarada permitiendo as� que en alg�n lugar sobre-escriba el contenido de otra variable con el mismo nombre.
En resumen, la mejor forma de declarar variables en javascript, es usando let para datos que se cambiar�n a futuro, y const para valores definidos por ejemplo, los llamados �n�mero m�gicos� 

comentarios:::::::::::::::::::::::::::::===================>
Alguien sabe quien es el encargado de liberar la memoria cuando finaliza el alcance de una variable? es el propio browser? o se puede correr algo?
y cuando definimos una clase, la creamos (new) y la quiero borrar? basta con hacer null?
-----------------------------------------------------
Es el motor (runtime) del lenguaje el encargado de hacer eso, en este caso ser� el int�rprete de Javascript que empaqueta Chrome.
En los lenguajes de m�s alto nivel existe un proceso de fondo llamado Recolector de Basura (Garbage Collector), que revisa el HEAP (almacen de memoria de un proceso donde se guardan los objetos) y controla que los objetos a�n est�n en alcance, si no lo est�n los marca para eliminar y cuando haga falta memoria se puede reutilizar.
En los de m�s bajo nivel hay que hacerlo a mano.
Respecto a lo de la clase si creas un objeto con new,y guardas la referencia en una variable asignas un trozo del HEAP para ese objeto. Si luego esa variable pierde el alcance o le asignas otro valor y nadie m�s apunta a ese objeto el Recolector de Basura lo eliminar�.

comentario::::::::::::::::::::::::::::::::::::==============>
Resumen de la clase: var - let - const

� Cuando declaramos variables con �var� siempre conviene declararlas �arriba� del c�digo en el que sea claro cu�les van a ser las variables que se van a usar dentro de nuestra funci�n o programa.

� Dentro de una funci�n javascript detecta todas las variables declaradas con �var� y las �declara� por s� solo como si estuvieran �arriba� en el c�digo. Por lo que si se declara un var dentro de un bloque else y este no es accedido por el condicional, la variable �var� declarada dentro de ese else existe de todas maneras.

� Si utilizamos �let�, el alcance de esa variable se ve reducido �nicamente al bloque de c�digo donde es utilizado.

� �const� se comporta parecido a let s�lo que no es posible reasignarlo.

� Es posible modificar una variable �const� en el caso de un array[ ] con el m�todo push() por ejemplo.

� Reducir siempre al m�nimo el alcance de nuestras variables.

� Utilizar 'let� si tenemos que reasignar una variable.

� Si nunca tenemos que reasignar una variable usamos �const�.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


#47 �Hace cu�ntos d�as naciste?

Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con n�meros. El  resultado que se obtiene est� en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos  a d�as, meses o a�os seg�n queramos. Tambi�n aplica para Horas, Minutos, Segundos y Milisegundos.

new Date(year, month, day, hours, minutes, seconds, milliseconds)

enlaces::::::::::::::::::::::::::::::::::::=========================>
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
https://www.w3schools.com/js/js_dates.asp
https://code.tutsplus.com/es/tutorials/understanding-recursion-with-javascript--cms-30346
https://www.campusmvp.es/recursos/post/Que-es-la-recursividad-o-recursion-Un-ejemplo-con-JavaScript.aspx


Por ac� dejo una herramienta super buena que me encontr� hace poco y que facilita mucho el trabajo con JS.
Espero sea de utilidad.
https://quokkajs.com/

comentarios:::::::::::::::::::::::::=======================>
Veo que es una especie de bucle.
Lo que no entiendo es como hace que el numero 1 inicial se sume cada vez que se �itera� el �bucle�.
--------------------------------------------------------
Aqui tienes otro ejemplo

functionfactorial(n) {
    if (n<=1) return1;
    return n* factorial(n-1);
}
Debes asegurarte que al retornar la misma funci�n, cambies el valor de entrada. De esta manera aseguras que no tendras un bucle infinito. Por ello tambi�n es importante definir el caso base en el cual se termina el bucle.

comentario::::::::::::::::::::::::::::::::==========================>
La recursividad es un concepto muy importante en cualquier lenguaje de programaci�n. Una funci�n recursiva es b�sicamente aquella que se llama (o se ejecuta) a s� misma de forma controlada, hasta que sucede una condici�n base.

comentario:::::::::::::::::::::::::::::::::======================>
IDEAS CLAVES
=> �Que es recursividad?
Una funci�n recursiva es b�sicamente aquella que se llama (o se ejecuta) a s� misma hasta que sucede una condici�n base.
=> �Para que me sirve? �Como lo puedo utilizar?
Para ejecutar de algun modo ciclos a traves de funciones

comentarios::::::::::::::::::::::::::::::=====================>
Ac� tengo una pregunta para todos ya que llevo trabajando en inform�tica por mas de 10 a�os y muchos de los proyectos en los que he trabajado han sido para entidades bancarias, financieras y para entidades gubernamentales en las cuales se manejan una inmensa cantidad de informaci�n y jamas JAMAS he visto una funci�n recursiva en el c�digo que me ha tocado revisar, e incluso cuando me ha tocado desarrollar se me ha especificado el no usar recursividad, y esto es debido que a mayor cantidad de iteraciones estas funciones bajan much�simo la performance de las aplicaciones. Por lo mismo he llegado a considerar la recursividad solo como un lindo ejercicio de l�gica. Aun as� resulta �til cuando las iteraciones se saben pocas. Lo que me gustar�a saber es �Cual ha sido vuestra experiencia con este tipo de soluci�n?
-----------------------------------------------------------------
por lo general las tomo como un ejercicio o como saber que se puede hacer, ya que suelen reducir mucho el performance, gastar demasiados recursos, la verdad en toda la escuela nomas las he usado en ordenamientos como quicksort o merge, pero toda recursividad puede ser iteraci�n y viceversa
-----------------------------------------------------------------
Es cierto, se usa poco. Yo solo recuerdo haberla usado para navegar estructuras de archivos.
Me parece que algunos casos de ordenamiento de datos ser�a muy enredado escribirlos sin recursi�n, pero con los lenguajes de alto nivel que usamos ahora (la mayor�a), practicamente ya no se necesita escribir funciones de ordenamiento, todo est� dado.

comentario:::::::::::::::::::::::::::==============>
Funciones Recursivas
Para realizar recursividad necesitamos 2 cosa; 1 caso base y 1 caso recursivo.
Usaremos una divisi�n para mostrar las funciones recursivas.
Algoritmo de nuestro ejercicio:
13 /4
13 - 4 = 9 1 => caso recursivo
9 - 4 = 5 1 => caso recursivo
5 - 4 = 1 1 => caso recursivo
1 - 4 = -3 0 => caso base
La funci�n:
function divisionEntera(dividendo, divisor) {
	if (dividendo < divisor) {
		return 0
	}
	return 1 + divisionEntera(dividendo - divisor, divisor)  
}
�dividendo - divisor� en el primer par�metro de nuestra funci�n recursiva invocada dentro de s� misma ser�a el �caso recursivo� que se repetir� mientras la condici�n no se cumpla. Cuando la funci�n se cumple, �caso base� termina la recursividad, termina la operaci�n y nos entrega el resultado de la divisi�n en valor entero.



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%