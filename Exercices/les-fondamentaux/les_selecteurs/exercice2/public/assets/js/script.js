// Création de la variable
let textToDisplay = 'Les Sélecteurs'
// Création d'une variable intégrant un sélecteur pour une balise (h1)
let getH1 = document.querySelector('h1');
// ou let getH1 = title;  (uniquement avec les Id)
let displayH1= getH1.innerHTML = textToDisplay;

// autre méthode
// console.log(document.querySelector('h1').innerHTML = textToDisplay);

// Affichage du selecteur via la variable dans la console
console.log(`${displayH1}`)




// Création d'une variable intégrant un sélecteur pour une classe
let getDescription = document.getElementsByClassName('description');
// Création d'une boucle pour afficher tous les éléments du tableau (de la classe)
let initial = 0
for (initial; initial < getDescription.length; initial ++) {
    console.log(getDescription[initial].textContent);
}

// autre méthode (pas de boucle car 1 seule info à chercher)
// console.log(getDescription[0].innerText)




// Création d'une variable intégrant un sélecteur pour plusieurs balises (li)
let getLi = document.querySelectorAll('li');
// Création d'une boucle pour afficher tous les éléments du tableau (des balises)
let init = 0
for (init; init < getLi.length; init ++) {
    console.log(getLi[init].textContent);
}

// Autre méthode
// getLi.forEach((li) => console.log(li.innerText));