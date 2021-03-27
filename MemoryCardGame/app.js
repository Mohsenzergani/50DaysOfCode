// get all of memory cards
const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

// first get All Card and add addEventListener
cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});

// Create FlipCard function
function flipCard() {
  if(lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");
  if (!cardIsFlipped) {
    // first Click --> first card
    cardIsFlipped = true;
    firstCard = this;
    return
  } 
    // second Click --> second card
    secondCard = this;
    // check function
    checkForMatch();
  
}

// checkFor match Function

function checkForMatch() {
  // checking Cards match
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unFlipCards();

}

// unFlip Cards function
function unFlipCards(){
  lockBoard = true;
  setTimeout(() => {
    
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    restBoard()
  }, 1500);
}

// disable Cards function
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  restBoard();
}
// rest Board function
function restBoard() {
  [cardIsFlipped,lockBoard] = [false,false];
  [firstCard, secondCard] = [null,null]
}


// shuffle random Picture cards
// IIFE -> Immediately Invoked Function Expression => function is called immediately after its definition
(function shuffle() {
  cards.forEach(function(card){
    let randomPositions = Math.floor(Math.random() * 12);
    card.style.order = randomPositions;
  })
})();