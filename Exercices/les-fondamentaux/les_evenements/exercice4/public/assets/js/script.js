let inputs = document.querySelectorAll("input");
// console.log(btn)

inputs.forEach(function(input) {
        input.addEventListener("click", function (){
            (console.log(input.value));
        })
    });