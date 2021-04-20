const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = 1500;
canvasEl.height = 720;
// --------------------------------------------------------------------
let RIScore = new Audio();
let AIScore = new Audio();
let hit = new Audio();
let wall = new Audio();

hit.src = "sounds/hit.mp3";
wall.src = "sounds/wall.mp3";
AIScore.src = "sounds/AIScore.mp3";
RIScore.src = "sounds/RIScore.mp3";

// the RI player Paddle
const playerPaddleRI = {
  xP: 0,
  yP: canvasEl.height / 2 - 100 / 2, // for paddle player
  height: 100,
  width: 10,
  color: "#d2e603",
  score: 0,
};
// the Al player Paddle
const playerPaddleAI = {
  xP: canvasEl.width - 10,
  yP: canvasEl.height / 2 - 100 / 2, // for paddle player
  height: 100,
  width: 10,
  color: "orange",
  score: 0,
};

// Creating the ball
const ball = {
  xP: canvasEl.width / 2,
  yP: canvasEl.height / 2,
  radius: 10,
  speed: 7,
  xV: 5, //x Velocity
  yV: 5, // y velocity
  color: "white",
};
// Creating net
const net = {
  xP: canvasEl.width / 2 - 1,
  yP: 0,
  width: 2,
  height: 10,
  color: "white",
};
// Drawing the canvas / first element the game
function drawRect(xP, yP, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(xP, yP, width, height);
}
// Drawing The circle / second element of game

function drawCircle(xP, yP, radius, color) {
  // xp -->  top down x position // yP  left right Y position
  canvasContext.fillStyle = color;
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

// Drawing the text with
function drawText(content, xP, yP, color) {
  canvasContext.fillStyle = color;
  canvasContext.font = "35px sans-serif";
  canvasContext.fillText(content, xP, yP);
}
// Drawing the net
function drawNet() {
  // drawing the net of center of game
  for (let i = 0; i < canvasEl.height; i += 15) {
    // ever net 10px height + 5px for gap === 15px
    drawRect(net.xP, net.yP + i, net.width, net.height, net.color);
  }
}

// runGame function Aka the game loop

function runGame() {
  // clearing the canvas
  drawRect(0, 0, canvasEl.width, canvasEl.height, "#4383a0");

  // Draw net
  drawNet();
  // draw score function
  drawText(
    playerPaddleRI.score,
    (1 * canvasEl.width) / 4,
    (1 * canvasEl.height) / 10,
    "white"
  );
  drawText(
    playerPaddleAI.score,
    (3 * canvasEl.width) / 4,
    (1 * canvasEl.height) / 10,
    "white"
  );
  // Drawing the paddle for RI and AI
  
}
// the game initialization function
function gameInit() {
  runGame();
}
// looping the game to keep running
const fPS = 60;
setTimeout(gameInit, 1000 / fPS);
