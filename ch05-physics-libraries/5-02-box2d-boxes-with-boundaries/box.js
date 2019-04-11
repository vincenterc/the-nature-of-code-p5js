class Box {
  constructor(x, y) {
    this.w = random(4, 16);
    this.h = random(4, 16);

    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    let ps = new box2d.b2PolygonShape();
    let box2dW = scaleToWorld(this.w / 2);
    let box2dH = scaleToWorld(this.h / 2);
    ps.SetAsBox(box2dW, box2dH);

    let fd = new box2d.b2FixtureDef();
    fd.shape = ps;
    fd.density = 1;
    fd.friction = 0.3;
    fd.restitution = 0.5;

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
    fill(175);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
