class Neuron {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.connections = [];
  }

  addConnection(connection) {
    this.connections.push(connection);
  }

  display() {
    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(this.location.x, this.location.y, 16, 16);

    this.connections.forEach(c => c.display());
  }
}
