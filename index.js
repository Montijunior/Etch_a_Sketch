const container = document.getElementById('container');
const color = document.getElementById('color');

for (let i = 1; i <= 256; i++) {
  const element = document.createElement('div');
  element.classList.add('box');
  container.appendChild(element);
  element.addEventListener(
    'mouseenter',
    (e) => (e.target.style.backgroundColor = color.value)
  );
}
