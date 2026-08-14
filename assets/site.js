/* Grow What Matters — small progressive-enhancement layer. No dependencies. */
(function () {
  'use strict';

  /* ---- Mobile nav ---- */
  var head = document.querySelector('.site-head');
  var toggle = document.querySelector('.navtoggle');
  if (head && toggle) {
    toggle.addEventListener('click', function () {
      var open = head.getAttribute('data-nav') === 'open';
      head.setAttribute('data-nav', open ? 'closed' : 'open');
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  /* ---- Dropdown menus (click on touch, hover on pointer devices) ---- */
  var subs = Array.prototype.slice.call(document.querySelectorAll('.has-sub'));
  subs.forEach(function (sub) {
    var btn = sub.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = sub.getAttribute('data-open') === 'true';
      subs.forEach(function (s) { s.setAttribute('data-open', 'false'); s.querySelector('button').setAttribute('aria-expanded', 'false'); });
      sub.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', function () {
    subs.forEach(function (s) { s.setAttribute('data-open', 'false'); s.querySelector('button').setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      subs.forEach(function (s) { s.setAttribute('data-open', 'false'); s.querySelector('button').setAttribute('aria-expanded', 'false'); });
      if (head) { head.setAttribute('data-nav', 'closed'); if (toggle) toggle.setAttribute('aria-expanded', 'false'); }
    }
  });

  /* ---- Enquiry form ----
     If FORM_ENDPOINT below is left empty, the form falls back to opening the
     visitor's email client with everything pre-filled, so it still works on
     day one. Paste a Formspree / Netlify / Basin endpoint in to upgrade it.  */
  var FORM_ENDPOINT = '';
  var EMAIL = 'amy@growwhatmatters.com.au';

  var form = document.querySelector('#enquiry-form');
  if (!form) return;

  var statusEl = form.querySelector('.form-status');

  function say(msg, tone) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.style.color = tone === 'bad' ? '#A5522F' : '#2F4B33';
  }

  form.addEventListener('submit', function (e) {
    /* honeypot — silently drop bots */
    var hp = form.querySelector('input[name="company"]');
    if (hp && hp.value) { e.preventDefault(); return; }

    if (FORM_ENDPOINT) {
      e.preventDefault();
      var data = new FormData(form);
      say('Sending…');
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad response');
          form.reset();
          say('Thank you — your enquiry is with Amy. You will hear back within 2 business days.');
        })
        .catch(function () {
          say('Something went wrong. Please email ' + EMAIL + ' or call 0426 745 136.', 'bad');
        });
      return;
    }

    /* mailto fallback */
    e.preventDefault();
    var get = function (n) { var f = form.querySelector('[name="' + n + '"]'); return f ? f.value : ''; };
    var lines = [
      'Name: ' + get('name'),
      'Enquiring as: ' + get('role'),
      'Phone: ' + get('phone'),
      'Email: ' + get('email'),
      'Location: ' + get('location'),
      'Funding: ' + get('funding'),
      '',
      get('message')
    ].join('\n');
    var subject = 'Website enquiry — ' + (get('role') || 'general') + ' — ' + (get('name') || '');
    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines);
    say('Opening your email app. If nothing happens, email ' + EMAIL + ' directly.');
  });
})();
