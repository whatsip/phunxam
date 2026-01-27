function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error("Include error:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  const base = window.location.pathname.split('/')[1];
  const root = base ? `/${base}` : '';

  loadHTML("header", `${root}/components/header.html`);
  loadHTML("topbar", `${root}/components/topbar.html`);
  loadHTML("footer", `${root}/components/footer.html`);
});
