let world;
let boundaries = [];
let pairs = [];

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

  boundaries.forEach(b => b.display());

  pairs = pairs.filter(p => {
    p.display();
    return !p.done();
  });

  stroke(255);
  fill(0);
  text("Press mouse to add a pair", 10, 20);
}

function mousePressed() {
  pairs.push(new Pair(mouseX, mouseY));
}
