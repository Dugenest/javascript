// Génération d'un nombre aléatoire
let day = (Math.floor(Math.random() * 365));

// Affichage du chiffre aléatoire
// console.log(day)

// Création de la boucle et affichage
let first_day = 1
while(first_day < day){
    console.log(`Jour ${first_day} de l'année`);
    first_day ++
}
console.log(`Jour ${day} est atteint`)