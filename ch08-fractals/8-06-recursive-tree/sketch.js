let theta;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  theta = map(mouseX, 0, width, 0, PI / 2);

  translate(width / 2, height);
  stroke(0);
  strokeWeight(2);
  branch(120);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  len *= 0.66;

  if (len > 2) {
    push();
    rotate(theta);
    branch(len);
    pop();

    push();
    rotate(-theta);
    branch(len);
    pop();
  }
}
