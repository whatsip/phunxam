document.addEventListener("DOMContentLoaded", () => {
  const coin = document.querySelector(".simple-coin");
  const overlay = document.getElementById("lixiOverlay");
  const envelope = document.getElementById("lixiEnvelope");
  const textEl = document.getElementById("lixiText");

  if (!coin || !overlay || !envelope || !textEl) return;

  const wishes = [
    "🎉 Chúc bạn năm mới vui vẻ",
    "🧧 Cung hỷ phát tài",
    "✨ Vạn sự như ý",
    "💰 Tiền vô như nước",
    "🌸 An khang thịnh vượng"
  ];

  coin.addEventListener("click", (e) => {
    e.preventDefault();

    textEl.textContent =
      wishes[Math.floor(Math.random() * wishes.length)];

    overlay.classList.add("show");
    envelope.classList.remove("open");

    setTimeout(() => {
      envelope.classList.add("open");
    }, 250);
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
    envelope.classList.remove("open");
  });
});
