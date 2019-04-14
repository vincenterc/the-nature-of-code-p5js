class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector();
    this.velocity = createVector(3, 4);
    this.location = createVector(x, y);
    this.r = 6;
    this.maxSpeed = 3;
    this.maxForce = 0.15;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  boundaries() {
    let desired = null;

    if (this.location.x < d) {
      desired = createVector(this.maxSpeed, this.velocity.y);
    } else if (this.location.x > width - d) {
      desired = createVector(-this.maxSpeed, this.velocity.y);
    }

    if (this.location.y < d) {
      desired = createVector(this.velocity.x, this.maxSpeed);
    } else if (this.location.y > height - d) {
      desired = createVector(this.velocity.x, -this.maxSpeed);
    }

    if (desired !== null) {
      desired.setMag(this.maxSpeed);

      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce);

      this.applyForce(steer);
    }
  }

  display() {
    let theta = this.velocity.heading() + PI / 2;

    stroke(0);
    strokeWeight(1);
    fill(175);
    push();
    translate(this.location.x, this.location.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}
