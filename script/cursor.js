/* script/cursor.js – Custom dual-layer cursor with smooth lag */
(function () {
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -100, my = -100;   // true mouse
  let rx = -100, ry = -100;   // ring (lagging)

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // smooth ring follows with lerp
  function lerp(a, b, t) { return a + (b - a) * t; }

  (function loop() {
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  // hover state on interactive elements
  const targets = 'a, button, .gallery-item, .blog-card, .ratio-1-1, .ratio-16-9, input, textarea';
  document.querySelectorAll(targets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    });
  });
})();
