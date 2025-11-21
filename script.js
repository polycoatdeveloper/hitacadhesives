
// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Close mobile nav when clicking a link (optional nicety)
mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (mainNav.classList.contains("open")) {
      mainNav.classList.remove("open");
    }
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
