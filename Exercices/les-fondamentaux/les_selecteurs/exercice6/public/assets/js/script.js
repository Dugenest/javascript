// Sélectionner la balise span
let selectLi = document.querySelector('li')
console.log(selectLi)

// Boucle pour récupérer le 4éme élément des Li 
selectLi.forEach(function(li) {
    selectLi[3] = classList.add("red")
});

// autre méthode
// let selectLi = document.querySelector("li : nth-child(4)");
// selectLi.classList.add(red);