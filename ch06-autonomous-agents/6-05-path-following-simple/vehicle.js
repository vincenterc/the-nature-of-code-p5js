class Vehicle {
  constructor(x, y, ms, mf) {
    this.acceleration = createVector();
    this.velocity = createVector(2, 0);
    this.location = createVector(x, y);
    this.r = 4;
    this.maxSpeed = ms || 4;
    this.maxForce = mf || 0.1;
  }

  run() {
    this.update();
    this.display();
  }

  follow(path) {
    let predict = this.velocity.copy();
    predict.setMag(50);
    let predictLoc = p5.Vector.add(this.location, predict);

    let a = path.start;
    let b = path.end;
    let normalPoint = this.getNormalPoint(predictLoc, a, b);

    let dir = p5.Vector.sub(b, a);
    dir.setMag(10);
    let target = p5.Vector.add(normalPoint, dir);

    let distance = p5.Vector.dist(normalPoint, predictLoc);
    if (distance > path.radius) {
      this.seek(target);
    }

    if (debug) {
      stroke(0);
      fill(0);
      line(this.location.x, this.location.y, predictLoc.x, predictLoc.y);
      ellipse(predictLoc.x, predictLoc.y, 4, 4);

      stroke(0);
      fill(0);
      line(predictLoc.x, predictLoc.y, normalPoint.x, normalPoint.y);
      ellipse(normalPoint.x, normalPoint.y, 4, 4);

      if (distance > path.radius) fill(255, 0, 0);
      noStroke();
      ellipse(target.x + dir.x, target.y + dir.y, 8, 8);
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.location);

    if (desired.mag() === 0) return;

    desired.setMag(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);

    this.applyForce(steer);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  borders(path) {
    if (this.location.x > path.end.x + this.r) {
      this.location.x = path.start.x - this.r;
      this.location.y = random(height);
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

  getNormalPoint(p, a, b) {
    let ap = p5.Vector.sub(p, a);
    let ab = p5.Vector.sub(b, a);

    ab.normalize();
    ab.mult(ap.dot(ab));
    return p5.Vector.add(a, ab);
  }
}
