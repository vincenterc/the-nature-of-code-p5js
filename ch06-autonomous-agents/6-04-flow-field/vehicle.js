class Vehicle {
  constructor(x, y, ms, mf) {
    this.acceleration = createVector();
    this.velocity = createVector();
    this.location = createVector(x, y);
    this.r = 4;
    this.maxSpeed = ms || 4;
    this.maxForce = mf || 0.1;
  }

  run() {
    this.update();
    this.borders();
    this.display();
  }

  follow(flow) {
    let desired = flow.lookUp(this.location);
    desired.mult(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForde);

    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  borders() {
    if (this.location.x < -this.r) this.location.x = width + this.r;
    if (this.location.y < -this.r) this.location.y = height + this.r;
    if (this.location.x > width + this.r) this.location.x = -this.r;
    if (this.location.y > height + this.r) this.location.y = -this.r;
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
