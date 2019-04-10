class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  applyForce(force) {
    this.particles.forEach(particle => particle.applyForce(force));
  }

  applyRepeller(repeller) {
    this.particles.forEach(particle => {
      let force = repeller.repel(particle);
      particle.applyForce(force);
    });
  }

  run() {
    this.particles = this.particles.filter(particle => {
      particle.run();
      return !particle.isDead();
    });
  }
}
