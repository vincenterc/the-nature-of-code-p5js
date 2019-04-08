class Attractor {
  constructor() {
    this.G = 1;
    this.mass = 20;
    this.location = createVector(width / 2, height / 2);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.location, mover.location);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);

    force.normalize();
    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }

  display() {
    strokeWeight(2);
    stroke(0);
    fill(175, 200);
    ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
  }
}
