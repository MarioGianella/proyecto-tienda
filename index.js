let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.nombre} - $${item.precio}`;
    carritoElement.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function realizarCompra() {
  // Aquí podrías implementar la lógica para procesar la compra
  alert("Compra realizada por $" + total);
  carrito = [];
  total = 0;
  actualizarCarrito();
}
