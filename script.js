
document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("searchProduct");
  const filter = document.getElementById("categoryFilter");
  const cards = document.querySelectorAll(".shop-products .product-card");
  const empty = document.getElementById("noProducts");

  function filterProducts() {
    if (!search || !filter) return;

    const keyword = search.value.toLowerCase();
    const category = filter.value;
    let count = 0;

    cards.forEach(function (card) {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const selectedCategory = card.dataset.category;

      const matchName = name.includes(keyword);
      const matchCategory =
        category === "all" || selectedCategory === category;

      if (matchName && matchCategory) {
        card.style.display = "";
        count++;
      } else {
        card.style.display = "none";
      }
    });

    empty.hidden = count !== 0;
  }

  if (search) {
    search.addEventListener("input", filterProducts);
  }

  if (filter) {
    filter.addEventListener("change", filterProducts);
  }
});
