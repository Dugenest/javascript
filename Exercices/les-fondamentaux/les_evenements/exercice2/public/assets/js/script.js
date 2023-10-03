let image = document.querySelector('img');

image.addEventListener("mouseover", function(){
    let imageSource = image.src;
    console.log(imageSource);
})