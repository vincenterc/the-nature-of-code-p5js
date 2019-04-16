class GOL {
  constructor() {
    this.w = 8;

    this.columns = Math.floor(width / this.w);
    this.rows = Math.floor(height / this.w);

    this.board = Array(this.columns)
      .fill()
      .map(() => Array(this.rows).fill());

    this.init();
  }

  init() {
    this.board = this.board.map((column, i) => {
      return column.map((cell, j) => {
        if (
          i === 0 ||
          i === this.columns - 1 ||
          j === 0 ||
          j === this.rows - 1
        ) {
          return 0;
        }
        return Math.floor(random(2));
      });
    });
  }

  generate() {
    this.board = this.board.map((column, i) => {
      return column.map((cell, j) => {
        if (
          i === 0 ||
          i === this.columns - 1 ||
          j === 0 ||
          j === this.rows - 1
        ) {
          return cell;
        }

        let neighbors = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            neighbors += this.board[i + x][j + y];
          }
        }
        neighbors -= cell;

        if (cell === 1 && neighbors < 2) return 0;
        else if (cell === 1 && neighbors > 3) return 0;
        else if (cell === 0 && neighbors === 3) return 1;
        else return cell;
      });
    });
  }

  display() {
    this.board.forEach((column, i) => {
      column.forEach((cell, j) => {
        stroke(0);
        strokeWeight(1);
        if (cell === 1) fill(50);
        else fill(255);
        rect(i * this.w, j * this.w, this.w, this.w);
      });
    });
  }
}
