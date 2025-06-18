// tabs.js - Logic chuyển tab, hiệu ứng tab chuyển động mượt mà
// Sử dụng IIFE để tránh khai báo lại biến khi import nhiều lần
(function() {
  if (window.__tabsjs_loaded) return; // Ngăn chạy lại nếu đã load
  window.__tabsjs_loaded = true;

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
  // Thêm drag-to-scroll cho tabs-nav trên desktop
  const tabsNav = document.querySelector('.tabs-nav');
  let isDown = false;
  let startX, scrollLeft;
  if (tabsNav) {
    tabsNav.addEventListener('mousedown', (e) => {
      isDown = true;
      tabsNav.classList.add('dragging');
      startX = e.pageX - tabsNav.offsetLeft;
      scrollLeft = tabsNav.scrollLeft;
    });
    tabsNav.addEventListener('mouseleave', () => {
      isDown = false;
      tabsNav.classList.remove('dragging');
    });
    tabsNav.addEventListener('mouseup', () => {
      isDown = false;
      tabsNav.classList.remove('dragging');
    });
    tabsNav.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tabsNav.offsetLeft;
      const walk = (x - startX) * 1.2; // tốc độ kéo
      tabsNav.scrollLeft = scrollLeft - walk;
    });
  }
})();
