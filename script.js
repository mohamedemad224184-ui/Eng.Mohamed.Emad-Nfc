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

const languageSwitch = document.getElementById('languageSwitch');
const languageContent = {
  ar: {
    name: 'محمد عماد <span>Mohamed Emad</span>', role: 'م. محمد عماد', study: 'طالب إلكترونيات — السنة الثالثة',
    academy: 'أكاديمية السويدي الفنية بالعاشر من رمضان<br /><span>قسم الإلكترونيات</span>',
    skills: 'إلكترونيات <i>•</i> تطوير الويب <i>•</i> تطوير التطبيقات <i>•</i> ESP32 <i>•</i> Arduino <i>•</i> ذكاء اصطناعي',
    availability: 'متاح للتعاون', whatsapp: 'تواصل مباشرة', phoneTitle: 'اتصال هاتفي', facebook: 'تابعني على فيسبوك',
    websiteTitle: 'موقعي الشخصي', website: 'تعرّف على أعمالي', payment: 'إرسال أموال',
    instapay: 'اضغط لإرسال نقود إلى mohamede1mad@instapay', vodafone: 'اضغط لإرسال نقود عبر فودافون كاش',
    save: 'حفظ جهة الاتصال', qr: 'امسح للتواصل'
  },
  en: {
    name: 'Mohamed Emad <span>محمد عماد</span>', role: 'Eng. Mohamed Emad', study: 'Electronics Student — 3rd Year',
    academy: 'Elsewedy Technical Academy, 10th of Ramadan<br /><span>Electronics Department</span>',
    skills: 'Electronics <i>•</i> Web Development <i>•</i> App Development <i>•</i> ESP32 <i>•</i> Arduino <i>•</i> AI',
    availability: 'Available for collaboration', whatsapp: 'Message me directly', phoneTitle: 'Phone call', facebook: 'Follow me on Facebook',
    websiteTitle: 'My Personal Website', website: 'Explore my work', payment: 'SEND MONEY',
    instapay: 'Tap to send money to mohamede1mad@instapay', vodafone: 'Tap to send money via Vodafone Cash',
    save: 'Save Contact', qr: 'SCAN TO CONNECT'
  }
};

function setLanguage(language) {
  const text = languageContent[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('profileName').innerHTML = text.name;
  document.getElementById('profileRole').textContent = text.role;
  document.getElementById('profileStudy').textContent = text.study;
  document.getElementById('profileAcademy').innerHTML = text.academy;
  document.getElementById('profileSkills').innerHTML = text.skills;
  document.getElementById('availabilityText').textContent = text.availability;
  document.getElementById('whatsappText').textContent = text.whatsapp;
  document.getElementById('phoneTitle').textContent = text.phoneTitle;
  document.getElementById('facebookText').textContent = text.facebook;
  document.getElementById('websiteTitle').textContent = text.websiteTitle;
  document.getElementById('websiteText').textContent = text.website;
  document.getElementById('paymentTitle').textContent = text.payment;
  document.getElementById('instapayText').textContent = text.instapay;
  document.getElementById('vodafoneText').textContent = text.vodafone;
  document.getElementById('saveContactText').textContent = text.save;
  document.getElementById('qrText').textContent = text.qr;
  languageSwitch.textContent = language === 'ar' ? 'EN' : 'عربي';
  languageSwitch.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  localStorage.setItem('cardLanguage', language);
}

const savedLanguage = localStorage.getItem('cardLanguage');
if (savedLanguage === 'en') setLanguage('en');
languageSwitch.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar'));
