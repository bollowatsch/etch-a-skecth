const container = document.querySelector(".container");
gridSizeForm = document.querySelector("#gridSizeForm");
gridSizeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Number.isNaN(parseInt(gridSize.value))) return;
  resetGrid();
});
gridSize = document.querySelector("#gridSize");

//initial setup (10 by 10)
setGrid();

function resetGrid(size = 20) {
  size = parseInt(gridSize.value);
  container.innerHTML = "";
  setGrid(size);
}

function changeColor(e) {
  e.target.style.backgroundColor = "#A5C9CA";
}

function setGrid(size = 20) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.addEventListener("mouseover", changeColor)
    let squareSize = container.clientWidth / size;
    square.style.width = squareSize.toString() + "px";
    container.appendChild(square);
  }
}