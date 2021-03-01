// Feature 1 
const myFooter = document.getElementsByTagName('footer')[0];

const onFooterClick = () => { 
    console.log('clique');
}
myFooter.addEventListener("click", onFooterClick);


// Feature 1-bis
const allFooter = document.querySelector('footer');
let x = 1;
const newFooterClick = () => { 
    console.log('clic numéro '+ x);
    x++;
}
allFooter.addEventListener("click", newFooterClick);


// Feature 2 "Hamburger Menu"
const toggleOn = () => {
    navbarHeader.classList.toggle("collapse");
}
const hambMenu = document.querySelector('button');
hambMenu.addEventListener("click", toggleOn);
const navbarHeader = document.getElementById('navbarHeader');


// Feature 3
const putRedText = () => {
    let cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}
const newEditButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; // fetch the first btn in the html collection
newEditButton.addEventListener('click', putRedText);


// Feature 4
const newEditButton_2 = document.querySelectorAll('div.btn-group')[1].children[1]; // fetch second btn in html collection
const btnStat = false;  // to check if it turned green or not
const putGreenText1 = () => {
    // find element to change
    let cardChange_2 = document.querySelectorAll('p.card-text');
    // if true, turn from green to regular
    if (btnStat) {
        btnStat = false;
        cardChange2[1].style.color = '';
    } else {
    // if false, turn from regular to green
        btnStat = true;
        cardChange2[1].style.color = 'green';
    }
}
newEditButton_2.addEventListener('click', putGreenText1);


// Feature 5
// Fetch the 'link' element
const cdnBootstrap = document.getElementsByTagName('link')[0];

// Define clickable zone
const doubleClicNavbar = document.querySelector('header');

// Target the parent element where child will be modified
const headTag = document.querySelector('head');
const headStat = false;

const modifyCDN = () => {
  if (headStat == false) {
    cdnBootstrap.parentNode.removeChild(cdnBootstrap);
    headStat = true;
  } else if (headStat == true) {
    headTag.appendChild(cdnBootstrap);
    headStat = false;
  }
};
doubleClicNavbar.addEventListener('dblclick', modifyCDN);


// Feature 6
// si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), 
// celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra 
// qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
// Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

var buttonView = document.querySelectorAll('div.btn-group');
var imageCard = document.querySelectorAll('img.card-img-top');
var buttonTest = true;  // va permettre de checker la bascule vert ou pas

// stocker les textes des 6 cards
var textBackup = [];
var cardText = document.querySelectorAll('p.card-text');
cardText.forEach((text, i ) => {
    textBackup[i] = cardText[i].innerHTML;
});

function hideCard() {
    // [0] pour la première carte

    if (buttonTest) {             // si buttonTest est true, le texte disparait, réduit la taille
        buttonTest = false;
        cardText[0].innerHTML = '';
        imageCard[0].style.width = '20%';
    } else {                        // si statusButton est false, le texte est normale faut mettre en vert
        buttonTest = true;
        cardText[0].innerHTML = textBackup[0];
        imageCard[0].style.width = '100%';
    }
};
// Fonctionne qu'avec la première carte
buttonView[0].children[0].addEventListener('mouseover', hideCard);

// multi-carte fonctionne pas, pbl avec la boucle


// Feature 7
// si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) 
// va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !
//var cardsToMove = document.querySelectorAll('div.row');

let turnRightButton = document.querySelectorAll('a.btn:nth-child(2)')[0]; //élément bouton turnright

turnRightButton.addEventListener('click',turnRight);

function turnRight(event){
	let cards = document.querySelectorAll('.album  .row')[0]; // je sélectionne le parent des cards
    let card = document.getElementsByClassName('card')[5].parentElement; // ensemble des cards filles
	cards.insertAdjacentHTML('afterbegin',card.outerHTML); //Ajoute la dernière carte en premier avec afterbegin
	cards.removeChild(card);  // supprimme le dernier elemnt
    event.preventDefault();   // bloque le comportement du navigateur par défaut
}


// Feature 8
//non yet