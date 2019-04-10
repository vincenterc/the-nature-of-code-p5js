class Particle {
  constructor(position, image) {
    this.mass = 1;
    this.position = position.copy();
    let vx = randomGaussian() * 0.3;
    let vy = randomGaussian() * 0.3 - 1.0;
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector(0, 0);
    this.lifespan = 100;
    this.image = image;
  }

  run() {
    this.update();
    this.render();
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
    this.lifespan -= 2.5;
  }

  render() {
    push();
    translate(this.position.x, this.position.y);
    texture(this.image);
    plane(32, 32);
    pop();
  }

  isDead() {
    return this.lifespan < 0;
  }
}
