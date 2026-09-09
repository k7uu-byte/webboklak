// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: 'กอดอุ่นๆ',
    desc: 'กอดที่อบอุ่นและปลอดภัยที่สุด ให้ทุกครั้งที่ต้องการ',
    price: '∞ love',
    image: 'images/product_hug.jpg',
    emoji: ''
  },
  {
    id: 2,
    name: 'ความคิดถึง',
    desc: 'ความคิดถึงขนาดใหญ่พิเศษ ส่งตรงถึงหัวใจ',
    price: '∞ love',
    image: 'images/product_missing.jpg',
    emoji: ''
  },
  {
    id: 3,
    name: 'ความเอาใจใส่',
    desc: 'แพ็คใหญ่จุใจ ดูแลทุกรายละเอียด ไม่มีหมดอายุ',
    price: '∞ love',
    image: 'images/product_care.jpg',
    emoji: ''
  },
  {
    id: 4,
    name: 'ความอบอุ่น',
    desc: 'ความอบอุ่นหนานุ่ม คอยปกป้องในทุกวัน',
    price: '∞ love',
    image: 'images/product_comfort.jpg',
    emoji: ''
  },
  {
    id: 5,
    name: 'รอยยิ้ม',
    desc: 'รอยยิ้มสดใส ทำให้ทุกวันเป็นวันที่ดี',
    price: '∞ love',
    image: 'images/product_smile.jpg',
    emoji: ''
  },
  {
    id: 6,
    name: 'จูบหวานๆ',
    desc: 'จูบนุ่มๆ หวานๆ ส่งตรงจากหัวใจ',
    price: '∞ love',
    image: 'images/product_kiss.jpg',
    emoji: ''
  },
  {
    id: 7,
    name: 'สัญญาเคียงข้าง',
    desc: 'สัญญาว่าจะอยู่ข้างๆ ตลอดไป ไม่ว่าจะเกิดอะไร',
    price: '∞ love',
    image: 'images/product_promise.jpg',
    emoji: ''
  },
  {
    id: 8,
    name: 'การรับฟัง',
    desc: 'พร้อมรับฟังทุกเรื่อง ทุกความรู้สึก ตลอดเวลา',
    price: '∞ love',
    image: 'images/product_listen.jpg',
    emoji: ''
  },
  {
    id: 9,
    name: 'เวลาด้วยกัน',
    desc: 'เวลาพิเศษสำหรับเราสองคน ไม่มีวันหมด',
    price: '∞ love',
    image: 'images/product_time.jpg',
    emoji: ''
  },
  {
    id: 10,
    name: 'กำลังใจ',
    desc: 'กำลังใจฉบับเต็ม คอยเชียร์ทุกเรื่องในชีวิต',
    price: '∞ love',
    image: 'images/product_support.jpg',
    emoji: ''
  }
];

// ===== LOVE MESSAGES FOR PAY BUTTON =====
const loveMessages = [
  'รักน้า~ ♡',
  'คิดถึงเสมอ',
  'อยากกอด~',
  'เป็นคนพิเศษที่สุด',
  'น่ารักมากเลย ♡',
  'รักที่สุดในโลก',
  'ขอบคุณที่อยู่ด้วยกัน',
  'ยิ้มให้หน่อยสิ',
  'หนูเป็นที่หนึ่ง',
  'อยากอยู่ด้วยตลอดไป ♡',
  'จุ๊บๆ',
  'คิดถึงจังเลย',
  'love you ♡',
  'แง~ อยากเจอ',
  'ชอบนะ รู้ยัง?'
];

// ===== STATE =====
let cart = [];
let currentPage = 'welcome';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  renderProducts();
});

