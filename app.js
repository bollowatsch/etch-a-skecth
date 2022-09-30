const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  square.addEventListener("mouseover", changeColor)
  container.appendChild(square);
}

gridsizeBtn = document.querySelector("#gridsize");
gridsizeBtn.addEventListener("click", resetGrid);

function changeColor(e) {
  e.target.style.backgroundColor = "red";
}

function resetGrid() {
  let size = prompt("Enter a valid grid size (must be < 100)");
  while (!(size > 0 && size <= 100)) size = prompt("Enter a valid grid size (must be < 100)");
}