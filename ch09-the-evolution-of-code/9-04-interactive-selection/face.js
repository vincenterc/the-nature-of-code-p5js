class Face {
  constructor(dna, x, y) {
    this.rolloverOn = false;
    this.dna = dna;
    this.x = x;
    this.y = y;
    this.wh = 70;
    this.fitness = 1;
    this.r = new Rectangle(
      this.x - this.wh / 2,
      this.y - this.wh / 2,
      this.wh,
      this.wh
    );
  }

  display() {
    let genes = this.dna.genes;
    let r = map(genes[0], 0, 1, 0, 70);
    let c = color(genes[1], genes[2], genes[3]);
    let eyeY = map(genes[4], 0, 1, 0, 5);
    let eyeX = map(genes[5], 0, 1, 0, 10);
    let eyeSize = map(genes[5], 0, 1, 0, 10);
    let eyeColor = color(genes[4], genes[5], genes[6]);
    let mouthColor = color(genes[7], genes[8], genes[9]);
    let mouthX = map(genes[5], 0, 1, 0, 25);
    let mouthY = map(genes[5], 0, 1, -25, 25);
    let mouthW = map(genes[5], 0, 1, 0, 50);
    let mouthH = map(genes[5], 0, 1, 0, 10);

    push();
    translate(this.x, this.y);
    noStroke();

    // head
    fill(c);
    ellipse(0, 0, r, r);

    // eyes
    fill(eyeColor);
    rectMode(CENTER);
    rect(-eyeX, -eyeY, eyeSize, eyeSize);
    rect(eyeX, -eyeY, eyeSize, eyeSize);

    // mouth
    fill(mouthColor);
    rectMode(CENTER);
    rect(mouthX, mouthY, mouthW, mouthH);

    // box
    stroke(0.25);
    if (this.rolloverOn) fill(0, 0.25);
    else noFill();
    rectMode(CENTER);
    rect(0, 0, this.wh, this.wh);
    pop();

    textAlign(CENTER);
    if (this.rolloverOn) fill(0);
    else fill(0.25);
    text(`${floor(this.fitness)}`, this.x, this.y + 55);
  }

  getFitness() {
    return this.fitness;
  }

  getDNA() {
    return this.dna;
  }

  rollover(mx, my) {
    if (this.r.contains(mx, my)) {
      this.rolloverOn = true;
      this.fitness += 0.25;
    } else {
      this.rolloverOn = false;
    }
  }
}
