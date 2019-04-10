class Particle {
  constructor(position) {
    this.mass = 1;
    this.position = position.copy();
    this.velocity = createVector(random(-1, 1), random(-2, 0));
    this.acceleration = createVector();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.lifespan -= 2;
  }

  display() {
    strokeWeight(2);
    stroke(0, this.lifespan);
    fill(175, this.lifespan);
    ellipse(this.position.x, this.position.y, 8, 8);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
