/* script/scroll-reveal.js
   – IntersectionObserver reveal for sections & cards
   – Scroll progress bar
   – Heading underline trigger
*/
(function () {

  /* ── 1. SCROLL PROGRESS BAR ── */
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });


  /* ── 2. SCROLL REVEAL ── */
  // Elements to reveal
  const revealSelectors = [
    '.gallery-item',
    '.blog-card',
    '.feature',
    'section h2',
    '.p2',
    '.p3',
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('reveal');
    });
  });

  // Stagger gallery & blog grids
  document.querySelectorAll('.gallery-grid, .blog-grid').forEach(grid => {
    grid.classList.add('reveal-stagger');
    // remove individual reveals from children (parent handles stagger)
    grid.querySelectorAll('.reveal').forEach(child => child.classList.remove('reveal'));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });


  /* ── 3. HEADING UNDERLINE ── */
  document.querySelectorAll('h2').forEach(h2 => {
    // wrap in a div for the underline animation
    const wrap = document.createElement('div');
    wrap.className = 'h2-wrap';
    h2.parentNode.insertBefore(wrap, h2);
    wrap.appendChild(h2);

    const wrapObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          wrap.classList.add('visible');
          wrapObserver.unobserve(wrap);
        }
      });
    }, { threshold: 0.4 });

    wrapObserver.observe(wrap);
  });

})();
