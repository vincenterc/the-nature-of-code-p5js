let r = 75;
let theta = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);

  let x = r * cos(theta);
  let y = r * sin(theta);

  stroke(0);
  fill(175);
  line(width / 2, height / 2, x + width / 2, y + height / 2);
  ellipse(x + width / 2, y + height / 2, 16, 16);

  theta += 0.02;
}
