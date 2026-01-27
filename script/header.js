document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const dropdown = document.getElementById("simpleDropdown");

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
    document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("open"));
  });

  // bấm vào CẢ DÒNG (chữ + mũi tên) để mở submenu
  dropdown.querySelectorAll(".has-sub > a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // không chuyển trang
      e.stopPropagation();

      const item = link.closest(".dropdown-item");

      // nếu muốn chỉ mở 1 submenu tại 1 thời điểm
      document.querySelectorAll(".dropdown-item").forEach(i => {
        if (i !== item) i.classList.remove("open");
      });

      item.classList.toggle("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const searchBox = document.querySelector(".header-search");
  const toggleBtn = document.querySelector(".search-toggle");
  const input = document.querySelector(".search-input");
  const suggestBox = document.getElementById("searchSuggest");

  if (!searchBox || !toggleBtn || !input || !suggestBox) return;

  const posts = [
    {
      title: "Cấu Tạo Môi",
      content: "Môi gồm biểu bì, trung bì, mao mạch",
      url: "cautaomoi.html"
    },
    {
      title: "Dấu Vân Môi",
      content: "Dấu vân môi là đặc điểm sinh học",
      url: "#"
    },
    {
      title: "Mực Phun Xăm Khi Vào Cơ Thể",
      content: "Phản ứng của mực phun xăm trong da",
      url: "#"
    }
  ];

  /* =========================
     TOGGLE ICON 🔍
     ========================= */
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
      input.focus();
    } else {
      input.value = "";
      suggestBox.classList.remove("show");
      suggestBox.innerHTML = "";
    }
  });

  /* =========================
     SEARCH GỢI Ý
     ========================= */
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    suggestBox.innerHTML = "";

    if (!keyword) {
      suggestBox.classList.remove("show");
      return;
    }

    const results = posts.filter(p =>
      p.title.toLowerCase().includes(keyword) ||
      p.content.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
      suggestBox.classList.remove("show");
      return;
    }

    results.slice(0, 5).forEach(post => {
      const regex = new RegExp(`(${keyword})`, "gi");
      const title = post.title.replace(regex, "<mark>$1</mark>");

      const item = document.createElement("a");
      item.href = post.url;
      item.innerHTML = `📄 ${title}`;
      suggestBox.appendChild(item);
    });

    suggestBox.classList.add("show");
  });

  /* =========================
     CLICK NGOÀI → ĐÓNG
     ========================= */
  document.addEventListener("click", () => {
    searchBox.classList.remove("active");
    suggestBox.classList.remove("show");
    input.value = "";
  });

  input.addEventListener("click", e => e.stopPropagation());
  suggestBox.addEventListener("click", e => e.stopPropagation());

});
