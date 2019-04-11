let world

let boxes = [];

function setup() {
  createCanvas(640, 360);

  world = createWorld();
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  if (mouseIsPressed) boxes.push(new Box(mouseX, mouseY));

  boxes.forEach(b => b.display());

  fill(0);
  text("Press mouse to add a rectangle", 10, 20);
}
