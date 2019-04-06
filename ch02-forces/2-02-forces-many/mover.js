class Mover {
  constructor(m, x, y) {
    this.mass = m;
    this.location = createVector(x, y);
    this.velocity = createVector();
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
    fill(175);
    ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
  }

  checkEdges() {
    if (this.location.x > width) {
      this.location.x = width;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }

    if (this.location.y > height) {
      this.location.y = height;
      this.velocity.y *= -1;
    }
  }
}
