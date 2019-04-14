let v;
let debug = true;
let d = 25;

function setup() {
  createCanvas(640, 360);

  v = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(255);

  if (debug) {
    stroke(175);
    noFill();
    rectMode(CENTER);
    rect(width / 2, height / 2, width - d * 2, height - d * 2);
  }

  v.boundaries();
  v.update();
  v.display();
}

function mousePressed() {
  debug = !debug;
}
