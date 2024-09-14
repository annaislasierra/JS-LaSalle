// Exercicis promeses i asincronia

// Funció amb un 80 % probabilitat d'encertar
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.8) resolve("Promesa resuelta");
    else reject("Promesa rechada");
  }, 200);
});

console.log(promise);

// Funció xxxxxx

function promise(prob) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < prob) resolve("Promesa resuelta");
      else reject("Promesa rechada");
    }, 200);
  });
}

promise(0.5)
  .then((res) => {
    console.log("%c" + res, "color: green");
  })
  .catch((err) => {
    console.log("%c" + res, "color: red");
  });

console.log(promise);

//------- USO DE THEN / CATCH

// Función que devuelve una promesa (simula una operación asíncrona)
function obtenerDatos() {
  // Se devuelve una nueva promesa
  return new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona con setTimeout
    setTimeout(() => {
      const exito = true; // Cambia a false para simular un error
      if (exito) {
        // Si exito es true, la promesa se cumple con "resolve"
        resolve("Datos obtenidos con éxito!");
      } else {
        // Si exito es false, la promesa es rechazada con "reject"
        reject("Error al obtener los datos.");
      }
    }, 1000); // La operación tarda 1 segundo
  });
}

// Llamamos a la función que devuelve una promesa
obtenerDatos()
  // Si la promesa se resuelve con éxito, se ejecuta este "then"
  .then((resultado) => {
    console.log(resultado); // Imprime el resultado exitoso
  })
  // Si la promesa es rechazada, se ejecuta este "catch"
  .catch((error) => {
    console.error(error); // Imprime el error en la consola
  });

//------- USO DE ASYNC / AWAIT

// Definimos una función asíncrona con la palabra clave "async"
async function obtenerDatosAsync() {
  try {
    // Usamos "await" para esperar a que la promesa devuelta por obtenerDatos() se resuelva
    const resultado = await obtenerDatos();
    console.log(resultado); // Esto se ejecuta si la promesa se resuelve correctamente
  } catch (error) {
    // Si hay algún error (rechazo de la promesa), se captura aquí
    console.error(error); // Se imprime el error en la consola
  }
}

// Llamamos a la función asíncrona
obtenerDatosAsync(); // Inicia la operación asíncrona
