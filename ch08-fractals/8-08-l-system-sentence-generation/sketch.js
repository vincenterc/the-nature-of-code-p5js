let current = "A";
let count = 0;

function setup() {
  console.log(`Generation ${count}: ${current}`);
}

function mousePressed() {
  current = current
    .split("")
    .map(c => {
      if (c === "A") return "AB";
      else if (c === "B") return "A";
    })
    .join("");
  count++;
  console.log(`Generation ${count}: ${current}`);
}
