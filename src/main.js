import './style.css'


const logoUrl = 'data:image/jpeg;base64,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';

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdUYjFJfEycsQSPYdWQqjUuRxdSENsvuFY-zIM3bhtcMmIr3A/viewform?embedded=true";
const yt = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&vq=hd1080&modestbranding=1&rel=0`;

const projects = [
  { id: "asqi2HzDk_Q", clip: "https://www.youtube.com/watch?v=C481KpGKMC0&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=20" },
  { id: "b_5x8prfdt4", clip: "https://www.youtube.com/watch?v=wtstKVV4Ha8&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=14" },
  { id: "F3pgQt7CZVs", clip: "https://www.youtube.com/watch?v=uchIN_cMCqo&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=13" },
  { id: "o-s2v8sR5P8", clip: "https://www.youtube.com/watch?v=HO44Ksuryzw&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=17" },
  { id: "irpuNkbKLH8", clip: "https://www.youtube.com/watch?v=e_U-wSo1o9s&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=9" },
  { id: "FjNzYuOXebI", clip: "https://www.youtube.com/watch?v=4BrZqfGMUso&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=21" },
  { id: "xkGj8iGfqOc", clip: "https://www.youtube.com/watch?v=XTmZaSztLIo&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=27" },
  { id: "a-okfop9C9Q", clip: "https://www.youtube.com/watch?v=72-pLfXakZs&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=16" },
  { id: "0CXmjsKWOQQ", clip: "https://www.youtube.com/watch?v=Qlw_LdFCdIU&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=5" },
  { id: "s4pNsni5OOE", clip: "https://www.youtube.com/watch?v=Z0iZTX7mVL4&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=8" },
  { id: "c18IoGVMv-U", clip: "https://www.youtube.com/watch?v=4BrZqfGMUso&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=21" },
  { id: "REStcz-DIdA", clip: "https://www.youtube.com/watch?v=fHrKK8GivDI&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=7" },
  { id: "imfZcE_-17E", clip: "https://www.youtube.com/watch?v=zzw98xiFUTY&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=15" },
  { id: "P0cznFOtaqo", clip: "https://www.youtube.com/watch?v=qOpyljzhsQc&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=4" },
  { id: "dKi9_hLiMKY", clip: "https://www.youtube.com/watch?v=hH2XVkkmvmI&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=11" },
  { id: "Yv9FkAoULGc", clip: "https://www.youtube.com/watch?v=4iBG161G3cM&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=22" },
  { id: "iCg6ozEwHGQ", clip: "https://www.youtube.com/watch?v=HO44Ksuryzw&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=17" },
  { id: "d8M7tfxO6l0", clip: "https://www.youtube.com/watch?v=f2tBjKQdzFk&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=19" },
  { id: "J_Z4TKegJjg", clip: "https://www.youtube.com/watch?v=Qlw_LdFCdIU&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=5" },
  { id: "Sf5pUmLuniU", clip: "https://www.youtube.com/watch?v=72-pLfXakZs&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=16" },
  { id: "0HqEUAOW1J0", clip: "https://www.youtube.com/watch?v=wtstKVV4Ha8&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=14" },
  { id: "jjrABAbF2XA", clip: "https://www.youtube.com/watch?v=C481KpGKMC0&list=PLfuYYTQMRUScDe5wq7fuuMGOul6TFGmL6&index=20" },
];

function generateBackstageGrid() {
  const vIds = ['xzogZuhjLVo','Ca5tL46TmWk'];

  // Мобільний: відео → 6 фото → відео → 6 фото
  if (window.innerWidth <= 768) {
    let out = '';
    out += `<div class="backstage-video-full"><iframe src="https://www.youtube.com/embed/${vIds[0]}?autoplay=1&mute=1&loop=1&playlist=${vIds[0]}&controls=0&modestbranding=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    for (let i = 1; i <= 6; i++) out += `<div class="backstage-item small-p"><img src="/highvisionsite/foto/${i}.jpg" loading="lazy"></div>`;
    out += `<div class="backstage-video-full"><iframe src="https://www.youtube.com/embed/${vIds[1]}?autoplay=1&mute=1&loop=1&playlist=${vIds[1]}&controls=0&modestbranding=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    for (let i = 7; i <= 12; i++) out += `<div class="backstage-item small-p"><img src="/highvisionsite/foto/${i}.jpg" loading="lazy"></div>`;
    return out;
  }

  // Десктоп — стара сітка без змін
  const layout = ['p','p','v','p','p','p','p','p','p','v','p','p','p','p','p','p','p','p'];
  let pIdx = 1, vIdx = 0;
  return layout.map(type => {
    if (type === 'v' && vIdx < 2) {
      const id = vIds[vIdx++];
      return `<div class="backstage-item big-v"><iframe src="https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    } else if (pIdx <= 16) {
      return `<div class="backstage-item small-p"><img src="/highvisionsite/foto/${pIdx++}.jpg" loading="lazy"></div>`;
    }
    return '';
  }).join('');
}

