// DATA 100 PRODUK - edit nama / harga di sini saja
const DATA = {
Kaos: ["Kaos Oversize Putih Polos","Kaos Basic Hitam Premium","Kaos Oversize Coklat Muda","Kaos Lengan Panjang Abu","Kaos Grafis Retro Cream","Kaos Polos Sage Green","Kaos Crop Top Putih","Kaos Oversize Navy","Kaos Tie Dye Pastel","Kaos Linen Krem","Kaos Kerah V Maroon","Kaos Stripe Hitam Putih","Kaos Baby Tee Pink","Kaos Oversize Charcoal","Kaos Oversize Olive"],
Kemeja: ["Kemeja Flanel Kotak Coklat","Kemeja Putih Formal","Kemeja Linen Sage","Kemeja Denim Biru Muda","Kemeja Kotak Pastel","Kemeja Oversize Krem","Kemeja Satin Champagne","Kemeja Garis Biru Putih","Kemeja Crop Denim","Kemeja Plaid Merah","Kemeja Boyfriend Putih","Kemeja Corduroy Coklat","Kemeja Chambray Abu","Kemeja Motif Bunga Kecil","Kemeja Oversize Putih Salur"],
Dress: ["Dress Midi Bunga Pink","Dress Maxi Hitam Elegan","Dress Gamis Coklat Susu","Dress Satin Champagne","Dress Knit Bodycon Abu","Dress Floral Kuning Pastel","Dress Puff Sleeve Putih","Dress A-Line Biru Muda","Dress Gamis Plisket Navy","Dress Vintage Kotak","Dress Tunik Bunga Krem","Dress Babydoll Lavender","Dress Maxi Satin Maroon","Dress Linen Terracotta"],
Hijab: ["Hijab Segi Empat Voal Hitam","Hijab Pashmina Ceruty Coklat","Hijab Voal Motif Bunga","Hijab Satin Champagne","Hijab Segi Empat Sage","Hijab Pashmina Plisket Abu","Hijab Voal Polos Putih","Hijab Instan Jersey Navy","Hijab Motif Pastel Pink","Hijab Segi Empat Denim","Hijab Pashmina Silk Maroon","Hijab Voal Gradasi Krem","Hijab Bergo Sport Hitam","Hijab Segi Empat Bordir"],
Celana: ["Celana Jeans High Waist Biru","Celana Kulot Linen Krem","Celana Cargo Coklat","Celana Loose Jeans Hitam","Celana Palazzo Hitam","Celana Jeans Wide Leg Light","Celana Chino Krem","Celana Cutbray Denim","Celana Jogger Abu","Celana Plisket Coklat","Celana Jeans Straight Biru Tua","Celana Linen Putih","Celana Cargo Sage","Celana Rok Celana Hitam"],
Jaket: ["Jaket Bomber Cream","Jaket Denim Oversize","Jaket Hoodie Abu Premium","Jaket Cardigan Knit Coklat","Jaket Blazer Krem Formal","Jaket Parka Sage","Jaket Varsity Coklat Krem","Jaket Crop Denim Hitam","Jaket Rajut Oversize Putih","Jaket Windbreaker Pastel","Jaket Kulit Sintetis Hitam","Jaket Blazer Kotak Abu","Jaket Fleece Coklat Muda","Jaket Denim Crop Biru"],
Setelan: ["Setelan Knit Abu 2 Pcs","Setelan Kemeja Celana Krem","Setelan Blazer Rok Hitam","Setelan Tunik Celana Sage","Setelan Kaos Celana Coklat","Setelan Gamis Outer Navy","Setelan Crop Blazer Krem","Setelan Linen Putih 2 Pcs","Setelan Sweater Rok Abu","Setelan Denim Jaket Celana","Setelan Satin Champagne","Setelan Cardigan Celana Krem","Setelan Atasan Bawahan Pink","Setelan Olahraga Abu Hitam"]
};
const EMOJI = {Kaos:"👕",Kemeja:"👔",Dress:"👗",Hijab:"🧕",Celana:"👖",Jaket:"🧥",Setelan:"👚"};
const COLORS = ["#f5e6d3","#e8d5c4","#d9b8a3","#c9a87c","#f9d5d8","#e6e6fa","#d4e8d4","#cce5ff","#fff3cd","#e0e0e0","#2b2b2b","#8b5e3c"];
const PRICES = [45000,55000,65000,75000,85000,95000,110000,125000,135000,149000,165000,175000,189000,210000,235000,259000,289000,320000];
let PRODUCTS = [], id = 0;
for (const cat in DATA) {
  DATA[cat].forEach(name => {
    id++;
    const price = PRICES[(id * 7) % PRICES.length];
    const old = id % 3 === 0 ? price + 30000 : null;
    const label = id % 5 === 0 ? "Bestseller" : id % 4 === 0 ? "Baru" : old ? "Diskon" : "";
    PRODUCTS.push({id, name, cat, price, old, label, rating: Math.round((4.3 + ((id * 13) % 7) / 10) * 10) / 10, emoji: EMOJI[cat], color: COLORS[id % COLORS.length]});
  });
}
// Jika hitungan belum 100, potong / lengkapi otomatis
PRODUCTS = PRODUCTS.slice(0, 100);

