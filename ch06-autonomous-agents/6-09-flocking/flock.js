class Flock {
  constructor() {
    this.boids = [];
  }

  run() {
    this.boids.forEach(b => b.run(this.boids));
  }

  addBoid(boid) {
    this.boids.push(boid);
  }
}
