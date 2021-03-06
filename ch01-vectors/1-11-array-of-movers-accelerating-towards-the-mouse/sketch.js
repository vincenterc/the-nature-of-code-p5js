let movers = [];

function setup() {
  createCanvas(200, 200);

  movers = Array(20)
    .fill("")
    .map(() => new Mover());
}

function draw() {
  background(255);

  movers.forEach(mover => {
    mover.update();
    mover.display();
  });
}
