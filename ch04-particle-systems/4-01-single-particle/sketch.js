let particle;

function setup() {
  createCanvas(200, 200);

  particle = new Particle(createVector(width / 2, 20));
}

function draw() {
  background(255);

  particle.run();
  if (particle.isDead()) {
    // console.log("Particle dead!");
    particle = new Particle(createVector(width / 2, 20));
  }
}