// ===== OPEN GIFT =====
let giftOpened = false;
function openGift() {
  if (giftOpened) return;
  giftOpened = true;

  const giftBox = document.getElementById('giftBox');
  const btn = document.getElementById('btnOpenGift');
  const hint = document.querySelector('.tap-hint');

  // Open the lid
  giftBox.classList.add('opened');

  // Hide button and hint
  btn.style.opacity = '0';
  btn.style.pointerEvents = 'none';
  btn.style.transition = 'opacity 0.5s ease';
  hint.style.opacity = '0';
  hint.style.transition = 'opacity 0.5s ease';

  // Launch sparkles from the box
  const wrapper = document.getElementById('giftBoxWrapper');
  const rect = wrapper.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 3;

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.className = 'gift-sparkle';
      sparkle.textContent = ['✦', '♡', '·', '✧', '♡'][Math.floor(Math.random() * 5)];
      sparkle.style.left = cx + 'px';
      sparkle.style.top = cy + 'px';
      sparkle.style.setProperty('--dx', (Math.random() - 0.5) * 160 + 'px');
      sparkle.style.setProperty('--dy', -(Math.random() * 120 + 40) + 'px');
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1500);
    }, i * 60);
  }

  // Navigate after delay
  setTimeout(() => {
    goToPage('memory-1');
  }, 2200);
}

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  const symbols = ['♡', '♡', '♡', '·', '·', '✦', '♡'];
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (12 + Math.random() * 16) + 's';
    heart.style.animationDelay = (Math.random() * 12) + 's';
    heart.style.fontSize = (0.6 + Math.random() * 0.8) + 'rem';
    container.appendChild(heart);
  }
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map(p => `
    <div class="product-card" id="product-${p.id}">
      <div class="product-image-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">${p.price}</div>
        <div class="product-actions">
          <button class="btn-add-cart" id="btn-add-${p.id}" onclick="addToCart(${p.id}, event)">
            + เพิ่มลงรถเข็น
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== ADD TO CART =====
function addToCart(productId, event) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Check if already in cart
  if (cart.find(item => item.id === productId)) return;

  cart.push({ ...product });
  updateCartBadge();

  // Button feedback
  const btn = document.getElementById(`btn-add-${productId}`);
  btn.classList.add('added');
  btn.innerHTML = '✓ เพิ่มแล้ว';

  // Fly heart animation
  flyHeartToCart(event);
}

// ===== FLY HEART ANIMATION =====
function flyHeartToCart(event) {
  const heart = document.createElement('span');
  heart.className = 'fly-heart';
  heart.textContent = '♡';

  const startX = event.clientX;
  const startY = event.clientY;

  const cartBtn = document.getElementById('navCartBtn');
  const cartRect = cartBtn.getBoundingClientRect();
  const endX = cartRect.left + cartRect.width / 2;
  const endY = cartRect.top + cartRect.height / 2;

  heart.style.left = startX + 'px';
  heart.style.top = startY + 'px';

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transition = 'all 0.7s cubic-bezier(0.2, 0.8, 0.3, 1)';
    heart.style.left = endX + 'px';
    heart.style.top = endY + 'px';
  });

  setTimeout(() => {
    heart.remove();
    const badge = document.getElementById('cartBadge');
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  }, 700);
}

// ===== UPDATE CART BADGE =====
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.textContent = cart.length;
}

// ===== RENDER CART =====
function renderCart() {
  const itemsContainer = document.getElementById('cartItems');
  const totalContainer = document.getElementById('cartTotal');
  const actionsContainer = document.getElementById('cartActions');

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">♡</div>
        <p>รถเข็นยังว่างอยู่น้า</p>
        <br>
        <button class="btn-primary" onclick="goToPage('shop')">
          ไปเลือกสินค้ากัน
        </button>
      </div>
    `;
    totalContainer.style.display = 'none';
    actionsContainer.style.display = 'none';
    return;
  }

  itemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item" style="animation-delay: ${index * 0.08}s">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id}, this)" title="ลบออก">
        ✕
      </button>
    </div>
  `).join('');

  document.getElementById('cartTotalValue').textContent = `${cart.length} รายการ = ∞ love`;
  totalContainer.style.display = 'flex';
  actionsContainer.style.display = 'flex';
}

// ===== REMOVE FROM CART =====
function removeFromCart(productId, btnElement) {
  const cartItem = btnElement.closest('.cart-item');
  cartItem.classList.add('removing');

  setTimeout(() => {
    cart = cart.filter(item => item.id !== productId);
    updateCartBadge();

    const addBtn = document.getElementById(`btn-add-${productId}`);
    if (addBtn) {
      addBtn.classList.remove('added');
      addBtn.innerHTML = '+ เพิ่มลงรถเข็น';
    }

    renderCart();
  }, 300);
}

// ===== PAGE NAVIGATION =====
function goToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const navbar = document.getElementById('navbar');
  if (page === 'welcome' || page.startsWith('memory-') || page === 'proposal') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }

  // Show/hide take-all button
  const takeAllBtn = document.getElementById('btnTakeAll');
  if (takeAllBtn) {
    takeAllBtn.style.display = (page === 'shop') ? 'inline-flex' : 'none';
  }

  const targetPage = document.getElementById(`page-${page}`);
  targetPage.classList.add('active');

  if (page === 'cart') {
    renderCart();
  }

  currentPage = page;
  window.scrollTo(0, 0);
}

// ===== TAKE EVERYTHING =====
function takeEverything() {
  // Add all products to cart
  products.forEach(p => {
    if (!cart.find(item => item.id === p.id)) {
      cart.push({ ...p });
      const btn = document.getElementById(`btn-add-${p.id}`);
      if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '✓ เพิ่มแล้ว';
      }
    }
  });
  updateCartBadge();

  // Go to proposal page
  goToPage('proposal');
  startProposalSequence();
}

// ===== PROPOSAL SEQUENCE =====
function startProposalSequence() {
  // Reset all lines
  const line1 = document.getElementById('proposalLine1');
  const line2 = document.getElementById('proposalLine2');
  const line3 = document.getElementById('proposalLine3');
  const buttons = document.getElementById('proposalButtons');
  const noBtn = document.getElementById('btnNo');

  line1.classList.remove('show');
  line2.classList.remove('show');
  line3.classList.remove('show');
  buttons.classList.remove('show');
  noBtn.style.position = '';
  noBtn.style.transform = '';

  // Fade in line by line
  setTimeout(() => line1.classList.add('show'), 800);
  setTimeout(() => line2.classList.add('show'), 2500);
  setTimeout(() => line3.classList.add('show'), 4500);
  setTimeout(() => buttons.classList.add('show'), 6000);
}

// ===== DODGE BUTTON =====
function dodgeButton() {
  const noBtn = document.getElementById('btnNo');
  
  // Random position near its original spot (between -60px to 60px)
  const offsetX = (Math.random() - 0.5) * 120;
  const offsetY = (Math.random() - 0.5) * 120;

  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// ===== PROPOSAL ACCEPTED =====
function proposalAccepted() {
  const nickname = 'นาเดีย';
  const itemNames = cart.map(item => item.name).join(', ');
  document.getElementById('thankyouMessage').innerHTML = `
    ต่อไปนี้ 09.09 คือวันครบรอบของเราน้าา~<br><br>
    <strong>${itemNames}</strong><br><br>
    ทุกอย่างส่งตรงจากหัวใจ<br>
    ถึงคนพิเศษที่สุดของพี่ค้าบอ้วน ♡
  `;
  document.getElementById('thankyouName').textContent = `สำหรับ ${nickname} คนน่ารัก`;

  goToPage('thankyou');
  launchFlowerConfetti();
  launchConfetti();
}

// ===== FLOWER CONFETTI =====
function launchFlowerConfetti() {
  const flowers = ['🌸', '🌺', '🌷', '💐', '🌻', '🌹', '💮', '🏵️', '🪻', '🌼'];
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'flower-piece';
      piece.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.top = '-30px';
      piece.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
      piece.style.animationDuration = (3 + Math.random() * 2.5) + 's';
      piece.style.animationDelay = '0s';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 6000);
    }, i * 60);
  }
}

// ===== CHECKOUT MODAL =====
function openCheckoutModal() {
  if (cart.length === 0) return;
  document.getElementById('checkoutModal').classList.add('show');
  document.getElementById('nicknameInput').value = '';
  document.getElementById('nicknameInput').focus();
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('show');
}

function submitCheckout() {
  let nickname = document.getElementById('nicknameInput').value.trim();
  if (!nickname) {
    nickname = 'นาเดีย';
  }

  closeCheckoutModal();

  const itemNames = cart.map(item => item.name).join(', ');
  document.getElementById('thankyouMessage').innerHTML = `
    สินค้าทุกอย่างถูกส่งไปถึงแล้วน้า~<br><br>
    <strong>${itemNames}</strong><br><br>
    ทุกอย่างส่งตรงจากหัวใจ<br>
    ถึงคนพิเศษที่สุดของพี่ค้าบอ้วน ♡
  `;
  document.getElementById('thankyouName').textContent = `สำหรับ ${nickname} คนน่ารัก`;

  goToPage('thankyou');
  launchConfetti();
}

// ===== PAY WITH LOVE =====
function payWithLove(event) {
  const section = document.getElementById('payLoveSection');
  const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)];

  const popup = document.createElement('div');
  popup.className = 'love-popup';
  popup.textContent = msg;

  const offsetX = (Math.random() - 0.5) * 180;
  const offsetY = -(Math.random() * 35 + 20);

  popup.style.left = `calc(50% + ${offsetX}px)`;
  popup.style.top = `${offsetY}px`;
  popup.style.transform = 'translateX(-50%)';

  section.appendChild(popup);
  setTimeout(() => popup.remove(), 2200);

  for (let i = 0; i < 6; i++) {
    createMiniConfetti(event.clientX, event.clientY);
  }
}

// ===== CONFETTI =====
function launchConfetti() {
  const colors = ['#E8D5CE', '#D4AEA5', '#F0E4DE', '#C9A39B', '#F7EEEA', '#B8877D'];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.top = '-10px';
      piece.style.width = (5 + Math.random() * 6) + 'px';
      piece.style.height = (5 + Math.random() * 6) + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      piece.style.animationDelay = '0s';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4500);
    }, i * 40);
  }
}

function createMiniConfetti(x, y) {
  const colors = ['#E8D5CE', '#D4AEA5', '#F0E4DE', '#C9A39B'];
  const piece = document.createElement('div');
  piece.style.position = 'fixed';
  piece.style.left = x + 'px';
  piece.style.top = y + 'px';
  piece.style.width = '4px';
  piece.style.height = '4px';
  piece.style.background = colors[Math.floor(Math.random() * colors.length)];
  piece.style.borderRadius = '50%';
  piece.style.pointerEvents = 'none';
  piece.style.zIndex = '300';
  piece.style.transition = 'all 0.8s ease-out';

  document.body.appendChild(piece);

  requestAnimationFrame(() => {
    piece.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
    piece.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
    piece.style.opacity = '0';
    piece.style.transform = 'scale(0)';
  });

  setTimeout(() => piece.remove(), 800);
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCheckoutModal();
  }
  if (e.key === 'Enter' && document.getElementById('checkoutModal').classList.contains('show')) {
    submitCheckout();
  }
});

// Shake animation
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }
`;
document.head.appendChild(shakeStyle);
