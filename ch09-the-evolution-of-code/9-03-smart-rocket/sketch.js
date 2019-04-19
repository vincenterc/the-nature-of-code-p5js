let lifetime;
let population;
let lifeCounter;
let recordTime;
let target;
let obstacles = [];

function setup() {
  createCanvas(640, 360);

  lifetime = 300;
  lifeCounter = 0;
  recordTime = lifetime;
  target = new Obstacle(width / 2 - 12, 24, 24, 24);
  let mutationRate = 0.01;
  population = new Population(mutationRate, 50);
  obstacles = [new Obstacle(width / 2 - 100, height / 2, 200, 10)];
}

function draw() {
  background(255);

  target.display();

  if (lifeCounter < lifetime) {
    population.live(obstacles);
    if (population.targetReached() && lifeCounter < recordTime) {
      recordTime = lifeCounter;
    }
    lifeCounter++;
  } else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

  obstacles.forEach(o => o.display());

  noStroke();
  fill(0);
  text(
    `Generation #: ${population.getGenerations()}\nCycles left: ${lifetime -
      lifeCounter}\nRecord cycles: ${recordTime}`,
    10,
    20
  );
}

function mousePressed() {
  target.location.x = mouseX;
  target.location.y = mouseY;
  recordTime = lifetime;
}
