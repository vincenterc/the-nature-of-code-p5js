class Food {
  constructor(num) {
    this.locations = Array(num)
      .fill()
      .map(() => createVector(random(width), random(height)));
  }

  add(location) {
    this.locations.push(location.copy());
  }

  run() {
    this.locations.forEach(l => {
      rectMode(CENTER);
      stroke(0);
      strokeWeight(1);
      fill(127);
      rect(l.x, l.y, 8, 8);
    });

    if (random(1) < 0.001) {
      this.locations.push(createVector(random(width), random(height)));
    }
  }
}
