let ca;

function setup() {
  createCanvas(640, 360);
  background(255);

  ca = new CA();
}

function draw() {
  ca.display();
  if (ca.generation < Math.floor(height / ca.w)) {
    ca.generate();
  }
}
