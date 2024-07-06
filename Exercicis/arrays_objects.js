// TODO: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
// TODO: cread un array que contenga una lista de una de las propiedades de los objetos
// TODO: cread una variable que contenga la suma de una propiedad (que sea numérica)
// TODO: mostrar por consola todo lo anterior
// TODO: mostrar por consola una frase que resuma las propiedades de cada objeto
// TODO: buscad una manera de buscar por consola todos los objetos en forma de tabla

// Ejercicio 1: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
objetos = [
  {
    nombre: "Pau",
    edad: 25,
    ciudad: "Manresa",
    trabajando: true,
  },
  {
    nombre: "Manel",
    edad: 30,
    ciudad: "Barcelona",
    trabajando: false,
  },
  {
    nombre: "Lola",
    edad: 22,
    ciudad: "València",
    trabajando: true,
  },
  {
    nombre: "Cristina",
    edad: 28,
    ciudad: "Sevilla",
    trabajando: false,
  },
  {
    nombre: "Mar",
    edad: 35,
    ciudad: "Bilbao",
    trabajando: true,
  },
];

// Ejercicio 2: cread un array que contenga una lista de una de las propiedades de los objetos
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
