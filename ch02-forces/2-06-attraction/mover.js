class Mover {
  constructor() {
    this.mass = 1;
    this.location = createVector(400, 50);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector();
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175,127);
    ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
  }
}
