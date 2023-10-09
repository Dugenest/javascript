// Déclaration des variables
const lastnameText = document.querySelector("#lastName"); 
const emailText = document.querySelector("#Email"); 
const errorMessage = document.querySelector("#error");
const pwdMedium = document.querySelector("#Password1");
const pwdStrong = document.querySelector("#Password2");
const message = "Mot de Passe différent du premier !"

// Fonction vérification des mots de passe
pwdStrong.addEventListener("keyup", function () { 
// Supprimer les classes "red" et "green" à chaque saisie 
    pwdMedium.classList.remove("red", "green");
    pwdStrong.classList.remove("red", "green"); 
    errorMessage.textContent = '';
// Conditions
    if (pwdMedium.value == '' && pwdStrong.value == '') {
        return
    }
    if (pwdMedium.value === pwdStrong.value) { 
        pwdMedium.classList.add("green"); 
        pwdStrong.classList.add("green");
    } else { 
        pwdMedium.classList.add("red"); 
        pwdStrong.classList.add("red");
        errorMessage.textContent = message; 
    }
});

