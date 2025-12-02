// Load cart or create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  // Check if item already exists in cart
  let existingItem = cart.find(cartItem => cartItem.priceId === item.priceId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    item.quantity = 1;
    cart.push(item);
  }

  // Save
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector(".cart-count").textContent = count;
}

// Attach to buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const item = {
      id: button.dataset.id,
      name: button.dataset.name,
      priceId: button.dataset.price,             // Stripe price ID
      amount: parseInt(button.dataset.amount),   // Amount in cents
      quantity: 1
    };
    addToCart(item);
  });
});

// Run count on load
updateCartCount();
