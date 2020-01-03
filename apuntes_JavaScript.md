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