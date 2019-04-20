class Connection {
  constructor(from, to, w) {
    this.weight = w;
    this.a = from;
    this.b = to;
  }

  display() {
    stroke(0);
    strokeWeight(this.weight * 4);
    line(
      this.a.location.x,
      this.a.location.y,
      this.b.location.x,
      this.b.location.y
    );
  }
}
