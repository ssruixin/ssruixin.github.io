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
    "works.subtitle": "绘画 · 摄影 · 数字艺术 · 混合媒介",
    "works.filter.all": "全部",
    "works.filter.painting": "绘画",
    "works.filter.mixedmedia": "混合媒介",
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
    "works.subtitle": "Painting · Photography · Digital Art · Mixed Media",
    "works.filter.all": "All",
    "works.filter.painting": "Painting",
    "works.filter.mixedmedia": "Mixed Media",
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
    titleZh: "《Center Street》",
    titleEn: "Center Street",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "水彩与彩铅，2021，300 × 300 mm。城市街道在黄昏光线中的色彩与透视练习。",
    descEn: "Watercolor and colored pencil, 2021, 300 × 300 mm. A study of color and perspective in an urban street at dusk.",
    image: "images/center-street.jpeg?v=3"
  },
  {
    id: 2,
    titleZh: "《Brunch》",
    titleEn: "Brunch",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "水彩与彩铅，2021，300 × 300 mm。对日常餐食静物的观察与色彩表现。",
    descEn: "Watercolor and colored pencil, 2021, 300 × 300 mm. An observation of everyday brunch still life and color expression.",
    image: "images/brunch.jpeg?v=3"
  },
  {
    id: 3,
    titleZh: "《Parallel World》",
    titleEn: "Parallel World",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "丙烯，2021，500 × 500 mm。以放大镜与花卉为符号，探讨观看与被观看的平行关系。",
    descEn: "Acrylic on canvas, 2021, 500 × 500 mm. Using a magnifying glass and flowers as symbols to explore the parallel between seeing and being seen.",
    image: "images/parallel-world.jpeg?v=3"
  },
  {
    id: 4,
    titleZh: "《Dream》",
    titleEn: "Dream",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "水彩、杂志拼贴与马克笔，2021。将日常图像与梦境叙事叠加的拼贴绘画。",
    descEn: "Watercolor, magazine collage, and marker, 2021. A collage painting that layers everyday imagery with dreamlike narratives.",
    image: "images/dream.jpeg?v=3"
  },
  {
    id: 5,
    titleZh: "《Tulips & Taxi》",
    titleEn: "Tulips & Taxi",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "速写本水彩与马克笔，2021。街角的郁金香与出租车，捕捉城市一瞬的明亮。",
    descEn: "Sketchbook watercolor and marker, 2021. Tulips and a taxi at a street corner, capturing a bright moment in the city.",
    image: "images/tulips-and-taxi.jpeg?v=3"
  },
  {
    id: 6,
    titleZh: "《Hairpin Girl》",
    titleEn: "Hairpin Girl",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "油画，2023，50 × 60 cm。Brock University Visa Gallery 展出。以簪花女群像探索传统与当代身份。",
    descEn: "Oil painting, 2023, 50 × 60 cm. Exhibited at Brock University Visa Gallery. Exploring traditional and contemporary identity through figures with floral hairpins.",
    image: "images/hairpin-girl.jpg?v=3"
  },
  {
    id: 7,
    titleZh: "《The Singing of the Heart》",
    titleEn: "The Singing of the Heart",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "油画双联画，2024，40 × 50 cm × 2。徐州中心医院展览。以心脏与玫瑰、浆果并置，诉说生命与情感。",
    descEn: "Oil painting diptych, 2024, 40 × 50 cm × 2. Exhibited at Xuzhou Hospital. Juxtaposing the heart with roses and berries to speak of life and emotion.",
    image: "images/the-singing-of-the-heart-1.jpg?v=3"
  },
  {
    id: 8,
    titleZh: "《The Land of Fantasy》",
    titleEn: "The Land of Fantasy",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "油画三联画，2024，30 × 40 cm × 3。徐州 Alright Coffee 展览。冬日幻境中的色彩变奏。",
    descEn: "Oil painting triptych, 2024, 30 × 40 cm × 3. Exhibited at Xuzhou Alright Coffee. A chromatic variation in a winter fantasy landscape.",
    image: "images/the-land-of-fantasy-3.jpg?v=3"
  },
  {
    id: 9,
    titleZh: "《Paint Flow Direction》",
    titleEn: "Paint Flow Direction",
    category: "painting",
    categoryLabelZh: "绘画",
    categoryLabelEn: "Painting",
    descZh: "丙烯圆形画布，2024，三件一组。Brock University 展出。用流动的色彩轨迹记录身体运动与情绪方向。",
    descEn: "Acrylic on round canvases, 2024, set of three. Exhibited at Brock University. Recording bodily movement and emotional direction through flowing color traces.",
    image: "images/paint-flow-direction.jpg?v=3"
  },
  {
    id: 10,
    titleZh: "《The Last Ice》",
    titleEn: "The Last Ice",
    category: "mixedmedia",
    categoryLabelZh: "混合媒介",
    categoryLabelEn: "Mixed Media",
    descZh: "锡箔、泡沫板、丙烯，2021，300 × 300 mm。以冰川与北极熊为意象，回应气候与环境议题。",
    descEn: "Tin foil, foam board, and acrylic, 2021, 300 × 300 mm. Glaciers and polar bears as imagery responding to climate and environmental issues.",
    image: "images/the-last-ice.jpeg?v=3"
  },
  {
    id: 11,
    titleZh: "《Fantasy Butterfly》",
    titleEn: "Fantasy Butterfly",
    category: "mixedmedia",
    categoryLabelZh: "混合媒介",
    categoryLabelEn: "Mixed Media",
    descZh: "立体书，2023，50 × 60 cm。Brock University 展出。以弹出结构让蝴蝶与花卉从页面中生长出来。",
    descEn: "Pop-up book, 2023, 50 × 60 cm. Exhibited at Brock University. Butterflies and flowers grow out of the page through pop-up structures.",
    image: "images/fantasy-butterfly.jpg?v=3"
  },
  {
    id: 12,
    titleZh: "《The Beauty of the Vase》",
    titleEn: "The Beauty of the Vase",
    category: "mixedmedia",
    categoryLabelZh: "混合媒介",
    categoryLabelEn: "Mixed Media",
    descZh: "陶瓷装置，2025。一组手工釉彩花瓶与小型陶塑，探索器物与空间的美感。",
    descEn: "Ceramic installation, 2025. A group of hand-glazed vases and small ceramic sculptures exploring the beauty of objects and space.",
    image: "images/the-beauty-of-the-vase-1.jpg?v=3"
  },
  {
    id: 13,
    titleZh: "《The Definition of Appearance》",
    titleEn: "The Definition of Appearance",
    category: "photography",
    categoryLabelZh: "摄影",
    categoryLabelEn: "Photography",
    descZh: "摄影，2021。将中国邮政信箱与“GET OUT OF THE STANDARD”传单并置，反思容貌焦虑与社会标准。",
    descEn: "Photography, 2021. Juxtaposing a China Post mailbox with 'GET OUT OF THE STANDARD' flyers, reflecting on appearance anxiety and social standards.",
    image: "images/the-definition-of-appearance.jpeg?v=3"
  },
  {
    id: 14,
    titleZh: "《Break the Routine》",
    titleEn: "Break the Routine",
    category: "digital",
    categoryLabelZh: "数字艺术",
    categoryLabelEn: "Digital Art",
    descZh: "海报/明信片设计，2022。以放射状线条打破常规边界，呼吁跳出固定思维模式。",
    descEn: "Poster/postcard design, 2022. Radial lines break conventional boundaries, calling to step out of fixed thinking patterns.",
    image: "images/break-the-routine.jpg?v=3"
  },
  {
    id: 15,
    titleZh: "《Get Out of the Standard》",
    titleEn: "Get Out of the Standard",
    category: "digital",
    categoryLabelZh: "数字艺术",
    categoryLabelEn: "Digital Art",
    descZh: "明信片设计，2021。采集不同国家人群的面部轮廓并由 AI 重叠生成，呼吁跳出单一审美标准。",
    descEn: "Postcard design, 2021. Facial contours from people of different countries were collected and overlapped by AI, calling to break away from a single beauty standard.",
    image: "images/get-out-of-the-standard.jpeg?v=3"
  },
  {
    id: 16,
    titleZh: "《Nuclear Contaminated Creatures》",
    titleEn: "Nuclear Contaminated Creatures",
    category: "digital",
    categoryLabelZh: "数字艺术",
    categoryLabelEn: "Digital Art",
    descZh: "塑料板雕刻与印刷，2021。以强烈黑白对比想象核污染下的变异生物，警示环境危机。",
    descEn: "Plastic board engraving and printing, 2021. Strong black-and-white contrasts imagine mutated creatures under nuclear pollution, warning of environmental crisis.",
    image: "images/nuclear-contaminated-creatures.jpeg?v=3"
  }
];

let currentLang = 'zh';

function init() {
  try {
    setupNavigation();
    setupLanguageSwitch();
    setupScrollEffects();
    renderWorks('all');
    setupWorksFilter();
    setupModal();
  } catch (e) {
    console.error('Portfolio init error:', e);
  }
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
  if (!grid) return;
  const filtered = filter === 'all' ? worksData : worksData.filter(w => w.category === filter);

  grid.innerHTML = filtered.map(work => workCardHTML(work)).join('');

  grid.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

function workCardHTML(work) {
  return `
    <article class="work-card" data-id="${work.id}" data-category="${work.category}">
      <div class="work-image">
        <img src="${work.image}" alt="${currentLang === 'zh' ? work.titleZh : work.titleEn}" width="400" height="500" loading="lazy">
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
  `;
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
  document.getElementById('modalImage').innerHTML = `<img src="${work.image}" alt="${currentLang === 'zh' ? work.titleZh : work.titleEn}" width="600" height="750">`;
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
