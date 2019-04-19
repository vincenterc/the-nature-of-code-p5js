class World {
  constructor(num) {
    this.food = new Food(num);
    this.bloops = Array(num)
      .fill()
      .map(() => {
        let location = createVector(random(width), random(height));
        let dna = new DNA();
        return new Bloop(location, dna);
      });
  }

  born(x, y) {
    let location = createVector(x, y);
    let dna = new DNA();
    this.bloops.push(new Bloop(location, dna));
  }

  run() {
    this.food.run();

    this.bloops = this.bloops.reduce((bs, b) => {
      b.run();
      b.eat(this.food);
      if (b.dead()) {
        this.food.add(b.location);
        return [...bs];
      }
      let child = b.reproduce();
      return [...bs, b, ...(child !== null ? [child] : [])];
    }, []);
  }
}
