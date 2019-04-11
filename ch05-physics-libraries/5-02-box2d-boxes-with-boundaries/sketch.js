let world;
let boundaries = [];
let boxes = [];

function setup() {
  createCanvas(640, 360);

  world = createWorld();
  boundaries.push(new Boundary(width / 4, height - 5, width / 2 - 50, 10));
  boundaries.push(
    new Boundary((3 * width) / 4, height - 50, width / 2 - 50, 10)
  );
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  if (random(1) < 0.2) {
    let b = new Box(width / 2, 30);
    boxes.push(b);
  }

  boundaries.forEach(b => b.display());

  boxes = boxes.filter(b => {
    b.display();
    return !b.done();
  });
}
