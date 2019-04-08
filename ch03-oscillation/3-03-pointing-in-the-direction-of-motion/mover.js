class Mover {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topSpeed = 5;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.location);

    dir.normalize();
    dir.mult(0.5);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.location.add(this.velocity);
  }

  display() {
    // let angle = atan2(this.velocity.y, this.velocity.x);
    let angle = this.velocity.heading();

    stroke(0);
    fill(175);
    push();
    rectMode(CENTER);
    translate(this.location.x, this.location.y);
    rotate(angle);
    rect(0, 0, 30, 10);
    pop();
  }
}
