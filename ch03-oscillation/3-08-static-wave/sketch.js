let angle = 0;
let angleVel = 0.1;

function setup() {
  createCanvas(640, 360);
  background(255);

  beginShape();
  for (let x = 0; x <= width; x += 5) {
    let y = map(sin(angle), -1, 1, 0, height);
    vertex(x, y);
    angle += angleVel;
  }
  endShape();
}
