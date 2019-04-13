class Particle extends VerletParticle2D {
  constructor(x, y) {
    super(x, y);
    this.radius = 4;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
