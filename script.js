
// ========================================
// ZAFRA FASHION - 90 PRODUK
// ========================================

const whatsappNumber = "6281234567890";

// Foto contoh untuk masing-masing kategori
const photos = {
  Pria: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700",
    "https://images.unsplash.com/photo-1625910513413-5fc7e4c4b9e7?w=700"
  ],

  Wanita: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700",
    "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=700",
    "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=700",
    "https://images.unsplash.com/photo-1564257577-9f1d7a1b6f7d?w=700"
  ],

  Aksesoris: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
    "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
  ]
};

// ========================================
// DATA PAKAIAN PRIA - 30 PRODUK
// ========================================

const menNames = [
  "Kaos Oversize Basic",
  "Kaos Polos Premium",
  "Kemeja Casual",
  "Kemeja Formal",
  "Hoodie Premium",
  "Jaket Denim",
  "Jaket Bomber",
  "Celana Jeans",
  "Celana Chino",
  "Celana Cargo",
  "Polo Shirt",
  "Sweater Pria",
  "Jaket Varsity",
  "Celana Pendek",
  "Kemeja Flanel",
  "Jaket Windbreaker",
  "Kaos Graphic",
  "Celana Formal",
  "Sweatshirt",
  "Jaket Kulit",
  "Kaos Streetwear",
  "Kemeja Linen",
  "Hoodie Oversize",
  "Jaket Casual",
  "Celana Jogger",
  "Kaos Polo Premium",
  "Sweater Rajut",
  "Celana Cargo Premium",
  "Kemeja Motif",
  "Jaket Sport"
];

const menPrices = [
  85000, 75000, 150000, 185000, 220000,
  275000, 250000, 190000, 175000, 210000,
  125000, 195000, 290000, 95000, 165000,
  240000, 110000, 180000, 185000, 450000,
  120000, 195000, 235000, 280000, 145000,
  135000, 210000, 225000, 175000, 260000
];

// ========================================
// DATA PAKAIAN WANITA - 30 PRODUK
// ========================================

const womenNames = [
  "Dress Casual",
  "Blouse Elegan",
  "Cardigan Wanita",
  "Rok Plisket",
  "Kemeja Wanita",
  "Sweater Wanita",
  "Celana Kulot",
  "Jeans Wanita",
  "Tunik Muslimah",
  "Gamis Elegan",
  "Blazer Wanita",
  "Jaket Denim Wanita",
  "Kaos Crop Top",
  "Rok Midi",
  "Dress Floral",
  "Outer Wanita",
  "Celana Legging",
  "Kemeja Oversize",
  "Dress Pesta",
  "Long Cardigan",
  "Blouse Korean Style",
  "Dress Minimalis",
  "Cardigan Rajut",
  "Rok A-Line",
  "Blazer Formal",
  "Outer Korean",
  "Tunik Casual",
  "Celana Wide Leg",
  "Dress Floral Premium",
  "Kaos Basic Wanita"
];

const womenPrices = [
  185000, 145000, 175000, 125000, 155000,
  195000, 150000, 195000, 185000, 275000,
  250000, 230000, 90000, 160000, 220000,
  180000, 95000, 165000, 350000, 210000,
  155000, 225000, 185000, 145000, 275000,
  195000, 180000, 175000, 245000, 85000
];

// ========================================
// DATA AKSESORIS - 30 PRODUK
// ========================================

const accessoryNames = [
  "Tas Selempang",
  "Tas Tote Bag",
  "Tas Ransel",
  "Jam Tangan Elegan",
  "Kacamata Fashion",
  "Dompet Kulit",
  "Topi Baseball",
  "Ikat Pinggang",
  "Kalung Minimalis",
  "Gelang Fashion",
  "Anting Elegan",
  "Scarf Premium",
  "Sepatu Sneakers",
  "Sandal Casual",
  "Hair Clip",
  "Pouch Makeup",
  "Bucket Hat",
  "Gantungan Tas",
  "Sarung Tangan",
  "Parfum Fashion",
  "Handbag Premium",
  "Tas Mini Wanita",
  "Dompet Wanita",
  "Jam Tangan Classic",
  "Kacamata Hitam",
  "Topi Casual",
  "Kalung Gold",
  "Gelang Elegan",
  "Sneakers Fashion",
  "Tas Backpack Premium"
];

