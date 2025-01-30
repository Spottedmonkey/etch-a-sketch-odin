const drawingContainer = document.querySelector('#drawing-container');
const gridUpdate = document.querySelector('#grid-update');
const singularDrawingPixel = document.querySelector('.drawing-pixel');
const redSelect = document.querySelector('#red-select');
const blueSelect = document.querySelector('#blue-select');
const greenSelect = document.querySelector('#green-select');
const blackSelect = document.querySelector('#black-select');

let redClicked = false;
let blueClicked = false;
let greenClicked = false;
let blackClicked = false;

let gridSize = '';
let totalGridFill = '';
let gridArea = '';

addGridContent(16);

redSelect.addEventListener('click', () => {
    redClicked = true;
    blueClicked = false;
    greenClicked = false;
    blackClicked = false;
    console.log(redClicked);
})

blueSelect.addEventListener('click', () => {
    blueClicked = true;
    redClicked = false;
    greenClicked = false;
    blackClicked = false;
    console.log(blueClicked);
})

greenSelect.addEventListener('click', () => {
    greenClicked = true;
    blueClicked = false;
    redClicked = false;
    blackClicked = false;
    console.log(greenClicked)
})

blackSelect.addEventListener ('click', () => {
    blackClicked = true;
    greenClicked = false;
    blueClicked = false;
    redClicked = false;
    console.log(blackClicked)
})

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
            if (redClicked === true) {
                item.style.backgroundColor = 'red';
                item.style.border = '.1px solid red';
            } else if (blueClicked === true) {
                item.style.backgroundColor = 'blue';
                item.style.border = '.1px solid blue';
            } else if (greenClicked === true) {
                item.style.backgroundColor = 'forestgreen';
                item.style.border = '.1px solid forestgreen';
            } else if (blackClicked === true) {
                item.style.backgroundColor = 'black';
                item.style.border = '.1px solid black';
            };
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

console.log(redClicked)

console.log(setRGBValue())