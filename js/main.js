const translations = {
  zh: {
    name: "Ruixin Sun",
    "nav.home": "首页",
    "nav.about": "关于我",
    "nav.works": "作品",
    "nav.contact": "联系",
    "hero.greeting": "你好，我是",
    "hero.tagline": "视觉艺术家 · 策展人 · 创作者",
    "hero.desc": "以画笔记录情绪，以展览串联故事。在色彩与空间之间，寻找属于当代生活的诗意与温度。",
    "hero.viewWorks": "查看作品",
    "hero.contact": "联系我",
    "about.label": "关于我",
    "about.title": "用艺术讲述生活",
    "about.education": "教育背景",
    "about.edu1": "香港城市大学 · 创意媒体（策展）硕士",
    "about.edu2": "加拿大布鲁克大学 · 视觉艺术（工作室）学士",
    "about.skills": "能力与特质",
    "about.skillsDesc": "绘画、设计、摄影、策展规划、展览执行、跨文化沟通、独立创作",
    "works.label": "作品",
    "works.title": "创作与表达",
    "works.subtitle": "绘画 · 摄影 · 数字艺术 · 策展项目",
    "works.filter.all": "全部",
    "works.filter.painting": "绘画",
    "works.filter.photography": "摄影",
    "works.filter.digital": "数字艺术",
    "works.filter.curation": "策展",
    "contact.label": "联系",
    "contact.title": "期待与你交流",
    "contact.subtitle": "展览合作、作品收藏、艺术交流，欢迎随时联系我。",
    "contact.emailLabel": "邮箱",
    "contact.instagramLabel": "Instagram",
    "contact.phoneLabel": "电话",
    "contact.locationLabel": "所在地",
    "contact.location": "中国 · 徐州 / 加拿大",
    "footer.copy": "© 2026 Ruixin Sun. All rights reserved."
  },
  en: {
    name: "Ruixin Sun",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.works": "Works",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I'm",
    "hero.tagline": "Visual Artist · Curator · Creator",
    "hero.desc": "Recording emotions with brushes, weaving stories through exhibitions. Between color and space, I seek the poetry and warmth of contemporary life.",
    "hero.viewWorks": "View Works",
    "hero.contact": "Contact Me",
    "about.label": "About",
    "about.title": "Art as a Way of Life",
    "about.education": "Education",
    "about.edu1": "City University of Hong Kong · MA Creative Media (Curatorial)",
    "about.edu2": "Brock University, Canada · BA Visual Arts (Art Studio)",
    "about.skills": "Skills & Traits",
    "about.skillsDesc": "Painting, design, photography, curatorial planning, exhibition execution, cross-cultural communication, independent creation",
    "works.label": "Works",
    "works.title": "Creation & Expression",
    "works.subtitle": "Painting · Photography · Digital Art · Curation",
    "works.filter.all": "All",
    "works.filter.painting": "Painting",
    "works.filter.photography": "Photography",
    "works.filter.digital": "Digital Art",
    "works.filter.curation": "Curation",
    "contact.label": "Contact",
    "contact.title": "Let's Connect",
    "contact.subtitle": "Open to exhibition collaborations, collection inquiries, and art conversations.",
    "contact.emailLabel": "Email",
    "contact.instagramLabel": "Instagram",
    "contact.phoneLabel": "Phone",
    "contact.locationLabel": "Location",
    "contact.location": "Xuzhou, China / Canada",
    "footer.copy": "© 2026 Ruixin Sun. All rights reserved."
  }
};

