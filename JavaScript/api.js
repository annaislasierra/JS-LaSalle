// fetch api

async function getRandomPokemon() {
  let count = 0;

  //Actualitzo el número de pokemon disponibles
  await fetch("https://pokeapi.co/api/v2/pokemon");
    .then(res => res.json())
    .then(res => count = res.count)

  //Pido un pokemon aleatorio

  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((res) => (count = res.count))
    .catch((err) => console.log(err));

  console.log(count);
}