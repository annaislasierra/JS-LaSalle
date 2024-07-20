// TODO: crea una función que, al ajecutarla, pida un animal por el prompt y te dé instrucciones para cuidarlo (con un emoji del animal correspondiente)

// function curaAnimal() {
//   let animal = prompt("Quin és el teu animal?");

//   if (animal == "gos") {
//     console.log("Tens un 🐶. Treu-lo a passeig");
//   } else if (animal == "gat") {
//     console.log("Tens un 🐱. Neteja-li el sorral");
//   } else if (animal == "cavall") {
//     console.log("Tens un 🐴. Treu-lo a cavalcar");
//   } else if (animal == "peix") {
//     console.log("Tens un 🐟. Posa-li menjar");
//   } else {
//     console.log("Consejos vendo, pero para ti no tengo");
//   }
// }

// curaAnimal();

// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

// function tipusNom() {
//   let nomComplet = prompt("Introdueix el teu nom de pila complet");
//   let partsNom = nomComplet.trim().split(" ");

//   if (partsNom.length > 1) {
//     console.log("Tens un nom compost");
//   } else {
//     console.log("Tens un nom senzill");
//   }
// }

// tipusNom();

// I si la paia té més de 2 noms?

// function tipusNom() {
//   let nomComplet = prompt("Introdueix el teu nom de pila complet");
//   let partsNom = nomComplet.trim().split(" ");

//   if (partsNom.length == 1) {
//     console.log("Tens un nom senzill");
//   } else if (partsNom.lenght == 2) {
//     console.log("Tens un nom compost");
//   } else {
//     console.log("Com es troba avui la senyora marquesa?");
//   }
// }

// tipusNom();

// TODO: crea una función que pida dos números y un símbolo y haga la operación correspondiente (+, -, *, /, %)

// function calculadoraBasica() {
//   let num1 = prompt("Introdueix el primer número");
//   let num2 = prompt("Introdueix el segon número");
//   let operador = prompt("Introdueix l'operador");

//   if (operador === "+") {
//     console.log(parseInt(num1) + parseInt(num2));
//   } else if (operador === "-") {
//     console.log(num1 - num2);
//   } else if (operador === "*") {
//     console.log(num1 * num2);
//   } else if (operador === "/") {
//     console.log(num1 / num2);
//   } else if (operador === "%") {
//     console.log(num1 % num2);
//   } else {
//     console.log("No sé calcular logaritmes neperians (encara)");
//   }
// }

// calculadoraBasica();

// TODO: crea una función que divida dos números enteros y te devuelva en un array el resultado y el resto (residuo)

// function division(q, p) {
//   return [parseInt(q/p), q%p]
// }

// a=27;
// b=7;
// console.log(`El quacioent de dividir ${a} entre ${b} és $division(a, b)[0] i el residu és ${division(a, b)[1]`});

// TODO: crea una función que pida por prompt si quieres camiseta, pantalón o gorra, de qué color y de qué talla (S, M, L, XL) y te muestre por consola un resumen de tu pedido: "Has pedido una camiseta 👕 azul 🔵 talla XL"

function pedido() {
  let producte = prompt("Quin producte vols: samarreta, pantaló o gorra?");
  let color = prompt("De quin color?");
  let talla = prompt("Quina talla: S, M, L o XL?");
}

// TODO: crea una función que esté al principio de todo del script y te permita decidir cuál de los cuatro ejercicios anteriores se ejecuta
