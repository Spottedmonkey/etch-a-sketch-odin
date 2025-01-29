const drawingContainer = document.querySelector('#drawing-container');
const gridUpdate = document.querySelector('#grid-update');
const singularDrawingPixel = document.querySelector('.drawing-pixel');

let gridSize = '';
let totalGridFill = '';
let gridArea = '';

addGridContent(16);

function addGridContent(gridSize, colorSelect) {
    totalGridFill = gridSize * gridSize;
    gridArea = 620/gridSize;
    colorSelect = setRGBValue();

    for (let i = 0; i < totalGridFill; i++) {
        drawingGrid = document.createElement('div');
        drawingGrid.setAttribute('style', `box-sizing: border-box; border: .1px solid ${colorSelect}; height: ${gridArea}px; width: ${gridArea}px;`);
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
    addGridContent(gridSize, setRGBValue());
});

gridUpdate.addEventListener('mouseover', () => {
    gridUpdate.style.color = '#838483';
    gridUpdate.style.boxShadow = '-2px -2px 4px #f8faf7, 5px 5px 4px #d8d9d7';
});

gridUpdate.addEventListener('mouseout', () => {
    gridUpdate.style.color = '#9e9f9d';
    gridUpdate.style.boxShadow = '-3px -3px 4px #f8faf7, 3px 3px 4px #d8d9d7';
});

function setRGBValue(red, green, blue) {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    let RGBValue = `rgb(${red}, ${green}, ${blue})`

    return RGBValue;
}

console.log(setRGBValue())