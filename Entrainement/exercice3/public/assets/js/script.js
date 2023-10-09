// Déclaration des variables  
const message1 = "Mot de Passe Faible";
const message2 = "Mot de Passe Moyen";
const message3 = "Mot de Passe Fort";

const pwd1 = document.getElementById("passwordMessage1"); 
// console.log("passwordMessage1");
const pwd2 = document.getElementById("passwordMessage2"); 
// console.log("passwordMessage2");
const pwdMedium = document.getElementById("Password1");
// console.log("Password1");
const pwdStrong = document.getElementById("Password2");
// console.log("Password2");

// Création des Regex
const regexPwdSmall = /^(?=.*[A-Z]).{8,}$/
const regexPwdMedium = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/
const regexPwdStrong = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&é"'-/+_^%$*€@£,;=<>.?:#&|¶§!()]).{8,}$/

// Création d'un écouteur d'événement pour le Password
pwdMedium.addEventListener("input", function () { 
        pwd1.classList.remove("green");
        pwd1.classList.remove("orange");
        pwd1.classList.remove("red");
        pwd1.textContent = '';
    // Conditions
    if (regexPwdStrong.test(pwdMedium.value)) { 
        pwd1.textContent = message3;
        pwd1.classList.add("red");
}
    else if (regexPwdMedium.test(pwdMedium.value)) { 
        pwd1.textContent = message2;
        pwd1.classList.add("orange");
} 
    else if (regexPwdSmall.test(pwdMedium.value)) {
        pwd1.textContent = message1;
        pwd1.classList.add("green");
}
    else  { 
        pwd1.textContent = message1;
        pwd1.classList.add("green");
    } 
});

// Création d'un écouteur d'événement pour la confirmation du Password
pwdStrong.addEventListener("input", function () { 
        pwd2.classList.remove("green");
        pwd2.classList.remove("orange");
        pwd2.classList.remove("red");
        pwd2.textContent = '';
// Conditions
    if (regexPwdStrong.test(pwdStrong.value))  { 
        pwd2.textContent = message3;
        pwd2.classList.add("red");
} 
    else if (regexPwdMedium.test(pwdStrong.value)) { 
        pwd2.textContent = message2;
        pwd2.classList.add("orange");
} 
    else if (regexPwdSmall.test(pwdStrong.value)) {
        pwd2.textContent = message1;
        pwd2.classList.add("green");
}
    else { 
        pwd2.textContent = message1;
        pwd2.classList.add("green");
    } 
});
