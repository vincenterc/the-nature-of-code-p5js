let physics;
let p1;
let p2;

function setup() {
  createCanvas(640, 360);

  physics = new VerletPhysics2D();
  physics.addBehavior(new GravityBehavior2D(new Vec2D(0, 0.5)));
  physics.setWorldBounds(new Rect(0, 0, width, height));

  p1 = new Particle(new Vec2D(width / 2, 20));
  p2 = new Particle(new Vec2D(width / 2 + 160, 20));
  p1.lock();

  let spring = new VerletSpring2D(p1, p2, 160, 0.01);

  physics.addParticle(p1);
  physics.addParticle(p2);
  physics.addSpring(spring);
}

function draw() {
  background(255);

  physics.update();

  if (mouseIsPressed) {
    p2.lock();
    p2.x = mouseX;
    p2.y = mouseY;
    p2.unlock();
  }

  stroke(0);
  strokeWeight(2);
  line(p1.x, p1.y, p2.x, p2.y);
  p1.display();
  p2.display();
}
