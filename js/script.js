
"use strict";

/* ==========================================
   K-ERA CONFIGURATION
   Update these details before launching.
========================================== */

const CONFIG = {
  whatsappNumber: "2349096914471",
  instagramUrl: "https://www.instagram.com/"
};

/* ==========================================
   PRODUCT CATALOG
   Replace sample products, prices and images.
   Prices are in Nigerian naira.
========================================== */

const products = [
  {
    id: 1,
    name: "Essential Oversized Tee 1",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-1.jpeg"
  },
  {
    id: 2,
    name: "Essential Oversized Tee 2",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-2.jpeg"
  },
  {
    id: 3,
    name: "Essential Oversized Tee 3",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-3.jpeg"
  },
  {
    id: 4,
    name: "Essential Oversized Tee 4",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-4.jpg"
  },
  {
    id: 5,
    name: "Essential Oversized Tee 5",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-5.png"
  },
  {
    id: 6,
    name: "Essential Oversized Tee 6",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-6.jpg"
  },
  {
    id: 7,
    name: "Essential Oversized Tee 7",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-7.jpg"
  },
  {
    id: 8,
    name: "Essential Oversized Tee 8",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-8.png"
  },
  /*{
    id: 9,
    name: "Essential Oversized Tee",
    category: "T-shirts",
    price: 10000,
    tag: "BESTSELLER",
    colors: "Black / White",
    image: "images/polo-9.jpg"
  },*/
  {
    id: 10,
    name: "Plain Crew Neck Tee 10",
    category: "T-shirts",
    price: 5000,
    tag: "NEW DROP",
    colors: "White / Black / Red / Navy-Blue / Grey",
    image: "images/polo-10.jpg"
  },
  /*{
    id: 11,
    name: "Signature Hoodie",
    category: "Hoodies",
    price: 25000,
    tag: "ESSENTIAL",
    colors: "Black / Grey",
    image: "images/hoodies-1.jpg"
  },*/
  {
    id: 16,
    name: "Vintage Short Sleeve Shirt 1",
    category: "Casual wear",
    price: 10000,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/casual-1.jpeg"
  },
  {
    id: 17,
    name: "Vintage Short Sleeve Shirt 2",
    category: "Casual wear",
    price: 10000,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/casual-2.jpeg"
  },
  {
    id: 18,
    name: "Odogwu Collar 1",
    category: "Casual wear",
    price: 14000,
    tag: "EVERYDAY",
    colors: "Black / White",
    image: "images/collar-1.jpeg"
  },
  {
    id: 19,
    name: "Odogwu Collar 2",
    category: "Casual wear",
    price: 14000,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/collar-2.jpeg"
  },
  {
    id: 20,
    name: "Odogwu Collar 3",
    category: "Casual wear",
    price: 14000,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/collar-3.jpeg"
  },
   {
    id: 21,
    name: "Cotton Collar 1",
    category: "Casual wear",
    price: 8500,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/collar-4.jpeg"
  },
  {
    id: 22,
    name: "Cotton Collar 2",
    category: "Casual wear",
    price: 8500,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/collar-5.jpeg"
  },
  /*{
    id: 25,
    name: "Urban Cargo Pants",
    category: "Casual wear",
    price: 10000,
    tag: "EVERYDAY",
    colors: "Black / Olive",
    image: "images/casual-3.jpeg"
  },*/

];

/* ==========================================
   APPLICATION STATE
========================================== */

let cart = [];
let activeCategory = "All";

const $ = (selector) => document.querySelector(selector);

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);

/* ==========================================
   PRODUCT DISPLAY AND FILTERS
========================================== */

