console.log("DOM");

console.log(document);

//accés a propietats del DOM
console.log(document.title);
console.log(document.URL);

//accés a les propietats d'un element concret

console.log(document.querySelector("h1").style); //muestra todas las propiedades del h1 (incluidas las que están vacías)
console.log(document.querySelector("h1").innerHTML); //devuelve todo el html (las etiquetas y lo que hay dentro de ellas)
console.log(document.querySelector("h1").innerText); //devuelve lo que hay dentro de la etiqueta
console.log(document.querySelector("h1").textContent); //devuelve lo que hay dentro de la etiqueta en texto plano

document.querySelector("header").innerHTML = "<h1>Document Object Model</h1>"
document.querySelector("header").innerHTML += "<h3>Pàgina de proves modificant el DOM amb JavaScript</h3>";

console.log(document.querySelector("style").textContent) = `
I aquí el nou CSS`

document.querySelector("header").style.backgroundColor = `#b13cb9`

