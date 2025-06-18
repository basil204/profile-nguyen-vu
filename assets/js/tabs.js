// tabs.js - Logic chuyển tab, hiệu ứng tab chuyển động mượt mà
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll("[role=tabpanel]");
// Chỉ hiển thị panel đầu tiên khi load
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
