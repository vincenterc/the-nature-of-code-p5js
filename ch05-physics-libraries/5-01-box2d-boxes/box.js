class Box {
  constructor(x, y) {
    this.w = 16;
    this.h = 16;

    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    let ps = new box2d.b2PolygonShape();
    let box2dw = scaleToWorld(this.w / 2);
    let box2dh = scaleToWorld(this.h / 2);
    ps.SetAsBox(box2dw, box2dh);

    let fd = new box2d.b2FixtureDef();
    fd.shape = ps;
    fd.density = 1;
    fd.friction = 0.3;
    fd.restitution = 0.5;

    this.body = world.CreateBody(bd);
    this.body.CreateFixture(fd);
  }

  display() {
    let pos = scaleToPixels(this.body.GetPosition());
    let a = this.body.GetAngleRadians();

    push();
    translate(pos.x, pos.y);
    rotate(a);
    fill(175);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
