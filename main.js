// Profile UI JavaScript extracted from index.html

// Hiệu ứng welcome overlay logo
window.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('welcome-overlay');
  if (overlay) {
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      overlay.style.visibility = 'hidden';
    }, 2200);
  }
});

// Tab switching logic
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll("[role=tabpanel]");
// Ensure only the first panel is visible on load
panels.forEach((p, idx) => {
  if(idx === 0) {
    p.classList.remove("visually-hidden");
    p.classList.add("active-panel", "slide-in-up");
  } else {
    p.classList.add("visually-hidden");
    p.classList.remove("active-panel", "slide-in-up", "slide-in-left", "slide-in-right");
  }
});
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if(tab.classList.contains("active")) return;
    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    panels.forEach(p => {
      p.classList.add("visually-hidden");
      p.classList.remove("active-panel", "slide-in-up", "slide-in-left", "slide-in-right");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    if(panel) {
      panel.classList.remove("visually-hidden");
      setTimeout(() => panel.classList.add("active-panel", "slide-in-up"), 10);
    }
  });
});

// Back button behavior (placeholder)
const btnBack = document.getElementById("btn-back");
if (btnBack) {
  btnBack.addEventListener("click", () => {
    alert("Back button clicked (implement navigation logic)");
  });
}
// Options button behavior
const btnOptions = document.getElementById("btn-options");
if (btnOptions) {
  btnOptions.addEventListener("click", () => {
    alert("Options button clicked (implement menu logic)");
  });
}

// Social more button logic
const socialMoreBtn = document.querySelector('.social-more');
if (socialMoreBtn) {
  socialMoreBtn.addEventListener('click', function() {
    document.querySelectorAll('.social-icon.visually-hidden').forEach(function(el) {
      el.classList.remove('visually-hidden');
    });
    this.style.display = 'none';
  });
}

// Xoá logic slider cũ, dùng Bootstrap Carousel
