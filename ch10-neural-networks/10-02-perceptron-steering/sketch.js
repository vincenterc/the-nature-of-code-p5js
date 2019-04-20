let v;
let desired;
let targets = [];

function setup() {
  createCanvas(640, 360);

  desired = createVector(width / 2, height / 2);

  makeTargets();

  v = new Vehicle(targets.length, random(width), random(height));
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(2);
  fill(0, 100);
  ellipse(desired.x, desired.y, 36, 36);

  targets.forEach(t => {
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(t.x, t.y, 16, 16);
    line(t.x, t.y - 16, t.x, t.y + 16);
    line(t.x - 16, t.y, t.x + 16, t.y);
  });

  v.steer(targets);
  v.update();
  v.display();
}

function makeTargets() {
  targets = Array(8)
    .fill()
    .map(() => createVector(random(width), random(height)));
}

function mousePressed() {
  makeTargets();
}
