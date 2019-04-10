class Repeller {
  constructor(x, y) {
    this.r = 16;
    this.position = createVector(x, y);

    this.strength = 100;
  }

  repel(particle) {
    let dir = p5.Vector.sub(this.position, particle.position);
    let d = dir.mag();
    dir.normalize();
    d = constrain(d, 5, 100);
    let force = (-1 * this.strength) / (d * d);
    dir.mult(force);
    return dir;
  }

  display() {
    strokeWeight(2);
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
  }
}
