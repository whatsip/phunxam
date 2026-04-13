(function () {
  const slider   = document.querySelector('.sectionslider');
  if (!slider) return;

  const track    = slider.querySelector('.sectionslider__track');
  const slides   = slider.querySelectorAll('.sectionslider__slide');
  const dots     = slider.querySelectorAll('.sectionslider__dot');
  const btnPrev  = slider.querySelector('.sectionslider__btn--prev');
  const btnNext  = slider.querySelector('.sectionslider__btn--next');

  const TOTAL    = slides.length;
  const INTERVAL = 3000;
  let current    = 0;
  let timer      = null;

  function goTo(index) {
    current = (index + TOTAL) % TOTAL;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  btnPrev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  btnNext.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.index));
      resetAuto();
    });
  });

  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', startAuto);

  goTo(0);
  startAuto();
})();