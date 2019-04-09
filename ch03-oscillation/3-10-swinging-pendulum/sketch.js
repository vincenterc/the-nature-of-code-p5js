let p;

function setup() {
  createCanvas(640, 360);

  p = new Pendulum(createVector(width / 2, 10), 175);
}

function draw() {
  background(255);

  p.go();
}

function mousePressed() {
  p.pressed(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}
