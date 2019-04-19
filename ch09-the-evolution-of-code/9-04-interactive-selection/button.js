class Button {
  constructor(x, y, w, h, s) {
    this.r = new Rectangle(x, y, w, h);
    this.txt = s;
    this.clickedOn = false;
    this.rolloverOn = false;
  }

  display() {
    stroke(0);
    strokeWeight(1);
    noFill();
    if (this.rolloverOn) fill(0.5);
    if (this.clickedOn) fill(0);
    rect(this.r.x, this.r.y, this.r.width, this.r.height);
    let b = 0.0;
    if (this.clickedOn) b = 1;
    else if (this.rolloverOn) b = 0.2;
    else b = 0;
    noStroke();
    fill(0);
    textAlign(LEFT);
    text(this.txt, this.r.x + 10, this.r.y + 14);
  }

  rollover(mx, my) {
    if (this.r.contains(mx, my)) this.rolloverOn = true;
    else this.rolloverOn = false;
    return this.rolloverOn;
  }

  clicked(mx, my) {
    if (this.r.contains(mx, my)) this.clickedOn = true;
    return this.clickedOn;
  }

  released() {
    this.clickedOn = false;
  }
}
