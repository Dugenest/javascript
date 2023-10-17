// Création des variables
    // Déclaration des variables Id et de classes
const gallows0 = document.getElementById("pendu_0");
const gallows1 = document.querySelector(".pendu_1");
const gallows2 = document.querySelector(".pendu_2");
const gallows3 = document.querySelector(".pendu_3");
const gallows4 = document.querySelector(".pendu_4");
const keyboard = document.getElementById('keyboard');
const wordDisplay = document.getElementById('word-display');
// Déclaration d'un tableau de mots
const words = ["ski", "tic", "cerf", "dock", "thym", "koala", "noeud", "tyran", "azimut", "bonzai", "coccyx", "whisky", "ballast", "djembe", "iceberg", "ukulele", "brouhaha", "diapason", "scarabee", "aseptiser", "epluchage", "klaxonner", "quemander", "xylophone", "controverse", "quadriceps", "kaleidoscope", "rhododendron", "protozoaire", "zygomatique", "chlorophylle", "anticonstitutionnellement"];
    // Déclaration de 2 audio (1 pour le perdant et 2 pour le gagnant)
const music1 = new Audio("GUNPis_Coup de feu de 357 magnum 9 mm (ID 0438)_LS.mp3");
const music2 = new Audio("CRWDCheer_Cris-et-applaudissements-d-ados-2-_ID-0237__LS.mp3");
    // Déclaration des variables initiales
const maxTries = 4;
let currentWord = '';
let displayWord = '';
let tries = 0;


// Création du menu du jeu
gameMenu = () => {
        let menu = " ";
        while (menu) {
            if (menu === 'j') {
                setupGame();
                break;
            } else if (menu === 'r') {
                alert("Voici les règles : \nUn mot choisi au hasard vous sera proposé sous forme de '_'. \nVous aurez 5 tentatives pour le découvrir en tapant une lettre à chaque essai. \nSi vous trouvez le mot, c'est gagné ! Sinon, la partie sera perdue.");
                gameMenu();
                break;
            } else if (menu === 'q') {
                alert("A bientôt ! ");
                gameMenu();
                break;
            } else {
                menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
            }
        }
    }


// Sélection d'un mot aléatoire
setupGame = () => {
    currentWord = words[Math.floor(Math.random() * words.length)];
    displayWord = '_'.repeat(currentWord.length);
    wordDisplay.textContent = displayWord;
    console.log(currentWord)
// Création d'un clavier virtuel
    keyboard.innerHTML = '';
    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => guessLetter(letter));
        keyboard.appendChild(button);
    }
// Réinitialisation du jeu
    tries = 0;
    gallows0.classList.remove("d-none");
    gallows1.classList.add("d-none");
    gallows2.classList.add("d-none");
    gallows3.classList.add("d-none");
    gallows4.classList.add("d-none");
}


// Création d'une fonction pour comparer la lettre avec celles du mot aléatoire
guessLetter = (letter) => {
    if (tries >= maxTries) {
        music1.play();
        alert('Vous avez perdu. Le mot était : ' + currentWord);
        gameMenu();
        return;
    }
    // lettre choisie est égale a une des lettres du mot aléatoire
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
    // lettre choisie est différente des lettres du mot aléatoire
    if (!letterFound && tries == 0) {
        // console.log(tries, "coucou1")
        gallows0.classList.add("d-none");
        gallows1.classList.remove("d-none")
        tries++;
    }

    else if (!letterFound && tries == 1) {
        // console.log(tries, "coucou2")
        gallows1.classList.add("d-none")
        gallows2.classList.remove("d-none")
        tries++;
    }

    else if (!letterFound && tries == 2) {
        // console.log(tries, "coucou3")
        gallows2.classList.add("d-none")
        gallows3.classList.remove("d-none")
        tries++;
    }

    else if (!letterFound && tries == 3) {
        // console.log(tries, "coucou4")
        gallows3.classList.add("d-none")
        gallows4.classList.remove("d-none")
        tries++;
    }

    displayWord = newDisplayWord;
    wordDisplay.textContent = displayWord;
    
    if (displayWord === currentWord) {
        music2.play();
        alert('Félicitations ! Vous avez deviné le mot : ' + currentWord);
        gameMenu();
    }
}


// Appel des fonctions
setupGame();
gameMenu();