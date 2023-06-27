var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var squareSize = 250;
var squareX = (canvas.width - squareSize) / 2;
var squareY = (canvas.height - squareSize) / 2;

var ballRadius = 20;
var ballX = squareX + ballRadius;
var ballY = squareY + ballRadius;
var dx = Math.random() * 4 - 2;
var dy = Math.random() * 4 - 2;
var colors = ["red", "green", "blue", "yellow", "orange"];

function drawSquare() {
  ctx.beginPath();
  ctx.rect(squareX, squareY, squareSize, squareSize);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function drawBall(color) {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function updateBall() {
  ballX += dx;
  ballY += dy;

  if (
    ballX + ballRadius > squareX + squareSize ||
    ballX - ballRadius < squareX
  ) {
    dx = -dx;
    changeBallColor();
  }
  if (
    ballY + ballRadius > squareY + squareSize ||
    ballY - ballRadius < squareY
  ) {
    dy = -dy;
    changeBallColor();
  }
}

function changeBallColor() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  while (randomColor === "white") {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
  }

  drawBall(randomColor);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSquare();
  updateBall();
  drawBall(colors[0]);
  requestAnimationFrame(animate);
}

animate();
