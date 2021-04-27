// get of element
const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");


let result = 0;
let currentTime = timeLeft.innerHTML;
// random square
function randomSquare() {
  square.forEach(className => {
    className.classList.remove("mole");
  })
  // random square 
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  // assign the id of random position to hitPosition for us to use later
  hitPosition = randomPosition.id;
  // console.log(hitPosition)
}



square.forEach(id => {
  id.addEventListener('mouseup',() => {
    if(id.id === hitPosition){
      result += 1;
      score.innerHTML = result
    }
  })
})
// for moving mole ever 1000 ms
function moveMole(){
  let timeId = null;
  timeId = setInterval(randomSquare,500)
}
// initial game
moveMole()
function countDown(){
  currentTime--
  timeLeft.innerHTML = currentTime;
  if(currentTime === 0){
    clearInterval(timeId);
    alert("Game Over Your final score is "+ result)
  }
}
let timeId = setInterval(countDown,1000);