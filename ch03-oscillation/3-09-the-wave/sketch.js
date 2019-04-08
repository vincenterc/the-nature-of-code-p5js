let startAngle = 0;
let angleVel = 0.1;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  let angle = startAngle;
  startAngle += 0.02;

  for (let x = 0; x <= width; x += 24) {
    let y = map(sin(angle), -1, 1, 0, height);
    stroke(0);
    strokeWeight(2);
    fill(0, 50);
    ellipse(x, y, 48, 48);
    angle += angleVel;
  }
}
