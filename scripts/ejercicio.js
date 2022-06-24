
document.getElementById('titulo1').textContent = 'Album de fotos';
document.getElementsByClassName('text-muted').innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>';
document.getElementsByTagName('p')[2].setAttribute('class', 'd-none');

const div = document.querySelector("svg");
const span = document.createElement("img");
span.innerHTML = "hello james";
div.replaceWith(span);
