const container = document.getElementById('container');
let gridButton = document.getElementById('grid_size_btn');
let color = document.getElementById('color');

function gridSize(size) {
  let dimension = 480 / size;
  for (let i = 1; i <= size ** 2; i++) {
    const element = document.createElement('div');
    element.classList.add('box');
    element.style.height = `${dimension}px`;
    element.style.width = `${dimension}px`;
    container.appendChild(element);

    element.addEventListener('click', function (e) {
      if (e.target.style.backgroundColor === '') {
        e.target.style.backgroundColor = color.value;
      }
    });
  }
}

gridButton.addEventListener('click', function () {
  let size = Number(prompt('Please enter a grid size: '));
  if (size < 1 || size > 100 || isNaN(size)) {
    alert('Please enter size between 1-100');
    return;
  }
  container.innerHTML = '';
  gridSize(size);
});

gridSize(16);
