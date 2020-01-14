var signo = prompt('¿Cuál es tu signo?').toLocaleLowerCase()
//Cuando no se escribe nada el campo aparece vacio y si da cancelar sera null
console.log (signo)
//Se puede agregar una función que retire los acentos y evitar colocar más case´s
/**
 * 
var reemplazarAcentos = function (cadena) {
    var chars = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u"
    }
    var expr = /[áéíóú]/;
    var res = cadena.replace(expr, function (e) { return chars[e] });
    return res;
}
var signoFinal = reemplazarAcentos(signo)
 * O CON ESTAS VARIABLES CON REMPLAZO
signo = signo.replace('á', 'a')
signo = signo.replace('é', 'e')
signo = signo.replace('í', 'i')
signo = signo.replace('ó', 'o')
signo = signo.replace('ú', 'u')
 */

switch (signo) {
  case 'aries':
  console.log(`Hay muy pocos interrogantes que tengan una respuesta categórica. Las matemáticas son la prueba de ello. Los números nunca nos darán resultados inesperados. Pero, al contrario de lo que sucede en este mundo de cifras, las personas no somos tan directas. Existen diversas formas de llegar al destino que queremos, y miles de explicaciones para justificar diferentes situaciones.

  En tu caso, no es necesario que malgastes tu tiempo en conseguir una respuesta absoluta. Recuerda que lo que buscas es entendimiento, no una evidencia científica.  `)
  break;
  case 'tauro':
  console.log(`El trabajo de los actores consiste en meterse en la piel de otra persona, y son capaces de lucir esa misma máscara en más de una ocasión. Es más, si su técnica es buena, podrán interpretar diversos personajes. Ahora te toca a ti reflexionar sobre tus dotes interpretativas, ¿podrás continuar manteniendo las apariencias de este engaño en el que te has sumido? ¿De verdad importa algo la opinión que el resto tenga sobre ti? ¿Por qué pretender ser alguien que no eres?

  Siéntete orgullosa de lo que eres y de todo lo que has logrado.`)
  break;
  case 'geminis':
  console.log(`Se suele decir que ni el tiempo ni la marea aguardan la llegada de ningún hombre o mujer. Y aunque parezca que es un gran consejo, no estoy tan seguro de ello. ¿Acaso el tiempo y el espacio no esperaron que vinieses a este mundo? El mundo se formó hace millones de años, y mientras tanto, ¿no estaba esperando tu nacimiento? El cosmos te manda un mensaje claro: ha llegado tu turno, te toca brillar. Los acontecimientos que están a punto de suceder contribuirán a fortalecer tu confianza.

  A medida que se incrementa tu poder sobre el tiempo, vas a ser capaz de solucionar un problema del pasado con nueva perspicacia.`)
  break;
  case 'cancer':
  console.log(`Podemos comparar la relación de los tataranietos y tatarabuelos con la del ayer y el mañana. No cabe duda de que tienen mucho en común, pero nunca van a poder conocerse. La conexión entre ellos eres tú, que estás en el presente. Se te ha situado en una posición desde la que vas a tener mucho poder para actuar y conseguir que la misma historia no vuelva a suceder. Lo único que tienes que hacer es usar tu habilidad innata para influir.

  Este martes vas a poder deshacerte de un problema que te acompaña desde hace tiempo.`)
  break;
  case 'leo':
  console.log(`A veces, decimos cosas que revelan nuestras verdaderas intenciones. El problema es que solemos mezclar nuestros objetivos con nuestras promesas. Por ejemplo, si yo quedo contigo para verte el jueves, tú puedes pensar que me refiero a que nos veremos más delante de esta semana. Y si lo has interpretado de esta manera, cuando el lunes vaya a tu casa, no entenderás nada.

  Es cierto que en muchas ocasiones, decimos cosas por decoro y respeto hacia la otra persona. Este martes, cerciórate de que no te estás torturando más de la cuenta por lo que sólo es una sugerencia.`)
  break;
  case 'virgo':
  console.log(`“Cuando sonríes, cuando sonríes, el mundo entero sonríe contigo”, cantaba Louis Armstrong. Uno de los músicos más importantes de la historia difundía un mensaje de felicidad, pero… ¿Es tan fácil como él asegura en su letra? ¿Quién lo ha dicho? ¿Acaso alguien lo sabe?

  Puesto que ahora todos los planetas se mueven, de nuevo, en tu misma dirección, revelan que tienes mucha más capacidad de influencia de la que imaginabas. Es momento de que comiences a sonreír.`)
  break;
  case 'libra':
  console.log(`Tú no eres de esos que se rinden fácilmente. Si echas un vistazo a tu pasado, comprobarás que en más de una ocasión has conseguido salir airosa de todo tipo de situaciones. Eres valiente y toda una luchadora, entonces ¿por qué no admites de una vez que ya no te queda más suerte? Ahora aparece ante ti una posibilidad, y por muy irreal que parezca a simple vista, merece la pena que la tengas en cuenta. Es más, si te decantas por ella, hay probabilidades de éxito. No tires la toalla antes de haberlo intentado.`)
  break;
  case 'escorpio':
  console.log(`¿De verdad tienes que demostrar valentía? ¿Es necesario que seas un ejemplo de fortaleza, entereza y determinación? ¿Qué te obliga a estar continuamente a la altura de todos los retos que hay en la vida y ser un modelo a seguir? No cabe ninguna duda de que tus objetivos son buenos. Sin embargo, dado el poderoso clima astrológico que se da en la actualidad, no tienes por qué esforzarte tanto en aunar tus recursos internos. Si te calmas, comprobarás que esta situación no es tan complicada como crees.`)
  break;
  case 'sagitario':
  console.log(`En 1942, Louis Jordan arrasó con su canción ‘De qué te sirve estar sobrio cuando te vas a volver a emborrachar’. A pesar del título del tema musical, Louis no tenía ningún problema con el alcohol. Tan sólo advertía a sus oyentes sobre el ciclo que se da en el universo. ¿Cuál es la razón por la que bebemos si en algún momento estaremos sedientos? Asimismo, podrías cuestionarte por qué merece la pena ser buena persona y generosa con el resto.

  Pero creo que no necesitas mi respuesta a esta pregunta. ¿Tiene algún sentido que hoy lleves a cabo una buena acción? ¡Por supuesto!`)
  break;
  case 'capricornio':
  console.log(`Si te sientas en la playa y observas las olas, es imposible que sepas de dónde vienen. Cuando la marea está baja, el agua tan sólo moja tus pies. No existe ninguna muestra que pruebe cuántos kilómetros han recogido ni cuánta fuerza han reunido para que lleguen hasta ti.

  Después de la conexión de Saturno con Plutón, la magia comienza a llegar a tu universo. Debes estar alerta para detectar las pequeñas ondas de nueva energía, que tienen un valioso poder: son capaces de llevarse lo antiguo y traer lo nuevo.`)
  break;
  case 'acuario':
  console.log(`¿De qué sirve un sistema judicial complejo si no tienen jueces ni jurados? Siempre hay culpables e inocentes. Aunque, sin duda, sería mucho más fácil –y ahorraríamos dinero- si una persona se dedicase a mirar directamente al acusado a los ojos, y le interrogase sobre lo que ha hecho. Su respuesta sería reveladora, ya que los seres humanos, en general, somos honestos, ¿no?

  ¡Qué bonita sería la vida si esto fuese así! Pero no es tan fácil. Este martes, sólo encontrarás una respuesta clara si eres meticulosa.`)
  break;
  case 'piscis':
  console.log(`¿Quién no ha soñado nunca con ser un superhéroe? Al ser Piscis, siempre has fantaseado con la idea de ser capaz de nadar sin tener que respirar, como Aquawoman o Aquaman. Sin embargo, a los otros signos del Zodiaco les atraen diferentes personajes. La verdad es que no tienes que imitar el talento de otras personas, dado que tú tienes muchos.

  Venus se encuentra ahora en tu signo, por lo que vas a descubrir cómo puedes utilizar todo tu talento para seguir avanzando en el camino de la vida que quieres. Antes que nada, respira hondo, prepárate y lánzate a por ello.`)
  break;

  default:
    console.log('Qué es esta mierda, ese signo no existe')
    break;
}