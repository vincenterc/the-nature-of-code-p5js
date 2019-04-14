let physics;
let cluster;
let showParticles = true;
let showConnections = true;

function setup() {
  createCanvas(640, 360);

  physics = new VerletPhysics2D();
  physics.setWorldBounds(new Rect(0, 0, width, height));

  cluster = new Cluster(8, 100, new Vec2D(width / 2, height / 2));
}

function draw() {
  background(255);

  physics.update();

  if (showParticles) {
    cluster.display();
  }

  if (showConnections) {
    cluster.showConnections();
  }

  noStroke();
  fill(0);
  text(
    "'p' to display or hide particles\n'c' to display or hide connections\n'n' for new graph",
    10,
    20
  );
}

function keyPressed() {
  if (key === "c" || key === "C") {
    showConnections = !showConnections;
    if (!showConnections) showParticles = true;
  } else if (key === "p" || key === "P") {
    showParticles = !showParticles;
    if (!showParticles) showConnections = true;
  } else if (key === "n" || key === "N") {
    physics.clear();
    cluster = new Cluster(
      Math.floor(random(2, 20)),
      random(10, height - 100),
      new Vec2D(width / 2, height / 2)
    );
  }
}
