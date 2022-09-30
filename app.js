const container = document.querySelector(".container");
gridsizeBtn = document.querySelector("#gridsize");
gridsizeBtn.addEventListener("click", resetGrid);

//initial setup (10 by 10)
setGrid();

function resetGrid() {
  let size = prompt("Enter a valid grid size (not greater than 100)");
  if (!(size > 0 && size <= 100)) alert("invalid grid size, please try again");
  container.innerHTML = "";
  setGrid(size);
}

function changeColor(e) {
  e.target.style.backgroundColor = "#A5C9CA";
}

function setGrid(size = 30) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.addEventListener("mouseover", changeColor)
    let squareSize = container.clientWidth / size;
    square.style.width = squareSize.toString() + "px";
    container.appendChild(square);
  }
}