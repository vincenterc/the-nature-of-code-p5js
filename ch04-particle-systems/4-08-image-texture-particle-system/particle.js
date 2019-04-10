class Particle {
  constructor(position, image) {
    this.mass = 1;
    this.position = position.copy();
    let vx = randomGaussian() * 0.3;
    let vy = randomGaussian() * 0.3 - 1.0;
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector();
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
    imageMode(CENTER);
    tint(255, this.lifespan);
    image(this.image, this.position.x, this.position.y);

    // noStroke();
    // fill(255, this.lifespan);
    // ellipse(
    //   this.position.x,
    //   this.position.y,
    //   this.image.width,
    //   this.image.height
    // );
  }

  isDead() {
    return this.lifespan < 0;
  }
}
