class DNA {
  constructor(genes) {
    if (genes) {
      this.genes = genes;
    } else {
      this.genes = Array(1)
        .fill()
        .map(() => random(0, 1));
    }
  }

  copy() {
    return new DNA([...this.genes]);
  }

  mutate(mutationRate) {
    this.genes = this.genes.map(g => {
      if (random(1) < mutationRate) {
        return random(0, 1);
      }
      return g;
    });
  }
}
