let physics;
let chain;

function setup() {
  createCanvas(640, 360);

  physics = new VerletPhysics2D();
  physics.addBehavior(new GravityBehavior2D(new Vec2D(0, 0.5)));
  physics.setWorldBounds(new Rect(0, 0, width, height));

  chain = new Chain(180, 20, 16, 0.2);
}

function draw() {
  background(255);

  physics.update();

  chain.updateTail(mouseX, mouseY);
  chain.display();
}

function mousePressed() {
  chain.contains(mouseX, mouseY);
}

function mouseReleased() {
  chain.release();
}
