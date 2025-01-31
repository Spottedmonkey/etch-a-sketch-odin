const drawingContainer = document.querySelector('#drawing-container');
const gridUpdate = document.querySelector('#grid-update');
const singularDrawingPixel = document.querySelector('.drawing-pixel');
const redSelect = document.querySelector('#red-select');
const blueSelect = document.querySelector('#blue-select');
const greenSelect = document.querySelector('#green-select');
const blackSelect = document.querySelector('#black-select');
const discoSelect = document.querySelector('#disco-select');
const brushReset = document.querySelector('#brush-reset');
const eraserSelect = document.querySelector('#eraser-select');
const displayDefaultColor = document.querySelector('#display-default-color');


let redClicked = false;
let blueClicked = false;
let greenClicked = false;
let blackClicked = false;
let discoClicked = false;
let eraserClicked = false;

let gridSize = '';
let totalGridFill = '';
let gridArea = '';

addGridContent(16);

redSelect.addEventListener('click', () => {
    redClicked = true;
    blueClicked = false;
    greenClicked = false;
    blackClicked = false;
    discoClicked = false;
    eraserClicked = false;
});

blueSelect.addEventListener('click', () => {
    blueClicked = true;
    redClicked = false;
    greenClicked = false;
    blackClicked = false;
    discoClicked = false;
    eraserClicked = false;
});

greenSelect.addEventListener('click', () => {
    greenClicked = true;
    blueClicked = false;
    redClicked = false;
    blackClicked = false;
    discoClicked = false;
    eraserClicked = false;
});

blackSelect.addEventListener ('click', () => {
    blackClicked = true;
    greenClicked = false;
    blueClicked = false;
    redClicked = false;
    discoClicked = false;
    eraserClicked = false;
});

discoSelect.addEventListener ('click', () => {
    discoClicked = true;
    greenClicked = false;
    blueClicked = false;
    redClicked = false;
    blackClicked = false;
    eraserClicked = false;
});

brushReset.addEventListener ('click', () => {
    discoClicked = false;
    greenClicked = false;
    blueClicked = false;
    redClicked = false;
    blackClicked = false;
    eraserClicked = false;
});

eraserSelect.addEventListener ('click', () => {
    eraserClicked = true;
    discoClicked = false;
    greenClicked = false;
    blueClicked = false;
    redClicked = false;
    blackClicked = false;
});

function addGridContent(gridSize, colorSelect) {
    totalGridFill = gridSize * gridSize;
    gridArea = 620/gridSize;
    colorSelect = setRGBValue();
    displayDefaultColor.style.backgroundColor = `${colorSelect}`;

    for (let i = 0; i < totalGridFill; i++) {
        drawingGrid = document.createElement('div');
        drawingGrid.setAttribute('style', `box-sizing: border-box; border: .1px solid lightgrey; height: ${gridArea}px; width: ${gridArea}px;`);
        drawingGrid.setAttribute('class', 'drawing-pixel');
        drawingContainer.appendChild(drawingGrid);
    };
    
    let drawingPixel = document.querySelectorAll('.drawing-pixel');

    drawingPixel.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let currentOpacity = Number(item.style.opacity);
            if (redClicked === true) {
                item.style.backgroundColor = 'red';
                item.style.border = '.1px solid red';
                    if (currentOpacity) {
                        item.style.opacity = Number(currentOpacity) + 0.1;
                    } else {
                        item.style.opacity = 0.1;
                    };
            } else if (blueClicked === true) {
                item.style.backgroundColor = 'blue';
                item.style.border = '.1px solid blue';
                    if (currentOpacity) {
                        item.style.opacity = Number(currentOpacity) + 0.1;
                    } else {
                        item.style.opacity = 0.1;
                    };
            } else if (greenClicked === true) {
                item.style.backgroundColor = 'forestgreen';
                item.style.border = '.1px solid forestgreen';
                    if (currentOpacity) {
                        item.style.opacity = Number(currentOpacity) + 0.1;
                    } else {
                        item.style.opacity = 0.1;
                    };
            } else if (blackClicked === true) {
                item.style.backgroundColor = 'black';
                item.style.border = '.1px solid black';
                    if (currentOpacity) {
                        item.style.opacity = Number(currentOpacity) + 0.1;
                    } else {
                        item.style.opacity = 0.1;
                    };
            } else if (discoClicked === true) {
                item.style.backgroundColor = `${setRGBValue()}`;
                item.style.border = `.1px solid ${setRGBValue()}`;
            } else if (eraserClicked === true) {
                item.style.background = 'none';
                item.style.border = '.1px solid lightgrey';
            } else {
                item.style.backgroundColor = `${colorSelect}`;
                item.style.border =`.1px solid ${colorSelect}`;
                    if (currentOpacity) {
                        item.style.opacity = Number(currentOpacity) + 0.1;
                    } else {
                        item.style.opacity = 0.1;
                    };
            };
        });
    });
};

gridUpdate.addEventListener('click', () => {
    gridSize = prompt('Please select a new grid size', 16)
        if (gridSize === null) {
            return;
        } else if (gridSize > 100) {
            gridSize = 100;
            alert('Grid size can be no larger than 100');
        } else if (gridSize < 0) {
            alert('Grid size can be no smaller than 0')
            gridSize = 1
        } else {
            drawingContainer.textContent ='';
            addGridContent(gridSize, setRGBValue()); 
        };
});

gridUpdate.addEventListener('mouseover', () => {
    gridUpdate.style.color = '#838483';
    gridUpdate.style.boxShadow = '-2px -2px 4px #f8faf7, 5px 5px 4px #b3b4b2';
});

gridUpdate.addEventListener('mouseout', () => {
    gridUpdate.style.color = '#9e9f9d';
    gridUpdate.style.boxShadow = '-3px -3px 4px #f8faf7, 3px 3px 4px #b3b4b2';
});

function setRGBValue(red, green, blue,) {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    let RGBValue = `rgb(${red}, ${green}, ${blue})`

    return RGBValue;
};