const i18n = {
  en: {
    works:"PORTFOLIO", creathion:"CREATHION", backstage_nav:"BACKSTAGE", contact:"CONTACT",
    hero_tag:"PREMIUM PRODUCTION LABORATORY", showcase:"PORTFOLIO", phil:"OUR PHILOSOPHY", backstage:"BACKSTAGE",
    main_h2:"CREATING A WORLD<br>YOU <span>WANT TO RETURN TO</span>",
    e1_t:"01 / PRE-PRODUCTION", e1_p:"We meticulously develop a unique concept that organically reveals the essence of the brand or artist.",
    e2_t:"02 / PRODUCTION", e2_p:"At the filming stage, we use professional equipment and cinematic lighting schemes to create high-quality frames.",
    e3_t:"03 / POST-PRODUCTION", e3_p:"The final stage includes precise editing with a clearly emphasized tempo-rhythm, complemented by professional color grading that forms a deep atmosphere.",
    cta_t:"READY FOR PRODUCTION?", cta_h2:"<span class='glow-text'>START A PROJECT</span>",
    interlude_tag:"BEYOND THE FRAME", interlude_headline:"WHERE VISION<br>MEETS <em>RAW REALITY</em>",
    interlude_body:"Every frame you witnessed was born in chaos — in the silence between takes, in the tension of a set, in the precise moment light decides to cooperate. What follows is not a gallery. It is a window into the process that makes the impossible look inevitable."
  },
  ua: {
    works:"ПОРТФОЛІО", creathion:"СТВОРЕННЯ", backstage_nav:"БЕКСТЕЙДЖ", contact:"КОНТАКТИ",
    hero_tag:"ЛАБОРАТОРІЯ ПРЕМІАЛЬНОГО ПРОДАКШНУ", showcase:"ПОРТФОЛІО", phil:"НАША ФІЛОСОФІЯ", backstage:"БЕКСТЕЙДЖ",
    main_h2:"СТВОРЕННЯ СВІТУ,<br>В ЯКИЙ <span>ХОЧЕТЬСЯ ПОВЕРТАТИСЬ</span>",
    e1_t:"01 / ПРЕДПРОДАКШН", e1_p:"Ми ретельно розробляємо унікальну концепцію, що органічно розкриває сутність бренду чи артиста.",
    e2_t:"02 / ПРОДАКШН", e2_p:"На етапі зйомки використовуємо професійне обладнання та кінематографічні світлові схеми для створення кадрів найвищої якості.",
    e3_t:"03 / ПОСТПРОДАКШН", e3_p:"Завершальний етап включає філігранний монтаж з чітко підкресленим темпоритмом, доповнений професійною кольорокорекцією, яка формує глибоку атмосферу відео.",
    cta_t:"ГОТОВІ ДО ПРОДАКШНУ?", cta_h2:"<span class='glow-text'>ПОЧАТИ ПРОЄКТ</span>",
    interlude_tag:"ЗА МЕЖЕЮ КАДРУ", interlude_headline:"ТАМ, ДЕ БАЧЕННЯ<br>ЗУСТРІЧАЄ <em>СИРУ РЕАЛЬНІСТЬ</em>",
    interlude_body:"Кожен кадр, який ви бачили, народився в хаосі — у тиші між дублями, у напрузі на майданчику, у точну мить, коли світло вирішило співпрацювати. Те, що йде далі — не галерея. Це вікно в процес, який перетворює неможливе на неминуче."
  }
};

let currentLang = 'ua';

