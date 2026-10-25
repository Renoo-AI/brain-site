(() => {
  'use strict';
  const dictionary = {
    'A little more life.': 'مساحة للحياة.',
    'Good things this way.': 'أشياء جميلة تنتظرك.',
    'Join': 'انضم',
    'Download APK': 'حمّل APK',
    'Download Brain APK': 'حمّل تطبيق عقلك',
    'Download for Android': 'حمّل التطبيق لأندرويد',
    'Try focus': 'جرّب التركيز',
    'Menu': 'القائمة',
    'Skip to content': 'انتقل إلى المحتوى',
    'Meet Brain': 'تعرّف على عقلك',
    'Questions': 'أسئلة شائعة',
    'Instagram': 'إنستغرام',
    'Your phone, minus the brainrot.': 'هاتفك، بدون دوّامة التمرير.',
    'Join the waitlist': 'انضم إلى قائمة الانتظار',
    'Coming to iPhone & Android': 'قريبًا على آيفون وأندرويد',
    'Android APK available · iPhone coming soon': 'نسخة أندرويد متاحة · آيفون قريبًا',
    'Less scroll. More soul.': 'تمرير أقل. حياة أكثر',
    'Brain keeps the distracting apps out of the way.': 'عقلك يبعد عنك التطبيقات المشتّتة.',
    'So you can get back to the things you meant to do.': 'لتعود إلى الأشياء التي أردت فعلها وتعيش يومك بصفاء.',
    'Leave the feed': 'ابتعد عن التمرير',
    'with Brain.': 'مع عقلك.',
    'Choose the apps that steal your time. Brain keeps them closed while you get on with your day.': 'اختر التطبيقات التي تسرق وقتك وتركيزك. سيبقيها عقلك مغلقة لتكمل يومك براحة.',
    'A little headspace': 'مساحة لذهنك',
    'Make room': 'خصّص وقتًا',
    'for your thing.': 'لما تحبّ.',
    'A chapter. A workout. The project you keep putting off. Start a focus session and Brain keeps you company.': 'فصل من كتاب. تمرينك اليومي. مشروع تؤجّله دائمًا. ابدأ جلسة تركيز ودع عقلك يرافقك.',
    'Try a focus moment': 'جرّب لحظة تركيز',
    'A 12-second website preview.': 'تجربة على الموقع لمدة ١٢ ثانية.',
    'Earn your scroll.': 'اكسب وقت التمرير.',
    'Enjoy your break.': 'واستمتع باستراحتك.',
    'Focused time earns scroll time. A little less autopilot, a little more intention.': 'وقت التركيز يمنحك وقتًا للتمرير. حافظ على صفاء عقلك ونشاطه، عادات تلقائية أقل وخيارات واعية أكثر.',
    'Get Brain first.': 'كن من أوائل أصدقاء عقلك.',
    'Leave your Instagram. We’ll DM you when it’s ready.': 'اترك اسم حسابك على إنستغرام. سنراسلك عند الإطلاق.',
    'A little less scroll': 'تمرير أقلّ',
    'starts here.': 'يبدأ من هنا.',
    'Your first step is the easy one.': 'خطوتك الأولى سهلة.',
    'What’s in your pocket?': 'ما نوع هاتفك؟',
    'iPhone': 'آيفون',
    'Android': 'أندرويد',
    'Where can Brain find you?': 'أين يجدك عقلك؟',
    'No email needed. Just one launch DM.': 'لا نحتاج بريدك الإلكتروني. رسالة واحدة عند الإطلاق.',
    'Website': 'الموقع الإلكتروني',
    'Save my spot': 'احجز مكاني',
    'One launch DM. Zero spam. Pinky promise.': 'رسالة واحدة عند الإطلاق، بلا إزعاج. وعد!',
    'Preview mode: saved on this device only.': 'وضع المعاينة: يُحفظ على هذا الجهاز فقط.',
    'You’re on the list!': 'أنت الآن على القائمة!',
    'Follow the build': 'تابع تطوّر عقلك',
    'Use another username': 'استخدم اسم حساب آخر',
    'A few things': 'إجابات عن أسئلة',
    'you might ask.': 'قد تخطر ببالك.',
    'Brain’s got your back.': 'عقلك معك دائمًا.',
    'Here’s the rest.': 'وإليك بقية التفاصيل.',
    'What does Brain actually do?': 'ماذا يفعل تطبيق عقلك؟',
    'Brain helps you block distracting apps during focus sessions. Spend time on what matters, then earn some scroll time back.': 'يساعدك تطبيق عقلك على حجب التطبيقات المشتّتة أثناء جلسات التركيز. خصّص وقتك لما يهمّك، واكسب بعدها وقتًا صحيًا للتمرير.',
    'When can I get it?': 'متى يمكنني تجربة التطبيق؟',
    'We’re building Brain now. Join the waitlist and we’ll DM you when your version is ready. You can follow the build at': 'نعمل على تطوير تطبيق عقلك الآن. انضم إلى قائمة الانتظار وسنراسلك عندما تصبح نسختك جاهزة. تابع التطوير على',
    'iPhone or Android?': 'آيفون أم أندرويد؟',
    'Both are in the works. Pick your phone when you join so we can let you know when your version launches.': 'نعمل على النسختين معًا. اختر نوع هاتفك عند الانضمام لنخبرك عند إطلاق نسختك.',
    'Will there be a free plan?': 'هل ستتوفر خطة مجانية؟',
    'Yes. We’ll share the details closer to launch, including a launch perk for early waitlist members.': 'نعم. سنشارك التفاصيل مع اقتراب الإطلاق، بما فيها ميزات خاصة للأعضاء الأوائل في قائمة الانتظار.',
    'Why do you need my Instagram?': 'لماذا تحتاجون حسابي على إنستغرام؟',
    'Just to send you a launch DM. No password, no email, and no stream of marketing messages.': 'لنرسل لك رسالة خاصة واحدة عند الإطلاق فقط. لا نحتاج كلمة مرورك أو بريدك الإلكتروني، ولن نغرقك برسائل تسويقية.',
    'Back to the sky': 'عُد إلى البداية',
    '© 2026 Brain': '© 2026 عقلك',
    'Choose iPhone or Android first.': 'اختر آيفون أو أندرويد أولًا.',
    'Use 1–30 letters, numbers, dots or underscores.': 'استخدم من ١ إلى ٣٠ حرفًا لاتينيًا أو رقمًا أو نقطة أو شرطة سفلية.',
    'Saving…': 'جارٍ الحفظ…',
    'Saved on this device.': 'تم الحفظ على هذا الجهاز.',
    'You’re already on the list!': 'أنت مسجّل بالفعل!',
    'Couldn’t save your spot. Please try again.': 'تعذّر حجز مكانك. حاول مجددًا.',
    'Browser storage is unavailable. Follow @brainandpip for launch updates.': 'التخزين في المتصفح غير متاح. تابع @brainandpip لمعرفة أخبار الإطلاق.',
    'One more moment': 'لحظة أخرى',
    'A little time back. Your brain feels refreshed!': 'استعدت قليلًا من وقتك. عقلك يشكرك!',
    'Keep going': 'واصل التركيز',
    'Take your time. Brain’s right here.': 'خذ وقتك. عقلك هنا معك.',
    'Pause a moment': 'أوقف مؤقتًا',
    'Just breathe. The feed can wait.': 'تنفّس بهدوء. التمرير يمكنه الانتظار.',
    'Main navigation': 'التنقّل الرئيسي',
    'Footer navigation': 'روابط أسفل الصفحة',
    'Brain footer': 'تذييل عقلك',
    'Brain': 'عقلك'
  };

  const arabicPage = /(?:^|\/)ar\.html$/.test(location.pathname);
  let language = arabicPage ? 'ar' : 'en';
  try { language = arabicPage ? 'ar' : localStorage.getItem('brain-language') || (navigator.language.startsWith('ar') ? 'ar' : 'en'); } catch {}
  language = language === 'ar' ? 'ar' : 'en';
  const originals = new Map();
  const rendered = new Map();
  const attributes = [];

  function translate(value) {
    const key = value.trim();
    let result = dictionary[key];
    if (!result && /^\d+ seconds remaining$/.test(key)) result = `متبقّي ${key.split(' ')[0]} ثانية`;
    let match;
    if (!result && (match = key.match(/^@(.+), this is a website preview\./))) result = `@${match[1]}، هذه معاينة للموقع. تم حفظ اختيارك في هذا المتصفح فقط. تابع @brainandpip لمعرفة أخبار الإطلاق.`;
    if (!result && (match = key.match(/^We’ll DM @(.+) on Instagram when Brain is ready for (iPhone|Android)\.$/))) result = `سنراسل @${match[1]} على إنستغرام عندما يصبح تطبيق عقلك جاهزًا لهاتف ${match[2] === 'iPhone' ? 'آيفون' : 'أندرويد'}.`;
    return result ? value.replace(key, result) : value;
  }

  function paintText(node) {
    const value = originals.get(node);
    const next = language === 'ar' ? translate(value) : value;
    rendered.set(node, next);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function collect(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest('script,style,#language-switch') || !node.nodeValue.trim()) continue;
      if (!originals.has(node)) { originals.set(node, node.nodeValue); paintText(node); }
    }
  }

  document.querySelectorAll('[alt],[aria-label],meta[name=description]').forEach(node => {
    for (const name of ['alt', 'aria-label', 'content']) if (node.hasAttribute(name)) attributes.push([node, name, node.getAttribute(name)]);
  });
  collect(document.documentElement);

  const englishDesc = 'Meet Brain, your cute clay companion for mindful phone use. Keep your brain clean, put distracting apps away, and earn your scroll time back.';
  const arabicDesc = 'تعرّف على عقلك، رفيقك الصلصالي لتركيز أفضل. حافظ على صفاء عقلك، أبعد التطبيقات المشتّتة، واكسب وقت التمرير.';
  const toggle = document.getElementById('language-switch');

  function apply() {
    const heroTitleImg = document.querySelector('#hero-title img');
    if (heroTitleImg) {
      heroTitleImg.src = language === 'ar' ? 'assets/brain-ar.png' : 'assets/BRAIN_cutout.png';
      heroTitleImg.alt = language === 'ar' ? 'عقلك' : 'Brain';
    }
    const headlineImg = document.querySelector('.story-clay-title img');
    if (headlineImg) headlineImg.src = language === 'ar' ? 'assets/clay_ar_pink.png' : 'assets/less_more_pink.png';

    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    originals.forEach((_, node) => { if (node.isConnected) paintText(node); else { originals.delete(node); rendered.delete(node); } });
    attributes.forEach(([node, name, value]) => node.setAttribute(name, language === 'ar' ? translate(value) : value));

    const arabic = language === 'ar';
    document.title = arabic ? 'عقلك — تمرير أقل. حياة أكثر' : 'Brain — Your phone, minus the brainrot.';
    const description = arabic ? arabicDesc : englishDesc;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.content = description;

    const metadata = {
      'og:site_name': arabic ? 'عقلك' : 'Brain',
      'og:title': arabic ? 'عقلك — تمرير أقل. حياة أكثر' : 'Brain — Less scroll. More soul.',
      'og:description': description,
      'og:locale': arabic ? 'ar_QA' : 'en_US',
      'og:locale:alternate': arabic ? 'en_US' : 'ar_QA',
      'og:image': arabic ? 'assets/opengraph-ar-same.jpg' : 'assets/opengraph-lets-make-it-more-pro-for-the-brain-pose.jpg',
      'twitter:title': arabic ? 'عقلك — تمرير أقل. حياة أكثر' : 'Brain — Less scroll. More soul.',
      'twitter:description': description,
      'twitter:image': arabic ? 'assets/opengraph-ar-same.jpg' : 'assets/opengraph-lets-make-it-more-pro-for-the-brain-pose.jpg'
    };
    for (const [key, value] of Object.entries(metadata)) document.querySelector(`meta[property="${key}"],meta[name="${key}"]`)?.setAttribute('content', value);

    if (toggle) {
      toggle.title = language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';
      toggle.lang = language === 'ar' ? 'en' : 'ar';
      toggle.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }
  }
  apply();

  new MutationObserver(records => {
    records.forEach(record => {
      if (record.type === 'characterData') {
        const node = record.target;
        if (node.parentElement?.closest('#language-switch')) return;
        if (node.nodeValue !== rendered.get(node)) { originals.set(node, node.nodeValue); paintText(node); }
      } else record.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && !node.parentElement?.closest('#language-switch')) { originals.set(node, node.nodeValue); paintText(node); }
        else if (node.nodeType === Node.ELEMENT_NODE) collect(node);
      });
    });
  }).observe(document.body, { subtree: true, childList: true, characterData: true });

  const timer = document.getElementById('focus-time');
  if (timer) {
    new MutationObserver(() => {
      const value = timer.getAttribute('aria-label');
      if (language === 'ar' && /seconds remaining$/.test(value)) timer.setAttribute('aria-label', translate(value));
    }).observe(timer, { attributes: true, attributeFilter: ['aria-label'] });
  }

  let switching = false;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (toggle) {
    toggle.addEventListener('click', async () => {
      if (switching) return;
      switching = true;
      const commit = () => {
        language = language === 'ar' ? 'en' : 'ar';
        const url = new URL(language === 'ar' ? 'ar.html' : 'index.html', location.href);
        url.search = location.search; url.hash = location.hash;
        try { history.replaceState(null, '', url); } catch {}
        try { localStorage.setItem('brain-language', language); } catch {}
        apply();
        if (timer) {
          const seconds = Math.ceil(Number(timer.value.split(':')[1]));
          timer.setAttribute('aria-label', language === 'ar' ? `متبقّي ${seconds} ثانية` : `${seconds} seconds remaining`);
        }
      };
      if (reducedMotion.matches) { commit(); switching = false; return; }
      const wind = document.getElementById('language-wind');
      if (wind) {
        wind.classList.remove('is-blowing');
        void wind.offsetWidth;
        wind.classList.add('is-blowing');
      }
      document.documentElement.classList.add('language-changing');
      try {
        if (document.startViewTransition) {
          const transition = document.startViewTransition(commit);
          await transition.finished;
        } else {
          await new Promise(resolve => setTimeout(resolve, 160));
          commit();
          await new Promise(resolve => setTimeout(resolve, 520));
        }
      } finally {
        if (wind) wind.classList.remove('is-blowing');
        document.documentElement.classList.remove('language-changing');
        switching = false;
      }
    });
  }
})();
