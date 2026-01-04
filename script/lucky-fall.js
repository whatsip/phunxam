(() => {
  const container = document.getElementById('luckyContainer');
  if (!container) return;

  const count = Math.floor(Math.random() * 6) + 15; // 15–20 bao

  for (let i = 0; i < count; i++) {
    const lucky = document.createElement('img');
    lucky.src = 'asset/luckymoney.png';
    lucky.className = 'lucky';

    // Vị trí ngang random
    lucky.style.left = Math.random() * 100 + 'vw';

    // Scale
    const scale = (Math.random() * 0.25 + 0.35).toFixed(2);
    lucky.style.setProperty('--scale', scale);

    // Xoay nhẹ
    const rotate = (Math.random() * 60 - 30).toFixed(1) + 'deg';
    lucky.style.setProperty('--rotate', rotate);

    // Thời gian rơi
    lucky.style.animationDuration = (Math.random() * 3 + 4) + 's';

    // Delay
    lucky.style.animationDelay = (Math.random() * 1.5) + 's';

    lucky.style.animationName = 'lucky-fall';

    container.appendChild(lucky);
  }
})();
