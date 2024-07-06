// TODO: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
// TODO: cread un array que contenga una lista de una de las propiedades de los objetos
// TODO: cread una variable que contenga la suma de una propiedad (que sea numérica)
// TODO: mostrar por consola todo lo anterior
// TODO: mostrar por consola una frase que resuma las propiedades de cada objeto
// TODO: buscad una manera de buscar por consola todos los objetos en forma de tabla

// Ejercicio 1: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
objetos = [
  { nombre: "Pau", edad: 25, ciudad: "Manresa", activo: true },
  { nombre: "Manel", edad: 30, ciudad: "Barcelona", activo: false },
  { nombre: "Lola", edad: 22, ciudad: "València", activo: true },
  { nombre: "Cristina", edad: 28, ciudad: "Sevilla", activo: false },
  { nombre: "Mar", edad: 35, ciudad: "Bilbao", activo: true },
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

// Mostrar por consola todo lo anterior
console.log("Array de objetos:", objetos);
console.log("Lista de nombres:", nombres);
console.log("Suma de las edades:", sumaEdades);

// Mostrar por consola una frase que resuma las propiedades de cada objeto
console.log(
  `${objetos[0].nombre} tiene ${objetos[0].edad} años, vive en ${objetos[0].ciudad} y está activo: ${objetos[0].activo}.`
);

let estado1 = objetos[1].activo ? "activo" : "inactivo";
console.log(
  `${objetos[1].nombre} tiene ${objetos[1].edad} años, vive en ${objetos[1].ciudad} y está activo: ${objetos[1].activo}.`
);

let estado2 = objetos[2].activo ? "activo" : "inactivo";
console.log(
  `${objetos[2].nombre} tiene ${objetos[2].edad} años, vive en ${objetos[2].ciudad} y está activo: ${objetos[2].activo}.`
);

let estado3 = objetos[3].activo ? "activo" : "inactivo";
console.log(
  `${objetos[3].nombre} tiene ${objetos[3].edad} años, vive en ${objetos[3].ciudad} y está activo: ${objetos[3].activo}.`
);

let estado4 = objetos[4].activo ? "activo" : "inactivo";
console.log(
  `${objetos[4].nombre} tiene ${objetos[4].edad} años, vive en ${objetos[4].ciudad} y está activo: ${objetos[4].activo}.`
);

// Buscar una manera de mostrar por consola todos los objetos en forma de tabla
console.table(objetos);
