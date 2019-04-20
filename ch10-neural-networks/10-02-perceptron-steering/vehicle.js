class Vehicle {
  constructor(n, x, y) {
    this.brain = new Perceptron(n, 0.001);

    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.location = createVector(x, y);

    this.r = 3;
    this.maxSpeed = 4;
    this.maxForce = 0.1;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);

    this.location.x = constrain(this.location.x, 0, width);
    this.location.y = constrain(this.location.y, 0, height);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  steer(targets) {
    let forces = targets.map(t => this.seek(t));
    let result = this.brain.feedForward(forces);

    this.applyForce(result);

    let desired = createVector(width / 2, height / 2);
    let error = p5.Vector.sub(desired, this.location);
    this.brain.train(forces, error);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.location);
    desired.normalize();
    desired.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    return steer;
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
