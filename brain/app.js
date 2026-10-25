(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }

  const form = $('#wl'), input = $('#ig'), hint = $('#hint'), submit = $('#go');
  const defaultHint = 'No email needed. Just one launch DM.';
  function say(message, error = false) {
    hint.textContent = message;
    hint.classList.toggle('err', error);
    input.setAttribute('aria-invalid', String(error));
  }
  input.addEventListener('input', () => {
    input.value = input.value.replace(/^@+/, '');
    if (hint.classList.contains('err')) say(defaultHint);
  });
  form.querySelectorAll('[name=platform]').forEach(radio => radio.addEventListener('change', () => {
    if (hint.classList.contains('err')) say(defaultHint);
  }));
  async function save(handle, platform) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST', signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ handle, platform, website: $('#website').value })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Save failed');
      return { already: Boolean(result.already), local: false };
    } finally { clearTimeout(timeout); }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if ($('#website').value || submit.disabled) return;
    const platform = form.querySelector('[name=platform]:checked')?.value;
    const handle = input.value.trim().replace(/^@+/, '').toLowerCase();
    if (!platform) {
      say('Choose iPhone or Android first.', true);
      form.querySelector('[name=platform]').focus();
      return;
    }
    if (!/^[a-z0-9._]{1,30}$/.test(handle)) {
      say('Use 1–30 letters, numbers, dots or underscores.', true);
      input.focus();
      return;
    }
    submit.disabled = true;
    submit.textContent = 'Saving…';
    form.setAttribute('aria-busy', 'true');
    try {
      const result = await save(handle, platform);
      $('#done-title').textContent = result.already ? 'You’re already on the list!' : 'You’re on the list!';
      $('#done-description').textContent = `We’ll DM @${handle} on Instagram when Brain is ready for ${platform === 'ios' ? 'iPhone' : 'Android'}.`;
      form.hidden = true;
      $('.join-bell').hidden = true;
      $('#done').hidden = false;
      $('#done').focus({ preventScroll: true });
    } catch {
      say('Couldn’t save your spot. Please try again.', true);
    } finally {
      submit.disabled = false;
      submit.textContent = 'Save my spot';
      form.removeAttribute('aria-busy');
    }
  });
  $('#join-another').addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    $('.join-bell').hidden = false;
    $('#done').hidden = true;
    say(defaultHint);
    form.querySelector('[name=platform]').focus({ preventScroll: true });
  });
})();

// An illustrative focus moment: Keep your brain clean & sharp
(() => {
  const button = document.querySelector('#focus-start');
  const time = document.querySelector('#focus-time');
  const status = document.querySelector('#focus-status');
  const progress = document.querySelector('#focus-progress');
  const stage = document.querySelector('.focus-stage');
  let active = false;
  let remaining = 12000;
  let deadline = 0;
  let frame;
  function paint() {
    const seconds = Math.ceil(remaining / 1000);
    const display = `00:${String(seconds).padStart(2, '0')}`;
    if (time.value !== display) {
      time.value = display;
      time.setAttribute('aria-label', `${seconds} seconds remaining`);
    }
    progress.style.transform = `scaleX(${remaining / 12000})`;
  }
  function tick() {
    if (!active) return;
    remaining = Math.max(0, deadline - performance.now());
    paint();
    if (remaining === 0) {
      active = false;
      stage.classList.remove('is-focusing');
      button.textContent = 'One more moment';
      status.textContent = 'A little time back. Your brain feels refreshed!';
      return;
    }
    frame = requestAnimationFrame(tick);
  }
  button.addEventListener('click', () => {
    if (active) {
      remaining = Math.max(0, deadline - performance.now());
      active = false;
      cancelAnimationFrame(frame);
      stage.classList.remove('is-focusing');
      button.textContent = 'Keep going';
      status.textContent = 'Take your time. Brain’s right here.';
      paint();
    } else {
      if (remaining <= 0) remaining = 12000;
      deadline = performance.now() + remaining;
      active = true;
      stage.classList.add('is-focusing');
      button.textContent = 'Pause a moment';
      status.textContent = 'Just breathe. The feed can wait.';
      tick();
    }
  });
})();

