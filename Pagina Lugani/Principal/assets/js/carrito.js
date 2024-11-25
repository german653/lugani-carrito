let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addItem(title, price) {
    // Obtener el carrito actual del localStorage o crear uno nuevo si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Crear el nuevo item
    const item = {
        title: title,
        price: parseInt(price)  // Convertimos el precio a número
    };
    
    // Agregar el item al carrito
    cart.push(item);
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mostrar confirmación
    alert('Producto agregado al carrito');
}

function removeItem(index) {
    cart.splice(index, 1);
    updateLocalStorage();
    renderCart();
}

function emptyCart() {
    cart = [];
    updateLocalStorage();
    renderCart();
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('show');
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        // Asegurarse de usar item.title para mostrar el título
        li.innerHTML = `${item.title} - $${item.price} <button onclick="removeItem(${index})">Eliminar</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${total}`;
}

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Importante: cargar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', renderCart);