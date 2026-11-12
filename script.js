
// ==========================================
// RYAN FASHION - 100 PRODUCT COLLECTION
// ==========================================

const productData = [
  // ===== 35 PRODUK PRIA =====
  ["Kaos Basic Essential","Pria",85000],
  ["Kaos Oversize Premium","Pria",115000],
  ["Kaos Graphic Streetwear","Pria",125000],
  ["Polo Shirt Classic","Pria",145000],
  ["Kemeja Casual Daily","Pria",155000],
  ["Kemeja Formal Slim Fit","Pria",195000],
  ["Kemeja Flanel Checkered","Pria",175000],
  ["Kemeja Linen Premium","Pria",210000],
  ["Hoodie Essential","Pria",225000],
  ["Hoodie Zip Up","Pria",245000],
  ["Sweater Knitwear","Pria",215000],
  ["Crewneck Minimalist","Pria",185000],
  ["Jaket Denim Classic","Pria",275000],
  ["Jaket Bomber Modern","Pria",295000],
  ["Jaket Varsity Premium","Pria",325000],
  ["Jaket Windbreaker","Pria",255000],
  ["Jaket Kulit Fashion","Pria",450000],
  ["Celana Jeans Slim Fit","Pria",195000],
  ["Celana Jeans Straight","Pria",205000],
  ["Celana Chino Casual","Pria",175000],
  ["Celana Cargo Utility","Pria",225000],
  ["Celana Jogger Sport","Pria",145000],
  ["Celana Formal Office","Pria",190000],
  ["Celana Pendek Casual","Pria",95000],
  ["Celana Pendek Sport","Pria",105000],
  ["Setelan Casual Pria","Pria",285000],
  ["Baju Koko Modern","Pria",185000],
  ["Kurta Muslim Premium","Pria",225000],
  ["Vest Casual","Pria",165000],
  ["Cardigan Pria","Pria",205000],
  ["Tank Top Basic","Pria",75000],
  ["Long Sleeve Shirt","Pria",135000],
  ["Kemeja Stripe","Pria",165000],
  ["Kemeja Oxford","Pria",195000],
  ["Track Jacket Sport","Pria",235000],

  // ===== 35 PRODUK WANITA =====
  ["Blouse Elegant","Wanita",145000],
  ["Blouse Korean Style","Wanita",155000],
  ["Blouse Casual Daily","Wanita",125000],
  ["Dress Floral Premium","Wanita",235000],
  ["Dress Minimalist","Wanita",215000],
  ["Dress Party Elegant","Wanita",350000],
  ["Dress Casual Summer","Wanita",185000],
  ["Maxi Dress Modern","Wanita",275000],
  ["Cardigan Knitwear","Wanita",185000],
  ["Long Cardigan","Wanita",215000],
  ["Sweater Wanita","Wanita",195000],
  ["Outer Korean Style","Wanita",175000],
  ["Blazer Formal Wanita","Wanita",275000],
  ["Jaket Denim Wanita","Wanita",245000],
  ["Jaket Casual Wanita","Wanita",225000],
  ["Rok Plisket","Wanita",125000],
  ["Rok A-Line","Wanita",145000],
  ["Rok Midi Elegant","Wanita",165000],
  ["Rok Denim","Wanita",155000],
  ["Celana Kulot","Wanita",155000],
  ["Celana Wide Leg","Wanita",185000],
  ["Jeans High Waist","Wanita",205000],
  ["Celana Palazzo","Wanita",175000],
  ["Legging Premium","Wanita",95000],
  ["Tunik Casual","Wanita",185000],
  ["Tunik Muslimah","Wanita",195000],
  ["Gamis Elegant","Wanita",285000],
  ["Gamis Daily Wear","Wanita",225000],
  ["Kaos Crop Top","Wanita",95000],
  ["Kaos Basic Wanita","Wanita",85000],
  ["Kemeja Oversize","Wanita",165000],
  ["Kemeja Linen Wanita","Wanita",185000],
  ["Setelan Casual Wanita","Wanita",245000],
  ["Vest Knit Wanita","Wanita",155000],
  ["Jumpsuit Modern","Wanita",265000],

  // ===== 30 PRODUK AKSESORIS =====
  ["Handbag Premium","Aksesoris",285000],
  ["Tas Selempang","Aksesoris",175000],
  ["Tote Bag Canvas","Aksesoris",95000],
  ["Backpack Modern","Aksesoris",225000],
  ["Mini Shoulder Bag","Aksesoris",165000],
  ["Dompet Kulit","Aksesoris",125000],
  ["Dompet Wanita","Aksesoris",115000],
  ["Jam Tangan Classic","Aksesoris",350000],
  ["Jam Tangan Minimalist","Aksesoris",295000],
  ["Kacamata Sunglasses","Aksesoris",95000],
  ["Kacamata Fashion","Aksesoris",85000],
  ["Topi Baseball","Aksesoris",75000],
  ["Bucket Hat","Aksesoris",85000],
  ["Ikat Pinggang Kulit","Aksesoris",110000],
  ["Kalung Minimalist","Aksesoris",85000],
  ["Kalung Gold Style","Aksesoris",105000],
  ["Gelang Fashion","Aksesoris",65000],
  ["Gelang Elegant","Aksesoris",85000],
  ["Anting Minimalist","Aksesoris",75000],
  ["Anting Premium","Aksesoris",95000],
  ["Scarf Premium","Aksesoris",95000],
  ["Pashmina Fashion","Aksesoris",85000],
  ["Sneakers Casual","Aksesoris",325000],
  ["Sneakers Premium","Aksesoris",425000],
  ["Sandal Casual","Aksesoris",115000],
  ["Hair Clip Set","Aksesoris",45000],
  ["Makeup Pouch","Aksesoris",85000],
  ["Card Holder","Aksesoris",75000],
  ["Tas Mini Elegant","Aksesoris",195000],
  ["Parfum Fashion","Aksesoris",185000]
];

