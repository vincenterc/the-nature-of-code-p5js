class Mover {
  constructor(mass, x, y) {
    this.mass = mass;
    this.location = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175, 127);
    ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.location, mover.location);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);

    force.normalize();
    let strength = (G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }
}
