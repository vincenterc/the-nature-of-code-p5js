let mover;

function setup() {
  createCanvas(200, 200);

  mover = new Mover();
}

function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.display();
}
