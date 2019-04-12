class CustomShape {
  constructor(x, y) {
    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    this.vertices = [];
    this.vertices[0] = scaleToWorld(new box2d.b2Vec2(-15, 25));
    this.vertices[1] = scaleToWorld(new box2d.b2Vec2(15, 0));
    this.vertices[2] = scaleToWorld(new box2d.b2Vec2(20, -15));
    this.vertices[3] = scaleToWorld(new box2d.b2Vec2(-10, -10));

    let ps = new box2d.b2PolygonShape();
    ps.SetAsArray(this.vertices, this.vertices.length);

    this.body = world.CreateBody(bd);
    this.body.CreateFixture(ps, 1);

    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));
  }

  killBody() {
    world.DestroyBody(this.body);
  }

  done() {
    let pos = scaleToPixels(this.body.GetPosition());

    if (pos.y > height) {
      this.killBody();
      return true;
    }

    return false;
  }

  display() {
    let pos = scaleToPixels(this.body.GetPosition());
    let a = this.body.GetAngle();

    let f = this.body.GetFixtureList();
    let ps = f.GetShape();

    push();
    translate(pos.x, pos.y);
    rotate(a);
    stroke(0);
    fill(175);
    beginShape();

    ps.m_vertices.forEach(v => {
      v = scaleToPixels(v);
      vertex(v.x, v.y);
    });

    endShape(CLOSE);
    pop();
  }
}
