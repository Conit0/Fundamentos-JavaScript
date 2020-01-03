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