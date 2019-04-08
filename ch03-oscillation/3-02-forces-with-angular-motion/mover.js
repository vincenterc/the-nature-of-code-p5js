class Mover {
  constructor(mass, x, y) {
    this.mass = mass;

    this.location = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector();

    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.aAcceleration = this.acceleration.x / 10.0;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;

    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    fill(175, 200);
    rectMode(CENTER);

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    rect(0, 0, this.mass * 16, this.mass * 16);
    pop();
  }
}
