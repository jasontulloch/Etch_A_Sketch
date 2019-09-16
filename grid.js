// Build a 16x16 grid
// Note: adding 'cell.innerText = (c + 1);' below 'let cell = document.createElement('div');' numbers the cells

const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseenter', e => {
             cell.style.padding = '1em';
             cell.style.border = '1px solid #ddd';
             cell.style.textAlign = 'center';
             cell.style.borderColor = 'red';
             cell.style.boxShadow = '0 0 10px red';
             cell.style.backgroundColor = 'red';
        });
    };
};

makeGrid(16, 16);

let btn = document.querySelector('#btn');
btn.addEventListener('click', resetGrid);

function resetGrid() {
    document.getElementById('container').innerHTML = "";
    container.style.setProperty('--grid-rows', 16);
    container.style.setProperty('--grid-cols', 16);
    for (c = 0; c < (16 * 16); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseenter', e => {
             cell.style.padding = '1em';
             cell.style.border = '1px solid #ddd';
             cell.style.textAlign = 'center';
             cell.style.borderColor = 'red';
             cell.style.boxShadow = '0 0 10px red';
             cell.style.backgroundColor = 'red';
        });
    };
};
