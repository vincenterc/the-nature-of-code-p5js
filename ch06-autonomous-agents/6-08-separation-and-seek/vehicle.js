class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector();
    this.velocity = createVector();
    this.location = createVector(x, y);
    this.r = 12;
    this.maxSpeed = 3;
    this.maxForce = 0.2;
  }

  applyBehavior(vehicles) {
    let separateForce = this.separate(vehicles);
    let seekForce = this.seek(createVector(mouseX, mouseY));

    separateForce.mult(slider1.value());
    seekForce.mult(slider2.value());

    this.applyForce(separateForce);
    this.applyForce(seekForce);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  separate(vehicles) {
    let desiredSeparation = slider3.value();

    let sum = createVector();
    let count = 0;
    vehicles.forEach(v => {
      let d = p5.Vector.dist(this.location, v.location);

      if (d > 0 && d < desiredSeparation) {
        let diff = p5.Vector.sub(this.location, v.location);
        diff.normalize();
        diff.div(d);

        sum.add(diff);
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);
      sum.setMag(this.maxSpeed);

      sum.sub(this.velocity);
      sum.limit(this.maxForce);
    }

    return sum;
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.location);
    desired.setMag(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);

    return steer;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(1);
    fill(175);
    push();
    translate(this.location.x, this.location.y);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
