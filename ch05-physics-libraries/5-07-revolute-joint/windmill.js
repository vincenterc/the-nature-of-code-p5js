class Windmill {
  constructor(x, y) {
    this.box1 = new Box(x, y - 20, 120, 10, false);
    this.box2 = new Box(x, y, 10, 40, true);

    let rjd = new box2d.b2RevoluteJointDef();
    rjd.Initialize(
      this.box1.body,
      this.box2.body,
      this.box1.body.GetWorldCenter()
    );
    rjd.motorSpeed = PI * 2;
    rjd.maxMotorTorque = 1000.0;
    rjd.enableMotor = false;

    this.joint = world.CreateJoint(rjd);
  }

  display() {
    this.box2.display();
    this.box1.display();

    let anchor = scaleToPixels(this.box1.body.GetWorldCenter());
    noStroke(0);
    fill(0);
    ellipse(anchor.x, anchor.y, 8, 8);
  }

  toggleMotor() {
    this.joint.EnableMotor(!this.joint.IsMotorEnabled());
  }

  motorOn() {
    return this.joint.IsMotorEnabled();
  }
}
