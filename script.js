
/* =====================================
   RYAN FASHION - PRODUCT JAVASCRIPT
   TOTAL: 100 PRODUCTS
===================================== */

// GANTI NOMOR INI DENGAN NOMOR WHATSAPP KAMU
// Gunakan kode negara 62, tanpa tanda +
const whatsappNumber = "6281234567890";

// =====================================
// GAMBAR PRODUK
// =====================================

const productImages = {
  Pria: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600",
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
    "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=600",
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600"
  ],

  Wanita: [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600"
  ],

  Aksesoris: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600"
  ]
};

// =====================================
// DAFTAR 100 PRODUK
// =====================================

const productNames = {
  Pria: [
    "Kaos Basic Premium",
    "Kaos Oversize",
    "Kaos Polos Cotton",
    "Kemeja Casual",
    "Kemeja Formal",
    "Kemeja Flanel",
    "Hoodie Minimalist",
    "Hoodie Premium",
    "Sweater Casual",
    "Jaket Denim",
    "Jaket Bomber",
    "Jaket Varsity",
    "Celana Jeans Slim Fit",
    "Celana Jeans Regular",
    "Celana Chino",
    "Celana Cargo",
    "Celana Jogger",
    "Celana Pendek Casual",
    "Polo Shirt Classic",
    "Polo Shirt Premium",
    "Kaos Graphic",
    "Kaos Raglan",
    "Kaos Long Sleeve",
    "Kemeja Linen",
    "Kemeja Oxford",
    "Rompi Casual",
    "Jaket Windbreaker",
    "Jaket Kulit Casual",
    "Sweatshirt Premium",
    "Celana Formal",
    "Celana Training",
    "Setelan Casual",
    "Baju Muslim Pria",
    "Kurta Modern",
    "Outerwear Pria"
  ],

  Wanita: [
    "Blouse Elegant",
    "Blouse Korean Style",
    "Kemeja Wanita",
    "Kemeja Oversize",
    "Tunik Modern",
    "Tunik Casual",
    "Dress Floral",
    "Dress Minimalist",
    "Maxi Dress",
    "Midi Dress",
    "Mini Dress",
    "Gamis Elegant",
    "Gamis Modern",
    "Rok Plisket",
    "Rok A-Line",
    "Rok Denim",
    "Celana Kulot",
    "Celana Palazzo",
    "Celana High Waist",
    "Celana Jeans Wanita",
    "Cardigan Knit",
    "Cardigan Premium",
    "Sweater Wanita",
    "Hoodie Wanita",
    "Jaket Denim Wanita",
    "Outer Korean Style",
    "Blazer Wanita",
    "Vest Fashion",
    "Kaos Wanita Premium",
    "Kaos Crop Top",
    "Setelan Wanita",
    "Jumpsuit Modern",
    "Tunik Muslimah",
    "Long Outer",
    "Piyama Wanita"
  ],

  Aksesoris: [
    "Topi Baseball",
    "Topi Bucket",
    "Topi Casual",
    "Jam Tangan Classic",
    "Jam Tangan Minimalist",
    "Jam Tangan Premium",
    "Tas Selempang",
    "Tas Tote Bag",
    "Tas Handbag",
    "Tas Backpack",
    "Tas Mini Fashion",
    "Dompet Pria",
    "Dompet Wanita",
    "Kacamata Fashion",
    "Kacamata Classic",
    "Kacamata Sunglasses",
    "Ikat Pinggang Kulit",
    "Ikat Pinggang Casual",
    "Gelang Fashion",
    "Gelang Minimalist",
    "Kalung Elegant",
    "Kalung Minimalist",
    "Cincin Fashion",
    "Anting Elegant",
    "Syal Fashion",
    "Scarf Premium",
    "Sunglasses Modern",
    "Pouch Fashion",
    "Card Holder",
    "Gantungan Kunci"
  ]
};

// =====================================
// MEMBUAT 100 PRODUK OTOMATIS
// =====================================

const productPrices = {
  Pria:  [85000, 95000, 110000, 125000, 145000],
  Wanita: [90000, 105000, 120000, 135000, 155000],
  Aksesoris: [45000, 55000, 65000, 75000, 95000]
};

const products = [];

Object.keys(productNames).forEach(category => {

  productNames[category].forEach((name, index) => {

    const priceList = productPrices[category];

    const price = priceList[index % priceList.length]
      + (Math.floor(index / priceList.length) * 5000);

    const images = productImages[category];

    products.push({
      id: products.length + 1,
      name: name,
      category: category,
      price: price,
      image: images[index % images.length]
    });

  });

});

// =====================================
// FORMAT HARGA RUPIAH
// =====================================

function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);
}

// =====================================
// MENAMPILKAN PRODUK
// =====================================

const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");
const searchProduct = document.getElementById("searchProduct");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const noProducts = document.getElementById("noProducts");

function displayProducts(productData) {

  if (!productList) return;

  productList.innerHTML = "";

  if (productCount) {
    productCount.textContent = productData.length;
  }

  if (noProducts) {
    noProducts.hidden = productData.length !== 0;
  }

  productData.forEach(product => {

    const message = encodeURIComponent(
      `Halo Ryan Fashion, saya ingin membeli ${product.name} dengan harga ${formatPrice(product.price)}. Apakah produk ini masih tersedia?`
    );

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x750/F6F2EA/172B3A?text=RYAN+FASHION'"
        >

        <span class="product-badge">${product.category}</span>
      </div>

      <div class="product-info">
        <p class="product-category">${product.category}</p>

        <h3 class="product-name">${product.name}</h3>

        <p class="product-price">${formatPrice(product.price)}</p>

        <a
          class="buy-button"
          href="https://wa.me/${whatsappNumber}?text=${message}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beli Sekarang ↗
        </a>
      </div>
    `;

    productList.appendChild(card);

  });

}

// =====================================
// PENCARIAN, FILTER, DAN SORTING
// =====================================

function filterProducts() {

  if (!productList) return;

  const keyword = searchProduct
    ? searchProduct.value.toLowerCase().trim()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "Semua";

  const selectedSort = sortPrice
    ? sortPrice.value
    : "default";

  let filtered = products.filter(product => {

    const matchName = product.name
      .toLowerCase()
      .includes(keyword);

    const matchCategory =
      selectedCategory === "Semua" ||
      product.category === selectedCategory;

    return matchName && matchCategory;

  });

  // URUTKAN PRODUK

  if (selectedSort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (selectedSort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (selectedSort === "az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  displayProducts(filtered);

}

// =====================================
// EVENT PENCARIAN DAN FILTER
// =====================================

if (searchProduct) {
  searchProduct.addEventListener("input", filterProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterProducts);
}

if (sortPrice) {
  sortPrice.addEventListener("change", filterProducts);
}

// =====================================
// MEMBACA KATEGORI DARI URL
// =====================================

const urlParams = new URLSearchParams(window.location.search);
const selectedUrlCategory = urlParams.get("category");

if (
  categoryFilter &&
  ["Pria", "Wanita", "Aksesoris"].includes(selectedUrlCategory)
) {
  categoryFilter.value = selectedUrlCategory;
}

// =====================================
// TAMPILKAN SEMUA PRODUK PERTAMA KALI
// =====================================

filterProducts();

// =====================================
// CEK JUMLAH PRODUK
// =====================================

console.log("RYAN FASHION: " + products.length + " produk berhasil dibuat.");
