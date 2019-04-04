function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);

  mouse.sub(center);

  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
