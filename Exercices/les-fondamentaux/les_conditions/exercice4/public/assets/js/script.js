// Déclaration des variables
let day = 5;
let message;

// Conditions avec un switch
switch (day) {  
    case 1:
    message = 'Lundi';
    break;
    case 2:
    message = 'Mardi';
    break;
    case 3:
    message = 'Mercredi';
    break;
    case 4:
    message = 'Jeudi';
    break;
    case 5:
    message = 'Vendredi';
    break;
    case 6:
    message = 'Samedi';
    break;
    case 7:
    message = 'Dimanche';
    break;
    default:
    message = 'erreur';
    break;
}

// Affichage du message
console.log(message)