// Déclaration des variables et création des Regex
let lastnameText = document.getElementById("lastName")
let emailText = document.getElementById("Email")
let regexLastname = ("/^\w+([\.-]?w+)*")
let regexEmail = ("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")

lastnameText.addEventListener("submit", function(){
    if(lastnameText.match(regexLastname))
        true;
    else
        input.classList.add("red");
        alert('caractère non pris en compte !')
});

emailText.addEventListener("submit", function(){
    if(emailText.match(regexEmail))
        true;
    else
        input.classList.add("red");
        alert('Email incorrect !')
});
