const container = document.querySelector('.container');
const size = document.querySelector('.size');
let gridItems = 0;
createGrid(16);

size.addEventListener('click',()=>{
    let gSize = prompt("Enter number of squares/side.(limit 1-100)");
    if(gSize>0 && gSize<=100){
        gridItems.forEach(item => container.removeChild(item));
    }
    createGrid(gSize);

});

function createGrid(n){
    for(let i=0;i<(n*n);i++){
        const grid = document.createElement('div');
        grid.classList.add('grid-items');
        grid.style.cssText = 'flex-grow:1; flex-shrink:1';
        let height = parseInt(600/(n)); 
        grid.style.flexBasis = `${height}px`;   
        container.appendChild(grid);
    }
    gridItems = document.querySelectorAll('.grid-items');
    gridItems.forEach(item => item.addEventListener('mouseenter',()=>{
    item.classList.add('blackBack');
    }) );

};

