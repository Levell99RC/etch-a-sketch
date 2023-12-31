const body = document.querySelector('body');
let gridSize = 16; //Initial size of grid is 16x16

createGrid(gridSize);

const gridSizeButton = document.querySelector('.changeGrid');
gridSizeButton.addEventListener('click', function () {
    gridSize = prompt('How many squares per side would you like?');
    if (gridSize > 100) {
        gridSize = 100;
    }
    removeGrid();
    createGrid(gridSize);
});

function createGrid(size) {
    const grid = document.createElement('div');
    grid.style.width = '900px';
    grid.style.height = '900px';

    grid.classList.add('grid');
    grid.style.alignSelf = 'center';
    
    for (let a = 1; a <= size; a++) {
        let row = document.createElement('div');
        row.classList.add(`row${a}`);
        row.style.display = 'flex';
        for (let b = 1; b <= size; b++) {
            let box = document.createElement('div');
            box.classList.add(`box${((a - 1) * size) + b}`);
            box.style.width = `${900 / size}px`;
            box.style.height = `${900 / size}px`;
            box.style.backgroundColor = 'black';
            box.addEventListener('mouseover', changeColorMouseover);
            box.addEventListener('mouseout', changeColorMouseout);
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
    
    body.appendChild(grid);
}

function removeGrid() {
    let grid = document.querySelector('.grid');
    body.removeChild(grid);
}

function changeColorMouseover() {
    this.style.backgroundColor = 
        `rgb(${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)})`;
    this.style.transitionDelay = '0s';
    this.style.transition = '0s';
}

function changeColorMouseout() {
    this.style.backgroundColor = 'black';
    this.style.transitionDelay = '0.5s';
    this.style.transition = '1.5s';
}