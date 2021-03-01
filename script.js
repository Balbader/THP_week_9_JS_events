// Feature #1:
const myFooter = document.getElementsByTagName('footer')[0];

const onFooterClick = () => {
    console.log('clique');
}
myFooter.addEventListener("click", onFooterClick);


// Feature #1-bis:
const allFooter = document.querySelector('footer');
let x = 1;
const newFooterClick = () => {
    console.log('clic numéro '+ x);
    x++;
}
allFooter.addEventListener("click", newFooterClick);


// Feature #2:
const toggleOn = () => {
    navbarHeader.classList.toggle("collapse");
}
const hambMenu = document.querySelector('button');
hambMenu.addEventListener("click", toggleOn);
const navbarHeader = document.getElementById('navbarHeader');


// Feature #3:
const putRedText = () => {
    let cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}
const newEditButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; // fetch the first btn in the html collection
newEditButton.addEventListener('click', putRedText);


// Feature #4:
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


// Feature #5:
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


// Feature #6:

const btnView = document.querySelectorAll('div.btn-group');
const imageCard = document.querySelectorAll('img.card-img-top');

// Check if btn is green or not
const btnTest = true;

// Store cards content
let textBackup = [];
let cardText = document.querySelectorAll('p.card-text');
cardText.forEach((text, i ) => {
    textBackup[i] = cardText[i].innerHTML;
});

const hideCard = () => {
    // if = true, content deleted and sized reduced
    if (btnTest) {
        btnTest = false;
        cardText[0].innerHTML = '';
        imageCard[0].style.width = '20%';
    } else {
        // if = false, content is untouched and size if 100%
        btnTest = true;
        cardText[0].innerHTML = textBackup[0];
        imageCard[0].style.width = '100%';
    }
};
// Works only with the first card, couldn't make it work for all the cards.... :(
btnView[0].children[0].addEventListener('mouseover', hideCard);



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