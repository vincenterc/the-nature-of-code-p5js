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
    if (this.location.y > height) {
      this.location.y = height;
      this.velocity.y *= -1;
    }
  }

  isInside(liquid) {
    return (
      this.location.x > liquid.x &&
      this.location.x < liquid.x + liquid.w &&
      this.location.y > liquid.y &&
      this.location.y < liquid.y + liquid.h
    );
  }

  drag(liquid) {
    let speed = this.velocity.mag();
    let dragMag = liquid.c * speed * speed;
    let drag = this.velocity.copy();
    drag.mult(-1);
    drag.normalize();
    drag.mult(dragMag);

    this.applyForce(drag);
  }
}
