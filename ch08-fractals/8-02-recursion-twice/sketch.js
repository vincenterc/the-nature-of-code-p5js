function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);
  drawCircle(width / 2, height / 2, 400);
  noLoop();
}

function drawCircle(x, y, diameter) {
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(x, y, diameter, diameter);
  if (diameter > 2) {
    drawCircle(x + diameter / 2, y, diameter / 2);
    drawCircle(x - diameter / 2, y, diameter / 2);
  }
}
