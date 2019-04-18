class DNA {
  constructor(num) {
    this.genes = Array(num)
      .fill()
      .map(() => this.newChar());
    this.fitness = 0;
  }

  getPhrase() {
    return this.genes.join("");
  }

  calcFitness(target) {
    let score = this.genes.reduce((s, g, i) => {
      if (g === target[i]) return s + 1;
      return s;
    }, 0);
    this.fitness = score / target.length;
  }

  crossover(partner) {
    let child = new DNA(this.genes.length);

    let midPoint = floor(random(this.genes.length));

    child.genes = Array(this.genes.length)
      .fill()
      .map((_, i) => {
        if (i > midPoint) return this.genes[i];
        return partner.genes[i];
      });
    return child;
  }

  mutate(mutationRate) {
    this.genes = this.genes.map(g => {
      if (random(1) < mutationRate) return this.newChar();
      return g;
    });
  }

  newChar() {
    let c = floor(random(64, 122));

    return String.fromCharCode(c === 64 ? 32 : c);
  }
}
