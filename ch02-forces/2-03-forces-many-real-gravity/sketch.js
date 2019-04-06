let movers = [];

function setup() {
  createCanvas(640, 360);

  movers = Array(20)
    .fill("")
    .map(() => new Mover(random(0.1, 5), 0, 0));
}

function draw() {
  background(255);

  let wind = createVector(0.01, 0);

  movers.forEach(mover => {
    let gravity = createVector(0, 0.1 * mover.mass);

    mover.applyForce(wind);
    mover.applyForce(gravity);
    mover.update();
    mover.checkEdges();
    mover.display();
  });
}
