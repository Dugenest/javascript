// Déclaration de variable et cyblage des input
let inputs = document.querySelectorAll("input");
// console.log(btn)

// Création d'un boucle pour traiter le tableau
inputs.forEach(function(input) {
        input.addEventListener("click", function (){
            (console.log(input.value));
        })
    });


// Même méthode mieux écrite
// let displayInput = function (){
//     (console.log(input.value));
// };

// inputs.forEach((input) => {
//     input.addEventListener("click", displayInput);
// });