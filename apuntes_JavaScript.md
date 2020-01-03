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