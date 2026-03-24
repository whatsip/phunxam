/* script/parallax.js
   – Parallax depth on slider images (scroll-based)
   – Subtle parallax on feature section image
   Speed 0 = moves with scroll (no parallax)
   Speed 1 = completely fixed (full parallax)
*/
(function () {

  function applyParallax(selector, speed) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    function update() {
      const scrollY = window.scrollY;
      elements.forEach(el => {
        const rect   = el.closest('section')?.getBoundingClientRect() || el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (window.innerHeight / 2 - center) * speed;
        el.style.transform = `translateY(${offset}px) scale(1.08)`;
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update(); // initial call
  }

  // Slider images – gentle parallax
  applyParallax('.slider .ratio-16-9 img', 0.18);

  // Feature section image – slightly stronger
  applyParallax('.feature .ratio-1-1 img', 0.12);

  /* ── Add parallax-scene class to slider ratios ── */
  document.querySelectorAll('.slider .ratio-16-9').forEach(el => {
    el.classList.add('parallax-scene');
  });

})();
