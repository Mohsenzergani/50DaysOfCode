// get element

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const button = document.querySelectorAll('button');
const gamePlay = document.querySelector(".gamePlay");
// console.log(gamePlay);

// variable
let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suits = ["hearts",'diams','clubs',"spades"];

button.forEach(el => el.addEventListener('click',playGame))

// playGame 
function playGame(e){
    // 
    let temp = e.target.innerHTML;
    let myCard = drawCard();
    if(temp == 'Start'){
        console.log("you click start");
        message.innerHTML = 'Higher Or Lower';
        gamePlay.innerHTML = '';
        makeCard();
        toggleButton()
    }
}
// toggle button
function toggleButton(){
   button[0].classList.toggle("hideButton");
   button[1].classList.toggle("hideButton");
   button[2].classList.toggle("hideButton");

}

// function makeCard
function makeCard(){
    if(deck.length > 0){
        let card="";
        return card
    }else {
        makeDeck();
        return drawCard();
    }
}

// make deck
function makeDeck(){
    deck = [];
    for(let i= 0;i<suits.length;i++){
        for(let j=0;j<ranks.length;j++){
            let card ={};
            card.suits = suits[i];
            card.rank = ranks[i];
            card.value = (j+1);
            deck.push(card);
        }
    }
}
// Draw Card
function drawCard(){
    
}