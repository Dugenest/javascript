// Déclaration des variables
const lastname = document.getElementById("lastName");
const firstname = document.getElementById("firstName");
const email = document.getElementById("Email");
const ajoutPersonnes = document.getElementById("ajout");
const fors = document.querySelectorAll("for");
const ids = document.querySelectorAll("id");
const formulaire = document.querySelector(".forms");


let duplicateForm = () =>  {
    const formulaireClone = formulaire.cloneNode(true)
    formulaire.appendChild(formulaireClone)
}

ajoutPersonnes.addEventListener ("click", duplicateForm)

// ids = 0
// // Création des boucles
// ids.forEach(id => {
//     ids ++
// });

// for = 0
// fors.forEach(for => {
//     fors ++
// });