// عدّل هذا الرابط فقط عندما يكون رابط صفحة Facebook متاحاً.
const FACEBOOK_URL = 'https://www.facebook.com/';
document.getElementById('facebookLink').href = FACEBOOK_URL;

// GitHub Pages gives this page its final URL; the QR therefore always points to the deployed NFC page.
const profileUrl = window.location.href.split('#')[0];
const qr = document.getElementById('qrCode');
qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&format=svg&data=${encodeURIComponent(profileUrl)}`;

const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}
