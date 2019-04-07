class Attractor {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.mass = 20;
    this.G = 1;

    this.dragOffset = createVector();
    this.dragging = false;
    this.rollover = false;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.location, mover.location);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);

    force.normalize();
    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }

  display() {
    strokeWeight(4);
    stroke(0);

    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }

    ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2);
  }

  handlePress(mx, my) {
    let d = dist(mx, my, this.location.x, this.location.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.location.x - mx;
      this.dragOffset.y = this.location.y - my;
    }
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.location.x, this.location.y);
    if (d < this.mass) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.location.x = mx + this.dragOffset.x;
      this.location.y = my + this.dragOffset.y;
    }
  }

  stopDragging() {
    this.dragging = false;
  }
}
