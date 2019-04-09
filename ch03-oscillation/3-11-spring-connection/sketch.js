let bob;
let spring;

function setup() {
  createCanvas(640, 360);

  bob = new Bob(width / 2, 100);
  spring = new Spring(width / 2, 10, 100);
}

function draw() {
  background(255);

  let gravity = createVector(0, 1);
  bob.applyForce(gravity);

  spring.connect(bob);
  spring.constrainLength(bob, 30, 200);

  bob.update();
  bob.drag();

  spring.displayLine(bob);
  spring.display();
  bob.display();
}

function mousePressed() {
  bob.handlePressed(mouseX, mouseY);
}

function mouseReleased() {
  bob.stopDragging();
}
