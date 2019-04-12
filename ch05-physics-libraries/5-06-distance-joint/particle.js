class Particle {
  constructor(x, y) {
    this.r = 8;

    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    let cs = new box2d.b2CircleShape();
    cs.m_radius = scaleToWorld(this.r);

    let fd = new box2d.b2FixtureDef();
    fd.shape = cs;
    fd.density = 1;
    fd.friction = 0.01;
    fd.restitution = 0.3;

    this.body = world.CreateBody(bd);
    this.body.CreateFixture(fd);

    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));
  }

  killBody() {
    world.DestroyBody(this.body);
  }

  done() {
    let pos = scaleToPixels(this.body.GetPosition());

    if (pos.y > height + this.r * 2) {
      this.killBody();
      return true;
    }

    return false;
  }

  display() {
    let pos = scaleToPixels(this.body.GetPosition());
    let a = this.body.GetAngle();

    push();
    translate(pos.x, pos.y);
    rotate(a);
    stroke(0);
    fill(175);
    ellipse(0, 0, this.r * 2, this.r * 2);
    line(0, 0, this.r, 0);
    pop();
  }
}
