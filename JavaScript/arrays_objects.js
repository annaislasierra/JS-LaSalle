// Exemple d'arrays

let data = ["Dog", "🐶", 23, true];

// S'accedeix a ells mitjançant l'índex, que comença sempre per 0.

console.log(data[0]); // "Dog"

console.log("L'array data conté " + data.length + " elements"); //L'array data conté 4 elements.

console.log(`L'array data conté ${data.length} elements`); //L'array data conté 4 elements. Mateixa resposta que abans.

console.dir(data); // Un array no és una primitiva; un cosole.dir mostra per consola una llista amb totes les propietats i mètodes que té.

data[0] = "Cat"; // Hem canviat l'string Dog per Cat

let animals = [dog, cat, racoon, pig];

//-------------------------------------------

// Exemples d'objectes

let objecte = {
  propietat1: valor1,
  propietat2: valor2,
};

let alumne = {
  nom: "Gerardo",
  cognom: "Pino",
  edat: 41,
  hobbie: "🎮",
  animals: [koala, animals[1]], // koala i gat
};

console.log(
  `L'alumne ${alumne.nom} ${alumne.cognom} té ${edat} anys i li agrada ${alumne.hobbie}`
); //L'alumne Gerardo Pino té 41 anys i li agrada 🎮

alumne.edat = 46; // Reasigna l'edat i l'escriu
edatGonzalo = alumne.edat; // Llegeix una propietat d'un objecte, però no escriu res.

//Per asignar propietats a posteriori, hem d'indicar a JS que estem treballant amb un objecte

let profe = {}; // Si no posem les claus, no podrem asignar propietats ni valors com segeix, perquè JS no sap que es tracta d'un objecte

profe.nom = "Omar";
profe.edat = 33;

console.log(profe); // {nom: Omar, edat: 33}

//-----------------------------------------

//Exemple d'array d'objectes

let animalons = [
  {
    nom: "Roc",
    raça: "Bouvier de Berna",
    edat: 5,
    guapo: true,
    icona: "🐶",
  },
  {
    nom: "Pepe",
    raça: "Atigrado",
    edat: 8,
    guapo: true,
    icona: "🐱",
  },
];

console.log(animalons);

let socis = [
  (soci2 = {
    nom: "Pablo",
    cognom: "Pérez",
    edat: 19,
    hobbie: "🧶",
  }),
  {
    nom: "Maria",
    cognom: "Martínez",
    edat: 49,
    hobbie: "🚲",
  },
];

console.log(socis);
console.log(socis[1]);
console.table(socis);

// -->EJERCICIOS 1 a 6

// Ejercicio 1: crea un array con 5 objetos dentro que tengan las mismas 4 propiedades
objetos = [
  {
    nombre: "Pau",
    edad: 25,
    ciudades: ["Manresa", "Barcelona"],
    trabajando: true,
    comida: "🥬",
  },
  {
    nombre: "Manel",
    edad: 30,
    ciudades: ["Girona", "Montpellier"],
    trabajando: false,
    comida: "🍄",
  },
  {
    nombre: "Lola",
    edad: 22,
    ciudades: ["València", "Benodorm", "Cádiz"],
    trabajando: true,
    comida: "🍊",
  },
  {
    nombre: "Cristina",
    edad: 28,
    ciudades: ["Sevilla"],
    trabajando: false,
    comida: "🍓",
  },
  {
    nombre: "Mar",
    edad: 35,
    ciudades: ["Bilbao", "Pamplona"],
    trabajando: true,
    comida: "🍩",
  },
];

// Ejercicio 2: crea un array que contenga una lista de una de las propiedades de los objetos
nombres = [
  objetos[0].nombre,
  objetos[1].nombre,
  objetos[2].nombre,
  objetos[3].nombre,
  objetos[4].nombre,
];

// Ejercicio 3: cread una variable que contenga la suma de una propiedad (que sea numérica)
sumaEdades =
  objetos[0].edad +
  objetos[1].edad +
  objetos[2].edad +
  objetos[3].edad +
  objetos[4].edad;

// Ejercicio 4: Mostrar por consola todo lo anterior
console.log("Array de objetos:", objetos);
console.log("Lista de nombres:", nombres);
console.log("Suma de las edades:", sumaEdades);

// Ejercicio 5: Mostrar por consola una frase que resuma las propiedades de cada objeto
console.log(
  `${objetos[0].nombre} tiene ${objetos[0].edad} años, vive en ${objetos[0].ciudad} y está trabajando: ${objetos[0].trabajando}.`
);

console.log(
  `${objetos[1].nombre} tiene ${objetos[1].edad} años, vive en ${objetos[1].ciudad} y está trabajando: ${objetos[1].trabajando}.`
);

console.log(
  `${objetos[2].nombre} tiene ${objetos[2].edad} años, vive en ${objetos[2].ciudad} y está trabajando: ${objetos[2].trabajando}.`
);

console.log(
  `${objetos[3].nombre} tiene ${objetos[3].edad} años, vive en ${objetos[3].ciudad} y está trabajando: ${objetos[3].trabajando}.`
);

console.log(
  `${objetos[4].nombre} tiene ${objetos[4].edad} años, vive en ${objetos[4].ciudad} y está trabajando: ${objetos[4].trabajando}.`
);

// Ejercicio 6: Buscar una manera de mostrar por consola todos los objetos en forma de tabla
console.table(objetos);
