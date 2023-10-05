// let inputs = document.querySelectorAll(`input:nth-child(-n+2)`)
let btn = document.getElementById("btn")

inputs.forEach(function(input)  {
    btn.addEventListener("click", function(){
        (console.log(input.value));
    });
})


// Autre méthode
// let userbutton= document.querySelector("btn")
// let userfirstname = firstname
// let userlastname = lastname

// const displayInput = (Event) => {
//     Event.preventdefault();
//     console.log(`${userfirstname.value} ${userlastname.value}`)
// }

// btn.addEventListener("click", displayInput)