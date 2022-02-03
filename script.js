const parentDiv = document.querySelector(".container");
const btn = document.querySelector("#reset-btn");
const rainbow = document.querySelector("#rainbow-btn");
let r = 78;
let g = 164;
let b = 164;
console.log(btn);
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        for (let j = 0; j < size; j++) {
            let rowChild = document.createElement('div');
            rowChild.setAttribute("class", "rowChild");
            row.appendChild(rowChild);
        }
        parentDiv.appendChild(row);
    }
}

window.addEventListener('load', createGrid(16));

//const allSquares = document.querySelectorAll('.rowChild');
//console.log(allSquares);

function randomRGB(){
    return Math.random() * (255)
}

function changeColorListener() {
    parentDiv.removeEventListener('mouseover', changeBgColour);
    parentDiv.addEventListener('mouseover', changeBgColourRainbow);
}

function convertToR(h) {
    console.log(h);
    return parseInt(this.toString().substring(4,6), 16);
}

function convertToG(h) {
    return parseInt(this.toString().substring(3,5), 16);
}

function convertToB(h) {
    return parseInt(this.toString().substring(5), 16);
}

function changeBgColourRainbow(e) {
    let target = e.target;
    if (target.className != 'rowChild') return;

    target.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
}

function changeBgColour(e) {
    
    let target = e.target;
    if (target.className != 'rowChild') return;

    if (target.style.backgroundColor == null) {
        
    }

    target.style.backgroundColor = `rgb(${r},${g},${b})`;
    
}

function acceptDimension() {
    let newGrid = prompt("Enter new grid dimension. Less than 100. Press Cancel/Ok just to clear.")
    const h3 = document.createElement('h3');
   if (newGrid > 99) {
        acceptDimension();
   } else if (newGrid == null || newGrid == "") {
       createGrid(16);
   }
   else {
       createGrid(newGrid);
   }
}

function clearAll() {
   const allRows = document.querySelectorAll('.row');
   allRows.forEach( row => row.remove());

   acceptDimension()

}

btn.addEventListener('click', clearAll);
rainbow.addEventListener('click', changeColorListener);
parentDiv.addEventListener('mouseover', changeBgColour);
