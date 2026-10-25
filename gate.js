(() => {
  'use strict';
  const ar = {
    skip:'انتقل إلى المحتوى',brand:'فوكس وبيب',brandHome:'فوكس وبيب — الرئيسية',nav:'التنقّل الرئيسي',home:'الرئيسية',apps:'التطبيقات',about:'عن فوكس',support:'المساعدة',start:'ابدأ الآن',
    eyebrow:'تطبيقان. ومساحة أكبر لك.',headline1:'تركيز أكثر.',headline2:'نسيان أقل.',
    subhead:'فوكس يحمي تركيزك. وبيب يحوّل أفكارك إلى خطوات عملية. تطبيقان بسيطان، صُمّما ليعملا معًا بانسجام.',
    choose:'اختر رفيقك',focx:'فوكس',pip:'بيب',
    focxTagline:'رفيقك للتركيز. اخرج من دوّامة التمرير، واستعد انتباهك.',
    f1:'احجب المشتّتات',f2:'ابنِ سلسلة أيام من التركيز',f3:'تابع وقت استخدام الشاشة',f4:'حافظ على تركيزك',openFocx:'افتح فوكس',
    pipTagline:'قلها مرة واحدة. وبيب يحوّلها إلى مهمة، فورًا.',
    p1:'تحدّث بطبيعتك',p2:'حوّل كلامك إلى مهام',p3:'لا تفوّت أي تذكير',p4:'فقط قل «Hey Pip»',openPip:'افتح بيب',
    focusCue:'مساحة لتركيزك',pipCue:'قلها. وتمّت.',focxBadge:'رفيق التركيز',pipBadge:'من صوتك إلى مهمة',copyright:'© 2026 فوكس وبيب'
  };
  const en = {};
  const englishTitle = 'Focx & Pip — More focus. Less forgotten.';
  const arabicTitle = 'فوكس وبيب — تركيز أكثر. نسيان أقل.';
  const englishDescription = 'Focx protects your focus. Pip turns your thoughts into action. Two simple apps, made to work beautifully together.';
  const arabicPage = /(?:^|\/)ar\.html$/.test(location.pathname);
  const toggle = document.getElementById('language-switch');
  // English strings also live in the static Arabic page for reliable switching without a reload.
  document.querySelectorAll('[data-i18n]').forEach(el => { en[el.dataset.i18n] = el.dataset.en || el.textContent; });
  document.querySelectorAll('[data-label]').forEach(el => { en[el.dataset.label] = el.dataset.enLabel || el.getAttribute('aria-label'); });
  let language = arabicPage ? 'ar' : 'en';
  try { if (!arabicPage) language = localStorage.getItem('focx-language') || (navigator.language.startsWith('ar') ? 'ar' : 'en'); } catch {}
  language = language === 'ar' ? 'ar' : 'en';
  function apply() {
    const arabic = language === 'ar';
    const dictionary = arabic ? ar : en;
    document.documentElement.lang = language;
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = dictionary[el.dataset.i18n]; });
    document.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label',dictionary[el.dataset.label]); });
    document.querySelectorAll('[data-focx]').forEach(el => { el.href = `brain/${arabic ? 'ar.html' : ''}${el.dataset.focx}`; });
    const title = arabic ? arabicTitle : englishTitle;
    const description = arabic ? ar.subhead : englishDescription;
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    for (const key of ['og:title','twitter:title']) document.querySelector(`meta[property="${key}"],meta[name="${key}"]`).content = title;
    for (const key of ['og:description','twitter:description']) document.querySelector(`meta[property="${key}"],meta[name="${key}"]`).content = description;
    document.querySelector('meta[property="og:site_name"]').content = dictionary.brand;
    document.querySelector('meta[property="og:locale"]').content = arabic ? 'ar_QA' : 'en_US';
    document.querySelector('meta[property="og:locale:alternate"]').content = arabic ? 'en_US' : 'ar_QA';
    document.querySelector('meta[property="og:image:alt"]').content = arabic ? 'فوكس وبيب، رفيقان صلصاليان برتقاليان مبتسمان.' : 'Focx and Pip, two smiling orange clay companions.';
    toggle.textContent = arabic ? 'English' : 'العربية';
    toggle.lang = arabic ? 'en' : 'ar';
    toggle.href = arabic ? 'index.html' : 'ar.html';
    toggle.setAttribute('aria-label',arabic ? 'Switch to English' : 'التبديل إلى العربية');
  }
  apply();
  let switching = false;
  toggle.addEventListener('click', async event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (switching) return;
    switching = true;
    const commit = () => {
      language = language === 'ar' ? 'en' : 'ar';
      try { localStorage.setItem('focx-language',language); } catch {}
      const url = new URL(language === 'ar' ? 'ar.html' : 'index.html', location.href);
      url.search = location.search; url.hash = location.hash;
      try { history.replaceState(null,'',url); } catch {}
      apply();
    };
    try {
      if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) await document.startViewTransition(commit).finished;
      else commit();
    } finally { switching = false; }
  });

  // Tactile 3D clay pointer tilt & sunlight specular tracking
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.garden-button').forEach(btn => {
      let frame = 0;
      btn.addEventListener('pointermove', e => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = btn.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          const rx = ((0.5 - py) * 7).toFixed(2);
          const ry = ((px - 0.5) * 9).toFixed(2);
          btn.style.setProperty('--rx', `${rx}deg`);
          btn.style.setProperty('--ry', `${ry}deg`);
          btn.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
          btn.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
        });
      });
      btn.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        btn.style.setProperty('--rx', '0deg');
        btn.style.setProperty('--ry', '0deg');
        btn.style.setProperty('--mx', '30%');
        btn.style.setProperty('--my', '15%');
      });
    });
  }
})();


