let currentSlide = 0;
const slides = document.querySelectorAll('.wrapper-holder div');
const buttons = document.querySelectorAll('.button-holder .button');

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    slides[index].style.display = 'block';
    buttons[index].classList.add('active');
    currentSlide = index;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        let itemName = this.getAttribute("data-name");
        let itemPrice = parseFloat(this.getAttribute("data-price"));

        let existingItem = cart.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    });
});

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

updateCartCount();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});