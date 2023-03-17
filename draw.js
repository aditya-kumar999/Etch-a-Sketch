const container = document.querySelector('.container');

for(let i=0;i<256;i++){
    const grid = document.createElement('div');
    grid.classList.add('grid-items');
    container.appendChild(grid);
}

const gridItems = document.querySelectorAll('.grid-items');
gridItems.forEach(item => item.addEventListener('mouseenter',()=>{
    item.style.cssText = 'background:black;';
}) )