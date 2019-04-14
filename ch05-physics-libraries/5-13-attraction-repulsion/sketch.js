let physics;
let particles = [];
let attractor;

function setup() {
  createCanvas(640, 360);

  physics = new VerletPhysics2D();
  physics.setDrag(0.01);

  particles = Array(50)
    .fill("")
    .map(() => new Particle(new Vec2D(random(width), random(height))));

  attractor = new Attractor(new Vec2D(width / 2, height / 2));
}

function draw() {
  background(255);

  physics.update();

  if (mouseIsPressed) {
    attractor.lock();
    attractor.set(mouseX, mouseY);
  } else {
    attractor.unlock();
  }

  attractor.display();

  particles.forEach(p => p.display());
}
