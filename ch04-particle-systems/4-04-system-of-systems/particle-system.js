class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run() {
    this.particles = this.particles.filter(particle => {
      particle.run();
      return !particle.isDead();
    });
  }
}