function render() {
  const t = i18n[currentLang];
  const isMobile = window.innerWidth <= 768;
  const cards = projects.map((p,i) => {
    const onclick = p.clip ? `onclick="window.open('${p.clip}','_blank')"` : '';
    const cursor = p.clip ? 'cursor:pointer;' : '';
    return `<div class="item ${i<4?'wide':''}" ${onclick} style="${cursor}">
      <div class="v-frame">
        <iframe src="${yt(p.id)}"></iframe>
        ${p.clip ? '<div class="v-link-icon"><i class="fab fa-youtube"></i></div>' : ''}
      </div>
    </div>`;
  }).join('');

  document.querySelector('#app').innerHTML = `
    <header>
      <div class="logo">HIGH VISION <span>/ PROD</span></div>
      <div class="nav-wrap">
        <nav class="nav-links">
          <a href="#works">${t.works}</a>
          <a href="#creathion">${t.creathion}</a>
          <a href="#backstage">${t.backstage_nav}</a>
          <a href="#contact">${t.contact}</a>
        </nav>
        ${isMobile ? '<button class="burger" id="burger-btn"><span></span><span></span><span></span></button>' : ''}
        <div class="lang-switch">
          <button class="lang-btn ${currentLang==='ua'?'active':''}" data-lang="ua">UA</button>
          <button class="lang-btn ${currentLang==='en'?'active':''}" data-lang="en">EN</button>
        </div>
      </div>
    </header>

    ${isMobile ? `<div id="mobile-menu"><nav>
      <a href="#works">${t.works}</a>
      <a href="#creathion">${t.creathion}</a>
      <a href="#backstage">${t.backstage_nav}</a>
      <a href="#contact">${t.contact}</a>
    </nav></div>` : ''}

    <section class="hero">
      <canvas id="hero-stars"></canvas>
      ${isMobile ? `<div class="cam-rec-inline"><div class="cam-rec-dot-inline"></div><span class="cam-rec-text-inline">REC</span></div>` : ''}
      <h1 id="hero-logo"><span class="hero-line1">HIGH</span><span class="hero-line2">VISION</span></h1>
      ${!isMobile ? `<p style="font-family:'JetBrains Mono';letter-spacing:8px;font-size:10px;margin-top:20px;opacity:0.4;text-transform:uppercase;">${t.hero_tag}</p>` : ''}
      ${isMobile ? `<div class="scroll-indicator"><span class="scroll-label">SCROLL</span><span class="scroll-line"></span></div>` : ''}
    </section>

    <div class="gold-divider"></div>

    <section id="creathion" class="section-block expertise">
      <span class="section-label big-label">${t.phil}</span>
      <h2>${t.main_h2}</h2>
      <div class="exp-grid">
        <div class="exp-item"><h4>${t.e1_t}</h4><p>${t.e1_p}</p></div>
        <div class="exp-item"><h4>${t.e2_t}</h4><p>${t.e2_p}</p></div>
        <div class="exp-item"><h4>${t.e3_t}</h4><p>${t.e3_p}</p></div>
      </div>
    </section>

    <div class="gold-divider"></div>

    <main class="container">
      <section id="works" class="section-block">
        <div class="section-header"><span class="section-label floating-label big-label">${t.showcase}</span></div>
        <div class="showcase">${cards}</div>
      </section>

      <div class="gold-divider"></div>

      <div class="interlude-block">
        <div class="interlude-left"><div class="interlude-logo-wrap"><img class="interlude-logo" src="${logoUrl}" alt="HIGH VISION Logo"></div></div>
        <div class="interlude-right">
          <div class="interlude-tag">${t.interlude_tag}</div>
          <h2 class="interlude-headline">${t.interlude_headline}</h2>
          <p class="interlude-body">${t.interlude_body}</p>
          <div class="interlude-rule"></div>
        </div>
      </div>

      <div class="gold-divider"></div>

      <section id="backstage" class="section-block" style="padding-bottom:150px;">
        <span class="section-label big-label" style="margin-bottom:60px;">${t.backstage}</span>
        <div class="backstage-grid">${generateBackstageGrid()}</div>
      </section>
    </main>

    <div class="gold-divider"></div>

    <footer id="contact">
      <div class="footer-main">
        <span class="section-label" style="padding:0;margin-bottom:15px;opacity:0.5;">${t.cta_t}</span>
        <h2 id="cta-trigger" style="cursor:pointer;">${t.cta_h2}</h2>
        <div id="form-container" class="concept-form">
          <div class="form-wrapper"><iframe src="${googleFormUrl}" width="100%" height="1000" frameborder="0">Loading...</iframe></div>
        </div>
      </div>
      <div class="footer-custom-bar">
        <a href="https://www.instagram.com/by.highvision" target="_blank" class="f-link"><i class="fab fa-instagram"></i> INSTAGRAM</a>
        <div class="f-central" id="contacts-trigger">CONTACTS</div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=byhighvision@gmail.com" class="f-link"><i class="far fa-envelope"></i> EMAIL</a>
      </div>
    </footer>`;

  attachEvents();
}

