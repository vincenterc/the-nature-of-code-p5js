let lines = [];

function setup() {
  createCanvas(600, 300);

  let start = createVector(0, 200);
  let end = createVector(width, 200);
  lines.push(new KochLine(start, end));

  Array(5)
    .fill()
    .forEach(() => generate());
}

function draw() {
  background(255);
  lines.forEach(l => l.display());
}

function generate() {
  lines = lines.reduce((ls, l) => {
    let a = l.kochA();
    let b = l.kochB();
    let c = l.kochC();
    let d = l.kochD();
    let e = l.kochE();

    return [
      ...ls,
      new KochLine(a, b),
      new KochLine(b, c),
      new KochLine(c, d),
      new KochLine(d, e)
    ];
  }, []);
}
