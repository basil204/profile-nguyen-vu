// quick-message-popup.js - Xử lý popup gửi tin nhắn nhanh và nút Messenger nổi

document.addEventListener('DOMContentLoaded', function() {
  // Popup gửi tin nhắn nhanh
  const quickBtn = document.querySelector('.quick-message-btn');
  const quickModal = document.querySelector('.quick-message-modal');
  const closeQuick = document.querySelector('.close-quick-message');
  if(quickBtn && quickModal && closeQuick) {
    quickBtn.onclick = () => quickModal.style.display = 'flex';
    closeQuick.onclick = () => quickModal.style.display = 'none';
    window.onclick = (e) => { if(e.target === quickModal) quickModal.style.display = 'none'; };
    const form = document.getElementById('quick-message-form');
    if(form) {
      form.onsubmit = async function(e) {
        e.preventDefault();
        const name = this.name.value;
        const email = this.email.value;
        const message = this.message.value;
        try {
          await fetch('https://script.google.com/macros/s/AKfycbyv4iUrOZre6LeUgs_mwxacXnbjf6AQaXnw_k51Ji0wdWOPhsiGwY8vwbBBtf55Z8mgnw/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
          });
          alert('Tin nhắn của bạn đã được gửi!');
          quickModal.style.display = 'none';
          this.reset();
        } catch (err) {
          alert('Gửi thất bại, vui lòng thử lại!');
        }
      };
    }
  }
  // Nút Messenger nổi
  const btnMess = document.querySelector('.quick-message-btn-mess');
  if(btnMess) {
    btnMess.onclick = function() {
      window.open('https://m.me/ggindustries.vn', '_blank');
    };
  }
  // Đóng popup khi click nút đóng hoặc click ra ngoài
  document.addEventListener('click', function(e) {
    const quickModal = document.getElementById('quick-message-modal');
    if (!quickModal) return;
    const closeBtn = quickModal.querySelector('.close-quick-message');
    if (closeBtn && (e.target === closeBtn || (e.target === quickModal && quickModal.style.display === 'flex'))) {
      quickModal.style.display = 'none';
    }
  });
});
