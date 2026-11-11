const container = document.getElementById('container');
let color = document.getElementById('color');

for (let i = 1; i <= 256; i++) {
  const element = document.createElement('div');
  element.classList.add('box');
  container.appendChild(element);
  element.addEventListener('click', function (e) {
    if (e.target.style.backgroundColor === '') {
      e.target.style.backgroundColor = color.value;
    }
  });
}
