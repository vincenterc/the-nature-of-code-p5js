class Perceptron {
  constructor(n, c) {
    this.weights = Array(n)
      .fill()
      .map(() => random(0, 1));

    this.c = c;
  }

  train(forces, error) {
    this.weights = this.weights.map((w, i) => {
      w += this.c * error.x * forces[i].x;
      w += this.c * error.y * forces[i].y;
      return constrain(w, 0, 1);
    });
  }

  feedForward(forces) {
    return this.weights.reduce(
      (s, w, i) => s.add(forces[i].mult(w)),
      createVector(0, 0)
    );
  }
}
