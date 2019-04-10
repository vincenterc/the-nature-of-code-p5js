let particleSystem;
let img;

function preload() {
  img = loadImage("texture.png");
}

function setup() {
  createCanvas(640, 360);

  particleSystem = new ParticleSystem(
    createVector(width / 2, height - 75),
    img
  );
}

function draw() {
  background(0);

  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);
  particleSystem.applyForce(wind);

  particleSystem.run();
  Array(2)
    .fill("")
    .forEach(() => particleSystem.addParticle());

  drawVector(wind, createVector(width / 2, 50), 500);
}

function drawVector(v, pos, scayl) {
  push();

  let arrowsize = 4;
  translate(pos.x, pos.y);
  stroke(255);
  rotate(v.heading());
  let len = v.mag() * scayl;
  line(0, 0, len, 0);
  line(len, 0, len - arrowsize, +arrowsize / 2);
  line(len, 0, len - arrowsize, -arrowsize / 2);

  pop;
}
