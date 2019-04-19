let population;
let button;

function setup() {
  createCanvas(800, 200);
  colorMode(RGB, 1.0);
  let popMax = 10;
  let mutationRate = 0.05;
  population = new Population(mutationRate, popMax);
  button = new Button(15, 150, 160, 20, "evolve new generation");
}

function draw() {
  background(1.0);

  population.display();
  population.rollover(mouseX, mouseY);

  textAlign(LEFT);
  fill(0);
  text(`Generation #: ${population.getGenerations()}`, 15, 190);

  button.display();
  button.rollover(mouseX, mouseY);
}

function mousePressed() {
  if (button.clicked(mouseX, mouseY)) {
    population.selection();
    population.reproduction();
  }
}

function mouseReleased() {
  button.released();
}
