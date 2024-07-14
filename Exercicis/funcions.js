// console.log(
//   "%cFuncions",
//   "font-weight: bold; color: red; font-family: Arial; font-size: 2 em"
// );

// // var defineix una variable universal; let, local. Si aquí definíssim nom amb let, ens donaria error

// // funció que mostra un string per la consola
// function saludar() {
//   nom = "Omar";
//   console.log("¡Hola, clase!");
// }

// saludar();
// console.log(nom);

// // funció que torna un string
// function saludo() {
//   return "Hola, clase";
// }

// console.log(saludo());

// // funció amb un paràmetre
// function saludarPersona(nom) {
//   console.log(`hola, ${nom}!`);
// }

// saludarPersona("David");
// saludarPersona("Gonzalo");
// saludarPersona("Carlos");

// //funció amb un paràmetre que torna una string personalitzada
// function saludoPersona(nom) {
//   return `hola, ${nom}!`;
// }

// console.log(saludoPersona("Alberto"));
// console.log(saludoPersona("Myrella"));
// console.log(saludoPersona("Xavi"));

// //funció a la que li passem un DNI i el torna ofuscat
// function dniOfuscado(dni) {
//   return dni.slice(4).padStart(9, "X").slice(0, -2).padEnd(9, "X");
// }
// console.log(dniOfuscado("12345678Z"));

// // funció que ofusca el dni guardat en una variable
// dni = "98765432B";

// function ofuscarDni() {
//   let dniOfus; // variable auxiliar
//   dniOfus = dni.slice(4).padStart(9, "X").slice(0, -2).padEnd(9, "X");
//   dni = dniOfus;
// }

// function ofuscarDni() {
// reasignada directament
//   dni = dni.slice(4).padStart(9, "X").slice(0, -2).padEnd(9, "X");
// }
// ofuscarDni();

// console.log(dni);

// una funció a la qual li passes un array de dos elements i torna l'array invertit
// gatigos = ["🐱", "🐶"];
// function arrayInvertit(array) {
//   return array.toReversed();
// }

// function arrayInvertit() {
//   gosigat = gatigos.reverse();
// }
// arrayInvertit();
// console.log(gosigat);

//------------------------------------------------
//PARA QUE SE EJECUTE UNA FUNCIÓN ES IMPRESCINDIBLE QUE INCLUYA LOS PARÉNTESIS
// Se pueden pasar funciones como parámetros a otras funciones

// Función flecha:

const logRojo = (content) => {
  console.log("%C" + content, "color: red");
};
logRojo("Hola, Omar");

const logAzul = (content1, content2) => {
  console.log(content1 + content2);
};
logAzul("Hola, Omar");

function logColor(content, color) {
  console.log("%c" + content, "color: " + color);
} //Función que requiere 2 parámetros: un contenido que pinta en un color por consola

logColor("Arnau"); // Como solo le doy un parámetro, usa el negro por defecto
logColor("Arnau", "pink"); // Pinta en rosa

// Funciones anónimas
// Esta primera devuelve el nombre Marc (no es anónima)
const getName = () => "Marc";
console.log("Hola, " + getName());

console.log((() => "Hola, Roselly")()); // función anónima y autoejecutable. Como es anónima, no es reutilizable

/* Exemples de funcions anònimes: no tenen cap nom

() => {
  aquí hi ha codi
  aquí hi ha més codi
  }

(paràmetres) => {
  aquí hi ha ciodi
  aquí hi ha més codi
  }
*/

// funció autoexecutable no anònima:

(function cosa(param) {
  console.log("Sóc autoexecutable " + param);
})("yupiiiii");

// funció autoexecutable i anònima:
(function (param) {
  console.log("Sóc anònima i autoexecutable " + param);
})("yupiiiii");

// funció callback: funció que es passa com a paràmetre a una altra funció per ser executada després

function logCustom(content, log) {
  log(content);
}

logCustom("Omar", console.log); // Ejecuta la función (segundo parámetro) con el primer parámetro

logCustom("Omar", (txt) => {
  console.log("%c" + txt, "color: green");
}) // Dos paràmetres: el string Omar i la funció txt, que pinta per consola el que li passes com a primer paràmetre (txt)

logCustom("Omar", (txt) => console.log("%c" + txt, "color: green"))


// Funciones temporales-----------------------
//setTimeout() definida por defecto en JavaScript que recibe dos cosas: una función y un tiempo en milisegundos. Sirve para hacer que los programas se esperen el tiempo indicado

setTimeout(logCustom("Omar", logRojo), 2000); // s'executa inmmediatament. O sigui, està malament, perquè cal una funció, no un string
setTimeout(() => logCustom("Omar", logRojo), 2000); //això triga 2 segons

setInterval() => {
  console.log("Ha pasado un segundo")
  console.log("");
  } 1000;