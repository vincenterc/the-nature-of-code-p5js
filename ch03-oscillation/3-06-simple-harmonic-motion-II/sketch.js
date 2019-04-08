let angle = 0;
let aVelocity = 0.05;
let amplitude = 80;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);

  let x = amplitude * cos(angle);
  angle += aVelocity;

  stroke(0);
  fill(175);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  ellipse(x, 0, 20, 20);
}
