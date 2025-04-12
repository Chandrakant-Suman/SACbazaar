// Toggle menu for mobile
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// Add to cart logic (you can add buttons with class="add-to-cart" in future)
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.dataset.id;
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if item already exists
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            // alert(`${productName} added to cart!`);
        });
    });
});

// Scroll animations (optional)
if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        duration: 800,
        origin: 'bottom',
        reset: false
    });
}
