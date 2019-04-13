let world;
let particles = [];
let wall;

function setup() {
  createCanvas(640, 360);

  world = createWorld();
  world.SetContactListener(new CustomListener());

  wall = new Boundary(width / 2, height - 5, width, 10);
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  if (random(1) < 0.1) {
    particles.push(new Particle(random(width), 20, random(4, 8)));
  }

  particles = particles.filter(p => {
    p.display();
    return !p.done();
  });

  wall.display();
}
