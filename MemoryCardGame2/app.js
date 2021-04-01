document.addEventListener('DOMContentLoaded',() => {


// 1 get all pic and put him in array
//card options
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];
cardArray.sort( () => 0.5 - Math.random())
// 2 get elements
const grid = document.querySelector(".grid");
const resultDisplay =  document.querySelector('#result')
// for card chosen
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];
// 3 create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click",flipCard)
    grid.appendChild(card);
    // console.log(grid);
  }
}

// check for matches
function checkForMatch(){
  let cards =document.querySelectorAll("img");
  // console.log(cards)
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];
  console.log(cardChosen);
  if(cardChosen[0] === cardChosen[1]){
    alert("You Found a match");
    cards[optionOneId].setAttribute('src','images/white.png');
    cards[optionTwoId].setAttribute('src','images/white.png');
    cardsWon.push(cardChosen)
  }else {
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert("Sorry , try again")
  }
  cardChosen = [];
  cardChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if(cardsWon.length === cardArray.length /2){
    resultDisplay.textContent = "Congratulations! You found them all";
  }
}

// flip your card
function flipCard(){
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId)
  // console.log(cardChosen)
   this.setAttribute('src',cardArray[cardId].img)
  if(cardChosen.length === 2){
    setTimeout(checkForMatch,500)
  }
}
createBoard()
})
