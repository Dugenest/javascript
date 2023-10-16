const words = ["ski", "tic", "cerf", "dock", "thym", "koala", "noeud", "tyran", "azimut", "bonzai", "coccyx", "whisky", "ballast", "djembe", "iceberg", "ukulele", "brouhaha", "diapason", "scarabee", "aseptiser", "epluchage", "klaxonner", "quemander", "xylophone", "controverse", "quadriceps", "kaleidoscope", "rhododendron", "protozoaire", "zygomatique", "chlorophylle", "anticonstitutionnellement"];
const maxTries = 6;
let currentWord = '';
let displayWord = '';
let tries = 0;

// Création du menu du jeu
function gameMenu() {
    let menu = " ";
    while (!menu) {
        menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
        if (menu === 'r') {
            alert("Voici les règles : \nUn mot choisi au hasard vous sera proposé sous forme de '_'. \nVous aurez 4 tentatives pour le découvrir en tapant une lettre à chaque essai. \nSi vous trouvez le mot, c'est gagné ! Sinon, la partie sera perdue.");
        } else if (menu === 'q') {
            alert("A bientôt ! ");
            break;
        }
    }
    if (menu === 'j') {
        setupGame();
    }
}

function setupGame() {
    // Sélectionnez un mot aléatoire
    currentWord = words[Math.floor(Math.random() * words.length)];
    displayWord = '_'.repeat(currentWord.length);
    document.getElementById('word-display').textContent = displayWord;
    
    // Créez le clavier virtuel
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';
    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => guessLetter(letter));
        keyboard.appendChild(button);
    }
}

function guessLetter(letter) {
    if (tries >= maxTries) {
        alert('Vous avez perdu. Le mot était : ' + currentWord);
        setupGame();
        return;
    }
    
    let letterFound = false;
    let newDisplayWord = '';
    
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            newDisplayWord += letter;
            letterFound = true;
        } else {
            newDisplayWord += displayWord[i];
        }
    }
    
    if (!letterFound) {
        tries++;
    }
    
    displayWord = newDisplayWord;
    document.getElementById('word-display').textContent = displayWord;
    
    if (displayWord === currentWord) {
        alert('Félicitations ! Vous avez deviné le mot : ' + currentWord);
        setupGame();
    }
}

setupGame();
gameMenu();












































































// // Déclaration des variables
// const under = document.getElementById("under");
// const Id0 = document.getElementById("pendu_0");
// const Id1 = document.getElementById("pendu_1");
// const Id2 = document.getElementById("pendu_2");
// const Id3 = document.getElementById("pendu_3");
// const Id4 = document.getElementById("pendu_4");
// const buttons = document.querySelectorAll(".button");

// Id0.classList.remove("d-none");

// // Création d'un tableau de mots
// const words = ["ski", "tic", "cerf", "dock", "thym", "koala", "noeud", "tyran", "azimut", "bonzai", "coccyx", "whisky", "ballast", "djembe", "iceberg", "ukulele", "brouhaha", "diapason", "scarabee", "aseptiser", "epluchage", "klaxonner", "quemander", "xylophone", "controverse", "quadriceps", "kaleidoscope", "rhododendron", "protozoaire", "zygomatique", "chlorophylle", "anticonstitutionnellement"];

// // Création du mot aléatoire
// const wordRandom = words[Math.floor(Math.random() * words.length)];
// console.log(wordRandom);

// // Longueur du mot aléatoire
// const numberLetter = wordRandom.length;
// console.log(numberLetter);

// // Changer le mot aléatoire en tableau
// let array = wordRandom.split('');
// console.log(array);

// // Création des underscores en fonction de la longueur du mot
// createUnderscores = (word) => {
//     let underScore = [];
//     for (let counter = 0; counter < word.length; counter++) {
//         underScore[counter] = "_";
//     }
//     return underScore;
// }
// // underScore.innerHTML = under;
// const underscores = createUnderscores(wordRandom);
// console.log(underscores);

