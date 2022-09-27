// 2.- Escriba un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo.

// triangulo = b * h/2
// rectangulo = b * h
// circulo = Pi * r2

let figura = prompt('De que figura geometrica desea calcular su area? triangle, rectangle or circle');

let base;
let heigth;
let radius;

switch(figura) {
    case 'triangle' :
        base = prompt('Introduzca su base');
        heigth = prompt('Introduzca su altura');
        console.log(`El area total del triangulo es : ${(base * heigth)/2}`);
        break;
    case 'rectangle' :
        base = prompt('Introduzca su base');
        heigth = prompt('Introduzca su altura');
        console.log(`El area total del rectangulo es : ${(base * heigth)}`);
        break;
    case 'circle' :
        radius = prompt('Introduzca su radio');
        console.log(`El area total del circulo es : ${(3.14159265359 * Math.pow(radius, 2))}`);
        break;
    default :
        console.log('La figura que introduciste no esta disponible.')
        break;
}






