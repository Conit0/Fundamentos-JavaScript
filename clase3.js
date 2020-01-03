var edad = 27
// edad = edad + 1
edad += 1

var peso = 75
// peso = peso - 2
peso -= 2

var emparedado = 1
// peso = peso + emparedado
peso += emparedado

var rideBike = 3
// peso = peso - rideBike
peso -=rideBike

//números decimales
var precioVino = 200.3

var total = Math.round (precioVino * 100 * 3) / 100
var totalStr = total.toFixed(3)
var total2 = parseFloat(totalStr)
/* 
var total = precioVino * 3
var total = precioVino * 100 * 3 / 100
al multiplicar precioVino con 100 lo estamos pasando a entero
y luego al dividirlo en 100 quitamos la larga cadena de decimales
*/

var pizza = 8
var personas = 2
var cantidadPorcionesPersona = pizza / personas