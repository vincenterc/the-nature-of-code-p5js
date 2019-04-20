class Network {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.neurons = [];
  }

  addNeuron(n) {
    this.neurons.push(n);
  }

  connect(a, b) {
    let c = new Connection(a, b, random(1));
    a.addConnection(c);
  }

  display() {
    push();
    translate(this.location.x, this.location.y);
    this.neurons.forEach(n => n.display());
    pop();
  }
}