function attachEvents() {
  document.querySelectorAll('.lang-btn').forEach(b => { b.onclick = () => { currentLang = b.dataset.lang; render(); }; });
  const ctaTrigger = document.getElementById('cta-trigger');
  if (ctaTrigger) ctaTrigger.onclick = () => {
    const form = document.getElementById('form-container');
    form.classList.add('active');
    setTimeout(() => form.scrollIntoView({behavior:'smooth',block:'start'}), 150);
  };
  const burger = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    burger.onclick = () => { burger.classList.toggle('open'); mobileMenu.classList.toggle('open'); };
    mobileMenu.querySelectorAll('a').forEach(a => a.onclick = () => { burger.classList.remove('open'); mobileMenu.classList.remove('open'); });
  }
  init3D();
  initScrollAnimations();
  initCTAGlow();
  if (window.innerWidth <= 768) { setTimeout(() => { initStars(); initVH(); }, 100); }
}

function init3D() {
  const logo = document.getElementById('hero-logo');
  if (!logo) return;
  window.onmousemove = (e) => {
    const x = (e.clientX - window.innerWidth/2)/40;
    const y = (e.clientY - window.innerHeight/2)/40;
    logo.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };
  if (window.innerWidth <= 768) {
    window.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      const x = (t.clientX - window.innerWidth/2)/25;
      const y = (t.clientY - window.innerHeight/2)/25;
      logo.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }, {passive:true});
    window.addEventListener('touchend', () => {
      logo.style.transition = 'transform 0.8s ease';
      logo.style.transform = 'rotateY(0deg) rotateX(0deg)';
      setTimeout(() => { logo.style.transition = 'transform 0.1s ease-out'; }, 800);
    });
  }
}

function initScrollAnimations() {
  const label = document.querySelector('.floating-label');
  if (!label) return;
  window.addEventListener('scroll', () => { label.style.transform = `translateX(${window.pageYOffset*0.05}px)`; });
}

function initCTAGlow() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { e.target.classList.toggle('cta-glow-active', e.isIntersecting); });
  }, {threshold:0.5});
  const cta = document.getElementById('cta-trigger');
  if (cta) observer.observe(cta);
}

