const body = document.querySelector('body');
const grid = document.createElement('div');
grid.classList.add('grid');

for (let a = 1; a <= 16; a++) {
    let row = document.createElement('div');
    row.classList.add(`row${a}`);
    row.style.display = 'flex';
    for (let b = 1; b <= 16; b++) {
        let box = document.createElement('div');
        box.classList.add(`box${((a - 1) * 16) + b}`);
        box.style.width = '20px';
        box.style.height = '20px';
        box.style.color = 'white';
        box.style.border = '2px solid black';
        row.appendChild(box);
    }
    grid.appendChild(row);
}

body.appendChild(grid);