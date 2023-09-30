// Déclaration des variables
let age = 33;
let message;

// Conditions
if(age >= 18){  
    message = 'Vous êtes majeur';
}else{
    message = 'Vous êtes mineur';
}

// Affichage du message
console.log(message);


// autre méthode : condition Ternaire
// console.log(age >= 18 ? 'Vous êtes majeur' : 'vous êtes mineur');


// autre méthode : condition Ternaire avec visuel sur la page HTML
// document.getElementById('p1').innerHTML =
// age > 18 ? 'Vous êtes majeur' : 'Vous êtes mineur';
