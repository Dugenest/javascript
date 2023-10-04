// Génération d'un nombre aléatoire
let day = (Math.floor(Math.random() * 365) + 1);

// + 1 pour avoir la plage de 0 à 365 (car sinon le 365 est exclu)
// Math.floor -> arrondi à l'entier inférieur
// Math.ceil -> arrondi à l'entier supérieur


// Affichage du chiffre aléatoire
// console.log(day)


// Création de la boucle et affichage
let first_day = 1
while(first_day < day){
    console.log(`Jour ${first_day} de l'année`);
    first_day ++;
}
console.log(`Jour ${day} est atteint`);