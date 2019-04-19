class DNA {
  constructor(genes) {
    this.maxForce = 0.1;
    if (genes) {
      this.genes = genes;
    } else {
      this.genes = Array(lifetime)
        .fill()
        .map(() => {
          let v = p5.Vector.random2D();
          return v.mult(random(0, this.maxForce));
        });
    }
    this.genes[0].normalize();
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
        let v = p5.Vector.random2D();
        v.mult(random(0, this.maxForce));
        if (i === 0) v.normalize();
        return v;
      }
      return g;
    });
  }
}
