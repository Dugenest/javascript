// Déclaration des variables
const lastname = document.getElementById("lastName");
const firstname = document.getElementById("firstName");
const email = document.getElementById("Email");
const ajoutPersonnes = document.getElementById("ajout");
const ids = document.querySelectorAll("#id");
const formulaire = document.getElementById("forms");
const submittedData = document.querySelector(".data")
const divClones = document.getElementById("clones")


let duplicateForm = () =>  {
    const labelFor = clone.querySelectorAll("label");
    const formulaireClone = formulaire.cloneNode(true)
    const Clones = divClones.append(formulaireClone)
}

// Création d'un écouteur d'événement
ajoutPersonnes.addEventListener ("click", duplicateForm)
