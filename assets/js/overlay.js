// overlay.js - Hiệu ứng welcome overlay logo khi vào website
// Hiển thị logo khi load trang, tự động ẩn sau 2.2s
window.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('welcome-overlay');
  if (overlay) {
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      overlay.style.visibility = 'hidden';
    }, 4200);
  }
});
