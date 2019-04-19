class Bloop {
  constructor(location, dna) {
    this.location = location.copy();
    this.health = 200;
    this.xOff = random(1000);
    this.yOff = random(1000);
    this.dna = dna;
    this.maxSpeed = map(this.dna.genes[0], 0, 1, 15, 0);
    this.r = map(this.dna.genes[0], 0, 1, 0, 50);
  }

  run() {
    this.update();
    this.borders();
    this.display();
  }

  eat(food) {
    food.locations = food.locations.filter(fl => {
      let d = p5.Vector.dist(this.location, fl);

      if (d < this.r / 2) {
        this.health += 100;
        return false;
      }
      return true;
    });
  }

  reproduce() {
    if (random(1) < 0.0005) {
      let childDNA = this.dna.copy();
      childDNA.mutate(0.01);
      return new Bloop(this.location, this.dna);
    }
    return null;
  }

  update() {
    let vx = map(noise(this.xOff), 0, 1, -this.maxSpeed, this.maxSpeed);
    let vy = map(noise(this.yOff), 0, 1, -this.maxSpeed, this.maxSpeed);

    let velocity = createVector(vx, vy);

    this.xOff += 0.01;
    this.yOff += 0.01;

    this.location.add(velocity);

    this.health -= 0.2;
  }

  borders() {
    if (this.location.x < -this.r) this.location.x = width + this.r;
    if (this.location.x > width + this.r) this.location.x = -this.r;
    if (this.location.y < -this.r) this.location.y = height + this.r;
    if (this.location.y > height + this.r) this.location.y = -this.r;
  }

  display() {
    stroke(0, this.health);
    fill(0, this.health);
    ellipse(this.location.x, this.location.y, this.r, this.r);
  }

  dead() {
    return this.health < 0;
  }
}
