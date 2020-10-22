const container = document.getElementById("container");
const resetBtn = document.querySelector("#resetBtn");
const resizeBtn = document.querySelector("#resizeBtn");

createGrid(16);
    
function createGrid (gridInput) {
    for (let i = 0; i < gridInput*gridInput; i++) {
        console.log("create grid ()")
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.transitionDuration = ".1s";
        })
        container.appendChild(square);
    }
    container.setAttribute("style", `display: grid; grid-template-columns: repeat(${gridInput}, 1fr); grid-template-rows: repeat(${gridInput}, 1fr)`);
}

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor="#1a1a1a";
    }
)}

function resizeGrid() {
    let gridInput = prompt ("HOW MUCH?!")
    if (gridInput >= 1 && gridInput <= 100) {
        alert("FINE")
        removeAllDivs();
        createGrid(gridInput);
    }else{
        alert("INPUT A VALID NUMBER, IDIOT")
    }
}

function removeAllDivs(){
    while(container.lastChild){
        container.removeChild(container.lastChild);
    }
}




 