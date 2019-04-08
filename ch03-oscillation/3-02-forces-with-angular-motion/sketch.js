let movers = [];
let attractor;

function setup() {
  createCanvas(640, 360);

  movers = Array(20)
    .fill("")
    .map(() => new Mover(random(0.1, 2), random(width), random(height)));
  attractor = new Attractor();
}

function draw() {
  background(255);

  attractor.display();

  movers.forEach(mover => {
    let force = attractor.attract(mover);
    mover.applyForce(force);

    mover.update();
    mover.display();
  });
}
