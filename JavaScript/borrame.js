// // Función que devuelve una promesa (simula una operación asíncrona)
// function obtenerDatos() {
//   // Se devuelve una nueva promesa
//   return new Promise((resolve, reject) => {
//     // Simulamos una operación asíncrona con setTimeout
//     setTimeout(() => {
//       const exito = true; // Cambia a false para simular un error
//       if (exito) {
//         // Si exito es true, la promesa se cumple con "resolve"
//         resolve("Datos obtenidos con éxito!");
//       } else {
//         // Si exito es false, la promesa es rechazada con "reject"
//         reject("Error al obtener los datos.");
//       }
//     }, 1000); // La operación tarda 1 segundo
//   });
// }

// // Llamamos a la función que devuelve una promesa
// obtenerDatos()
//   // Si la promesa se resuelve con éxito, se ejecuta este "then"
//   .then((resultado) => {
//     console.log(resultado); // Imprime el resultado exitoso
//   })
//   // Si la promesa es rechazada, se ejecuta este "catch"
//   .catch((error) => {
//     console.error(error); // Imprime el error en la consola
//   });

function verificarEdad() {
  let edad = prompt("Introduce tu edad");
  if (edad >= 18) {
    alert("Puedes pasar");
  } else {
    let paseMenores = confirm("¿Tienes un pase especial para menores?");
    if (paseMenores) {
      alert("Puedes pasar");
    } else {
      alert("Inténtalo en Eurodisney");
    }
  }
}

// verificarEdad();
