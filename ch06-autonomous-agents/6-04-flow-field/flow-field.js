class FlowField {
  constructor(r) {
    this.resolution = r;
    this.cols = width / this.resolution;
    this.rows = height / this.resolution;
    this.field = null;

    this.init();
  }

  init() {
    noiseSeed(Math.floor(random(10000)));
    let xOff = 0;
    this.field = Array(this.cols)
      .fill("")
      .map(() => {
        let yOff = 0;
        xOff += 0.1;
        return Array(this.rows)
          .fill("")
          .map(() => {
            let theta = map(noise(xOff, yOff), 0, 1, 0, TWO_PI);
            yOff += 0.1;
            return createVector(cos(theta), sin(theta));
          });
      });
  }

  display() {
    this.field.forEach((col, i) => {
      col.forEach((f, j) => {
        this.drawVector(
          f,
          i * this.resolution,
          j * this.resolution,
          this.resolution - 2
        );
      });
    });
  }

  lookUp(lookUp) {
    let column = Math.floor(
      constrain(lookUp.x / this.resolution, 0, this.cols - 1)
    );
    let row = Math.floor(
      constrain(lookUp.y / this.resolution, 0, this.rows - 1)
    );

    return this.field[column][row].copy();
  }

  drawVector(v, x, y, scayl) {
    push();
    let arrowSize = 4;
    translate(x, y);
    rotate(v.heading());
    stroke(0, 100);
    let len = v.mag() * scayl;
    line(0, 0, len, 0);
    pop();
  }
}
