let inputs = document.querySelectorAll(`input:nth-child(-n+2)`)

// inputs.forEach(function(input)  {
//     input.addEventListener("focus", function(){
//         (input.style.backgroundColor = "#FF0000");
//     });
//     input.addEventListener("change", function(){
//         (input.style.backgroundColor = "#FFFFFF");
//     });
// })


// autre méthode
inputs.forEach(function(input)  {
    input.addEventListener("focus", function addColor(){
        input.classList.add("red");
    });
    input.addEventListener("blur", function rmvColor(){
        input.classList.remove("red");
    });
})