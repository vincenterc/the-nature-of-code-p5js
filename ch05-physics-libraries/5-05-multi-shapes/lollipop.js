class Lollipop {
  constructor(x, y) {
    this.w = 8;
    this.h = 24;
    this.r = 8;

    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    let ps = new box2d.b2PolygonShape();
    let box2dW = scaleToWorld(this.w / 2);
    let box2dH = scaleToWorld(this.h / 2);
    ps.SetAsBox(box2dW, box2dH);

    let cs = new box2d.b2CircleShape();
    cs.m_radius = scaleToWorld(this.r);
    cs.m_p = scaleToWorld(new box2d.b2Vec2(0, -this.h / 2)); // offset

    this.body = world.CreateBody(bd);
    this.body.CreateFixture(ps, 1);
    this.body.CreateFixture(cs, 1);

    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));
  }

  killBody() {
    world.DestroyBody(this.body);
  }

  done() {
    let pos = scaleToPixels(this.body.GetPosition());

    if (pos.y > height + this.w * this.h) {
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
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    ellipse(0, -this.h / 2, this.r * 2, this.r * 2);
    pop();
  }
}
