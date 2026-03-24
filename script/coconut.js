(() => {

  const left =
    document.getElementById("coconut-left");

  const right =
    document.getElementById("coconut-right");


  if (!left || !right) return;


  /* Add GIF images */

  left.innerHTML =
    '<img src="asset/coconut-left.gif">';

  right.innerHTML =
    '<img src="asset/coconut-right.gif">';


  /* Remove after 4 seconds */

  setTimeout(() => {

    left.remove();
    right.remove();

  }, 8000);

})();
