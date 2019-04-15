class Path {
  constructor() {
    this.radius = 20;
    this.points = [];
  }

  addPoint(x, y) {
    this.points.push(createVector(x, y));
  }

  getStart() {
    return this.points[0];
  }

  getEnd() {
    return this.points[this.points.length - 1];
  }

  display() {
    stroke(175);
    strokeWeight(this.radius * 2);
    noFill();
    beginShape();
    this.points.forEach(p => vertex(p.x, p.y));
    endShape();

    stroke(0);
    strokeWeight(1);
    noFill();
    beginShape();
    this.points.forEach(p => vertex(p.x, p.y));
    endShape();
  }
}
