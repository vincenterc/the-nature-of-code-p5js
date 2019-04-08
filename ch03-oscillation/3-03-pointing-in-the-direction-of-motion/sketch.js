let mover;

function setup() {
  createCanvas(640, 360);

  mover = new Mover();
}

function draw() {
  background(255);

  mover.update();
  mover.display();
}
