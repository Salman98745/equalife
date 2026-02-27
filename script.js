// Naviqasiya Scroll Effekti
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Səhifə yükləndikdə animasiyanı işə sal
  const revealElements = document.querySelectorAll(".reveal-left");

  // Kiçik gecikmə ilə aktiv klasını əlavə et
  setTimeout(() => {
    revealElements.forEach((el) => {
      el.classList.add("active");
    });
  }, 200);
});

document.addEventListener("DOMContentLoaded", () => {
  // Taymer məntiqi
  const timerElement = document.getElementById("timer");
  let totalSeconds = 18 * 60 + 30; // 14:22-dən başlayır

  setInterval(() => {
    totalSeconds++;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerElement.textContent = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;

    // 20 dəqiqəyə yaxınlaşdıqda rəngi dəyiş (Xəbərdarlıq simulyasiyası)
    if (minutes >= 20) {
      timerElement.style.color = "#ff4757";
    }
  }, 1000);

  // Pitch/Roll simulyasiyası
  const pitchFill = document.querySelector(".pitch-fill");
  const rollFill = document.querySelector(".roll-fill");

  setInterval(() => {
    let p = Math.floor(Math.random() * 40) + 10; // 10-50 arası
    let r = Math.floor(Math.random() * 30) + 5; // 5-35 arası
    pitchFill.style.width = p + "%";
    rollFill.style.width = r + "%";
  }, 3000);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Animasiya bir dəfə olsun istəyirsinizsə:
        // observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3, // Bölmənin 30%-i görünəndə başla
  }
);

document
  .querySelectorAll(".reveal-right")
  .forEach((el) => observer.observe(el));

// Mövcud Intersection Observer-ə bu klası da əlavə edin
document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    toggle.innerHTML = "✕";
    document.body.style.overflow = "hidden"; // prevent scroll
  } else {
    toggle.innerHTML = "☰";
    document.body.style.overflow = "auto";
  }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggle.innerHTML = "☰";
    document.body.style.overflow = "auto";
  });
});
