class Mover {
  constructor() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topSpeed = 5;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.location);

    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.location.add(this.velocity);
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.location.x, this.location.y, 16, 16);
  }
}
