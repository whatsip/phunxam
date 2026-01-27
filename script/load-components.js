async function loadComponent(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}

loadComponent("header", "components/header.html");
loadComponent("topbar", "components/topbar.html");
loadComponent("footer", "components/footer.html");
