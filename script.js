
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cart-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Produk berhasil ditambahkan ke keranjang!");
    });
  });
});
