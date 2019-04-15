let flock;

function setup() {
  createCanvas(640, 360);

  flock = new Flock();

  Array(60)
    .fill("")
    .forEach(() => {
      let b = new Boid(width / 2, height / 2);
      flock.addBoid(b);
    });
}

function draw() {
  background(255);

  flock.run();

  noStroke();
  fill(0);
  text("Drag the mouse to generate new boids.", 10, 20);
}

function mouseDragged() {
  flock.addBoid(new Boid(mouseX, mouseY));
}
