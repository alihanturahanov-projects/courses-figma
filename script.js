const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

// Darken the navbar after scrolling
function onScroll() {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu open / close
function setMenu(open) {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu when a link is clicked or Escape is pressed
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
// Favorite (heart) buttons
document.querySelectorAll(".js-fav").forEach((btn) => {
  btn.addEventListener("click", () => btn.classList.toggle("is-active"));
});
// Newsletter form
const subscribeForm = document.getElementById("subscribeForm");
const subscribeEmail = document.getElementById("subscribeEmail");
const subscribeMsg = document.getElementById("subscribeMsg");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscribeEmail.value.trim());

  subscribeMsg.classList.toggle("is-ok", valid);
  subscribeMsg.classList.toggle("is-error", !valid);
  subscribeMsg.textContent = valid
    ? "Thanks! You are subscribed."
    : "Enter a valid email address, like name@example.com.";

  if (valid) subscribeForm.reset();
});
document.getElementById("year").textContent = new Date().getFullYear();