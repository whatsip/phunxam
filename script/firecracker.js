(function () {
  const left = document.getElementById('firecrackerLeft');
  const right = document.getElementById('firecrackerRight');

  if (!left || !right) return;

  const delay = Math.random() * 0.8;
  const duration = 6;

  [left, right].forEach(el => {
    el.style.animation = `
      firecracker-hang ${duration}s ease-in-out ${delay}s
    `;
  });
})();
