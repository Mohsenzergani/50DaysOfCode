const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const starsColor = "white";
const starsNumber = 1000;
const size = 0.005; // maximum star size as a fraction of the screen width
const speed = 0.05; // fraction of screen width per second

// Setting up the stars
let stars = [];
let starsSpeed = speed * canvasEl.width;
let horizontalVelocity = starsSpeed * randomSign() * Math.random();
let verticalVelocity =
  Math.sqrt(Math.pow(starsSpeed, 2) - Math.pow(horizontalVelocity, 2)) *
  randomSign();
// a = sqrt(c^2 - b^2)


//--------------------- The Game Loop

// the animation loop
let timeDiff,
  timeLast = 0;
requestAnimationFrame(runStars);

function runStars(timeNow) {
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
  // calculate the frame difference
  timeDiff = timeNow - timeLast;
  timeLast = timeNow;

  // Drawing the stars
  canvasContext.fillStyle = starsColor;
  for (let i = 0; i < starsNumber; i++) {
    canvasContext.beginPath();
    canvasContext.arc(
      stars[i].horizontalPosition,
      stars[i].verticalPosition,
      stars[i].starRadius,
      0,
      Math.PI * 2
    );
    canvasContext.fill();

    // Update stars horizontal position
    stars[i].horizontalPosition +=
      stars[i].horizontalVelocity * timeDiff * 0.001;

    // reposition stars to the other side of the screen when they move off either side of the screen
    if (stars[i].horizontalPosition < 0 - stars[i].starRadius) {
      stars[i].horizontalPosition = canvasEl.width + stars[i].starRadius;
    } else if (
      stars[i].horizontalPosition >
      canvasEl.width + stars[i].starRadius
    ) {
      stars[i].horizontalPosition = 0 - stars[i].starRadius;
    }

    // Update stars vertical position
    stars[i].verticalPosition += stars[i].verticalVelocity * timeDiff * 0.001;

    // reposition stars to top/bottom side of the screen when they move off either from the top or bottom
    if (stars[i].verticalPosition < 0 - stars[i].starRadius) {
      stars[i].verticalPosition = canvasEl.height + stars[i].starRadius;
    } else if (
      stars[i].verticalPosition >
      canvasEl.height + stars[i].starRadius
    ) {
      stars[i].verticalPosition = 0 - stars[i].starRadius;
    }
  }

  requestAnimationFrame(runStars);
}

// randomSign Function
function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}