// // Création du menu du jeu
// gameMenu = () => {
//     let menu = " ";
//     while (menu) {
//         if (menu === 'j') {
//         } else if (menu === 'r') {
//             alert("Voici les règles : \nUn mot choisi au hasard vous sera proposé sous forme de '_'. \nVous aurez 4 tentatives pour le découvrir en tapant une lettre à chaque essai. \nSi vous trouvez le mot, c'est gagné ! Sinon, la partie sera perdue.");
//             gameMenu();
//         } else if (menu === 'q') {
//             alert("A bientôt ! ");
//             break;
//         } else {
//             menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
//         }
//     }
// }

// // Création d'une fonction pour observer si l'utilisateur tape bien une lettre en minuscule ou en majuscule
// checkLetter = (letter) => {
//     while (letter.length !== 1 || !/[a-zA-Z]/.test(letter)) {
//         letter = prompt("Veuillez entrer une lettre svp");
//     }
//     return letter;
// }

// // Création d'une fonction pour surveiller le jeu
// gameSurveillance = (underscores) => {
//     for (const letter of underscores) {
//         if (letter === "_") {
//             return true;
//         }
//     }
//     return false;
// }

// // Création d'une fonction pour comparer la touche sélectionnée avec les lettres du mot aléatoire 
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         let userLetter = button.textContent
//         let userChoice;
//         let pointsSet = 4;
//         let gameInProgress = gameSurveillance(underscores);
//     while (pointsSet > 0 && gameInProgress) {
//         Id0.classList.remove("d-none");
//         userChoice = checkLetter(prompt(`Le mot à trouver est le suivant :  ${underscores.join(' ')}\nVous disposez de ${pointsSet} vie(s)\nTapez une lettre :`));
//         let userLetter = false;
//     }
//     for (let i = 0; i < numberLetter; i++) {
//         if (userChoice === array[i]) {
//                 underscores[i] = userChoice;
//                 userLetter = true;
//     }
//         if (!userLetter) {
//             pointsSet--;
//             Id0.classList.add("d-none");
//             Id[i].classList.remove("d-none");
//     }
//             gameInProgress = gameSurveillance(underscores);
//         if (pointsSet === 0) {
//                 alert(`Vous avez perdu. Le mot était : ${wordRandom}`);
//                 gameMenu();
//     }   else {
//                 alert("Bravo, vous avez gagné !");
//                 gameMenu();
//             }
//         }
//     })
// })

// // Création d'un clavier virtuel
// function createKeyboard() {
//     for (let i = 65; i <= 90; i++) {
//         const letter = String.fromCharCode(i);
//         const button = document.createElement('button');
//         button.textContent = letter;
//         button.addEventListener('click', () => guessLetter(letter));
//         keyboardElement.appendChild(button);
//         }
// }

// // Appel du Menu
// gameMenu();













































// // Déclaration des variables
// const under = document.getElementById("under");
// const Id0 = document.getElementById("pendu_0");
// const Id1 = document.getElementById("pendu_1");
// const Id2 = document.getElementById("pendu_2");
// const Id3 = document.getElementById("pendu_3");
// const Id4 = document.getElementById("pendu_4");
// const hiddenWordElement = document.getElementById('hiddenWord');
// const keyboardElement = document.getElementById('keyboard');
// const buttons = document.querySelectorAll(".button");

// Id0.classList.remove("d-none");

// // Création d'un tableau de mots
// const words = ["ski", "tic", "cerf", "dock", "thym", "koala", "noeud", "tyran", "azimut", "bonzai", "coccyx", "whisky", "ballast", "djembe", "iceberg", "ukulele", "brouhaha", "diapason", "scarabee", "aseptiser", "epluchage", "klaxonner", "quemander", "xylophone", "controverse", "quadriceps", "kaleidoscope", "rhododendron", "protozoaire", "zygomatique", "chlorophylle", "anticonstitutionnellement"];

