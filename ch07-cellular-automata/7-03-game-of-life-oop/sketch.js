let gol;

function setup() {
  createCanvas(640, 360);
  background(255);

  gol = new GOL();
}

function draw() {
  gol.display();
  gol.generate();
}

function mousePressed() {
  gol.init();
}
