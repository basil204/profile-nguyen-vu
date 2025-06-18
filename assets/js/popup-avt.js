// popup-avt.js - Hiển thị popup ảnh đại diện khi click vào avatar

document.addEventListener('DOMContentLoaded', function() {
  const avtImg = document.querySelector('.profile-photo-container img');
  if (!avtImg) return;

  // Tạo popup overlay nếu chưa có
  let popup = document.getElementById('popup-avt-overlay');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'popup-avt-overlay';
    popup.style = `
      position: fixed; left: 0; top: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7); z-index: 99999; display: flex;
      align-items: center; justify-content: center; visibility: hidden; opacity: 0;
      transition: opacity 0.25s;`;
    popup.innerHTML = `
      <img src="${avtImg.src}" alt="Avatar lớn" style="max-width:90vw; max-height:90vh; border-radius:18px; box-shadow:0 8px 32px #0005; background:#fff;">
      <span id="close-popup-avt" style="position:absolute;top:32px;right:48px;font-size:2.5rem;color:#fff;cursor:pointer;font-weight:bold;z-index:2;">&times;</span>
    `;
    document.body.appendChild(popup);
  }

  // Sự kiện click vào avatar
  avtImg.style.cursor = 'zoom-in';
  avtImg.addEventListener('click', function() {
    const popupImg = popup.querySelector('img');
    popupImg.src = avtImg.src;
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
  });

  // Đóng popup khi click nút đóng hoặc nền
  popup.addEventListener('click', function(e) {
    if (e.target === popup || e.target.id === 'close-popup-avt') {
      popup.style.opacity = '0';
      setTimeout(() => { popup.style.visibility = 'hidden'; }, 200);
    }
  });
});
