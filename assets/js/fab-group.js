// fab-group.js - Xử lý nút nổi gộp 3 chức năng: gửi tin nhắn, Messenger, gọi điện
document.addEventListener('DOMContentLoaded', function() {
  var fabMain = document.querySelector('.fab-main .material-icons');
  if (fabMain) {
    fabMain.textContent = 'add';
  }
  // Hiện luôn 3 nút khi load trang
  var fabActions = document.querySelector('.fab-actions');
  var fabMainIcon = document.querySelector('.fab-main .material-icons');
  if (fabActions) {
    fabActions.style.display = 'flex';
  }
  if (fabMainIcon) {
    fabMainIcon.textContent = 'close';
  }
  const fabMail = document.getElementById('fab-mail');
  const fabMess = document.getElementById('fab-mess');
  const fabCall = document.getElementById('fab-call');
  // Toggle hiện/ẩn các nút nhỏ
  if(fabMain && fabActions) {
    fabMain.onclick = function() {
      const isOpen = fabActions.style.display === 'flex';
      fabActions.style.display = isOpen ? 'none' : 'flex';
      fabMain.querySelector('.material-icons').textContent = isOpen ? 'add' : 'close';
    };
    // Ẩn khi click ra ngoài
     document.addEventListener('click', function(e) {
      if (
        !fabMain.contains(e.target) &&
        !fabActions.contains(e.target) &&
        !(e.target.classList && e.target.classList.contains('tab'))
      ) {
        fabActions.style.display = 'none';
        fabMain.querySelector('.material-icons').textContent = 'add';
      }
    });
  }
  // Gửi tin nhắn nhanh
  if(fabMail) {
    fabMail.onclick = function() {
      const quickModal = document.getElementById('quick-message-modal');
      if(quickModal) quickModal.style.display = 'flex';
      fabActions.style.display = 'none';
      fabMain.querySelector('.material-icons').textContent = 'add';
    };
  }
  // Messenger
  if(fabMess) {
    fabMess.onclick = function() {
      window.open('https://m.me/ggindustries.vn', '_blank');
      fabActions.style.display = 'none';
      fabMain.querySelector('.material-icons').textContent = 'add';
    };
  }
  // Gọi điện
  if(fabCall) {
    fabCall.onclick = function() {
      window.open('tel:0987654321');
      fabActions.style.display = 'none';
      fabMain.querySelector('.material-icons').textContent = 'add';
    };
  }
});
