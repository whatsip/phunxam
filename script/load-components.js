document.addEventListener("DOMContentLoaded", () => {
  load("topbar", "components/topbar.html");
  load("header", "components/header.html");
  load("footer", "components/footer.html");
});

function load(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error("Load error:", file, err));
}
