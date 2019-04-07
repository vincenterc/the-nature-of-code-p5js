let mover;
let attractor;

function setup() {
  createCanvas(640, 360);

  mover = new Mover();
  attractor = new Attractor();
}

function draw() {
  background(255);

  attractor.display();

  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();
  mover.display();
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
