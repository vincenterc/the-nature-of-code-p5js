class Population {
  constructor(mutationRate, num) {
    this.mutationRate = mutationRate;
    this.population = Array(num)
      .fill()
      .map(() => new Rocket(createVector(width / 2, height + 20), new DNA()));
    this.matingPool = [];
    this.generations = 0;
  }

  live() {
    this.population.forEach(p => p.run());
  }

  fitness() {
    this.population.forEach(p => p.calcFitness());
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
    this.population = this.population.map(p => {
      let m = floor(random(this.matingPool.length));
      let d = floor(random(this.matingPool.length));

      let mom = this.matingPool[m];
      let dad = this.matingPool[d];

      let momDNA = mom.getDNA();
      let dadDNA = dad.getDNA();

      let childDNA = momDNA.crossover(dadDNA);
      childDNA.mutate(this.mutationRate);

      return new Rocket(createVector(width / 2, height + 20), childDNA);
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
