// BE IN BAGO TOURISM WEBSITE - Main JavaScript

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMobile = document.querySelector('.nav-mobile');

if (menuToggle && navMobile) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMobile.classList.toggle('active');
    document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking nav links
  const navLinks = navMobile.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMobile.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function setActiveNavLink() {
  const scrollPosition = window.pageYOffset + 200;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// Lazy loading images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal-on-scroll');

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// Gallery Lightbox & Destination Detail Modal
function createSiteModal() {
  let modal = document.getElementById('bago-site-modal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'bago-site-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);padding:16px;backdrop-filter:blur(4px);';
  modal.innerHTML = `
    <div id="bago-modal-card" style="position:relative;max-width:720px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.45);max-height:90vh;display:flex;flex-direction:column;">
      <button id="bago-modal-close" aria-label="Close modal" style="position:absolute;top:12px;right:12px;z-index:10;width:38px;height:38px;border-radius:50%;border:none;background:rgba(0,0,0,0.65);color:#fff;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;">&times;</button>
      <div id="bago-modal-media" style="position:relative;background:#111;display:flex;align-items:center;justify-content:center;max-height:60vh;overflow:hidden;">
        <img id="bago-modal-img" src="" alt="" style="width:100%;max-height:60vh;object-fit:contain;display:block;">
        <button id="bago-modal-prev" aria-label="Previous" style="display:none;position:absolute;left:10px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:none;background:rgba(0,0,0,0.6);color:#fff;font-size:20px;cursor:pointer;">&#10094;</button>
        <button id="bago-modal-next" aria-label="Next" style="display:none;position:absolute;right:10px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:none;background:rgba(0,0,0,0.6);color:#fff;font-size:20px;cursor:pointer;">&#10095;</button>
      </div>
      <div id="bago-modal-body" style="padding:20px 24px;overflow-y:auto;">
        <p id="bago-modal-category" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#f97316;margin:0 0 6px;"></p>
        <h3 id="bago-modal-title" style="font-size:22px;font-weight:700;color:#111827;margin:0 0 10px;"></h3>
        <p id="bago-modal-desc" style="font-size:15px;line-height:1.6;color:#4b5563;margin:0 0 16px;"></p>
        <div id="bago-modal-actions" style="display:flex;flex-wrap:wrap;gap:10px;"></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const close = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  modal.querySelector('#bago-modal-close').addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') close();
  });

  return modal;
}

const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
if (galleryItems.length > 0) {
  let currentGalleryIdx = 0;

  const showGallerySlide = (idx) => {
    currentGalleryIdx = (idx + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentGalleryIdx];
    const img = item.querySelector('img');
    const modal = createSiteModal();
    modal.querySelector('#bago-modal-img').src = img?.getAttribute('src') || '';
    modal.querySelector('#bago-modal-img').alt = img?.getAttribute('alt') || 'Bago City';
    modal.querySelector('#bago-modal-category').textContent = `Gallery ${currentGalleryIdx + 1} of ${galleryItems.length}`;
    modal.querySelector('#bago-modal-title').textContent = img?.getAttribute('alt') || 'Glimpses of Bago';
    modal.querySelector('#bago-modal-desc').textContent = 'Explore the natural beauty, culture, and vibrant community of Bago City, Negros Occidental.';
    modal.querySelector('#bago-modal-actions').innerHTML = '';
    const prevBtn = modal.querySelector('#bago-modal-prev');
    const nextBtn = modal.querySelector('#bago-modal-next');
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    prevBtn.onclick = () => showGallerySlide(currentGalleryIdx - 1);
    nextBtn.onclick = () => showGallerySlide(currentGalleryIdx + 1);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  galleryItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => showGallerySlide(index));
  });
}

const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach((card) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const img = card.querySelector('.destination-img');
    const category = card.querySelector('.destination-category')?.textContent?.trim() || 'Destination';
    const title = card.querySelector('.destination-name')?.textContent?.trim() || 'Bago City';
    const desc = card.querySelector('.destination-description')?.textContent?.trim() || '';
    const mapsQuery = encodeURIComponent(`${title}, Bago City, Negros Occidental`);

    const modal = createSiteModal();
    modal.querySelector('#bago-modal-img').src = img?.getAttribute('src') || '';
    modal.querySelector('#bago-modal-img').alt = title;
    modal.querySelector('#bago-modal-category').textContent = category;
    modal.querySelector('#bago-modal-title').textContent = title;
    modal.querySelector('#bago-modal-desc').textContent = desc;
    modal.querySelector('#bago-modal-prev').style.display = 'none';
    modal.querySelector('#bago-modal-next').style.display = 'none';
    modal.querySelector('#bago-modal-actions').innerHTML = `
      <a href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#f97316;color:#fff;padding:10px 18px;border-radius:10px;font-weight:600;text-decoration:none;font-size:14px;">Get Directions</a>
      <a href="https://www.facebook.com/profile.php?id=61593703577896" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#f3f4f6;color:#1f2937;padding:10px 18px;border-radius:10px;font-weight:600;text-decoration:none;font-size:14px;">Visit Facebook Page</a>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

// Form validation (if contact form exists)
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Be In Bago website loaded');
  setActiveNavLink();
});