function renderProducts() {
  const visibleProducts = products.filter((product) =>
    activeCategory === "All" ||
    product.category === activeCategory
  );

  $("#products").innerHTML = visibleProducts.map((product) => `
    <article class="product">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
        <span class="product-tag">${product.tag}</span>
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-meta">
          ${product.category} · ${product.colors}
        </p>
        <div class="product-price">
          ${formatPrice(product.price)}
        </div>

        <div class="product-actions">
          <select
            class="size-select"
            id="size-${product.id}"
            aria-label="Select size for ${product.name}"
          >
            <option value="S">Size S</option>
            <option value="M" selected>Size M</option>
            <option value="L">Size L</option>
            <option value="XL">Size XL</option>
            <option value="XXL">Size XXL</option>
          </select>

          <button
            class="add-button"
            data-add="${product.id}"
          >
            ADD +
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach((filter) => {
      filter.classList.toggle("active", filter === button);
    });

    renderProducts();
  });
});

// Event delegation: works for every rendered product.
$("#products").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");

  if (!button) return;

  const productId = Number(button.dataset.add);
  const size = $(`#size-${productId}`).value;

  addToCart(productId, size);
});

/* ==========================================
   SHOPPING CART
========================================== */

function addToCart(productId, size) {
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  const existingItem = cart.find(
    (item) => item.id === productId && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      size,
      quantity: 1
    });
  }

  renderCart();
  toggleCart(true);
}

function removeFromCart(productId, size) {
  cart = cart.filter(
    (item) => !(item.id === productId && item.size === size)
  );

  renderCart();
}

function renderCart() {
  const itemCount = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  $("#cart-count").textContent = itemCount;
  $("#cart-total").textContent = formatPrice(subtotal);

  if (cart.length === 0) {
    $("#cart-items").innerHTML =
      '<p class="empty-cart">Your bag is empty. Find your fit.</p>';
    return;
  }

  $("#cart-items").innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <p class="muted small">
          Size ${item.size} · Quantity ${item.quantity}
        </p>
        <button
          class="remove-button"
          data-remove="${item.id}"
          data-size="${item.size}"
        >
          Remove
        </button>
      </div>

      <strong>
        ${formatPrice(item.price * item.quantity)}
      </strong>
    </div>
  `).join("");
}

$("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");

  if (!button) return;

  removeFromCart(
    Number(button.dataset.remove),
    button.dataset.size
  );
});

/* ==========================================
   CART DRAWER
========================================== */

function toggleCart(isOpen) {
  $("#cart-overlay").classList.toggle("open", isOpen);
  $("#cart-overlay").setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";

  if (isOpen) {
    $("#close-cart").focus();
  } else {
    $("#open-cart").focus();
  }
}

$("#open-cart").addEventListener("click", () => toggleCart(true));
$("#close-cart").addEventListener("click", () => toggleCart(false));

$("#cart-overlay").addEventListener("click", (event) => {
  if (event.target === $("#cart-overlay")) {
    toggleCart(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleCart(false);
  }
});

/* ==========================================
   WHATSAPP ORDER CHECKOUT
========================================== */

function checkout() {
  if (cart.length === 0) {
    alert("Your bag is empty. Add a product first.");
    return;
  }

  const number = CONFIG.whatsappNumber;

  // Prevent accidental use of the sample phone number.
  if (!/^\d{10,15}$/.test(number) || number === "2348012345678") {
    alert("Please set your real WhatsApp number in js/script.js.");
    return;
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const orderLines = cart.map((item) =>
    `${item.name} | Size: ${item.size} | Qty: ${item.quantity} | ${
      formatPrice(item.price * item.quantity)
    }`
  );

  const message = [
    "Hello K-ERA! I would like to place an order.",
    "",
    ...orderLines,
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    "",
    "Please confirm product availability, delivery fee and payment instructions.",
    "",
    "Customer name:",
    "Delivery address:"
  ].join("\n");

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

$("#checkout").addEventListener("click", checkout);

/* ==========================================
   FOOTER AND CONTACT LINKS
========================================== */

$("#contact-whatsapp").href =
  `https://wa.me/${CONFIG.whatsappNumber}`;

$("#instagram-link").href = CONFIG.instagramUrl;

$("#year").textContent = new Date().getFullYear();

/* ==========================================
   INITIALIZE WEBSITE
========================================== */

renderProducts();
renderCart();