// // Création du mot aléatoire
// const wordRandom = words[Math.floor(Math.random() * words.length)];
// console.log(wordRandom);

// // Longueur du mot aléatoire
// const numberLetter = wordRandom.length;
// console.log(numberLetter);

// // Changer le mot aléatoire en tableau
// let array = wordRandom.split('');
// console.log(array);

// // Création d'un clavier virtuel
// function createKeyboard() {
//     for (let i = 65; i <= 90; i++) {
//         const letter = String.fromCharCode(i);
//         const button = document.createElement('button');
//         button.textContent = letter;
//         button.addEventListener('click', () => guessLetter(letter));
//         keyboardElement.appendChild(button);
//         }
// }

// // Création des underscores en fonction de la longueur du mot
// function createUnderscores(word) {
//     let underScore = [];
//     for (let counter = 0; counter < word.length; counter++) {
//         underScore[counter] = "_";
//     }
//     return underScore;
// }
// const underscores = createUnderscores(wordRandom);
// console.log(underscores);

// // Créez un élément de paragraphe (ou tout autre élément de votre choix) pour chaque underscore
// for (let i = 0; i < underscores.length; i++) {
//     const underscoreElement = document.createElement('p');
//     underscoreElement.textContent = underscores[i]; // Assignez le caractère underscore ou une lettre si devinée
//     hiddenWordElement.appendChild(underscoreElement); // Ajoutez l'élément à la div
// }

// // Création du menu du jeu
// function gameMenu() {
//     let menu = " ";
//     while (!menu) {
//         menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
//         if (menu === 'r') {
//             alert("Voici les règles : \nUn mot choisi au hasard vous sera proposé sous forme de '_'. \nVous aurez 4 tentatives pour le découvrir en tapant une lettre à chaque essai. \nSi vous trouvez le mot, c'est gagné ! Sinon, la partie sera perdue.");
//         } else if (menu === 'q') {
//             alert("A bientôt ! ");
//             break;
//         }
//     }
//         if (menu === 'j') {
//         playGame();
//     }
// }

// // Création d'une fonction pour observer si l'utilisateur tape bien une lettre en minuscule ou en majuscule
// function checkLetter(letter) {
//     while (letter.length !== 1 || !/[a-zA-Z]/.test(letter)) {
//         letter = prompt("Veuillez entrer une lettre svp");
//     }
//     return letter.toLowerCase(); // Convert the letter to lowercase for consistent comparison.
// }

// // Création d'une fonction pour surveiller le jeu
// function gameSurveillance(underscores) {
//     for (const letter of underscores) {
//         if (letter === "_") {
//             return true;
//         }
//     }
//     return false;
// }

// // Main game function
// function playGame() {
//     let pointsSet = 4;
//     let gameInProgress = gameSurveillance(underscores);
    
//     while (pointsSet > 0 && gameInProgress) {
//         const userChoice = checkLetter(prompt(`Le mot à trouver est le suivant :  ${underscores.join(' ')}\nVous disposez de ${pointsSet} vie(s)\nTapez une lettre :`));
//         let userLetter = false;

//         for (let i = 0; i < numberLetter; i++) {
//             if (userChoice === array[i]) {
//                 underscores[i] = userChoice;
//                 userLetter = true;
//             }
//         }

//         if (!userLetter) {
//             pointsSet--;
//             Id0.classList.add("d-none");
//             document.getElementById(`pendu_${4 - pointsSet}`).classList.remove("d-none");
//         }
        
//         gameInProgress = gameSurveillance(underscores);
//     }

//     if (pointsSet === 0) {
//         alert(`Vous avez perdu. Le mot était : ${wordRandom}`);
//     } else {
//         alert("Bravo, vous avez gagné !");
//     }

//     gameMenu();
// }

// // Appel du Menu
// gameMenu();
// createKeyboard();
