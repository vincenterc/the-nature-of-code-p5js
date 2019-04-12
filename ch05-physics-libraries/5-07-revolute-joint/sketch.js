let world;
let particles = [];
let windmill;
let status = "OFF";

function setup() {
  createCanvas(640, 360);

  world = createWorld();

  windmill = new Windmill(width / 2, 175);
}

function draw() {
  background(255);

  let timeStep = 1.0 / 30;
  world.Step(timeStep, 10, 10);

  if (random(1) < 0.1) {
    particles.push(
      new Particle(random(width / 2 - 100, width / 2 + 100), -20, random(4, 8))
    );
  }

  particles = particles.filter(p => {
    p.display();
    return !p.done();
  });

  windmill.display();

  status = windmill.motorOn() ? "ON" : "OFF";
  noStroke();
  fill(0);
  text(`Click mouse to toggle motor.\nMotor: ${status}`, 10, 20);
}

function mousePressed() {
  windmill.toggleMotor();
}
