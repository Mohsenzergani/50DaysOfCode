// solve problem
// 1 reading function add addEventListener for reading text
// 2 implementing pausing button
// 3 implementing stop button
// 4 speed input functionality
// get elements
const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
let currentChar;

// reading functionality
readBtn.addEventListener("click", function () {
  // read text function
  readText(textDisplay.value);
});
// for reference
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

const utterance = new SpeechSynthesisUtterance();
// this addEventListener for the ending disable text area event
utterance.addEventListener("end", function () {
  textDisplay.disabled = false;
});
utterance.addEventListener('boundary',function(e){
  currentChar = e.charIndex;
  console.log(currentChar);
})
// read text function
function readText(testText) {
  if (speechSynthesis.pause && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = testText;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}

// pause button functionality
pauseBtn.addEventListener("click", pauseText);
// pauseText Function
function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

// stop button functionality
stopBtn.addEventListener("click", stopText);

// stopText Function
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}

// speed button functionality
speedBtn.addEventListener("input",function(){
    stopText();
    readText(utterance.text.substring(currentChar))
})