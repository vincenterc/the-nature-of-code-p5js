let v;

function setup() {
  createCanvas(640, 360);

  v = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);

  stroke(0);
  strokeWeight(2);
  fill(200);
  ellipse(mouse.x, mouse.y, 48, 48);

  v.arrive(mouse);
  v.update();
  v.display();
}
