const container = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset-button');

function createGrid(rows,cols){
  for(let i=0;i<rows*cols;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'blue'; 
    });
  }
} 
resetButton.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  });
});


createGrid(16,16);