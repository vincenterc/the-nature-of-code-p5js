let vehicles = [];

let slider1;
let slider2;
let slider3;

function setup() {
  createCanvas(640, 360);

  vehicles = Array(100)
    .fill("")
    .map(() => new Vehicle(random(width), random(height)));

  slider1 = createSlider(0, 8, 2);
  slider1.position(10, 365);
  slider2 = createSlider(0, 8, 1);
  slider2.position(10, 390);
  slider3 = createSlider(10, 160, 24);
  slider3.position(10, 415);
}

function draw() {
  background(255);

  vehicles.forEach(v => {
    v.applyBehavior(vehicles);
    v.update();
    v.display();
  });
}
