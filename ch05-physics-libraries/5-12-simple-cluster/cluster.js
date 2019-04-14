class Cluster {
  constructor(n, d, center) {
    this.diameter = d;
    this.nodes = Array(n)
      .fill("")
      .map(() => new Node(center.add(Vec2D.randomVector())));

    this.nodes.forEach((ni, i) => {
      if (i < this.nodes.length - 1) {
        this.nodes.forEach((nj, j) => {
          if (j >= i + 1) {
            physics.addSpring(new VerletSpring2D(ni, nj, this.diameter, 0.01));
          }
        });
      }
    });
  }

  display() {
    this.nodes.forEach(n => n.display());
  }

  showConnections() {
    stroke(0);
    strokeWeight(2);
    this.nodes.forEach((ni, i) => {
      if (i < this.nodes.length - 1) {
        this.nodes.forEach((nj, j) => {
          if (j >= i + 1) {
            line(ni.x, ni.y, nj.x, nj.y);
          }
        });
      }
    });
  }
}
