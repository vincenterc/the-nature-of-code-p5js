class Bob {
  constructor(x, y) {
    this.mass = 24;
    this.location = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.damping = 0.98;

    this.dragOffset = createVector();
    this.dragging = false;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.mult(this.damping);
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    if (this.dragging) fill(100);
    ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
  }

  handlePressed(mx, my) {
    let d = dist(mx, my, this.location.x, this.location.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.location.x - mx;
      this.dragOffset.y = this.location.y - my;
    }

    console.log(this.dragOffset);
  }

  stopDragging() {
    this.dragging = false;
  }

  drag() {
    if (this.dragging) {
      this.location.x = mouseX + this.dragOffset.x;
      this.location.y = mouseY + this.dragOffset.y;
    }
  }
}
