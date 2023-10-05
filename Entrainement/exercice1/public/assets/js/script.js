// Déclaration des variables et création des Regex
let lastnameText = document.getElementById("lastName")
let emailText = document.getElementById("Email")
let regexLastname = ("^\w+([\.-]?w+)*")
let regexEmail = ("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")

lastnameText.addEventListener("submit", function(){
    if(message.match(regexLastname))
        true;
    else
        alert('caractère non pris en compte !')
})

emailText.addEventListener("submit", function(){
    if(message.match(regexEmail))
        true;
    else
        alert('Email incorrect !')
})