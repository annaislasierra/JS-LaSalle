// Ejercicio: intercambiar los valores de manera que salga por consola 2,1

a = 1;
b = 2;

console.log(a, b); //1, 2

c = a;
a = b;
b = c;

console.log(a, b); // 2, 1

[a, b] = [b, a]; // 1, 2

//-----------------Transformació de tipus de variables----------------------

const PI = "3.1415"; // JS és prou intel·ligent com per convertir-ho a number.
let radi = 4;

console.log(`L'àrea del cercle és ${PI * radi ** 2}`);

let cercle = {
  radi: 4,
  area: PI * radi ** 2,
};

console.log(cercle);

parse = {
  data0: PI,
  data1: parseFloat(PI), // convierte un string en número
  data2: parseInt(PI), // devuelve la parte entera
  data3: radi,
  data4: radi.toString(), // convierte un número en string
};

console.log(parse.data0, typeof data0); // 3.1415 string
console.log(parse.data1, typeof data1); // 3.1415 'number'
console.log(parse.data2, typeof data2); // 3 'number'
console.log(parse.data3, typeof data3); // 4.5 'number'
console.log(parse.data4, typeof data4); // 4.5 string

console.log(PI[3]); // 4
