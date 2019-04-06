let x = 100;
let y = 100;
let xSpeed = 1;
let ySpeed = 3.3;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);

  x = x + xSpeed;
  y = y + ySpeed;

  if (x > width || x < 0) {
    xSpeed = xSpeed * -1;
  }
  if (y > height || y < 0) {
    ySpeed = ySpeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x, y, 16, 16);
}