let cart = [];
function rupiah(n){return 'Rp ' + n.toLocaleString('id-ID')}
function card(p){return `<div class="card"><div class="img" style="background:${p.color}">${p.emoji}</div><div class="body">${p.label?`<span class="badge">${p.label}</span>`:''}<h3>${p.name}</h3><p class="muted">${p.cat} • ⭐ ${p.rating}</p><p><span class="price">${rupiah(p.price)}</span>${p.old?`<span class="old">${rupiah(p.old)}</span>`:''}</p><div class="actions"><button class="buy" onclick="buy(${p.id})">Beli via WA</button><button class="add" onclick="addCart(${p.id})">+ Keranjang</button></div></div></div>`}
function render(){
  let q = document.getElementById('search').value.toLowerCase();
  let cat = document.getElementById('filterCat').value, pr = document.getElementById('filterPrice').value, s = document.getElementById('sort').value;
  let list = PRODUCTS.filter(p => (cat === 'Semua' || p.cat === cat) && (p.name.toLowerCase().includes(q)) && ((pr === 'Semua') || (pr === 'murah' && p.price < 100000) || (pr === 'menengah' && p.price >= 100000 && p.price <= 200000) || (pr === 'mahal' && p.price > 200000)));
  if(s === 'murah') list.sort((a,b) => a.price - b.price);
  if(s === 'mahal') list.sort((a,b) => b.price - a.price);
  if(s === 'populer') list.sort((a,b) => b.rating - a.rating);
  document.getElementById('productGrid').innerHTML = list.map(card).join('');
  document.getElementById('countLabel').textContent = 'Menampilkan ' + list.length + ' produk';
}
function go(page){
  document.querySelectorAll('.page').forEach(e => e.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  document.querySelectorAll('#nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  window.scrollTo(0,0);
}
document.querySelectorAll('#nav button').forEach(b => b.onclick = () => go(b.dataset.page));
['search','filterCat','filterPrice','sort'].forEach(id => document.getElementById(id).addEventListener('input', render));
document.getElementById('featured').innerHTML = PRODUCTS.filter(p => p.label === 'Bestseller').slice(0,8).map(card).join('');
const koleksi = [['Kaos & T-Shirt','👕','14 produk, kaos harian yang adem.'],['Kemeja','👔','14 produk, formal sampai santai.'],['Dress & Gamis','👗','14 produk, elegan & feminin.'],['Hijab','🧕','14 produk, voal & pashmina.'],['Celana & Jeans','👖','14 produk, nyaman dipakai harian.'],['Jaket & Outer','🧥','14 produk, hangat & stylish.'],['Setelan','👚','14 produk, langsung matching.'],['Sale','🔥','Produk diskon sampai 30%.']];
document.getElementById('koleksiGrid').innerHTML = koleksi.map(k => `<div><div style="font-size:44px">${k[1]}</div><h3>${k[0]}</h3><p class="muted">${k[2]}</p><button class="btn" style="margin-top:10px" onclick="go('produk')">Lihat Koleksi →</button></div>`).join('');
const testi = [['Sari, Surabaya','Bajunya bagus banget, bahannya adem!'],['Dewi, Malang','Pengiriman cepat, admin ramah.'],['Putri, Jakarta','Sudah langganan 3x, selalu puas.'],['Ayu, Sidoarjo','Ukuran pas, harga terjangkau.'],['Rina, Bandung','Dressnya cantik, banyak yang nanya.'],['Nadia, Yogyakarta','Packing rapi, kualitas premium.'],['Lia, Semarang','Hijabnya nyaman, tidak gerah.'],['Maya, Bali','Jaketnya tebal & stylish.'],['Intan, Medan','COD mudah, recommended!']];
document.getElementById('testiGrid').innerHTML = testi.map(t => `<div><div class="avatar">${t[0][0]}</div><p style="margin:10px 0">⭐⭐⭐⭐⭐</p><p>"${t[1]}"</p><b>${t[0]}</b></div>`).join('');
function addCart(id){let p = PRODUCTS.find(x => x.id === id); cart.push(p); updateCart(); alert(p.name + ' masuk keranjang!')}
function updateCart(){
  document.getElementById('cartCount').textContent = cart.length;
  document.getElementById('cartItems').innerHTML = cart.length ? cart.map((p,i) => `<p>${i+1}. ${p.name} - ${rupiah(p.price)}</p>`).join('') : '<p class="muted">Keranjang masih kosong.</p>';
  document.getElementById('cartTotal').textContent = 'Total: ' + rupiah(cart.reduce((a,b) => a + b.price, 0));
}
function toggleCart(open){document.getElementById('cartDrawer').style.display = open ? 'block' : 'none'}
function buy(id){let p = PRODUCTS.find(x => x.id === id); alert('Kamu mau beli: ' + p.name + ' (' + rupiah(p.price) + ')\nChat WhatsApp kami: 0812-3456-7890')}
function checkout(){
  if(!cart.length){alert('Keranjang masih kosong'); return}
  alert('Checkout ' + cart.length + ' produk, total ' + rupiah(cart.reduce((a,b) => a + b.price, 0)) + '\nLanjut ke WhatsApp: 0812-3456-7890');
}
render(); updateCart();
