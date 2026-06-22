document.addEventListener("DOMContentLoaded", function () {
  fetch("voucher-widget.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("voucher-widget-container").innerHTML = html;

      const voucherBtn = document.getElementById("voucherBtn");
      const voucherPopup = document.getElementById("voucherPopup");

      voucherBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        voucherPopup.classList.toggle("active");
      });

      document.addEventListener("click", function (event) {
        if (!event.target.closest(".voucher-widget")) {
          voucherPopup.classList.remove("active");
        }
      });
    });
});
