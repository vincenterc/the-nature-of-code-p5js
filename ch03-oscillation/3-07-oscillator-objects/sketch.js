let oscillators = [];

function setup() {
  createCanvas(200, 200);

  oscillators = Array(10)
    .fill("")
    .map(() => new Oscillator());
}

function draw() {
  background(255);

  oscillators.forEach(oscillator => {
    oscillator.oscillate();
    oscillator.display();
  });
}
