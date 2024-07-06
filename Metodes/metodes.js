console.log(
  "%cMètodes arrays i strings",
  "font-weight: bold; color: red; font-family: Arial; font-size: 2 em"
);

//-----------------------EXPLICACIONS "PRÒPIES"-----------------------

// trim()
// Elimina los espacios en blanco al principio y al final de una cadena. Es un método de string.
let str0 = "  Hola  ";
console.log(str0.trim()); // "Hola"

// padStart()
// Añade caracteres al principio de una cadena hasta alcanzar una longitud específica. Es un método de string.
let str1 = "5";
console.log(str1.padStart(3, "0")); // "005"

// padEnd()
// Añade caracteres al final de una cadena hasta alcanzar una longitud específica. Es un método de string.
let str2 = "5";
console.log(str2.padEnd(3, "0")); // "500"

// replace()
// Reemplaza la primera aparición de un texto en una cadena con otro texto. Es un método de string.
let str3 = "Hola mundo";
console.log(str3.replace("mundo", "amigo")); // "Hola amigo"

// replaceAll()
// Reemplaza todas las apariciones de un texto en una cadena con otro texto. Es un método de string.
let str4 = "Hola mundo mundo";
console.log(str4.replaceAll("mundo", "amigo")); // "Hola amigo amigo"

// split()
// Divide una cadena en un array de subcadenas usando un separador. Es un método de string.
let str5 = "Hola mundo";
console.log(str5.split(" ")); // ["Hola", "mundo"]

// Separador----------Dividir por espacio
let strA = "Hola mundo";
console.log(strA.split(" ")); // ["Hola", "mundo"]

// Separador----------Dividir por letras (cada letra se convierte en un elemento del array)
let strB = "Hola mundo";
console.log(strB.split("")); // ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]

// Separador----------Dividir por coma
let strC = "Manzana,Naranja,Pera";
console.log(strC.split(",")); // ["Manzana", "Naranja", "Pera"]

// Separador----------Dividir por espacio, pero limitando el número de divisiones
let strD = "Uno Dos Tres Cuatro";
console.log(strD.split(" ", 2)); // ["Uno", "Dos"]

// Separador----------Dividir por expresión regular (en este caso, por cualquier tipo de espacio)
let str = "Uno   Dos \n Tres \t Cuatro";
console.log(str.split(/\s+/)); // ["Uno", "Dos", "Tres", "Cuatro"]

// toUpperCase()
// Convierte una cadena a mayúsculas. Es un método de string.
let str6 = "Hola";
console.log(str6.toUpperCase()); // "HOLA"

// toLowerCase()
// Convierte una cadena a minúsculas. Es un método de string.
let str7 = "HOLA";
console.log(str7.toLowerCase()); // "hola"

// slice()
// Extrae una parte de una cadena y devuelve una nueva cadena sin modificar la original. Es un método de string.
let str8 = "Hola mundo";
console.log(str8.slice(0, 4)); // "Hola"

// indexOf()
// Devuelve la posición de la primera aparición de un texto en una cadena, o -1 si no lo encuentra. Es un método de string.
let str9 = "Hola mundo";
console.log(str9.indexOf("mundo")); // 5

// includes()
// Verifica si una cadena contiene un texto especificado, devolviendo true o false. Es un método de string.
let str10 = "Hola mundo";
console.log(str10.includes("mundo")); // true

// startsWith()
// Verifica si una cadena empieza con un texto especificado, devolviendo true o false. Es un método de string.
let str11 = "Hola mundo";
console.log(str11.startsWith("Hola")); // true

// endsWith()
// Verifica si una cadena termina con un texto especificado, devolviendo true o false. Es un método de string.
let str12 = "Hola mundo";
console.log(str12.endsWith("mundo")); // true

//-----------------------CLASE----------------------------------------
text =
  "   Aquesta és una string que ha escrito l'Omar per fer exercicis de mètodes   ";

// TODO: provar mètodes trim(), pad...(), replce(), replaceAll(), split(), to...Case() i slice()

console.log(text.lengh);

// trim() elimina espais al començament i al final d'un string
console.log(text.trim());

// padStart() fixa la longitud màxima i omple el començament amb una caràcter que se li passa (fins a completar la longitud màxima)
console.log(text.padStart(83, "🎵"));

// padEnd() fixa la longitud màxima i omple el començament amb una caràcter que se li passa (fins a completar la longitud màxima)
console.log(text.padEnd(83, "🎵"));

// Uso práctico de pad: ofuscación de DNI:
dni = "12345678A";
console.log("DNI completo: " + dni);
console.log(
  "DNI ofuscado: " + dni.slice(4).padStart(9, "X").slice(0, -2).padEnd(9, "X")
);

email = "AnnaSanchezLasierra@Inventado.com";
console.log(email.toLowerCase());
console.log(email.toUpperCase());

console.log("Text original:  '" + text + "'");
console.log(
  "Text alterat: '" + text.trim().replace("l'Omar", "el profe") + "'"
);

textAlt = text.trim().replaceAll(" ", "_"); // guardo la string amb els espais canviats per guions baixos

console.log("Text sense espais: '" + textAlt + "'");
console.log("Text original: '" + text + "'");

// TODO: a la cadena inicial, ofuscar el nom d'Omar i reemplaçar-lo per XXXX

text =
  "   Aquesta és una string que ha escrito l'Omar per fer exercicis de mètodes   ";
console.log("Frase completa: " + text);
console.log(
  "Frase amb tot ofuscat menys el nom: " +
    text.slice(40).padStart(74, "X").slice(0, -32).padEnd(74, "X")
);
console.log("Frase amb el nom ofuscat:" + text.slice(40).padStart(74, "X"));

// TODO: provar mètodes de cerca: indexOf(), includes(), ...with()

console.log(text.indexOf("Omar"));

// TODO: gestionar dades així amb bucles i condicionals (aix`ò per al futur)

// data0 = "NOM Omar"
// data1 = "COG Olmedo"
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"
