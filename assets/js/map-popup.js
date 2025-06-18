// map-popup.js - Hiển thị popup Google Maps khi click vào địa chỉ

document.addEventListener('DOMContentLoaded', function() {
  const addressLink = document.querySelector('.contact-value a[href*="maps.app.goo.gl"], .contact-value a[href*="google.com/maps"]');
  if (!addressLink) return;

  // Tạo popup nếu chưa có
  let mapPopup = document.getElementById('popup-map-overlay');
  if (!mapPopup) {
    mapPopup = document.createElement('div');
    mapPopup.id = 'popup-map-overlay';
    mapPopup.style = `
      position: fixed; left: 0; top: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.55); z-index: 99999; display: flex;
      align-items: center; justify-content: center; visibility: hidden; opacity: 0;
      transition: opacity 0.25s;`;
    mapPopup.innerHTML = `
      <div style='position:relative;background:#fff;border-radius:16px;box-shadow:0 8px 32px #0005;padding:12px;'>
        <span id="close-popup-map" style="position:absolute;top:8px;right:18px;font-size:2.2rem;color:#019E4B;cursor:pointer;font-weight:bold;z-index:2;">&times;</span>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.52026283267116!2d106.71268937022712!3d20.83884171714124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7b004fb51795%3A0x5c6e82a85cd95f73!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gR3JlZW5ncm93IFZp4buHdCAoR0dWKQ!5e1!3m2!1svi!2s!4v1750242534977!5m2!1svi!2s" width="400" height="320" style="border:0;border-radius:12px;box-shadow:0 2px 12px #019E4B33;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    `;
    document.body.appendChild(mapPopup);
  }

  addressLink.addEventListener('click', function(e) {
    e.preventDefault();
    mapPopup.style.visibility = 'visible';
    mapPopup.style.opacity = '1';
  });

  mapPopup.addEventListener('click', function(e) {
    if (e.target === mapPopup || e.target.id === 'close-popup-map') {
      mapPopup.style.opacity = '0';
      setTimeout(() => { mapPopup.style.visibility = 'hidden'; }, 200);
    }
  });
});
