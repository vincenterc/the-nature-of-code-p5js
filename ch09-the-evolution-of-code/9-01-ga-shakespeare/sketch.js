let mutationRate = 0.01;
let totalPopulation = 150;
let population = [];
let matingPool = [];
let target = "to be or not to be";

function setup() {
  createCanvas(640, 360);

  population = Array(totalPopulation)
    .fill()
    .map(() => new DNA(target.length));
}

function draw() {
  population.forEach(p => p.calcFitness(target));

  matingPool = population.reduce((mp, p) => {
    let n = floor(p.fitness * 100);
    return [...mp, ...Array(n).fill(p)];
  }, []);

  population = population.map(p => {
    let a = floor(random(matingPool.length));
    let b = floor(random(matingPool.length));
    let partnerA = matingPool[a];
    let partnerB = matingPool[b];
    let child = partnerA.crossover(partnerB);
    child.mutate(mutationRate);
    return child;
  });

  background(255);
  noStroke();
  fill(0);
  let everything = population.reduce(
    (acc, p) => `${acc}${p.getPhrase()}     `,
    ""
  );
  text(everything, 10, 10, width, height);
}
