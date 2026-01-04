(() => {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  resize();
  addEventListener("resize", resize);

  const COLORS = ["#FFD700", "#FFC400", "#FFE066", "#FFF3B0"];
  const particles = [];

  class Confetti {
    constructor(x, y) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.8;
      const speed = Math.random() * 6 + 14;

      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      this.x = x;
      this.y = y;

      this.w = Math.random() * 6 + 3;
      this.h = this.w * 0.45;

      this.rot = Math.random() * Math.PI;
      this.rotSpeed = (Math.random() - 0.5) * 0.15;

      this.gravity = 0.28;
      this.drag = 0.985;
      this.opacity = 1;

      this.wind = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.vx += this.wind;
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.vy += this.gravity;

      this.x += this.vx;
      this.y += this.vy;
      this.rot += this.rotSpeed;

      if (this.y > canvas.height * 0.35) {
        this.opacity -= 0.004;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = Math.max(this.opacity, 0);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
      ctx.restore();
    }

    get color() {
      return COLORS[(this.x + this.y) % COLORS.length | 0];
    }
  }

  function airCannon() {
    const x = canvas.width / 2;
    const y = canvas.height + 30;
    const count = 220;

    for (let i = 0; i < count; i++) {
      particles.push(new Confetti(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();

      if (p.opacity <= 0 || p.y > canvas.height + 50) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  airCannon();
  animate();
})();
