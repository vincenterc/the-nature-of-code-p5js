let vehicles = [];

function setup() {
  createCanvas(640, 360);

  vehicles = Array(100)
    .fill("")
    .map(() => new Vehicle(random(width), random(height)));
}

function draw() {
  background(255);

  vehicles.forEach(v => {
    v.separate(vehicles);
    v.update();
    v.borders();
    v.display();
  });

  noStroke();
  fill(0);
  text("Drag the mouse to generate new vehicles.", 10, 20);
}

function mouseDragged() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}
