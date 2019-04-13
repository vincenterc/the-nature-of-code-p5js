let world;
let boundaries = [];
let box;
let spring;

function setup() {
  createCanvas(640, 360);

  world = createWorld();

  box = new Box(width / 2, height / 2);
  spring = new Spring();

  boundaries.push(new Boundary(width / 2, height - 5, width, 10, 0));
  boundaries.push(new Boundary(width / 2, 5, width, 10, 0));
  boundaries.push(new Boundary(width - 5, height / 2, 10, height, 0));
  boundaries.push(new Boundary(5, height / 2, 10, height, 0));
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  spring.update(mouseX, mouseY);

  boundaries.forEach(b => b.display());

  box.display();
  spring.display();
}

function mousePressed() {
  if (box.contains(mouseX, mouseY)) {
    spring.bind(mouseX, mouseY, box);
  }
}

function mouseReleased() {
  spring.destroy();
}
