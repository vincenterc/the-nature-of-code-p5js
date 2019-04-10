class Particle {
  constructor(position) {
    this.position = position.copy();
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0.05);
    this.lifespan = 255;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    stroke(0, this.lifespan);
    fill(175, this.lifespan);
    ellipse(this.position.x, this.position.y, 8, 8);
  }

  run() {
    this.update();
    this.display();
  }

  isDead() {
    return this.lifespan < 0;
  }
}
