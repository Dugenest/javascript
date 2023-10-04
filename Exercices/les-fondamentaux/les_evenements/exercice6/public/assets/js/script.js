let inputs = document.querySelectorAll(`input:nth-child(-n+2)`)

inputs.forEach(function(input)  {
    input.addEventListener("focus", function(){
        (input.style.backgroundColor = "#FF0000");
    });
    input.addEventListener("change", function(){
        (input.style.backgroundColor = "#FFFFFF");
    });
})


// autre méthode (à vérifier)
// inputs.forEach(function(input)  {
//     input.addEventListener("click", function(){
//         input.classList.add("red");
//     });
//     input.addEventListener("blur", function(){
//         input.classList.remove("red");
//     });
// })