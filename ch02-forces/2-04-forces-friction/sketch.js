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

    let c = 0.01;
    let normal = 1;
    let frictionMag = c * normal;
    let friction = mover.velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    mover.applyForce(friction);
    mover.applyForce(wind);
    mover.applyForce(gravity);
    mover.update();
    mover.checkEdges();
    mover.display();
  });
}
