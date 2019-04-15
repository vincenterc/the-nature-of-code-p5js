let debug = true;
let path;
let car1;
let car2;

function setup() {
  createCanvas(640, 360);

  path = new Path();

  car1 = new Vehicle(0, height / 2, 2, 0.02);
  car2 = new Vehicle(0, height / 2, 3, 0.05);
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
  text("Hit space bar to toggle debugging lines.", 10, height - 20);
}

function keyPressed() {
  if (key === " ") debug = !debug;
}
