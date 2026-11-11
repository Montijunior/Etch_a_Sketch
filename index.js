const container = document.getElementById('container');
let gridButton = document.getElementById('grid_size_btn');
let resetButton = document.getElementById('clear_btn');
let rainBowButton = document.getElementById('rain_bow_btn');
let eraserButton = document.getElementById('eraser_btn');
let color = document.getElementById('color');

// Tracking state color, rainbow, eraser
let currentMode = 'color';

// Helper functions
function getRainBow() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return `rgb(${R}, ${G}, ${B})`;
}

function gridSize(size) {
  let dimension = 480 / size;
  for (let i = 1; i <= size ** 2; i++) {
    const element = document.createElement('div');
    element.classList.add('box');
    element.style.height = `${dimension}px`;
    element.style.width = `${dimension}px`;
    container.appendChild(element);

    element.addEventListener('click', function (e) {
      if (e.target.style.backgroundColor === '' && currentMode === 'color') {
        e.target.style.backgroundColor = color.value;
      }
      if (e.target.style.backgroundColor === '' && currentMode === 'rainbow') {
        e.target.style.backgroundColor = getRainBow();
      }
      if (e.target.style.backgroundColor !== '' && currentMode === 'eraser') {
        e.target.style.backgroundColor = '';
      }
    });
  }
}
// Rainbow event listener
rainBowButton.addEventListener('click', function () {
  currentMode = 'rainbow';
});

// Eraser button event listener
eraserButton.addEventListener('click', function () {
  currentMode = 'eraser';
});

// Color event listener
color.addEventListener('click', function () {
  currentMode = 'color';
});

gridButton.addEventListener('click', function () {
  let size = Number(prompt('Please enter a grid size: '));
  if (size < 1 || size > 100 || isNaN(size)) {
    alert('Please enter size between 1-100');
    return;
  }
  container.innerHTML = '';
  gridSize(size);
});

resetButton.addEventListener('click', function () {
  container.innerHTML = '';
  gridSize(16);
});

gridSize(16);
