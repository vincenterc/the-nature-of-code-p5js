class Cell {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;

    this.state = Math.floor(random(2));
    this.previous = this.state;
  }

  savePrevious() {
    this.previous = this.state;
  }

  newState(state) {
    this.state = state;
  }

  display() {
    stroke(0);
    strokeWeight(1);
    if (this.previous === 0 && this.state === 1) fill(0, 0, 255);
    else if (this.state === 1) fill(0);
    else if (this.previous === 1 && this.state === 0) fill(255, 0, 0);
    else fill(255);
    rect(this.x, this.y, this.w, this.w);
  }
}
