// Génération des variables
let firstNumber = (Math.floor(Math.random() * 10) + 1);
let secondNumber = (Math.floor(Math.random() * 10) + 1);

// Création de la boucle et affichage
while(firstNumber * secondNumber < 250){
    let calcul = (firstNumber * secondNumber);
    console.log(`le résultat de la multiplication est ${calcul}`);
    secondNumber = calcul
}
