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
    this.board = this.board.map((column, i) =>
      column.map((cell, j) => new Cell(i * this.w, j * this.w, this.w))
    );
  }

  generate() {
    this.board.forEach(column => column.forEach(cell => cell.savePrevious()));

    this.board.forEach((column, i) => {
      column.forEach((cell, j) => {
        let neighbors = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            neighbors += this.board[(i + x + this.columns) % this.columns][
              (j + y + this.rows) % this.rows
            ].previous;
          }
        }
        neighbors -= cell.previous;

        if (cell.previous === 1 && neighbors < 2) cell.newState(0);
        else if (cell.previous === 1 && neighbors > 3) cell.newState(0);
        else if (cell.previous === 0 && neighbors === 3) cell.newState(1);
      });
    });
  }

  display() {
    this.board.forEach(column => column.forEach(cell => cell.display()));
  }
}
