let boxes = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  if (mouseIsPressed) boxes.push(new Box(mouseX, mouseY));

  boxes.forEach(b => b.display());

  fill(0);
  text("Press mouse to add a rectangle", 10, 20);
}
