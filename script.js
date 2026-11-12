
const products = [
  {id:1,name:"Kaos Oversize Black",cat:"Kaos",price:85000,img:"photo-1521572163474-6864f9cf17ab"},
  {id:2,name:"Kaos White Premium",cat:"Kaos",price:90000,img:"photo-1503342217505-b0a15ec3261c"},
  {id:3,name:"Kaos Casual",cat:"Kaos",price:95000,img:"photo-1529139574466-a303027c1d8b"},
  {id:4,name:"Kaos Streetwear",cat:"Kaos",price:110000,img:"photo-1503341455253-b2e723bb3dbb"},
  {id:5,name:"Kemeja Formal",cat:"Kemeja",price:150000,img:"photo-1598033129183-c4f50c736f10"},
  {id:6,name:"Kemeja Casual",cat:"Kemeja",price:135000,img:"photo-1603252109303-2751441dd157"},
  {id:7,name:"Kemeja Linen",cat:"Kemeja",price:165000,img:"photo-1596755094514-f87e34085b2c"},
  {id:8,name:"Kemeja Premium",cat:"Kemeja",price:175000,img:"photo-1598033129183-c4f50c736f10"},
  {id:9,name:"Hoodie Black",cat:"Hoodie",price:180000,img:"photo-1556821840-3a63f95609a7"},
  {id:10,name:"Hoodie Grey",cat:"Hoodie",price:190000,img:"photo-1578681994506-b8f463449011"},
  {id:11,name:"Hoodie Casual",cat:"Hoodie",price:175000,img:"photo-1556821840-3a63f95609a7"},
  {id:12,name:"Hoodie Oversize",cat:"Hoodie",price:200000,img:"photo-1618354691373-d851c5c3a990"},
  {id:13,name:"Celana Jeans",cat:"Celana",price:170000,img:"photo-1542272604-787c3835535d"},
  {id:14,name:"Celana Chino",cat:"Celana",price:155000,img:"photo-1473966968600-fa801b869a1a"},
  {id:15,name:"Celana Cargo",cat:"Celana",price:185000,img:"photo-1517438476312-10d79c077509"},
  {id:16,name:"Celana Casual",cat:"Celana",price:145000,img:"photo-1506629905607-d9d5e2d4b1b5"},
  {id:17,name:"Jaket Denim",cat:"Jaket",price:220000,img:"photo-1551028719-00167b16eac5"},
  {id:18,name:"Jaket Casual",cat:"Jaket",price:210000,img:"photo-1591047139829-d91aecb6caea"},
  {id:19,name:"Jaket Streetwear",cat:"Jaket",price:250000,img:"photo-1544923246-77307dd654cb"},
  {id:20,name:"Jaket Premium",cat:"Jaket",price:275000,img:"photo-1551028719-00167b16eac5"}
];

let cart = JSON.parse(localStorage.getItem("ryanCart") || "[]");
let activeCategory = "Semua";

function rupiah(number) {
  return "Rp" + number.toLocaleString("id-ID");
}

function saveCart() {
  localStorage.setItem("ryanCart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const count = document.getElementById("cartCount");
  if (count) {
    count.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  }

  const items = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");

  if (!items || !total) return;

  items.innerHTML = cart.map(item => `
    <div class="cart-row">
      <span>${item.name} x ${item.qty}</span>
      <strong>${rupiah(item.price * item.qty)}</strong>
      <button onclick="removeItem(${item.id})">Hapus</button>
    </div>
  `).join("");

  const amount = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  total.textContent = "Total: " + rupiah(amount);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({...product, qty:1});
  }

  saveCart();
  alert(product.name + " berhasil ditambahkan!");
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const featured = document.getElementById("featuredGrid");
  const search = document.getElementById("searchInput");

  if (!grid && !featured) return;

  const keyword = search ? search.value.toLowerCase() : "";

  const filtered = products.filter(p =>
    (activeCategory === "Semua" || p.cat === activeCategory) &&
    p.name.toLowerCase().includes(keyword)
  );

  if (grid) {
    grid.innerHTML = filtered.map(p => `
      <div class="product-card">
        <img src="https://images.unsplash.com/${p.img}?w=600&auto=format&fit=crop"
             alt="${p.name}" loading="lazy">
        <div class="product-info">
          <small>${p.cat}</small>
          <h3>${p.name}</h3>
          <p class="price">${rupiah(p.price)}</p>
          <button class="add-cart" onclick="addToCart(${p.id})">
            <i class="fa-solid fa-bag-shopping"></i>
            Tambah Keranjang
          </button>
        </div>
      </div>
    `).join("");

    document.getElementById("emptyMessage").textContent =
      filtered.length ? "" : "Produk tidak ditemukan.";
  }

  if (featured) {
    featured.innerHTML = products.slice(0, 4).map(p => `
      <div class="product-card">
        <img src="https://images.unsplash.com/${p.img}?w=600&auto=format&fit=crop"
             alt="${p.name}" loading="lazy">
        <div class="product-info">
          <small>${p.cat}</small>
          <h3>${p.name}</h3>
          <p class="price">${rupiah(p.price)}</p>
          <button class="add-cart" onclick="addToCart(${p.id})">
            Tambah Keranjang
          </button>
        </div>
      </div>
    `).join("");
  }
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b =>
      b.classList.remove("active")
    );
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  const phone = "6281234567890";
  const order = cart.map(item =>
    `${item.name} x ${item.qty} = ${rupiah(item.price * item.qty)}`
  ).join("\n");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  const message = `Halo RYAN FASHION, saya ingin memesan:\n${order}\nTotal: ${rupiah(total)}`;

  window.open(
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

renderProducts();
updateCart();
