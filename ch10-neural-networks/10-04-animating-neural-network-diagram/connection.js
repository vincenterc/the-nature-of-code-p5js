class Connection {
  constructor(from, to, w) {
    this.weight = w;
    this.a = from;
    this.b = to;

    this.sending = false;
    this.sender = createVector();
    this.output = 0;
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

    if (this.sending) {
      stroke(0);
      strokeWeight(1);
      fill(0);
      ellipse(this.sender.x, this.sender.y, 16, 16);
    }
  }

  feedForward(value) {
    this.output = value * this.weight;
    this.sender = this.a.location.copy();
    this.sending = true;
  }

  update() {
    if (this.sending) {
      this.sender.x = lerp(this.sender.x, this.b.location.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.location.y, 0.1);

      let d = p5.Vector.dist(this.sender, this.b.location);

      if (d < 1) {
        this.b.feedForward(this.output);
        this.sending = false;
      }
    }
  }
}
