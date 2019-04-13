class Particle {
  constructor(x, y, r) {
    this.r = r;
    this.color = color(175);

    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    let fd = new box2d.b2FixtureDef();
    fd.shape = new box2d.b2CircleShape();
    fd.shape.m_radius = scaleToWorld(this.r);
    fd.density = 1;
    fd.friction = 0.01;
    fd.restitution = 0.3;

    this.body = world.CreateBody(bd);
    this.body.CreateFixture(fd);

    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));

    this.body.SetUserData(this);
  }

  change() {
    this.color = color(255, 0, 0);
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
    fill(this.color);
    ellipse(0, 0, this.r * 2, this.r * 2);
    line(0, 0, this.r, 0);
    pop();
  }
}
