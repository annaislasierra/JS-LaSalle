console.log(
  "%cMètodes d'arrays",
  "font-weight: bold; color: red; font-family: Arial; font-size: 2 em"
);

// * provar mètodes concat(), join(), pop(), push(), shift(), unshift(), flat()
//Recordar que els arrays poden ser de nombres, strings... d'objectes, d'arrays...

animals = ["🐶", "🐱", "🐭", "🐍", "🐘"];
colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"];

console.log(animals, colors);

console.log(animals.concat("🐮", { nombre: "vaca" }));
console.log(animals.concat(colors)); // une los dos arrays
console.log([animals, colors]); // crea un array de arrays

// join() converteix tots els elements d'un array en una cadena de text, concatenant-los amb un separador especificat. Si no s'especifica cap separador, els elements es concatenen amb una coma per defecte.
console.log(animals.join());
console.log(animals.join(" / "));

//pop() elimina l'últim element i el torna
elefant = animals.pop();

console.log(animals);
console.log(elefant);

console.log(animals.pop());
console.log(animals);

//push() afegeix un element i torna la nova lenght de l'array
animals.push(elefant);
console.log(animals);
console.log(animals.push("🐍"));
console.log(animals);

//shift() i unshift() fan el mateix que pop() i push(), però al començament de l'array
dog = animals.shift();
console.log(animals);
console.log(dog);

// flat() uneix en un únic array l'array i els seus subarrays
// array = [1, 2, [3, 4, 5], [[6, 7], 8]];
// console.log(array.flat()); //"aplana" un nivell
// console.log(array.flat().flat()); //"aplana" 2 nivells

// //Se li pot especificar l'índex d'arrays incardinats que es poden "aplanar"
// console.log(array.flat(2));
// console.log(array.flat(Infinity));

//indexOf() i lastIndexOf() són com els de strings, retornen la primera o l'última posició de l'element buscat

//includes() també funciona igual que els dels strings(true or false)

numbers = ["one", "two", "three", "four", "five"];

// toSorted() i toReversed() tornen l'array ordenat/invertit respectivament
numbers.sorted();
console.log(numbers);
console.log(numbers.toSorted());

// sort() i revere() modifiquen l'array per ordenar-lo o invertir-lo respectivament
numbers.sort(); // les strings s'ordenen alfabèticament (p. ex., per número d'unicode)
console.log(animals);

// TODO: gestionar dades així amb bucles i condicionals (això per al futur)

// data0 = "NOM Omar"
// data1 = "COG Olmedo"
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"
