// 1 - Solicita un nombre, la edad y muestra por consola el mensaje
// "Hola ____, tienes ____ años y el año que viene tendras ____ años"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings.

let nombre = prompt('Cual es tu nombre?')
let edad = Number(prompt('Cual es tu edad?'))

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad+1} años.`)