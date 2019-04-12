class Pair {
  constructor(x, y) {
    this.len = 32;

    this.p1 = new Particle(x, y);
    this.p2 = new Particle(x + random(-1, 1), y + random(-1, 1));

    let djd = new box2d.b2DistanceJointDef();
    djd.bodyA = this.p1.body;
    djd.bodyB = this.p2.body;
    djd.length = scaleToWorld(this.len);
    djd.frequencyHz = 0; // try a value less than 5
    djd.dampingRation = 0; // range between 0 and 1
    let dj = world.CreateJoint(djd);
  }

  done() {
    return this.p1.done() && this.p2.done();
  }

  display() {
    let pos1 = scaleToPixels(this.p1.body.GetPosition());
    let pos2 = scaleToPixels(this.p2.body.GetPosition());

    stroke(0);
    line(pos1.x, pos1.y, pos2.x, pos2.y);

    this.p1.display();
    this.p2.display();
  }
}
