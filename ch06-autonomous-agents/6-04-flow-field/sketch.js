let debug = true;
let flowField;
let vehicles = [];

function setup() {
  createCanvas(640, 360);

  flowField = new FlowField(20);

  vehicles = Array(120)
    .fill("")
    .map(
      () =>
        new Vehicle(
          random(width),
          random(height),
          random(2, 5),
          random(0.1, 0.5)
        )
    );
}

function draw() {
  background(255);

  if (debug) flowField.display();

  vehicles.forEach(v => {
    v.follow(flowField);
    v.run();
  });

  noStroke();
  fill(0);
  text(
    "Hit space bar to toggle debugging lines.\nClick the mouse to generate a new flow field.",
    10,
    20
  );
}

function keyPressed() {
  if (key === " ") debug = !debug;
}

function mousePressed() {
  flowField.init();
}
