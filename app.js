const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.toggle("square");
  square.addEventListener("mouseover", changeColor)
  container.appendChild(square);
}

function changeColor(e) {
  e.target.style.backgroundColor = "red";
}