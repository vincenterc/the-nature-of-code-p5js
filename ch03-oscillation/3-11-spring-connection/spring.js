class Spring {
  constructor(x, y, l) {
    this.anchor = createVector(x, y);
    this.len = l;
    this.k = 0.2;
  }

  connect(bob) {
    let force = p5.Vector.sub(bob.location, this.anchor);
    let d = force.mag();
    let stretch = d - this.len;
    force.normalize();
    force.mult(-1 * this.k * stretch);

    bob.applyForce(force);
  }

  display() {
    strokeWeight(2);
    fill(100);
    rectMode(CENTER);
    rect(this.anchor.x, this.anchor.y, 10, 10);
  }

  displayLine(bob) {
    stroke(0);
    strokeWeight(2);
    line(bob.location.x, bob.location.y, this.anchor.x, this.anchor.y);
  }

  constrainLength(bob, minlen, maxlen) {
    let dir = p5.Vector.sub(bob.location, this.anchor);
    let d = dir.mag();
    if (d < minlen) {
      dir.normalize();
      dir.mult(minlen);
      bob.location = p5.Vector.add(this.anchor, dir);
      bob.velocity.mult(0);
    } else if (d > maxlen) {
      dir.normalize();
      dir.mult(maxlen);
      bob.location = p5.Vector.add(this.anchor, dir);
      bob.velocity.mult(0);
    }
  }
}
