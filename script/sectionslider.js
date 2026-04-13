(function () {
  const slider  = document.querySelector('.sectionslider');
  if (!slider) return;

  const track   = slider.querySelector('.sectionslider__track');
  const slides  = slider.querySelectorAll('.sectionslider__slide');
  const dots    = slider.querySelectorAll('.sectionslider__dot');
  const btnPrev = slider.querySelector('.sectionslider__btn--prev');
  const btnNext = slider.querySelector('.sectionslider__btn--next');

  const TOTAL    = slides.length;
  const INTERVAL = 3000;
  let current    = 0;
  let timer      = null;

  function goTo(index) {
    current = (index + TOTAL) % TOTAL;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function startAuto() {
    stopAuto(); // always clear before starting
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  btnPrev.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  btnNext.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.index));
      startAuto();
    });
  });

  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);

  goTo(0);
  startAuto();
})();