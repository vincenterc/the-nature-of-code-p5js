class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 16;
    this.h = 16;
  }

  display() {
    fill(175);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
