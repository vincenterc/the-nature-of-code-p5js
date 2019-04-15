let debug = true;
let path;
let car1;
let car2;

function setup() {
  createCanvas(640, 360);

  newPath();

  car1 = new Vehicle(0, height / 2, 2, 0.04);
  car2 = new Vehicle(0, height / 2, 3, 0.1);
}

function draw() {
  background(255);

  path.display();

  car1.follow(path);
  car2.follow(path);

  car1.run();
  car2.run();

  car1.borders(path);
  car2.borders(path);

  noStroke();
  fill(0);
  text(
    "Hit space bar to toggle debugging lines.\nClick the mouse to generate a new path.",
    10,
    height - 20
  );
}

function newPath() {
  path = new Path();
  path.addPoint(-20, height / 2);
  path.addPoint(random(0, width / 2), random(0, height));
  path.addPoint(random(width / 2, width), random(0, height));
  path.addPoint(width + 20, height / 2);
}

function keyPressed() {
  if (key === " ") debug = !debug;
}

function mousePressed() {
  newPath();
}
