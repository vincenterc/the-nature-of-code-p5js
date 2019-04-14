class Particle extends VerletParticle2D {
  constructor(pos) {
    super(pos);
    this.r = 4;

    physics.addParticle(this);
    physics.addBehavior(new AttractionBehavior(this, this.r * 4, -1));
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
