// Création de la variable pour sélectionner l'image
let img_input = document.querySelector("img");

// Sélection uniquement du .src(url) de l'image
let img_src =img_input.src
// autre méthode
// get.attribut

// Affichage de l'url de l'image
console.log(img_src)

// Affectation de l'url image à l'Id de l'input
document.getElementById("src_image").value = img_src

