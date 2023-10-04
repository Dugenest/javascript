let inputs = document.querySelectorAll(`input:nth-child(-n+2)`)
let btn = document.getElementById("btn")

inputs.forEach(function(input)  {
    btn.addEventListener("click", function(){
        (console.log(input.value));
    });
})