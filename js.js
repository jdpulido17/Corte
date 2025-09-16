// ---------------------------
// Menú hamburguesa responsivo
// ---------------------------
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Alternar icono ☰ ↔ ✖
    if (menuBtn.textContent === "☰") {
      menuBtn.textContent = "✖";
    } else {
      menuBtn.textContent = "☰";
    }
  });
}

// ---------------------------
// Año automático en el footer
// ---------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
