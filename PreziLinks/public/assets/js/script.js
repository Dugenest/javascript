// Créations des variables
const btnAdd = document.getElementById("btnAdd");
const btnDeleted = document.getElementById("btnDeleted");
const lastName = document.getElementById("lastName");
const linkUrl = document.getElementById("url");

// Création d'un tableau vide
let items = [];

// Ajout d'un url dans le localstorage
const addItems = (event) => {
    event.preventDefault();
    if(lastName.value && url.value) {
        const item = {
            "name": lastName.value,
            "url": linkUrl.value
        }
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
    }
    displayItems()
}

// Suppression du tableau dans le localStorage
let deletItems = () => {
    localStorage.removeItem("items");
}

// Création d'une fonction pour l'affichage
const displayItems = () => {
    const itemsList = document.getElementById("liens");
    let links = JSON.parse(localStorage.getItem("items") ?? []);
    links.forEach(link => {
        console.log(link);
        itemsList.innerHTML = link;
        // const listItem = document.createElement('li');
        // const linkElement = document.createElement('a');
        // linkElement.href = linkUrl;
        // linkElement.textContent = lastName;
        // listItem.appendChild(linkElement);
    })
}

btnAdd.addEventListener("click", addItems)
btnDeleted.addEventListener("click", deletItems)


// cours :

// Création de firstname = nicolas sur le localstorage :
// localStorage.setItem(« firstname », « nicolas »)

// 	Récupération du firstname dans le localstorage :
// localStorage.getItem(« firstname »)

// 	Suppression du firstname dans le localstorage
// localStorage.removeItem(« firstname »)

// 	Création d’un tableau dans une variable :
// let array = [« arnaud », « sebastien », « teddy »]
// 	Stockage du tableau dans le localstorage :
// localStorage.getItem(« tableau », JSON.stringify(array)
// 	Récupération du tableau sur le localstorage :
// JSON.parse(local storage.getItem(« tableau »))