function initStars() {
  const canvas = document.getElementById('hero-stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  const stars = Array.from({length: 160}, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.8 + 0.2,
    baseO: Math.random() * 0.5 + 0.3,
    twinkleSpeed: Math.random() * 0.04 + 0.01,
    phase: Math.random() * Math.PI * 2,
    gold: Math.random() < 0.18,
    // Деякі зірки "спалахують"
    flare: Math.random() < 0.08,
    flarePhase: Math.random() * Math.PI * 2,
    flareSpeed: Math.random() * 0.008 + 0.003,
    // Повільний дрейф
    dx: (Math.random() - 0.5) * 0.00015,
    dy: (Math.random() - 0.5) * 0.00008,
  }));

  // Падаюча зірка
  let shooting = null;
  function spawnShooting() {
    shooting = {
      x: Math.random() * 0.6 + 0.1,
      y: Math.random() * 0.3,
      len: Math.random() * 0.15 + 0.08,
      speed: Math.random() * 0.006 + 0.004,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      life: 1.0
    };
    setTimeout(spawnShooting, Math.random() * 6000 + 4000);
  }
  setTimeout(spawnShooting, 2000);

  function draw() {
    const w = canvas.width, h = canvas.height;
    const t = Date.now() / 1000;
    ctx.clearRect(0, 0, w, h);

    stars.forEach(s => {
      // Дрейф
      s.x += s.dx; s.y += s.dy;
      if (s.x < 0) s.x = 1; if (s.x > 1) s.x = 0;
      if (s.y < 0) s.y = 1; if (s.y > 1) s.y = 0;

      // Мерехтіння
      let op = s.baseO * (0.3 + 0.7 * Math.sin(t * s.twinkleSpeed * 10 + s.phase));

      // Спалах
      if (s.flare) {
        const flareVal = Math.sin(t * s.flareSpeed * 10 + s.flarePhase);
        if (flareVal > 0.85) {
          op = Math.min(1, op * 3.5);
          ctx.shadowBlur = 20;
        } else {
          ctx.shadowBlur = 0;
        }
      }

      const px = s.x * w, py = s.y * h;
      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);

      if (s.gold) {
        ctx.shadowColor = 'rgba(179,150,89,0.9)';
        ctx.shadowBlur = s.flare && ctx.shadowBlur > 0 ? 25 : 8;
        ctx.fillStyle = `rgba(179,150,89,${op})`;
      } else {
        ctx.shadowColor = 'rgba(255,255,255,0.8)';
        ctx.fillStyle = `rgba(255,255,255,${op})`;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Падаюча зірка
    if (shooting && shooting.life > 0) {
      shooting.x += Math.cos(shooting.angle) * shooting.speed;
      shooting.y += Math.sin(shooting.angle) * shooting.speed;
      shooting.life -= 0.018;

      const sx = shooting.x * w;
      const sy = shooting.y * h;
      const ex = sx - Math.cos(shooting.angle) * shooting.len * w;
      const ey = sy - Math.sin(shooting.angle) * shooting.len * w;

      const grad = ctx.createLinearGradient(ex, ey, sx, sy);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, `rgba(255,255,255,${shooting.life * 0.9})`);

      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(sx, sy);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Яскрава голова
      ctx.beginPath();
      ctx.arc(sx, sy, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${shooting.life})`;
      ctx.shadowColor = 'rgba(255,255,255,0.9)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (shooting.life <= 0) shooting = null;
    }

    requestAnimationFrame(draw);
  }
  draw();
}

function initVH() {
  const set = () => document.documentElement.style.setProperty('--vh', window.innerHeight*0.01+'px');
  set(); window.addEventListener('resize', set);
}

render();

/* PRELOADER */
const canvas = document.getElementById('lens-canvas');
const ctx = canvas.getContext('2d');
let W, H, cx, cy, t = 0, progress = 0, phase = 'eclipse', transitionAlpha = 1;
const BG = '#000000', LIGHT = '#FFFFFF';
function resize() { W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; cx=W/2; cy=H/2; }
window.addEventListener('resize', resize); resize();
const voidDust = Array.from({length:80}, () => ({x:Math.random()*W,y:Math.random()*H,s:Math.random()*0.8+0.2,v:0.05+Math.random()*0.1,o:Math.random()*0.3}));
function drawEclipse() {
  ctx.fillStyle=BG; ctx.fillRect(0,0,W,H);
  const loadRatio=progress/100; t+=0.015;
  voidDust.forEach(d=>{d.y-=d.v;if(d.y<0)d.y=H;const dist=Math.hypot(d.x-cx,d.y-cy);const vis=Math.max(0,1-dist/(W*0.4));ctx.fillStyle=`rgba(255,255,255,${d.o*vis})`;ctx.beginPath();ctx.arc(d.x,d.y,d.s,0,Math.PI*2);ctx.fill();});
  const R=Math.min(W,H)*0.2, angle=t*0.5;
  const lx=Math.cos(angle)*(R*0.08), ly=Math.sin(angle)*(R*0.08);
  ctx.save(); ctx.shadowColor=LIGHT; ctx.shadowBlur=20+(loadRatio*30); ctx.fillStyle=LIGHT;
  ctx.beginPath(); ctx.arc(cx+lx,cy+ly,R*0.98,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
  const fw=W*(0.4+loadRatio*0.6), fh=1.5, fx=cx+lx*12, fy=cy+ly*12;
  const fg=ctx.createLinearGradient(fx-fw/2,0,fx+fw/2,0);
  fg.addColorStop(0,'rgba(255,255,255,0)'); fg.addColorStop(0.4,'rgba(255,255,255,0.1)');
  fg.addColorStop(0.5,'rgba(255,255,255,0.9)'); fg.addColorStop(0.6,'rgba(255,255,255,0.1)'); fg.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=fg; ctx.fillRect(fx-fw/2,fy-fh/2,fw,fh);
  ctx.fillStyle=BG; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.05)'; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke(); ctx.restore();
  if(phase==='fadeOut'){transitionAlpha-=0.02;if(transitionAlpha<=0){transitionAlpha=0;finalize();}ctx.fillStyle=`rgba(0,0,0,${1-transitionAlpha})`;ctx.fillRect(0,0,W,H);}
}
function loop() { if(phase!=='done'){if(progress<100)progress+=0.35;else if(phase==='eclipse')phase='fadeOut';drawEclipse();requestAnimationFrame(loop);} }
function finalize() { phase='done'; const pre=document.getElementById('preloader'); if(pre)pre.style.opacity='0'; document.getElementById('site').classList.add('on'); setTimeout(()=>{if(pre)pre.style.display='none';},800); }
['pre-num','pre-bar-wrap','label','flash'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});
requestAnimationFrame(loop);
