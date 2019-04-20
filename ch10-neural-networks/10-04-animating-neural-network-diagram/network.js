class Network {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.neurons = [];
    this.connections = [];
  }

  addNeuron(n) {
    this.neurons.push(n);
  }

  connect(a, b) {
    let c = new Connection(a, b, random(1));
    a.addConnection(c);
    this.connections.push(c);
  }

  feedForward(input) {
    let start = this.neurons[0];
    start.feedForward(input);
  }

  update() {
    this.connections.forEach(c => c.update());
  }

  display() {
    push();
    translate(this.location.x, this.location.y);
    this.neurons.forEach(n => n.display());
    this.connections.forEach(c => c.display());
    pop();
  }
}
