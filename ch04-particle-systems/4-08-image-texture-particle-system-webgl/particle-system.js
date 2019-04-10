class ParticleSystem {
  constructor(position, image) {
    this.origin = position.copy();
    this.particles = [];
    this.image = image;
  }

  addParticle() {
    this.particles.push(new Particle(this.origin, this.image));
  }

  applyForce(force) {
    this.particles.forEach(particle => particle.applyForce(force));
  }

  run() {
    this.particles = this.particles.filter(particle => {
      particle.run();
      return !particle.isDead();
    });
  }
}
