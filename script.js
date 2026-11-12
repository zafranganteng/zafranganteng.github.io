
document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("searchProduct");
  const filter = document.getElementById("categoryFilter");
  const sort = document.getElementById("sortPrice");
  const list = document.getElementById("productList");
  const count = document.getElementById("productCount");
  const empty = document.getElementById("noProducts");

  if (!list) return;

  const cards = Array.from(
    list.querySelectorAll(".product-card")
  );

  function updateProducts() {
    const keyword = search ? search.value.toLowerCase().trim() : "";
    const category = filter ? filter.value : "all";
    const sorting = sort ? sort.value : "default";

    let visibleCards = cards.filter(function (card) {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const selectedCategory = card.dataset.category;

      return name.includes(keyword) &&
        (category === "all" || selectedCategory === category);
    });

    if (sorting === "low") {
      visibleCards.sort((a, b) =>
        Number(a.dataset.price) - Number(b.dataset.price)
      );
    }

    if (sorting === "high") {
      visibleCards.sort((a, b) =>
        Number(b.dataset.price) - Number(a.dataset.price)
      );
    }

    cards.forEach(card => card.style.display = "none");

    visibleCards.forEach(card => {
      card.style.display = "";
      list.appendChild(card);
    });

    if (count) {
      count.textContent =
        "Menampilkan " + visibleCards.length + " dari " +
        cards.length + " produk";
    }

    if (empty) {
      empty.hidden = visibleCards.length !== 0;
    }
  }

  if (search) search.addEventListener("input", updateProducts);
  if (filter) filter.addEventListener("change", updateProducts);
  if (sort) sort.addEventListener("change", updateProducts);

  updateProducts();
});
