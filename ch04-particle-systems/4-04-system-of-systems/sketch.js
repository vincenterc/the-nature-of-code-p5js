let systems = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  systems.forEach(system => {
    system.addParticle();
    system.run();
  });

  noStroke();
  fill(0);
  text("click to add particle systems", 10, 20);
}

function mousePressed() {
  systems.push(new ParticleSystem(createVector(mouseX, mouseY)));
}
