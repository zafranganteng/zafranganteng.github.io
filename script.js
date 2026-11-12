const products = [
  // ================= PAKAIAN PRIA =================
  {name:"Kaos Oversize Basic",category:"Pria",price:85000,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"},
  {name:"Kaos Polos Premium",category:"Pria",price:75000,image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"},
  {name:"Kemeja Casual",category:"Pria",price:150000,image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"},
  {name:"Kemeja Formal",category:"Pria",price:185000,image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"},
  {name:"Hoodie Premium",category:"Pria",price:220000,image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"},
  {name:"Jaket Denim",category:"Pria",price:275000,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"},
  {name:"Jaket Bomber",category:"Pria",price:250000,image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600"},
  {name:"Celana Jeans",category:"Pria",price:190000,image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"},
  {name:"Celana Chino",category:"Pria",price:175000,image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600"},
  {name:"Celana Cargo",category:"Pria",price:210000,image:"https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600"},
  {name:"Polo Shirt",category:"Pria",price:125000,image:"https://images.unsplash.com/photo-1625910513413-5fc7e4c4b9e7?w=600"},
  {name:"Sweater Pria",category:"Pria",price:195000,image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"},
  {name:"Jaket Varsity",category:"Pria",price:290000,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"},
  {name:"Celana Pendek",category:"Pria",price:95000,image:"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600"},
  {name:"Kemeja Flanel",category:"Pria",price:165000,image:"https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600"},
  {name:"Jaket Windbreaker",category:"Pria",price:240000,image:"https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600"},
  {name:"Kaos Graphic",category:"Pria",price:110000,image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"},
  {name:"Celana Formal",category:"Pria",price:180000,image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600"},
  {name:"Sweatshirt",category:"Pria",price:185000,image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"},
  {name:"Jaket Kulit",category:"Pria",price:450000,image:"https://images.unsplash.com/photo-1520975958225-9e4b9f3f2a20?w=600"},

  // ================= PAKAIAN WANITA =================
  {name:"Dress Casual",category:"Wanita",price:185000,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"},
  {name:"Blouse Elegan",category:"Wanita",price:145000,image:"https://images.unsplash.com/photo-1564257577-9f1d7a1b6f7d?w=600"},
  {name:"Cardigan Wanita",category:"Wanita",price:175000,image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"},
  {name:"Rok Plisket",category:"Wanita",price:125000,image:"https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=600"},
  {name:"Kemeja Wanita",category:"Wanita",price:155000,image:"https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600"},
  {name:"Sweater Wanita",category:"Wanita",price:195000,image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600"},
  {name:"Celana Kulot",category:"Wanita",price:150000,image:"https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600"},
  {name:"Jeans Wanita",category:"Wanita",price:195000,image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"},
  {name:"Tunik Muslimah",category:"Wanita",price:185000,image:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600"},
  {name:"Gamis Elegan",category:"Wanita",price:275000,image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600"},
  {name:"Blazer Wanita",category:"Wanita",price:250000,image:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600"},
  {name:"Jaket Denim Wanita",category:"Wanita",price:230000,image:"https://images.unsplash.com/photo-1548624149-f3c4e8e4d9c7?w=600"},
  {name:"Kaos Crop Top",category:"Wanita",price:90000,image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"},
  {name:"Rok Midi",category:"Wanita",price:160000,image:"https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=600"},
  {name:"Dress Floral",category:"Wanita",price:220000,image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600"},
  {name:"Outer Wanita",category:"Wanita",price:180000,image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"},
  {name:"Celana Legging",category:"Wanita",price:95000,image:"https://images.unsplash.com/photo-1506629905607-d9c297d7e5e2?w=600"},
  {name:"Kemeja Oversize",category:"Wanita",price:165000,image:"https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600"},
  {name:"Dress Pesta",category:"Wanita",price:350000,image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600"},
  {name:"Long Cardigan",category:"Wanita",price:210000,image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"},

  // ================= AKSESORIS =================
  {name:"Tas Selempang",category:"Aksesoris",price:175000,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"},
  {name:"Tas Tote Bag",category:"Aksesoris",price:95000,image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600"},
  {name:"Tas Ransel",category:"Aksesoris",price:225000,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"},
  {name:"Jam Tangan Elegan",category:"Aksesoris",price:350000,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"},
  {name:"Kacamata Fashion",category:"Aksesoris",price:85000,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"},
  {name:"Dompet Kulit",category:"Aksesoris",price:125000,image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"},
  {name:"Topi Baseball",category:"Aksesoris",price:75000,image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600"},
  {name:"Ikat Pinggang",category:"Aksesoris",price:90000,image:"https://images.unsplash.com/photo-1624222247344-550fb8d0a6f8?w=600"},
  {name:"Kalung Minimalis",category:"Aksesoris",price:65000,image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"},
  {name:"Gelang Fashion",category:"Aksesoris",price:55000,image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"},
  {name:"Anting Elegan",category:"Aksesoris",price:70000,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"},
  {name:"Scarf Premium",category:"Aksesoris",price:95000,image:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600"},
  {name:"Sepatu Sneakers",category:"Aksesoris",price:325000,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"},
  {name:"Sandal Casual",category:"Aksesoris",price:115000,image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600"},
  {name:"Hair Clip",category:"Aksesoris",price:35000,image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"},
  {name:"Pouch Makeup",category:"Aksesoris",price:85000,image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"},
  {name:"Bucket Hat",category:"Aksesoris",price:80000,image:"https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=600"},
  {name:"Gantungan Tas",category:"Aksesoris",price:40000,image:"https://images.unsplash.com/photo-1614179689702-355944cd0918?w=600"},
  {name:"Sarung Tangan",category:"Aksesoris",price:60000,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"},
  {name:"Parfum Fashion",category:"Aksesoris",price:185000,image:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"}

  // ========== TAMBAHAN PAKAIAN PRIA ==========
  {name:"Kaos Streetwear",category:"Pria",price:120000,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"},
  {name:"Kemeja Linen",category:"Pria",price:195000,image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"},
  {name:"Hoodie Oversize",category:"Pria",price:235000,image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"},
  {name:"Jaket Casual",category:"Pria",price:280000,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"},
  {name:"Celana Jogger",category:"Pria",price:145000,image:"https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600"},
  {name:"Kaos Polo Premium",category:"Pria",price:135000,image:"https://images.unsplash.com/photo-1625910513413-5fc7e4c4b9e7?w=600"},
  {name:"Sweater Rajut",category:"Pria",price:210000,image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"},
  {name:"Celana Cargo Premium",category:"Pria",price:225000,image:"https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600"},
  {name:"Kemeja Motif",category:"Pria",price:175000,image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"},
  {name:"Jaket Sport",category:"Pria",price:260000,image:"https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600"},

  // ========== TAMBAHAN PAKAIAN WANITA ==========
  {name:"Blouse Korean Style",category:"Wanita",price:155000,image:"https://images.unsplash.com/photo-1564257577-9f1d7a1b6f7d?w=600"},
  {name:"Dress Minimalis",category:"Wanita",price:225000,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"},
  {name:"Cardigan Rajut",category:"Wanita",price:185000,image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"},
  {name:"Rok A-Line",category:"Wanita",price:145000,image:"https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=600"},
  {name:"Blazer Formal",category:"Wanita",price:275000,image:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600"},
  {name:"Outer Korean",category:"Wanita",price:195000,image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"},
  {name:"Tunik Casual",category:"Wanita",price:180000,image:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600"},
  {name:"Celana Wide Leg",category:"Wanita",price:175000,image:"https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600"},
  {name:"Dress Floral Premium",category:"Wanita",price:245000,image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600"},
  {name:"Kaos Basic Wanita",category:"Wanita",price:85000,image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600"},

  // ========== TAMBAHAN AKSESORIS ==========
  {name:"Handbag Premium",category:"Aksesoris",price:285000,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"},
  {name:"Tas Mini Wanita",category:"Aksesoris",price:165000,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"},
  {name:"Dompet Wanita",category:"Aksesoris",price:110000,image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"},
  {name:"Jam Tangan Classic",category:"Aksesoris",price:325000,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"},
  {name:"Kacamata Hitam",category:"Aksesoris",price:95000,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"},
  {name:"Topi Casual",category:"Aksesoris",price:75000,image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600"},
  {name:"Kalung Gold",category:"Aksesoris",price:85000,image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"},
  {name:"Gelang Elegan",category:"Aksesoris",price:65000,image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"},
  {name:"Sneakers Fashion",category:"Aksesoris",price:350000,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"},
  {name:"Tas Backpack Premium",category:"Aksesoris",price:250000,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"},
];

const productList = document.getElementById("productList");

if (productList) {
  const searchInput = document.getElementById("searchProduct");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortPrice = document.getElementById("sortPrice");
  const productCount = document.getElementById("productCount");
  const noProducts = document.getElementById("noProducts");

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

    let filtered = products.filter(product => {
      const matchText =
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword);

      const matchCategory =
        category === "Semua" || product.category === category;

      return matchText && matchCategory;
    });

    if (sortPrice.value === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    productList.innerHTML = filtered.map(product => `
      <article class="product-card">
        <img src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400/f7f3ec/171717?text=ZAFRA+FASHION'">
        <div class="product-info">
          <p class="product-brand">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="product-price">${formatPrice(product.price)}</p>
          <a class="buy-btn"
             href="https://wa.me/6281234567890?text=${encodeURIComponent("Halo, saya tertarik membeli " + product.name)}"
             target="_blank" rel="noopener">
             Beli Sekarang
          </a>
        </div>
      </article>
    `).join("");

    productCount.textContent =
      `Menampilkan ${filtered.length} dari ${products.length} produk`;

    noProducts.hidden = filtered.length > 0;
  }

  searchInput.addEventListener("input", displayProducts);
  categoryFilter.addEventListener("change", displayProducts);
  sortPrice.addEventListener("change", displayProducts);

  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");

  if (["Pria", "Wanita", "Aksesoris"].includes(requestedCategory)) {
    categoryFilter.value = requestedCategory;
  }

  displayProducts();
}
