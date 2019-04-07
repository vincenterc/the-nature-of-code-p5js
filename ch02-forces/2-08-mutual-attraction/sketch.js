let movers = [];
let G = 1;

function setup() {
  createCanvas(640, 360);

  movers = Array(20)
    .fill("")
    .map((_, i) => new Mover(random(0.1, 2), random(width), random(height)));
}

function draw() {
  background(255);

  movers.forEach((mi, i) => {
    movers.forEach((mj, j) => {
      if (i !== j) {
        let force = mj.attract(mi);
        mi.applyForce(force);
      }
    });
    mi.update();
    mi.display();
  });
}
