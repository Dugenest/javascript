// Déclaration des variables
const image = document.querySelector('img');
const imageSource = image.src;

// Ecouteur d'événment et affichage
image.addEventListener("mouseover", function(){
    console.log(imageSource);
})


// Même méthode mieux écrite
// const displaySrc = () => {
//     console.log(imageSource);
// }
// image.addEventListener("mouseover", displaySrc);