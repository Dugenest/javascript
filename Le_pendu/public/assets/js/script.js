const under = document.getElementById("under");

// Création d'un tableau de mots
const words = ["ski", "tic", "cerf", "dock", "thym", "koala", "noeud", "tyran", "azimut", "bonzai", "coccyx", "whisky", "ballast", "djembe", "iceberg", "ukulele", "brouhaha", "diapason", "scarabee", "aseptiser", "epluchage", "klaxonner", "quemander", "xylophone", "controverse", "quadriceps", "kaleidoscope", "rhododendron", "protozoaire", "zygomatique", "chlorophylle", "anticonstitutionnellement"]

// Création du mot aléatoire
const wordRandom = words[Math.floor(Math.random() * words.length)];
Math.floor(Math.random() * words.length);
console.log(wordRandom);

// Longueur du mot aléatoire
const numberLetter = wordRandom.length;
console.log(numberLetter);

// Changer le mot aléatoire en tableau
let array = wordRandom.split('');
console.log(array);

// Créations des underscores en fonction de la longueur du mot
function createUnderscores(word) {
    let underScore = [];
    let counter = 0;
    for (counter; counter < word.length; counter++) {
        underScore[counter] = "_";
    }
    return underScore;
}
const underscores = createUnderscores(wordRandom);
console.log(underscores);

// Création d'une boucle while
count = 0;
while (count !== array) {
    count++;
}



































// // Creation words list
// const wordsList = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin',
// 'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];

// // Functions Definition
// // Choice a word
// function computerChoose() {
//     let index = Math.floor(Math.random() * wordsList.length);
//     let computerChoice = wordsList[index];
//     return computerChoice;
// }

// // Change word on array 
// function editWord(words) {
//     let array = words.split('');
//     return array;    
// }

// // Change word choose to underscores
// function underscore(words) {
//     let underScore = [];
//     for (let i = 0; i < words.length; i ++) {
//         underScore[i] = "_";
//     }
//     return underScore;
// }

// // Check if user write one and only one letter
// function checkLetter (letter) {
//     while(letter.length > 1) {
//         letter = prompt("Doucement sur le clavier !" + " " + String.fromCodePoint(0x1F609) + " " + "Une seule lettre à la fois.");
//     }
//     while(letter.length === 0) {
//         letter = prompt("Veuillez entrer une lettre pour jouer.");
//     }
//     return letter;
// }

// // Display welcome message
// function welcome() {
//     alert("Bonjour,\nPassez du bon temps avec ce jeu du pendu entièrement réalisé en JavaScript.");
// }

// // Game menu
// function gameMenu() {
//     let menu = " ";
//     while (menu) {
//         if (menu === 'j') {
//             main();
//         }
//         else if (menu === 'r') {
//             alert("Voici les règles : \nUn mot choisi au hasard vous sera proposé sous forme de '_'. \nVous aurez 7 tentatives pour le découvrir en tapant une lettre à chaque essai. \nSi vous trouvez le mot, c'est gagné ! Sinon, la partie sera perdue.");
//             gameMenu();
//         }
//         else if (menu === 'q') {
//             alert("A bientôt entre deux fonctions JavaScript ! ");
//             break;
//         }
//         else {
//             menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
//         }
//     }
// }

// // Game surveillance
// function gameSurveillance(wordUnderscore) {
//     let number = 0;
//     for (const LETTER of wordUnderscore) {
//         if (LETTER === "_") {
//             number ++;
//         }      
//     }
//     return number === 0 ?  false : true;
// }

// // Game code
// welcome();

// function main() {
//     let userChoice;
//     let pointsSet = 7;
//     let life = 0;
//     let computerChoice = computerChoose();
//     let wordUnderscore = underscore(computerChoice);
//     let gameInProgress = gameSurveillance(wordUnderscore);
//     const ARRAY = editWord(computerChoice);

//     while (pointsSet > 0 && gameInProgress) {
//         userChoice = checkLetter(prompt(`Le mot a trouver est le suivant :  ${wordUnderscore} \nVous disposez de ${pointsSet} vie(s) \nTapez une lettre : ` ));

//         for (let i = 0; i < ARRAY.length; i ++) {
//             if (userChoice.toLowerCase() === ARRAY[i]) {
//                 wordUnderscore[i] = userChoice.toLowerCase();
//                 life ++;
//             }
//         }
//         if(life < 1 ) {
//             pointsSet --;
//             indicator = 0;
//         }
//         else {
//             life = 0;
//         }
//         gameInProgress = gameSurveillance(wordUnderscore);
//     }
//         if(pointsSet === 0) {
//         alert(`Vous avez perdu. \nLe mot était : ${computerChoice}`);
//         gameMenu();
//         } 
//         else if (!gameInProgress) {
//         alert("Bravo, vous avez gagné !");
//         gameMenu();
//         }
// }

// gameMenu();