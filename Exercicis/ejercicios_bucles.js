// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente

// for (let i = 0; i < 5; i++) {
//   console.log("%cSóc un text de color vermell", "color: red");
//   console.log("%cSóc un text de color blau", "color: blue");
// }

// TODO: escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " hola");
//   } else if (i % 3 === 0) {
//     console.log(i + " adéu");
//   } else if (i % 5 === 0) {
//     console.log(i + " què tal?");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) console.log(i + " hola");
//   if (i % 3 === 0) console.log(i + " adéu");
//   if (i % 5 === 0) console.log(i + " què tal?");
//   if (i % 2 === 0 && i % 3 === 0) console.log(i + " hola adéu");
//   if (i % 2 === 0 && i % 5 === 0) console.log(i + " hola què tal?");
//   if (i % 3 === 0 && i % 5 === 0) console.log(i + " adéu què tal?");
//   if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0)
//     console.log(" hola adéu què tal?");
// }

// for (let i = 0; i <= 20; i++) {
//   let missatge = i;

//   if (i % 2 === 0) missatge += " hola";
//   if (i % 3 === 0) misstage += " adéu";
//   if (i % 5 === 0) misstage += " què tal?";

//   console.log(misstage);
// }

// TODO: fes un comptador que mostri a la consola els números de l'1 al número que introdueixis com a paràmetre (fins a 1000 com a màxim)

// function comptador(n) {
//   if (n > 1000) console.log("El nombre no pot ser > 1000");
// return;
//   if (n < 1) console.log("El nombre no pot ser < 1");

//   for (let i = 1; i <= n; i++) console.log(i);
// }
// comptador(825);

function contarMil(num) {
  for (let i = 1 <= 1000; i++) {
    console.log(i);
    if (i == num) break; // atura el bucle
  }
}

// TODO: fes un comptador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100

// let digitos = prompt("Introdueix els dígits")

// for (let i = 0; i< 101; i++) {
//   let string = i.toString()

//   for (const char of string) {
//     if (digitos.includes(char)) {
//       console.log(i);
//       break;
//     }
//   }
// }


// TODO: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau (useu BREAK); fins llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi amb el format:
//                       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

function llistaCompra() {
  let element ="";
  let llista = "Llista de la compra:\n"

  while (element != "stop") {
    element = prompt("Introdueix el següent element de la llista de la compra. Escriu STOP per acabar")
    element = element[0].toUpperCase() + element.slice(1).toLowerCase()

  llista += "- " + element + "\n"
  element = element.toLowerCase()
}
if (element == null) break;
}
llistaCompra()