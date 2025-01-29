const drawingContainer = document.querySelector('#drawing-container');
const gridUpdate = document.querySelector('#grid-update');
const singularDrawingPixel = document.querySelector('.drawing-pixel');

let gridSize = '';
let totalGridFill = '';
let gridArea = '';

addGridContent(16, 'red');

function addGridContent(gridSize, colorSelect) {
    totalGridFill = gridSize * gridSize;
    gridArea = 620/gridSize;

    for (let i = 0; i < totalGridFill; i++) {
        drawingGrid = document.createElement('div');
        drawingGrid.setAttribute('style', `box-sizing: border-box; border: .1px solid lightgrey; height: ${gridArea}px; width: ${gridArea}px;`);
        drawingGrid.setAttribute('class', 'drawing-pixel');
        drawingContainer.appendChild(drawingGrid);
    }

    let drawingPixel = document.querySelectorAll('.drawing-pixel');

    drawingPixel.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${colorSelect}`;
        });
    });
}

gridUpdate.addEventListener('click', () => {
    drawingContainer.textContent ='';
    gridSize = prompt('Please select a new grid size', 16)
        if (gridSize > 100) {
            gridSize = 100;
            alert('Grid size can be no larger than 100');
        } else if (gridSize < 0) {
            alert('Grid size can be no smaller than 0')
            gridSize = 1
        }
    addGridContent(gridSize, "red");
})