// Minimal interactions for CTAs, smooth scroll, and reveal animations
const TELEGRAM_LINK = "https://t.me/+zHnTDQqFKTVkODk1";

const handleCtaClick = () => {
  window.location.href = TELEGRAM_LINK;
};

document.querySelectorAll("[data-cta]").forEach((btn) => {
  btn.addEventListener("click", handleCtaClick);
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Intersection Observer for entrance animations
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

// Button hover micro interaction (pulse on pointer hover)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("pointerenter", () => btn.classList.add("hovered"));
  btn.addEventListener("pointerleave", () => btn.classList.remove("hovered"));
});
