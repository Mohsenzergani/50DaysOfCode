// GET ELEMENT
const canvas = document.getElementById("drawing-canvas");
const incrementBtn = document.querySelector("#increase");
const decreasedBtn = document.querySelector("#decrease");
const strokeThickness = document.querySelector("#size");
const colorBtn = document.querySelector("#color");
const clearBtn = document.querySelector("#clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPress = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", function (e) {
  isPress = true;
  x = e.offsetX;
  y = e.offsetY;
  // console.log("down");
});
canvas.addEventListener("mouseup", function (e) {
  isPress = false;
  x = undefined;
  y = undefined;
  // console.log("up");
});
canvas.addEventListener("mousemove", function (e) {
  if (isPress) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// Drawing Lines
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// increase Btn size
incrementBtn.addEventListener("click", function () {
  size += 1;
  if (size > 50) {
    size = 50;
  }
  updateSize();
});
// decrease Btn size
decreasedBtn.addEventListener("click", function () {
  size -= 1;
  if (size < 1) {
    size = 1;
  }
  updateSize();
});
// Color Btn
colorBtn.addEventListener("change", function (e) {
  color = e.target.value;
  console.log(e.target.value);
  console.log(color);
});
// clear Btn
clearBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
// update size stroke with

function updateSize() {
  strokeThickness.innerHTML = size;
}
