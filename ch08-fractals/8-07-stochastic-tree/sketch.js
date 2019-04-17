function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  stroke(0);
  push();
  translate(width / 2, height);
  branch(120);
  pop();

  noStroke();
  fill(0);
  text("Click mouse to generate a new tree", 10, 20);

  noLoop();
}

function mousePressed() {
  redraw();
}

function branch(len) {
  let sw = map(len, 2, 120, 1, 5);
  strokeWeight(sw);

  line(0, 0, 0, -len);
  translate(0, -len);

  len *= 0.66;

  if (len > 2) {
    let n = Math.floor(random(1, 4));

    Array(n)
      .fill()
      .forEach(() => {
        let theta = random(-PI / 3, PI / 3);

        push();
        rotate(theta);
        branch(len);
        pop();
      });
  }
}
