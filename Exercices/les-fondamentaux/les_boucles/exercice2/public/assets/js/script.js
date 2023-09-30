// Création d'une variable
let number = 1;

// Création d'une boucle
for (number; number >= 0 && number <= 100; number ++){
// conditions et affichage
    if(number%7 == 0){
        console.log(number, "est un multiple de 7");
    }
    else{
        console.log(number);
    }
}