// Keep the seated brain on the wordmark as language and screen size change.
(() => {
  const logo = document.querySelector('#hero-title img');
  const brain = document.querySelector('.intro-brain');
  const scene = document.querySelector('.intro-scene');
  function seatBrain() {
    if (!logo || !brain || !logo.complete || !logo.naturalHeight) return;
    const arabic = document.documentElement.lang === 'ar';
    if (arabic) {
      brain.style.display = 'none';
      return;
    }
    brain.style.display = '';
    const logoHeight = logo.getBoundingClientRect().height;
    brain.style.bottom = `${Math.round(logoHeight * 0.82)}px`;
    brain.style.left = '50%';
  }
  if (logo) {
    logo.addEventListener('load', seatBrain);
    if ('ResizeObserver' in window && scene) new ResizeObserver(seatBrain).observe(scene);
    else window.addEventListener('resize', seatBrain);
    new MutationObserver(seatBrain).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    seatBrain();
  }
})();

// Mobile navigation with keyboard and resize support
(() => {
  const header = document.querySelector('#site-nav');
  const toggle = document.querySelector('#nav-toggle');
  const mobile = matchMedia('(max-width: 1100px)');
  if (!header || !toggle) return;
  header.classList.add('nav-ready');
  function close(returnFocus = false) {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus({ preventScroll: true });
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('nav-open')) {
      event.preventDefault(); close(true);
    }
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) close(); });
  header.addEventListener('focusout', event => { if (!header.contains(event.relatedTarget)) close(); });
  header.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    close();
    if (link.hash && link.origin === location.origin) {
      const target = document.querySelector(link.hash);
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    }
  }));
  const langSwitch = document.querySelector('#language-switch');
  if (langSwitch) langSwitch.addEventListener('click', () => close());
  mobile.addEventListener('change', () => close());
  const links = [...header.querySelectorAll('a[href^="#"]')];
  const sections = ['how', 'focus-preview', 'join', 'faq'].map(id => document.getElementById(id)).filter(Boolean);
  let queued = false;
  function update() {
    queued = false;
    header.classList.toggle('is-scrolled', scrollY > 24);
    let current = '';
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 165) current = '#' + section.id; });
    links.forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();

// Preserve native details semantics while animating the panel's actual height
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.faq-list details').forEach(details => {
    const summary = details.querySelector('summary');
    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    while (summary.nextSibling) answer.append(summary.nextSibling);
    details.append(answer);
    let animation, contentAnimation, intended = details.open;
    function settle() {
      details.open = intended;
      details.style.height = '';
      details.style.overflow = '';
      animation = null;
    }
    summary.addEventListener('click', event => {
      if (reduced.matches) return;
      event.preventDefault();
      const start = details.getBoundingClientRect().height;
      intended = animation ? !intended : !details.open;
      if (animation) { animation.onfinish = null; animation.cancel(); }
      contentAnimation?.cancel();
      details.open = true;
      details.style.height = 'auto';
      const end = intended ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height;
      details.style.height = `${start}px`;
      details.style.overflow = 'hidden';
      animation = details.animate([{ height: `${start}px` }, { height: `${end}px` }], { duration: 320, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'forwards' });
      contentAnimation = answer.animate(intended ? [{ opacity: 0, transform: 'translateY(-5px)' }, { opacity: 1, transform: 'none' }] : [{ opacity: 1 }, { opacity: 0 }], { duration: intended ? 280 : 180, easing: 'ease-out' });
      animation.onfinish = () => { const finished = animation; settle(); finished.cancel(); };
    });
    reduced.addEventListener('change', () => { if (reduced.matches && animation) { animation.cancel(); contentAnimation?.cancel(); settle(); } });
  });
  const waitlist = document.querySelector('#join');
  if (waitlist) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        entries.forEach(entry => waitlist.classList.toggle('parrot-awake', entry.isIntersecting));
      }, { rootMargin: '180px 0px', threshold: 0 }).observe(waitlist);
    } else {
      waitlist.classList.add('parrot-awake');
    }
  }
})();

