class Particle extends VerletParticle2D {
  constructor(pos) {
    super(pos);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.x, this.y, 32, 32);
  }
}
