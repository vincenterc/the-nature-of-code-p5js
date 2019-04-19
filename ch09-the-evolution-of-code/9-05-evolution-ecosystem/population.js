class Population {
  constructor(mutationRate, num) {
    this.mutationRate = mutationRate;
    this.population = Array(num)
      .fill()
      .map((_, i) => new Face(new DNA(), 50 + i * 75, 60));
    this.matingPool = [];
    this.generations = 0;
  }

  display() {
    this.population.forEach(p => p.display());
  }

  rollover(mx, my) {
    this.population.forEach(p => p.rollover(mx, my));
  }

  selection() {
    let maxFitness = this.getMaxFitness();

    this.matingPool = this.population.reduce((mp, p) => {
      let fitnessNormal = map(p.getFitness(), 0, maxFitness, 0, 1);
      let n = floor(fitnessNormal * 100);

      return [...mp, ...Array(n).fill(p)];
    }, []);
  }

  reproduction() {
    this.population = this.population.map((_, i) => {
      let m = floor(random(this.matingPool.length));
      let d = floor(random(this.matingPool.length));

      let mom = this.matingPool[m];
      let dad = this.matingPool[d];

      let momDNA = mom.getDNA();
      let dadDNA = dad.getDNA();

      let childDNA = momDNA.crossover(dadDNA);
      childDNA.mutate(this.mutationRate);

      return new Face(childDNA, 50 + i * 75, 60);
    });
    this.generations++;
  }

  getGenerations() {
    return this.generations;
  }

  getMaxFitness() {
    return this.population.reduce((record, p) => {
      let fitness = p.getFitness();
      return fitness > record ? fitness : record;
    }, 0);
  }
}
