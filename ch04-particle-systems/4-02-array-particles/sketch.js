let particles = [];

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);

  particles.push(new Particle(createVector(width / 2, 50)));

  particles = particles.filter(particle => {
    particle.run();
    return !particle.isDead();
  });
}
