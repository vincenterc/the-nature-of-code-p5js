let movers = [];
let liquid;

function setup() {
  createCanvas(640, 360);

  resetMovers();
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  liquid.display();

  movers.forEach(mover => {
    if (mover.isInside(liquid)) {
      mover.drag(liquid);
    }

    let gravity = createVector(0, 0.1 * mover.mass);
    mover.applyForce(gravity);

    mover.update();
    mover.checkEdges();
    mover.display();
  });

  text("click mouse to reset", 10, 30);
}

function resetMovers() {
  movers = Array(9)
    .fill("")
    .map((_, i) => new Mover(random(0.5, 3), 40 + i * 70, 0));
}

function mousePressed() {
  resetMovers();
}
