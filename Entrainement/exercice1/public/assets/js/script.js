// Déclaration des variables
const lastnameText = document.getElementById("lastName"); 
const emailText = document.getElementById("Email"); 
const message1 = "Caractères non pris en compte !";
const message2 = "E-mail incorrect !";
const errorMessage1 = document.getElementById("error1")
const errorMessage2 = document.getElementById("error2")

// Création des regex
const regexLastname = /^[a-zA-Z0-9]{2,30}$/; 
const regexEmail = /^[A-Za-z0-9.\_\.\-]+@[a-z0-9\_\-]+\.[a-z]{2,5}$/; 

// Création d'un écouteur d'événement pour le lastname
lastnameText.addEventListener("input", function () { 
// Supprimer les classes "red" et "green" à chaque saisie 
    lastnameText.classList.remove("red", "green"); 
// Utilisation de regexLastname.test() pour tester la valeur 
// par défaut ici c'est === True
    if (regexLastname.test(lastnameText.value)) { 
        lastnameText.classList.add("green"); 
    } else { 
        lastnameText.classList.add("red"); 
        errorMessage1.textContent = message1; }; 
});

// Création d'un écouteur d'événement pour l'email
emailText.addEventListener("input", function () { 
    emailText.classList.remove("red", "green");  
    if (regexEmail.test(emailText.value)) { 
        emailText.classList.add("green"); 
    } else { 
        emailText.classList.add("red"); 
        errorMessage2.textContent = message2; };
}); 

// Autre méthode
// const regexUsername = /^[a-zA-Z0-3]{2,30}$/;
// const regexEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z]{2,5}$/
// [15:17]
// // Création d'une fonction de vérification du username
// const checkUsername = () => {
//     // On réinitialise les bordures et on masque le message d'erreur avant de faire les tests
//     username.classList.remove('border-danger', 'border-success', 'border-3')
//     usernameHelp.classList.add('d-none');

//     // Si champs vide, on sort de la fonction
//     if (username.value == '') {
//         return;
//     }

//     result = regexUsername.test(username.value)
//     console.log(result);
//     if (!result) {          // if (result == false)
//         // bordure rouge
//         username.classList.add('border-danger', 'border-3')
//         usernameHelp.classList.remove('d-none');
//     } else {
//         // bordure verte
//         username.classList.add('border-success', 'border-3')
//         usernameHelp.classList.add('d-none');
//     }
// }

// // Création d'une fonction de vérification de l'email
// const checkEmail = () => {
//     email.classList.remove('border-danger', 'border-success', 'border-3')
//     emailHelp.classList.add('d-none');
//     if(email.value == ''){
//         return
//     }

//     let regexInstance = new RegExp(regexEmail)
//     let isValid = regexInstance.test(email.value)


//     if (isValid == false) { // if (!isValid)
//         // bordure rouge
//         email.classList.add('border-danger', 'border-3')
//         emailHelp.classList.remove('d-none');
//     } else {
//         // bordure verte
//         email.classList.add('border-success', 'border-3')
//         emailHelp.classList.add('d-none');
//     }
// }
// [15:18]
// // // Création de 2 écouteurs d'évènement à l'appui sur une touche
// username.addEventListener("keyup", checkUsername);
// email.addEventListener("keyup", checkEmail);

// // Si champs vide, on sort de la fonction
// if (username.value == ''|| username.length<2 ) {
//     return;
// }


// Exemple de regex :
// const usernameRegex = /^[a-zA-Z0-9]{2,30}$/;
// const emailRegex = /^[a-z0-9.\_\-]+@[a-z0-9_\-]+\.[a-z]{2,5}$/;
// const regexPwdMedium = /^(?=.[A-Z])(?=.*[0-9]).{8,}$/
// const regexPwdStrong = /^(?=.[A-Z])(?=.*[0-9])(?=.*[&é"'-]){8,}$/