// Foto ilustrasi berdasarkan kategori.
// Foto bisa digunakan ulang untuk beberapa produk.
const productImages = {
  Pria: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700"
  ],
  Wanita: [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700",
    "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=700"
  ],
  Aksesoris: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
    "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700"
  ]
};

// Membentuk daftar 100 produk secara otomatis.
const products = productData.map((item, index) => {
  const [name, category, price] = item;
  const images = productImages[category];

  const categoryIndex = productData
    .slice(0, index)
    .filter(product => product[1] === category).length;

  return {
    id: index + 1,
    name,
    category,
    price,
    image: images[categoryIndex % images.length]
  };
});

// ==========================================
// TAMPILKAN PRODUK DAN FITUR FILTER
// ==========================================

const productList = document.getElementById("productList");

if (productList) {
  const searchInput = document.getElementById("searchProduct");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortPrice = document.getElementById("sortPrice");
  const productCount = document.getElementById("productCount");
  const noProducts = document.getElementById("noProducts");

  // GANTI DENGAN NOMOR WHATSAPP TOKO KAMU
  const whatsappNumber = "6281234567890";

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(price);
  }

  function displayProducts() {
    const keyword = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const sort = sortPrice.value;

    let filtered = products.filter(product => {
      const matchName = product.name.toLowerCase().includes(keyword);
      const matchCategory = product.category === selectedCategory ||
        selectedCategory === "Semua";

      return matchName && matchCategory;
    });

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name, "id"));
    }

    productList.innerHTML = filtered.map((product, index) => {
      const message = encodeURIComponent(
        `Halo Ryan Fashion, saya tertarik membeli ${product.name} dengan harga ${formatPrice(product.price)}. Apakah masih tersedia?`
      );

      return `
        <article class="product-card">
          <div class="product-image-wrap">
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/700x700/F6F2EA/172B3A?text=RYAN+FASHION';"
            >
            <span class="product-badge">
              ${index < 4 ? "Featured" : product.category}
            </span>
          </div>

          <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3>${product.name}</h3>
            <p class="product-description">
              Koleksi pilihan Ryan Fashion untuk gaya sehari-hari.
            </p>

            <div class="product-bottom">
              <span class="product-price">${formatPrice(product.price)}</span>
              <a
                class="product-buy"
                href="https://wa.me/${whatsappNumber}?text=${message}"
                target="_blank"
                rel="noopener"
              >Beli ↗</a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    productCount.textContent =
      `Menampilkan ${filtered.length} dari ${products.length} produk`;

    noProducts.hidden = filtered.length !== 0;
  }

  // Event pencarian dan filter.
  searchInput.addEventListener("input", displayProducts);
  categoryFilter.addEventListener("change", displayProducts);
  sortPrice.addEventListener("change", displayProducts);

  // Membaca kategori dari tautan Home.
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");

  if (["Pria", "Wanita", "Aksesoris"].includes(requestedCategory)) {
    categoryFilter.value = requestedCategory;
  }

  // Tampilkan seluruh produk pertama kali.
  displayProducts();

  // Pengecekan jumlah data produk.
  console.log("Total produk Ryan Fashion:", products.length);
}
