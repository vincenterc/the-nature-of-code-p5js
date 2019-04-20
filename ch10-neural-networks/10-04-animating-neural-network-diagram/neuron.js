class Neuron {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.connections = [];
    this.sum = 0;

    this.r = 32;
  }

  fire() {
    this.r = 64;

    this.connections.forEach(c => c.feedForward(this.sum));
  }

  feedForward(input) {
    this.sum += input;

    if (this.sum > 1) {
      this.fire();
      this.sum = 0;
    }
  }

  addConnection(connection) {
    this.connections.push(connection);
  }

  display() {
    stroke(0);
    strokeWeight(1);

    let b = map(this.sum, 0, 1, 255, 0);

    fill(b);
    ellipse(this.location.x, this.location.y, this.r, this.r);

    this.r = lerp(this.r, 32, 0.1);
  }
}
