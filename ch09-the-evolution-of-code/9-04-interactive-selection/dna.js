class DNA {
  constructor() {
    this.len = 20;
    this.genes = Array(this.len)
      .fill()
      .map(() => random(0, 1));
  }

  crossover(partner) {
    let midPoint = floor(random(this.genes.length));
    let genes = Array(this.genes.length)
      .fill()
      .map((_, i) => {
        if (i > midPoint) return this.genes[i];
        return partner.genes[i];
      });
    let child = new DNA(genes);

    return child;
  }

  mutate(mutationRate) {
    this.genes = this.genes.map((g, i) => {
      if (random(1) < mutationRate) {
        return random(0, 1);
      }
      return g;
    });
  }
}
