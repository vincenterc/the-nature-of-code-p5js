let mover;

function setup() {
  createCanvas(200, 200);

  mover = new Mover();
}

function draw() {
  background(255);

  let wind = createVector(0.01, 0);
  let gravity = createVector(0, 0.1);
  mover.applyForce(wind);
  mover.applyForce(gravity);

  mover.update();
  mover.checkEdges();
  mover.display();
}
