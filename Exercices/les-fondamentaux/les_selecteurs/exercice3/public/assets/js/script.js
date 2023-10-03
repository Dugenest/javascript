// Récupération des li avec un sélecteur et stocké dans une variable
let liElements = document.querySelectorAll("li");

// Création de la boucle pour ajouter l'indexation
liElements.forEach(function (li, index) {
    li.textContent = li.textContent +`(` + (index + 1) +`)`;
})