const worksData = [
  {
    id: 1,
    titleZh: "《晨雾》",
    titleEn: "Morning Mist",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "布面油画，2024。以柔和的粉色与暖黄色捕捉清晨光线的微妙变化。",
    descEn: "Oil on canvas, 2024. Soft pinks and warm yellows capture the subtle shifts of morning light.",
    color: "linear-gradient(145deg, #ffe8d6, #ffd6d6)"
  },
  {
    id: 2,
    titleZh: "《静默之间》",
    titleEn: "Between Silence",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "纸本丙烯，2024。探索身体姿态与情绪留白之间的张力。",
    descEn: "Acrylic on paper, 2024. Exploring the tension between bodily gestures and emotional silence.",
    color: "linear-gradient(145deg, #f4a4a4, #e8a8a0)"
  },
  {
    id: 3,
    titleZh: "《城市呼吸》",
    titleEn: "Urban Breath",
    category: "photography",
    categoryLabelZh: "摄影",
    categoryLabelEn: "Photography",
    descZh: "胶片摄影，2023。记录城市空间中流动的光线与人群。",
    descEn: "Film photography, 2023. Recording flowing light and crowds within urban spaces.",
    color: "linear-gradient(145deg, #fff8e7, #ffefc8)"
  },
  {
    id: 4,
    titleZh: "《数字花园》",
    titleEn: "Digital Garden",
    category: "digital",
    categoryLabelZh: "数字艺术",
    categoryLabelEn: "Digital Art",
    descZh: "数字绘画，2024。在虚拟空间中构建一个温暖而有机的花园意象。",
    descEn: "Digital painting, 2024. Constructing a warm, organic garden image within virtual space.",
    color: "linear-gradient(145deg, #ffd6d6, #fff8e7)"
  },
  {
    id: 5,
    titleZh: "《心跳节律》",
    titleEn: "Rhythm of the Heart",
    category: "curation",
    categoryLabelZh: "策展",
    categoryLabelEn: "Curation",
    descZh: "2024江苏省首届胸痛中心艺术展一等奖项目，探讨艺术与医学的交汇。",
    descEn: "First Prize project at the 2024 Jiangsu Province Chest Pain Center Art Exhibition, exploring the intersection of art and medicine.",
    color: "linear-gradient(145deg, #ffdfc8, #f4a4a4)"
  },
  {
    id: 6,
    titleZh: "《自我肖像》",
    titleEn: "Self Portrait",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "具象绘画练习，2023。通过镜中凝视重新审视自我身份。",
    descEn: "Figurative painting study, 2023. Re-examining identity through the gaze in the mirror.",
    color: "linear-gradient(145deg, #e8a8a0, #ffd6d6)"
  }
];

let currentLang = 'zh';

function init() {
  setupNavigation();
  setupLanguageSwitch();
  setupScrollEffects();
  renderWorks('all');
  setupWorksFilter();
  setupModal();
}

function setupNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function setupLanguageSwitch() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-lang-content]').forEach(block => {
    block.classList.toggle('hidden', block.dataset.langContent !== lang);
  });

  renderWorks(document.querySelector('.filter-btn.active').dataset.filter);
}

function renderWorks(filter) {
  const grid = document.getElementById('worksGrid');
  const filtered = filter === 'all' ? worksData : worksData.filter(w => w.category === filter);

  grid.innerHTML = filtered.map(work => `
    <article class="work-card" data-id="${work.id}" data-category="${work.category}">
      <div class="work-image">
        <div style="width:100%;height:100%;background:${work.color};"></div>
        <div class="work-overlay">
          <span>${currentLang === 'zh' ? '查看详情' : 'View Details'}</span>
        </div>
      </div>
      <div class="work-info">
        <span class="work-category">${currentLang === 'zh' ? work.categoryLabelZh : work.categoryLabelEn}</span>
        <h3 class="work-title">${currentLang === 'zh' ? work.titleZh : work.titleEn}</h3>
        <p class="work-desc">${currentLang === 'zh' ? work.descZh : work.descEn}</p>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

function setupWorksFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWorks(btn.dataset.filter);
    });
  });
}

function setupModal() {
  const modal = document.getElementById('imageModal');
  const closeBtn = modal.querySelector('.modal-close');

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id) {
  const work = worksData.find(w => w.id === id);
  if (!work) return;

  const modal = document.getElementById('imageModal');
  document.getElementById('modalImage').style.background = work.color;
  document.getElementById('modalTitle').textContent = currentLang === 'zh' ? work.titleZh : work.titleEn;
  document.getElementById('modalDesc').textContent = currentLang === 'zh' ? work.descZh : work.descEn;
  document.getElementById('modalCategory').textContent = currentLang === 'zh' ? work.categoryLabelZh : work.categoryLabelEn;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setupScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.work-card, .about-block, .contact-card, .meta-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
}

init();
