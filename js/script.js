/*

// Utstyrsinformasjon
const equipmentData = [
    { id: 1, name: "Snowboard", image: "snowboard.jpg", available: 10, max: 10 },
];
let cartCount = 0; 
const equipmentList = document.getElementById("equipmentList");
equipmentData.forEach((item, index) => {
    const equipmentItem = document.createElement("div");
    equipmentItem.className = "equipment-item";
    equipmentItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="equipment-info">
            <h3>${item.name}</h3>
            <span id="stock-${index}">${item.available} / ${item.max}</span>
        </div>
        <div class="equipment-actions">
            <button id="button-${index}" ${item.available === 0 ? "disabled" : ""}>
                ${item.available > 0 ? "Leie" : "Ikke tilgjengelig"}
            </button>
        </div>
    `;
    equipmentList.appendChild(equipmentItem);
    // Legger til event handler for knappen
    const button = document.getElementById(`button-${index}`);
    button.addEventListener("click", () => {
        if (item.available > 0) {
            item.available--; // Reduserer tilgjengelig mengde
            cartCount++; // Øker antall varer i handlekurven
            updateCartCounter(); // Oppdaterer visningen av telleren
            const stockElement = document.getElementById(`stock-${index}`);
            stockElement.textContent = `${item.available} / ${item.max}`; // Oppdaterer visningen
            // Hvis utstyret er utsolgt, deaktiverer knappen
            if (item.available === 0) {
                button.textContent = "Ikke tilgjengelig";
                button.disabled = true;
            }
            // Oppdaterer handlekurven
            addToCart(item);
            updateCartModal();
        }
    });
});
// Funksjon for å oppdatere handlekurv teller
function updateCartCounter() {
    const cartCounter = document.getElementById("cart-counter");
    cartCounter.textContent = cartCount;
}
let cart = []; // Array for varer i handlekurven
// Oppdaterer handlekurv data
function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartCounter();
}
// Åpne og lukke modalvindu
const modal = document.getElementById("cart-modal");
const cartButton = document.querySelector(".cart-button");
const closeButton = document.querySelector(".close");
cartButton.addEventListener("click", () => {
    updateCartModal();
    modal.style.display = "block";
});
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
// Oppdaterer innholdet i modalvinduet
function updateCartModal() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Tømmer listen
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<li>Din handlekurv er tom.</li>";
        return;
    }
    cart.forEach((cartItem) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${cartItem.name} x ${cartItem.quantity}`;
        cartItemsContainer.appendChild(listItem);
    });
}
// Bekreftelse på utleie
const rentButton = document.getElementById("rent-button");
rentButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Handlekurven er tom.");
        return;
    }
    alert("Takk for at du leide utstyr!");
    cart = []; // Tømmer handlekurven
    updateCartCounter();
    modal.style.display = "none";
});
// Filtrering etter kategori
const filterButton = document.getElementById("filter-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
// Bytte synlighet på dropdown-meny
filterButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});
// Lukker menyen ved klikk utenfor
window.addEventListener("click", (event) => {
    if (!filterButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show");
    }
});
// Funksjon for å filtrere etter valgt kategori
function filterByCategory(category) {
    const equipmentList = document.querySelectorAll(".equipment-item");
    equipmentList.forEach((item) => {
        const equipmentName = item.querySelector(".equipment-info h3").textContent;
        if (category === "all" || equipmentName === category) {
            item.style.display = "flex"; // Vist element
        } else {
            item.style.display = "none"; // Skjult element
        }
    });
}
// Behandler klikk på dropdown-elementet
dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
        const category = item.getAttribute("data-category");
        filterByCategory(category);
        dropdownMenu.classList.remove("show"); // Lukker menyen etter valg
    });
});

 */