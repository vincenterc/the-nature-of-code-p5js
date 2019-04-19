class DNA {
  constructor(genes) {
    if (genes) {
      this.genes = genes;
    } else {
      this.maxForce = 0.1;
      this.genes = Array(lifetime)
        .fill()
        .map(() => {
          let v = p5.Vector.random2D();
          return v.mult(random(0, this.maxForce));
        });
    }
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
    this.genes = this.genes.map(g => {
      if (random(1) < mutationRate) {
        let v = p5.Vector.random2D();
        return v.mult(random(0, this.maxForce));
      }
      return g;
    });
  }
}
