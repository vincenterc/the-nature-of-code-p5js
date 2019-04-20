class Perceptron {
  constructor(n, c) {
    this.weights = Array(n)
      .fill()
      .map(() => random(-1, 1));

    this.c = c;
  }

  train(inputs, desired) {
    let guess = this.feedForward(inputs);
    let error = desired - guess;

    this.weights = this.weights.map((w, i) => w + this.c * error * inputs[i]);
  }

  feedForward(inputs) {
    let sum = this.weights.reduce((s, w, i) => s + inputs[i] * w, 0);

    return this.activate(sum);
  }

  activate(sum) {
    return sum > 0 ? 1 : -1;
  }

  getWeights() {
    return this.weights;
  }
}
