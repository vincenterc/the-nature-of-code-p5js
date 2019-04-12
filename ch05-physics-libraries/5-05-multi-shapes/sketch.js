let world;
let boundaries = [];
let pops = [];

function setup() {
  createCanvas(640, 360);

  world = createWorld();

  boundaries.push(new Boundary(width / 4, height - 5, width / 2 - 50, 10));
  boundaries.push(
    new Boundary((3 * width) / 4, height - 50, width / 2 - 50, 10)
  );
  boundaries.push(new Boundary(width - 5, height / 2, 10, height));
  boundaries.push(new Boundary(5, height / 2, 10, height));
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  boundaries.forEach(b => b.display());

  pops = pops.filter(p => {
    p.display();
    return !p.done();
  });

  fill(0);
  text("Press mouse to add a lollipop", 20, 20);
}

function mousePressed() {
  pops.push(new Lollipop(mouseX, mouseY));
}
