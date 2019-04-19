class Obstacle {
  constructor(x, y, w, h) {
    this.location = createVector(x, y);
    this.w = w;
    this.h = h;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    rect(this.location.x, this.location.y, this.w, this.h);
  }

  contains(spot) {
    return (
      spot.x > this.location.x &&
      spot.x < this.location.x + this.w &&
      spot.y > this.location.y &&
      spot.y < this.location.y + this.h
    );
  }
}
