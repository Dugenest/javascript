const dayValue = document.querySelectorAll("form li select")

dayValue.forEach((day) => {
    day.addEventListener("change", function(){
        console.log(dayValue.value);
});
})