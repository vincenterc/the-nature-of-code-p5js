class KochLine {
  constructor(start, end) {
    this.start = start.copy();
    this.end = end.copy();
  }

  display() {
    stroke(0);
    strokeWeight(1);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  kochA() {
    return this.start.copy();
  }

  kochB() {
    let b = p5.Vector.sub(this.end, this.start);
    b.div(3);
    b.add(this.start);
    return b;
  }

  kochC() {
    let c = this.start.copy();
    let v = p5.Vector.sub(this.end, this.start);
    v.div(3);
    c.add(v);
    v.rotate(-radians(60));
    c.add(v);
    return c;
  }

  kochD() {
    let d = p5.Vector.sub(this.end, this.start);
    d.mult(2 / 3);
    d.add(this.start);
    return d;
  }

  kochE() {
    return this.end.copy();
  }
}
