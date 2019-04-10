let particleSystem;

function setup() {
  createCanvas(200, 200);

  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(255);

  particleSystem.addParticle();

  let gravity = createVector(0, 0.1);
  particleSystem.applyForce(gravity);

  particleSystem.run();
}
