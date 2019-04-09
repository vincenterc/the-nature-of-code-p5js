class Pendulum {
  constructor(origin_, r_) {
    this.origin = origin_.copy();
    this.location = createVector();
    this.r = r_;
    this.angle = PI / 4;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995;

    this.ballR = 48;
    this.dragging = false;
  }

  go() {
    this.update();
    this.drag();
    this.display();
  }

  update() {
    if (!this.dragging) {
      let gravity = 0.4;
      this.aAcceleration = ((-1 * gravity) / this.r) * sin(this.angle);
      this.aVelocity += this.aAcceleration;
      this.angle += this.aVelocity;

      this.aVelocity *= this.damping;
    }
  }

  display() {
    this.location.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
    this.location.add(this.origin);

    stroke(0);
    strokeWeight(2);
    fill(175);
    if (this.dragging) fill(100);
    line(this.origin.x, this.origin.y, this.location.x, this.location.y);
    ellipse(this.location.x, this.location.y, this.ballR, this.ballR);
  }

  pressed(mx, my) {
    let d = dist(mx, my, this.location.x, this.location.y);
    if (d < this.ballR) {
      this.dragging = true;
    }
  }

  stopDragging() {
    if (this.dragging) {
      this.aVelocity = 0;
      this.dragging = false;
    }
  }

  drag() {
    if (this.dragging) {
      let diff = p5.Vector.sub(createVector(mouseX, mouseY), this.origin);
      this.angle = radians(90) - atan2(diff.y, diff.x);
    }
  }
}