const accessoryPrices = [
  175000, 95000, 225000, 350000, 85000,
  125000, 75000, 90000, 65000, 55000,
  70000, 95000, 325000, 115000, 35000,
  85000, 80000, 40000, 60000, 185000,
  285000, 165000, 110000, 325000, 95000,
  75000, 85000, 65000, 350000, 250000
];

// ========================================
// GABUNGKAN MENJADI 90 PRODUK
// ========================================

function createProducts(names, prices, category) {
  return names.map((name, index) => ({
    name: name,
    category: category,
    price: prices[index],
    image: photos[category][index % photos[category].length]
  }));
}

const products = [
  ...createProducts(menNames, menPrices, "Pria"),
  ...createProducts(womenNames, womenPrices, "Wanita"),
  ...createProducts(accessoryNames, accessoryPrices, "Aksesoris")
];

// ========================================
// TAMPILKAN PRODUK DI HALAMAN
// ========================================

const productList = document.getElementById("productList");

if (productList) {
  const searchInput = document.getElementById("searchProduct");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortPrice = document.getElementById("sortPrice");
  const productCount = document.getElementById("productCount");
  const noProducts = document.getElementById("noProducts");

  const heroTotal = document.getElementById("heroTotal");

  if (heroTotal) {
    heroTotal.textContent = products.length + "+";
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(price);
  }

  function displayProducts() {
    const keyword = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const sorting = sortPrice.value;

    let filtered = products.filter(product => {
      const matchName = product.name.toLowerCase().includes(keyword);
      const matchCategory = category === "Semua" ||
        product.category === category;

      return matchName && matchCategory;
    });

    if (sorting === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sorting === "high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sorting === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    productList.innerHTML = filtered.map((product, index) => {
      const message = encodeURIComponent(
        "Halo ZAFRA FASHION, saya tertarik membeli " +
        product.name + " dengan harga " + formatPrice(product.price)
      );

      return `
        <article class="lux-product">

          <div class="product-photo">
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/600x700/f1eadf/171717?text=ZAFRA+FASHION';"
            >

            <span class="product-tag">${product.category}</span>
            <span class="product-number">COLLECTION ${index + 1}</span>
          </div>

          <div class="product-details">
            <p class="product-category">${product.category} COLLECTION</p>

            <h3>${product.name}</h3>

            <p class="product-description">
              Fashion pilihan ZAFRA dengan gaya elegan.
            </p>

            <div class="product-bottom">
              <span class="product-price">
                ${formatPrice(product.price)}
              </span>

              <a
                class="product-buy"
                href="https://wa.me/${whatsappNumber}?text=${message}"
                target="_blank"
                rel="noopener"
              >
                BELI →
              </a>
            </div>
          </div>

        </article>
      `;
    }).join("");

    productCount.innerHTML =
      `Menampilkan <strong>${filtered.length}</strong> dari <strong>${products.length}</strong> produk`;

    noProducts.hidden = filtered.length !== 0;
  }

  // PENCARIAN
  searchInput.addEventListener("input", displayProducts);

  // FILTER KATEGORI
  categoryFilter.addEventListener("change", displayProducts);

  // URUTKAN HARGA
  sortPrice.addEventListener("change", displayProducts);

  // KLIK KARTU KATEGORI
  document.querySelectorAll(".category-tile").forEach(button => {
    button.addEventListener("click", () => {
      categoryFilter.value = button.dataset.category;
      displayProducts();

      document.querySelectorAll(".category-tile").forEach(tile => {
        tile.classList.remove("selected");
      });

      button.classList.add("selected");

      document.querySelector(".shop-toolbar").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });

  // BACA KATEGORI DARI LINK HOME
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");

  if (["Pria", "Wanita", "Aksesoris"].includes(requestedCategory)) {
    categoryFilter.value = requestedCategory;

    const selectedTile = document.querySelector(
      `.category-tile[data-category="${requestedCategory}"]`
    );

    if (selectedTile) {
      selectedTile.classList.add("selected");
    }
  }

  // TAMPILKAN SEMUA PRODUK SAAT HALAMAN DIBUKA
  displayProducts();
}
