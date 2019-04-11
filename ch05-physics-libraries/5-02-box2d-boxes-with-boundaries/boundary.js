class Boundary {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    let bd = new box2d.b2BodyDef();
    bd.position.x = scaleToWorld(this.x);
    bd.position.y = scaleToWorld(this.y);
    bd.type = box2d.b2BodyType.b2_staticBody;

    let box2dW = scaleToWorld(this.w / 2);
    let box2dH = scaleToWorld(this.h / 2);
    let ps = new box2d.b2PolygonShape();
    ps.SetAsBox(box2dW, box2dH);

    this.b = world.CreateBody(bd).CreateFixture(ps, 1);
  }

  display() {
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
