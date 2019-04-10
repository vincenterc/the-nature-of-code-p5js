class Confetti extends Particle {
  display() {
    let theta = map(this.position.x, 0, width, 0, TWO_PI * 2);

    rectMode(CENTER);
    stroke(0, this.lifespan);
    fill(175, this.lifespan);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    rect(0, 0, 8, 8);
    pop();
  }
}
