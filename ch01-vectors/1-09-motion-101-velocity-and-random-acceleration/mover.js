class Mover {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topSpeed = 5;
  }

  update() {
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(0.5);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.location.add(this.velocity);
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.location.x, this.location.y, 16, 16);
  }

  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}
