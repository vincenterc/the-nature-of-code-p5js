class Boid {
  constructor(x, y) {
    this.acceleration = createVector();
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.location = createVector(x, y);
    this.r = 3;
    this.maxSpeed = 3;
    this.maxForce = 0.05;
  }

  run(boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.display();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  flock(boids) {
    let sep = this.separate(boids);
    let ali = this.align(boids);
    let coh = this.cohesion(boids);

    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.location);
    desired.setMag(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);

    return steer;
  }

  display() {
    let theta = this.velocity.heading() + radians(90);
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
    endShape();
    pop();
  }

  borders() {
    if (this.location.x < -this.r) this.location.x = width + this.r;
    if (this.location.y < -this.r) this.location.y = height + this.r;
    if (this.location.x > width + this.r) this.location.x = -this.r;
    if (this.location.y > height + this.r) this.location.y = -this.r;
  }

  separate(boids) {
    let desiredSeparation = 25;

    let steer = createVector();
    let count = 0;
    boids.forEach(b => {
      let d = p5.Vector.dist(this.location, b.location);

      if (d > 0 && d < desiredSeparation) {
        let diff = p5.Vector.sub(this.location, b.location);
        diff.normalize();
        diff.div(d);

        steer.add(diff);
        count++;
      }
    });

    if (count > 0) steer.div(count);

    if (steer.mag() > 0) {
      steer.setMag(this.maxSpeed);
      steer.sub(this.velocity);
      steer.limit(this.maxForce);
    }

    return steer;
  }

  align(boids) {
    let neighborDist = 50;

    let sum = createVector();
    let count = 0;
    boids.forEach(b => {
      let d = p5.Vector.dist(this.location, b.location);

      if (d > 0 && d < neighborDist) {
        sum.add(b.velocity);
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);

      sum.setMag(this.maxSpeed);

      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxForce);
      return steer;
    }

    return createVector();
  }

  cohesion(boids) {
    let neighborDist = 50;

    let sum = createVector();
    let count = 0;
    boids.forEach(b => {
      let d = p5.Vector.dist(this.location, b.location);

      if (d > 0 && d < neighborDist) {
        sum.add(b.location);
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);

      return this.seek(sum);
    }

    return createVector();
  }
}
