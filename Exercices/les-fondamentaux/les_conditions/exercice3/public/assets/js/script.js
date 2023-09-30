// Déclaration des variables
let mark = 8;
let message;

// Conditions
if(mark < 0 || mark > 10){
    message = 'erreur'
}else{
    if(mark >= 0 && mark <=3){  
        message = 'Mauvais';
    }else if(mark >= 4 && mark <=5){
        message = 'Moyen';
    }else if(mark >= 6 && mark <=7){
        message = 'Assez Bien';
    }else if(mark >= 8 && mark <=9){
        message = 'Bien';
    }else{
        message = 'Excellent';
    }
}

// Affichage du message
console.log(message)