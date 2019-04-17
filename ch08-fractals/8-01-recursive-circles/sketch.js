function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);
  drawCircle(width / 2, height / 2, width);
  noLoop();
}

function drawCircle(x, y, diameter) {
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(x, y, diameter, diameter);
  if (diameter > 2) {
    diameter *= 0.75;
    drawCircle(x, y, diameter);
  }
}
