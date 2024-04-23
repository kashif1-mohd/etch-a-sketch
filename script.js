const container = document.querySelector("#container");
const button = document.querySelector("#changeGrid");
const resetButton = document.querySelector("#resetButton");

function resetGrid() {
  container.innerHTML = "";
}

function changeGridSize() {
  const size = parseInt(
    prompt("Enter the number of squares per side (1-100): ")
  );

  if (!isNaN(size) && size >= 1 && size <= 100) {
    const containerWidth = container.offsetWidth;
    const squareSize = Math.floor(containerWidth / size);
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < size; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        row.appendChild(square);

        square.addEventListener("mouseover", () => {
          square.classList.add("hover");
        });

        // square.addEventListener("mouseleave", () => {
        //   square.classList.remove("hover");
        // });
      }
      container.appendChild(row);
    }
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

button.addEventListener("click", changeGridSize);
resetButton.addEventListener("click", resetGrid);
console.log("Script loaded!");
