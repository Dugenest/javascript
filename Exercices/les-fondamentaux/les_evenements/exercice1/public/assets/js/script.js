// Déclaration de la variable et cyblage du bouton input
let btn = document.querySelector("input");

// Affichage du bouton
console.log(btn)

// Ecouteur d'événment et affichage
// btn.addEventListener("click", function(){
//     console.log("click");
// })


// Même méthode mieux écrite
const displayMessage = () => {
    console.log("click");
}
btn.addEventListener("click", displayMessage)



// autre méthode
// btn.onclick = fonction () {
//     console.log("click");
// }