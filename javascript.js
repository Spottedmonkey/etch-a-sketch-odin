const drawingContainer = document.querySelector('#drawing-container');
const gridSizeInput = document.querySelector('#grid-size-input');
const gridSizeInputValue = document.querySelector('#grid-size-input').value;

let gridSize = gridSizeInputValue;
let totalGridFill = gridSize * gridSize;
let gridArea = 620/gridSize;


function changeGridContent() {
    for (let i = 0; i < totalGridFill; i++) {
        drawingGrid = document.createElement('div');
        drawingGrid.setAttribute('style', `box-sizing: border-box; border: .1px solid lightgrey; height: ${gridArea}px; width: ${gridArea}px;`)
        drawingGrid.setAttribute('class', 'drawing-pixel')
        drawingContainer.appendChild(drawingGrid);
    }
}
changeGridContent();

let drawingPixel = document.querySelectorAll('.drawing-pixel');

drawingPixel.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.setAttribute('style', `box-sizing: border-box; border: .1px solid lightgrey; height: ${gridArea}px; width: ${gridArea}px;background-color: pink;`)
    })
})

console.log(drawingPixel);
console.log(totalGridFill);
console.log(gridSizeInputValue);





// const drawingContainer = document.querySelector('#drawing-container');
// let drawingContainerHeight = document.querySelector('#drawing-container').clientHeight;
// let drawingContainerWidth = document.querySelector('#drawing-container').clientWidth;

// let gridDimensions = 200;
// let fillContainerHeight = drawingContainerHeight/gridDimensions;
// let fillContainerWidth = drawingContainerWidth/gridDimensions;
// let totalContainerFill = fillContainerHeight * fillContainerWidth;

// function changeGridContent() {
//     for (let i = 0; i < totalContainerFill; i++) {
//         drawingGrid = document.createElement('div');
//         drawingGrid.setAttribute('style', `box-sizing: border-box; border: .5px solid lightGrey; height: ${gridDimensions}px; width: ${gridDimensions}px;`);
//         drawingContainer.appendChild(drawingGrid);
//     }
// }

// changeGridContent();
// console.log(containerSize);
// console.log(`Container Height: ${drawingContainerHeight}`);
// console.log(`Container Width: ${drawingContainerWidth}`)
// console.log(`Grids to fill container height ${fillContainerHeight}`)
// console.log(`Grids to fill container width ${fillContainerWidth}`)
// console.log(`Total squares needed to fill the container ${totalContainerFill}`)
