class Attractor extends VerletParticle2D {
  constructor(pos) {
    super(pos);
    this.r = 24;

    physics.addParticle(this);
    physics.addBehavior(new AttractionBehavior(this, width, 0.1));
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
