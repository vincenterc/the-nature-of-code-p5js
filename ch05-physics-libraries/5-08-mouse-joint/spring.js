class Spring {
  constructor() {
    this.mouseJoint = null;
  }

  update(x, y) {
    if (this.mouseJoint !== null) {
      let mouseWorld = scaleToWorld(x, y);
      this.mouseJoint.SetTarget(mouseWorld);
    }
  }

  display() {
    if (this.mouseJoint !== null) {
      let v1 = new box2d.b2Vec2(0, 0);
      let v2 = new box2d.b2Vec2(0, 0);
      v1 = scaleToPixels(this.mouseJoint.GetAnchorA(v1));
      v2 = scaleToPixels(this.mouseJoint.GetAnchorB(v2));

      stroke(0);
      strokeWeight(2);
      fill(0);
      line(v1.x, v1.y, v2.x, v2.y);
    }
  }

  bind(x, y, box) {
    let md = new box2d.b2MouseJointDef();
    md.bodyA = world.CreateBody(new box2d.b2BodyDef()); //world.GetGroundBody();
    md.bodyB = box.body;
    let mp = scaleToWorld(x, y);
    md.target = mp;
    md.maxForce = 1000 * box.body.m_mass;
    md.frequencyHz = 5.0;
    md.dampingRatio = 0.9;

    this.mouseJoint = world.CreateJoint(md);
  }

  destroy() {
    if (this.mouseJoint !== null) {
      world.DestroyJoint(this.mouseJoint);
      this.mouseJoint = null;
    }
  }
}
