let mover;

function setup() {
  createCanvas(200, 200);
  smooth();

  mover = new Mover();
}

function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.display();
}
