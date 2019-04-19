class Rocket {
  constructor(location, dna) {
    this.location = location.copy();
    this.velocity = createVector();
    this.acceleration = createVector();
    this.radius = 4;

    this.fitness = 0;
    this.dna = dna;
    this.geneCounter = 0;

    this.hitTarget = false;
  }

  calcFitness() {
    let d = dist(this.location.x, this.location.y, target.x, target.y);

    this.fitness = pow(1 / d, 2);
  }

  run() {
    this.checkTarget();

    if (!this.hitTarget) {
      this.applyForce(this.dna.genes[this.geneCounter]);
      this.geneCounter = (this.geneCounter + 1) % this.dna.genes.length;
      this.update();
    }

    this.display();
  }

  checkTarget() {
    let d = dist(this.location.x, this.location.y, target.x, target.y);
    if (d < 12) {
      this.hitTarget = true;
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  display() {
    let theta = this.velocity.heading() + PI / 2;
    let r = this.radius;

    stroke(0);
    strokeWeight(1);
    push();
    translate(this.location.x, this.location.y);
    rotate(theta);

    fill(0);
    rectMode(CENTER);
    rect(-r / 2, r * 2, r / 2, r);
    rect(r / 2, r * 2, r / 2, r);

    fill(175);
    beginShape();
    vertex(0, -r * 2);
    vertex(-r, r * 2);
    vertex(r, r * 2);
    endShape(CLOSE);
    pop();
  }

  getFitness() {
    return this.fitness;
  }

  getDNA() {
    return this.dna;
  }
}
