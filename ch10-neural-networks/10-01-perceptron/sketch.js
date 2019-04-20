let training = Array(2000).fill();
let ptron;
let count = 0;

let xMin = -400;
let yMin = -100;
let xMax = 400;
let yMax = 100;

function f(x) {
  return 0.4 * x + 1;
}

function setup() {
  createCanvas(640, 360);

  ptron = new Perceptron(3, 0.01);

  training = training.map(() => {
    let x = random(xMin, xMax);
    let y = random(yMin, yMax);
    let answer = y < f(x) ? -1 : 1;

    return new Trainer(x, y, answer);
  });
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);

  stroke(127);
  strokeWeight(4);
  let x1 = xMin;
  let y1 = f(x1);
  let x2 = xMax;
  let y2 = f(x2);
  line(x1, y1, x2, y2);

  stroke(0);
  strokeWeight(1);
  let weights = ptron.getWeights();
  x1 = xMin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1];
  x2 = xMax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];
  line(x1, y1, x2, y2);

  ptron.train(training[count].inputs, training[count].answer);
  count = (count + 1) % training.length;

  Array(count)
    .fill()
    .forEach((_, i) => {
      stroke(0);
      strokeWeight(1);
      let guess = ptron.feedForward(training[i].inputs);
      if (guess > 0) noFill();
      else fill(0);
      ellipse(training[i].inputs[0], training[i].inputs[1], 8, 8);
    });
  pop();

  noStroke();
  fill(0);
  text(`count: ${count}`, 10, 20);
}
