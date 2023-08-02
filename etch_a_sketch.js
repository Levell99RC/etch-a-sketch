const body = document.querySelector('body');

createGrid();

function createGrid(size = 16) {
    const grid = document.createElement('div');

    grid.classList.add('grid');
    grid.style.alignSelf = 'center';
    
    for (let a = 1; a <= size; a++) {
        let row = document.createElement('div');
        row.classList.add(`row${a}`);
        row.style.display = 'flex';
        for (let b = 1; b <= size; b++) {
            let box = document.createElement('div');
            box.classList.add(`box${((a - 1) * size) + b}`);
            box.style.width = '20px';
            box.style.height = '20px';
            box.style.backgroundColor = 'white';
            box.style.border = '1px solid black';
            box.addEventListener('mouseover', changeColorMouseover);
            box.addEventListener('mouseout', changeColorMouseout);
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
    
    body.appendChild(grid);
}

function changeColorMouseover() {
    this.style.backgroundColor = 'red';
    this.style.transitionDelay = '0s';
    this.style.transition = '0s';
}

function changeColorMouseout() {
    this.style.backgroundColor = 'white';
    this.style.transitionDelay = '0.5s';
    this.style.transition = '1.5s';
}