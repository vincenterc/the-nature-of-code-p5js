class Surface {
  constructor() {
    this.surface = [];
    this.surface.push(new box2d.b2Vec2(0, height / 2 + 50));
    this.surface.push(new box2d.b2Vec2(width / 2, height / 2 + 50));
    this.surface.push(new box2d.b2Vec2(width, height / 2));

    let chain = new box2d.b2ChainShape();
    let vertices = this.surface.map(v => scaleToWorld(v));
    chain.CreateChain(vertices, vertices.length);

    let bd = new box2d.b2BodyDef();
    this.body = world.CreateBody(bd);
    this.body.CreateFixture(chain, 1);
  }

  display() {
    stroke(50);
    fill(50);
    beginShape();
    this.surface.forEach(v => vertex(v.x, v.y));
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }
}
