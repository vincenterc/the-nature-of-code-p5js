class Chain {
  constructor(l, n, r, s) {
    this.particles = [];
    this.totalLength = l;
    this.numPoints = n;
    this.radius = r;
    this.strength = s;

    let len = this.totalLength / this.numPoints;

    Array(this.numPoints)
      .fill()
      .forEach((_, i) => {
        let particle = new Particle(width / 2, i * len);
        physics.addParticle(particle);
        this.particles.push(particle);

        if (i !== 0) {
          let previous = this.particles[i - 1];
          let spring = new VerletSpring2D(
            particle,
            previous,
            len,
            this.strength
          );
          physics.addSpring(spring);
        }
      });

    let head = this.particles[0];
    head.lock();

    this.tail = this.particles[this.particles.length - 1];
    this.tail.radius = this.radius;

    this.offset = createVector();
    this.dragged = false;
  }

  contains(x, y) {
    let d = dist(x, y, this.tail.x, this.tail.y);
    if (d < this.radius) {
      this.offset.x = this.tail.x - x;
      this.offset.y = this.tail.y - y;
      this.tail.lock();
      this.dragged = true;
    }
  }

  release() {
    if (this.dragged) {
      this.tail.unlock();
      this.dragged = false;
    }
  }

  updateTail(x, y) {
    if (this.dragged) {
      this.tail.set(x + this.offset.x, y + this.offset.y);
    }
  }

  display() {
    stroke(0);
    strokeWeight(2);
    noFill();
    beginShape();
    this.particles.forEach(p => vertex(p.x, p.y));
    endShape();
    this.tail.display();
  }
}
