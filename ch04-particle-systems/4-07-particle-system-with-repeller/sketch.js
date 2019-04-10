let particleSystem;
let repeller;

function setup() {
  createCanvas(640, 360);

  particleSystem = new ParticleSystem(createVector(width / 2, 50));
  repeller = new Repeller(width / 2 - 20, height / 2);
}

function draw() {
  background(255);

  particleSystem.addParticle();

  let gravity = createVector(0, 0.1);
  particleSystem.applyForce(gravity);

  particleSystem.applyRepeller(repeller);

  repeller.display();
  particleSystem.run();
}
