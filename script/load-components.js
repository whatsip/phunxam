document.addEventListener("DOMContentLoaded", async () => {
  await load("topbar", "components/topbar.html");
  await load("header", "components/header.html");
  await load("footer", "components/footer.html");

  if (typeof initHeader === "function") {
    initHeader();
  }
});

function load(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}
