class Rocket {
  constructor(location, dna) {
    this.location = location.copy();
    this.velocity = createVector();
    this.acceleration = createVector();
    this.radius = 4;

    this.dna = dna;
    this.finishTime = 0;
    this.recordDist = Infinity;

    this.fitness = 0;
    this.geneCounter = 0;
    this.hitObstacle = false;
    this.hitTarget = false;
  }

  calcFitness() {
    if (this.recordDist < 1) this.recordDist = 1;
    this.fitness = 1 / (this.finishTime * this.recordDist);
    this.fitness = pow(this.fitness, 4);
    if (this.hitObstacle) this.fitness *= 0.1;
    if (this.hitTarget) this.fitness *= 2;
  }

  run(os) {
    if (!this.hitObstacle && !this.hitTarget) {
      this.applyForce(this.dna.genes[this.geneCounter]);
      this.geneCounter = (this.geneCounter + 1) % this.dna.genes.length;
      this.update();
      this.obstacles(os);
    }

    if (!this.hitObstacle) {
      this.display();
    }
  }

  checkTarget() {
    let d = dist(
      this.location.x,
      this.location.y,
      target.location.x,
      target.location.y
    );

    if (d < this.recordDist) this.recordDist = d;

    if (target.contains(this.location) && !this.hitTarget) {
      this.hitTarget = true;
    } else if (!this.hitTarget) {
      this.finishTime++;
    }
  }

  obstacles(os) {
    obstacles.forEach(o => {
      if (o.contains(this.location)) this.hitObstacle = true;
    });
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

  stopped() {
    return this.hitObstacle;
  }
}
