(() => {

  const container =
    document.getElementById('luckyContainer');

  if (!container) return;


  /* =========================
     LEAF IMAGES
  ========================= */

  const leafImages = [

    'asset/leaf1.png',
    'asset/leaf2.png',
    'asset/leaf3.png'

  ];


  /* =========================
     TOTAL LEAVES (30–40)
  ========================= */

  const count =
    Math.floor(Math.random() * 11) + 30;


  /* =========================
     CREATE LEAVES
  ========================= */

  for (let i = 0; i < count; i++) {

    const lucky =
      document.createElement('img');


    /* Random leaf image */

    lucky.src =
      leafImages[
        Math.floor(
          Math.random() *
          leafImages.length
        )
      ];

    lucky.className = 'lucky';


    /* Random X position */

    lucky.style.left =
      Math.random() * 100 + 'vw';


    /* Scale */

    const scale =
      (Math.random() * 0.35 + 0.35)
      .toFixed(2);

    lucky.style.setProperty(
      '--scale',
      scale
    );


    /* Rotation */

    const rotate =
      (Math.random() * 80 - 40)
      .toFixed(1) + 'deg';

    lucky.style.setProperty(
      '--rotate',
      rotate
    );


    /* Fall time */

    const duration =
      Math.random() * 3 + 5;

    lucky.style.animationDuration =
      duration + 's';


    /* Delay */

    const delay =
      Math.random() * 2;

    lucky.style.animationDelay =
      delay + 's';


    lucky.style.animationName =
      'lucky-fall';


    container.appendChild(lucky);


    /* =========================
       REMOVE AFTER FALL
       (very important)
    ========================= */

    setTimeout(() => {

      lucky.remove();

    }, (duration + delay) * 1000);

  }

})();
