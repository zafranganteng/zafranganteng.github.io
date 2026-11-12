
/* =====================================
   RYAN FASHION - PRODUCT DATABASE
===================================== */

// GANTI DENGAN NOMOR WHATSAPP TOKO KAMU
const whatsappNumber = "6281234567890";

// GAMBAR PRODUK
const images = {
  Pria: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600",
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
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
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600",
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600"
  ]
};

// DAFTAR 100 PRODUK
const catalog = {
  Pria: [
    "Kaos Basic Premium",
    "Kaos Oversize",
    "Kaos Polos",
    "Kaos Graphic",
    "Kaos Raglan",
    "Kemeja Casual",
    "Kemeja Formal",
    "Kemeja Flanel",
    "Kemeja Linen",
    "Kemeja Oxford",
    "Polo Shirt Classic",
    "Polo Shirt Premium",
    "Hoodie Minimalist",
    "Hoodie Premium",
    "Sweater Casual",
    "Sweatshirt Premium",
    "Jaket Denim",
    "Jaket Bomber",
    "Jaket Varsity",
    "Jaket Windbreaker",
    "Jaket Kulit",
    "Celana Jeans Slim",
    "Celana Jeans Regular",
    "Celana Chino",
    "Celana Cargo",
    "Celana Jogger",
    "Celana Pendek",
    "Celana Formal",
    "Celana Training",
    "Setelan Casual",
    "Baju Muslim Pria",
    "Kurta Modern",
    "Outerwear Pria",
    "Vest Casual",
    "Kaos Long Sleeve"
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
    "Crop Top",
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
    "Tote Bag",
    "Handbag",
    "Backpack",
    "Tas Mini Fashion",
    "Dompet Pria",
    "Dompet Wanita",
    "Kacamata Fashion",
    "Kacamata Classic",
    "Sunglasses",
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

// HARGA DASAR
const basePrices = {
  Pria: 85000,
  Wanita: 90000,
  Aksesoris: 45000
};

// MEMBUAT PRODUK
const products = [];

Object.entries(catalog).forEach(([category, names]) => {
  names.forEach((name, index) => {
    products.push({
      id: products.length + 1,
      name,
      category,
      price: basePrices[category] + (index * 5000),
      image: images[category][index % images[category].length]
    });
  });
});

// FORMAT RUPIAH
function rupiah(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);
}

// AMBIL ELEMEN HTML
const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");
const searchProduct = document.getElementById("searchProduct");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const noProducts = document.getElementById("noProducts");

// TAMPILKAN PRODUK
function showProducts(items) {
  if (!productList) return;

  productList.innerHTML = "";

  if (productCount) {
    productCount.textContent = items.length;
  }

  if (noProducts) {
    noProducts.hidden = items.length > 0;
  }

  items.forEach(product => {
    const message = encodeURIComponent(
      `Halo Ryan Fashion, saya ingin memesan ${product.name} seharga ${rupiah(product.price)}. Apakah masih tersedia?`
    );

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x750/F5F1E8/172B3A?text=RYAN+FASHION'"
        >
        <span class="product-badge">${product.category}</span>
      </div>

      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${rupiah(product.price)}</p>
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

// PENCARIAN DAN FILTER
function filterProducts() {
  if (!productList) return;

  const keyword = searchProduct
    ? searchProduct.value.toLowerCase().trim()
    : "";

  const category = categoryFilter
    ? categoryFilter.value
    : "Semua";

  const sort = sortPrice
    ? sortPrice.value
    : "default";

  let result = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(keyword);
    const matchCategory =
      category === "Semua" || product.category === category;

    return matchName && matchCategory;
  });

  if (sort === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "az") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  showProducts(result);
}

// EVENT
if (searchProduct) {
  searchProduct.addEventListener("input", filterProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterProducts);
}

if (sortPrice) {
  sortPrice.addEventListener("change", filterProducts);
}

// BACA KATEGORI DARI LINK
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get("category");

if (
  categoryFilter &&
  ["Pria", "Wanita", "Aksesoris"].includes(urlCategory)
) {
  categoryFilter.value = urlCategory;
}

// TAMPILKAN PRODUK SAAT HALAMAN DIBUKA
filterProducts();

console.log("Jumlah produk Ryan Fashion:", products.length);
