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

    let normal = null;
    let target = null;
    let worldRecord = 1000000;
    path.points.forEach((_, i) => {
      if (i < path.points.length - 1) {
        let a = path.points[i];
        let b = path.points[i + 1];
        let normalPoint = this.getNormalPoint(predictLoc, a, b);
        if (normalPoint.x < a.x || normalPoint.x > b.x) normalPoint = b.copy();

        let distance = p5.Vector.dist(predictLoc, normalPoint);
        if (distance < worldRecord) {
          worldRecord = distance;
          normal = normalPoint;

          let dir = p5.Vector.sub(b, a);
          dir.setMag(10);
          target = normalPoint.copy();
          target.add(dir);
        }
      }
    });

    if (worldRecord > path.radius && target !== null) {
      this.seek(target);
    }

    if (debug) {
      stroke(0);
      fill(0);
      line(this.location.x, this.location.y, predictLoc.x, predictLoc.y);
      ellipse(predictLoc.x, predictLoc.y, 4, 4);

      stroke(0);
      fill(0);
      line(predictLoc.x, predictLoc.y, normal.x, normal.y);
      ellipse(normal.x, normal.y, 4, 4);

      if (worldRecord > path.radius) fill(255, 0, 0);
      noStroke();
      ellipse(target.x, target.y, 8, 8);
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
    if (this.location.x > path.getEnd().x + this.r) {
      this.location.x = path.getStart().x - this.r;
      this.location.y = path.getStart().y + (this.location.y - path.getEnd().y);
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
