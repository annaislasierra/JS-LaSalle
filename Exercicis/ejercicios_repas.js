// TODO: mostra les taules de multiplicar del 1 al 9 per la consola

function mostrarTaules() {
  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 11; j++) {
      let resultat = i * j;
      console.log(`${i} multiplicat per ${j} dóna ${resultat}`);
    }
    console.log("----------");
  }
}
mostrarTaules();

// TODO: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" ha de tornar "234.1234"

function agafarNombres() {
  let entrada = prompt(
    "Introdueix una combinació de lletres i nombres. Si vols, pots incloure punts, comes o apòstrofs:"
  );
  let resultat = "";
  let comptaPunts = 0;
  for (let i = 0; i < entrada.length; i++) {
    if (entrada[i] >= "0" && entrada[i] <= "9") resultat += entrada[i];
    if (entrada[i] === "." || entrada[i] === "," || entrada[i] === "'")
      resultat += ".";
    if (comptaPunts < 1) resultat += ".";
    comptaPunts++;
  }
}
console.log(resultat);

agafarNombres();

// TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari
