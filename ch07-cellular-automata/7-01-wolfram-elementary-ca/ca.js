class CA {
  constructor() {
    this.w = 10;
    this.cells = Array(Math.floor(width / this.w)).fill(0);
    this.cells[Math.floor(this.cells.length / 2)] = 1;

    this.generation = 0;
    this.ruleSet = [0, 1, 0, 1, 1, 0, 1, 0];
  }

  generate() {
    this.cells = this.cells.map((c, i) => {
      if (i > 0 && i < this.cells.length - 1) {
        let left = this.cells[i - 1];
        let me = c;
        let right = this.cells[i + 1];

        return this.rules(left, me, right);
      }
      return c;
    });

    this.generation++;
  }

  display() {
    this.cells.forEach((c, i) => {
      noStroke();
      if (c === 1) fill(50);
      else fill(255);
      rect(i * this.w, this.generation * this.w, this.w, this.w);
    });
  }

  rules(a, b, c) {
    if (a == 1 && b == 1 && c == 1) return this.ruleSet[0];
    if (a == 1 && b == 1 && c === 0) return this.ruleSet[1];
    if (a == 1 && b === 0 && c == 1) return this.ruleSet[2];
    if (a == 1 && b === 0 && c === 0) return this.ruleSet[3];
    if (a === 0 && b == 1 && c == 1) return this.ruleSet[4];
    if (a === 0 && b == 1 && c === 0) return this.ruleSet[5];
    if (a === 0 && b === 0 && c == 1) return this.ruleSet[6];
    if (a === 0 && b === 0 && c === 0) return this.ruleSet[7];
    return 0;

    // let s = `${a}${b}${c}`;
    // let index = parseInt(s, 2);
    // return this.ruleSet[index];
  }
}
