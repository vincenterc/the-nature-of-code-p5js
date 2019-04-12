let world;
let particles = [];
let surface;

function setup() {
  createCanvas(640, 360);

  world = createWorld();
  surface = new Surface();
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  surface.display();

  if (random(1) < 0.5) {
    let sz = random(4, 8);
    particles.push(new Particle(width / 2, 10, sz));
  }

  surface.display();

  particles = particles.filter(p => {
    p.display();
    return !p.done();
  });
}
