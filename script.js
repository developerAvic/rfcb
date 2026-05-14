// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Mobile nav toggle
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navMobile").classList.toggle("open");
});

// Match tab switcher
function switchTab(tab, btn) {
  document
    .querySelectorAll(".match-tab")
    .forEach((t) => t.classList.remove("match-tab-active"));
  btn.classList.add("match-tab-active");
  document.getElementById("upcoming").style.display =
    tab === "upcoming" ? "grid" : "none";
  document.getElementById("results").style.display =
    tab === "results" ? "grid" : "none";
}

// Booking form
function handleBooking(e) {
  e.preventDefault();
  document.querySelector(".booking-form").style.display = "none";
  document.getElementById("bookingSuccess").style.display = "flex";
}

// Contact form
function handleContact(e) {
  e.preventDefault();
  document.querySelector(".contact-form").style.display = "none";
  document.getElementById("contactSuccess").style.display = "block";
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      document.getElementById("navMobile").classList.remove("open");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
