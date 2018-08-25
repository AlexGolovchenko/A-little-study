let item = document.querySelector('.item');
item.onclick = function() {
  animate(this, 5000, function() {
    this.style.display = 'none';
  });
}

function animate(elem, t, f) {
  let fps = 60;
  let time = t || 500;
  let steps = time / fps;
  let op = 1;
  let d = op / steps;
  let callback = f || function() {};
  let timer = setInterval(function() {
    op -= d;
    elem.style.opacity = op;
    steps--;
    if (steps == 0) {
      clearInterval(timer);
      callback.call(elem);
    }
  }, (1000 / fps));
}
