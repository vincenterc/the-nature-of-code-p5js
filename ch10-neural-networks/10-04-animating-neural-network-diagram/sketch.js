let network;

function setup() {
  createCanvas(640, 360);

  network = new Network(width / 2, height / 2);

  let a = new Neuron(-275, 0);
  let b = new Neuron(-150, 0);
  let c = new Neuron(0, 75);
  let d = new Neuron(0, -75);
  let e = new Neuron(150, 0);
  let f = new Neuron(275, 0);

  network.connect(a, b);
  network.connect(b, c);
  network.connect(b, d);
  network.connect(c, e);
  network.connect(d, e);
  network.connect(e, f);

  network.addNeuron(a);
  network.addNeuron(b);
  network.addNeuron(c);
  network.addNeuron(d);
  network.addNeuron(e);
  network.addNeuron(f);
}

function draw() {
  background(255);

  network.update();
  network.display();

  if (frameCount % 30 === 0) {
    network.feedForward(random(1));
  }
}
