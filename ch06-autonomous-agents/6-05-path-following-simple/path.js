class Path {
  constructor() {
    this.radius = 20;
    this.start = createVector(0, height / 3);
    this.end = createVector(width, (2 * height) / 3);
  }

  display() {
    stroke(0, 100);
    strokeWeight(this.radius * 2);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    stroke(0);
    strokeWeight(1);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
