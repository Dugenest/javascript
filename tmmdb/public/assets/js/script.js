const myImage = document.getElementById("399566");

fetch("Godzilla_vs_Kong.jpg")
    .then(function (response) {
    return response.blob();
})
    .then(function (myBlob) {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
});

console.log(fetch)