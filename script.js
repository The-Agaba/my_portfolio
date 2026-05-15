const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const yearEl = document.getElementById("year");
const siteHeader = document.getElementById("siteHeader");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function setMenuOpen(open) {
  if (!menuToggle || !mainNav) return;
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const next = !mainNav.classList.contains("open");
    setMenuOpen(next);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenuOpen(false);
  });
}

if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced && "IntersectionObserver" in window) {
  const reveals = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}
