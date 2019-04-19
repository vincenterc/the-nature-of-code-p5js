let lifetime;
let population;
let lifeCounter;
let target;

function setup() {
  createCanvas(640, 360);

  lifetime = height;
  lifeCounter = 0;
  target = createVector(width / 2, 24);
  let mutationRate = 0.01;
  population = new Population(mutationRate, 50);
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(0);
  fill(0);
  ellipse(target.x, target.y, 24, 24);

  if (lifeCounter < lifetime) {
    population.live();
    lifeCounter++;
  } else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

  noStroke();
  fill(0);
  text(
    `Generation #: ${population.getGenerations()}\nCycles left: ${lifetime -
      lifeCounter}`,
    10,
    20
  );
}

function mousePressed() {
  target.x = mouseX;
  target.y = mouseY;
}
