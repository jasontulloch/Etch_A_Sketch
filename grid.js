// Build a 16x16 grid
// Note: adding 'cell.innerText = (c + 1);' below 'let cell = document.createElement('div');' numbers the cells

let rows = 16;
let cols = 16;

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

makeGrid(rows, cols);

let btn = document.querySelector('#btn');
btn.addEventListener('click', resetGrid);

function resetGrid() {
    document.getElementById('container').innerHTML = "";
    let rows1 = prompt("Please select the width of the grid");
    let cols1 = prompt("Please select the height of the grid");
    container.style.setProperty('--grid-rows', rows1);
    container.style.setProperty('--grid-cols', cols1);
    for (c = 0; c < (rows1 * cols1); c++) {
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


//let rows1 = 5;
//let cols1 = 5;