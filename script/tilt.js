/* script/tilt.js
   – 3D perspective tilt on blog cards & gallery items on mouse move
   – Resets smoothly on mouse leave
*/
(function () {

  const TILT_MAX  = 8;   // max degrees
  const SCALE     = 1.03;

  function initTilt(selector) {
    document.querySelectorAll(selector).forEach(card => {
      card.classList.add('tilt-card');
      card.style.perspective = '800px';

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = (e.clientX - cx) / (rect.width  / 2);
        const dy   = (e.clientY - cy) / (rect.height / 2);

        const rotY =  dx * TILT_MAX;
        const rotX = -dy * TILT_MAX;

        card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
        card.style.transform  = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.6s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease';
        card.style.transform  = 'rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });
  }

  // Apply to blog cards and gallery items
  initTilt('.blog-card');
  initTilt('.gallery-item');

})();
