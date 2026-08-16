/* Shared layout, components and site-wide constants for Grow What Matters. */

const SITE = {
  name: 'Grow What Matters',
  tagline: 'Building on Strengths, Relationships and Possibilities',
  url: 'https://growwhatmatters.com.au',
  phone: '0426 745 136',
  phoneHref: '+61426745136',
  email: 'amy@growwhatmatters.com.au',
  capacity: 'Taking new referrals from October 2026',
  reply: 'Enquiries answered within 2 business days',
  regProvider: 'Constructional Solutions',
};

/* ---------------- icons ---------------- */
const I = {
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2.5 6.5 12 13 21.5 6.5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10.5" r="2.8"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  seed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22V9"/><path d="M12 9C12 5 9 2 5 2c0 4 3 7 7 7z"/><path d="M12 12c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6z"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20"/><circle cx="9" cy="7" r="3.4"/><path d="M22 20v-1.5a4 4 0 0 0-3-3.87"/><path d="M16.5 3.6a4 4 0 0 1 0 7.75"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5.5L12 2.5 4 5.5V12c0 6 8 10 8 10z"/><polyline points="9 12 11.2 14.2 15.4 10"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 7 19 7"/><line x1="8.5" y1="13" x2="15.5" y2="13"/><line x1="8.5" y1="17" x2="13" y2="17"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="21" x2="21" y2="21"/><rect x="5" y="12" width="3.6" height="6"/><rect x="10.2" y="8" width="3.6" height="10"/><rect x="15.4" y="4" width="3.6" height="14"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7.5" cy="15.5" r="4.5"/><line x1="10.8" y1="12.2" x2="21" y2="2"/><line x1="17" y1="6" x2="19.5" y2="8.5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1l1.4 1.3L12 21l7-7 1.4-1.3a5 5 0 0 0 0-7.1z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><polygon points="16.2 7.8 14 14 7.8 16.2 10 10"/></svg>',
};

/* ---------------- navigation ---------------- */
const NAV = [
  { label: 'Services', children: [
    { href: 'specialist-behaviour-support.html', label: 'Specialist Behaviour Support', note: 'Assessment, plans, team training' },
    { href: 'behaviour-support-plans.html', label: 'Behaviour Support Plans', note: 'What is in one, and how it is built' },
    { href: 'restrictive-practices.html', label: 'Restrictive Practices', note: 'Reduction and elimination' },
    { href: 'early-childhood-early-intervention.html', label: 'Early Childhood', note: 'Under 9s and their families' },
    { href: 'improved-daily-living.html', label: 'Improved Daily Living', note: 'Skill building across the lifespan' },
    { href: 'assessments-and-reports.html', label: 'Assessments & Reports', note: 'Evidence for plan reviews' },
    { href: 'training-and-consultancy.html', label: 'Consultancy & Training', note: 'Schools, services and private clients' },
  ]},
  { label: 'Info for', children: [
    { href: 'for-families.html', label: 'Families & participants', note: 'What support actually looks like' },
    { href: 'for-support-coordinators.html', label: 'Support coordinators', note: 'Capacity, referrals, reports' },
    { href: 'ndis-funding.html', label: 'How NDIS funding works', note: 'Which budget pays for what' },
  ]},
  { href: 'positive-behaviour-support-gympie.html', label: 'Gympie' },
  { href: 'about.html', label: 'About Amy' },
  { href: 'contact.html', label: 'Contact' },
];

/* ---------------- component helpers ---------------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function btn(href, label, cls = 'btn-primary', arrow = false) {
  return `<a class="btn ${cls}" href="${href}">${label}${arrow ? I.arrow : ''}</a>`;
}

function card({ icon = null, iconTone = '', title, body, href = null, more = 'Read more' }) {
  const inner = `
        ${icon ? `<div class="icon ${iconTone}">${icon}</div>` : ''}
        <h3>${title}</h3>
        ${body}
        ${href ? `<span class="more">${more}${I.arrow}</span>` : ''}`;
  return href
    ? `<a class="card card-link" href="${href}">${inner}</a>`
    : `<div class="card">${inner}</div>`;
}

function step({ when = null, title, body }) {
  return `<div class="step"><div>
        ${when ? `<span class="when">${when}</span>` : ''}
        <h3>${title}</h3>${body}
      </div></div>`;
}

function faq(items) {
  return `<div class="faq">` + items.map(q =>
    `<details><summary>${q.q}</summary><div class="ans">${q.a}</div></details>`
  ).join('\n') + `</div>`;
}

function faqSchema(items) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(q => ({
      '@type': 'Question',
      name: q.q.replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() },
    })),
  });
}

/* Contact routes band, repeated across the site */
function ctaBand(heading = 'Ready to talk it through?', intro = 'Three ways to start. Pick whichever suits you, there is no wrong one.') {
  return `
  <section class="band">
    <img class="band-mark" src="assets/logo-badge-cream.png" alt="" aria-hidden="true">
    <div class="wrap">
      <div class="sec-head center" style="margin-left:auto;margin-right:auto">
        <h2>${heading}</h2>
        <p class="lede">${intro}</p>
      </div>
      <div class="routes">
        <div class="route">
          <h3>Send an enquiry</h3>
          <p>Tell me a bit about the situation in your own time. Best if you are gathering your thoughts, or it is late and the day has been long.</p>
          <a href="contact.html">Go to the enquiry form</a>
        </div>
        <div class="route">
          <h3>Call or text me</h3>
          <p>Quickest for support coordinators and anyone who would rather just ask the question out loud.</p>
          <a href="tel:${SITE.phoneHref}">${SITE.phone}</a>
        </div>
        <div class="route">
          <h3>Email directly</h3>
          <p>Handy if you already have plan details, reports or a referral to attach.</p>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
        </div>
      </div>
      <p class="small" style="margin-top:26px;color:#BACAB9">${SITE.capacity}. ${SITE.reply}.</p>
    </div>
  </section>`;
}

/* Enquiry form */
function enquiryForm(compact = false) {
  return `
      <div class="formwrap">
        ${compact ? '' : '<h2 style="margin-bottom:.35em">Send an enquiry</h2><p class="muted" style="margin-bottom:26px">Anything marked with a <span class="req">*</span> helps me point you in the right direction. The rest is optional.</p>'}
        <form id="enquiry-form" method="post" novalidate>
          <input class="hp" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true">
          <div class="field">
            <label for="role">I am enquiring as <span class="req">*</span></label>
            <select id="role" name="role" required>
              <option value="">Please choose…</option>
              <option>A family member or carer</option>
              <option>An NDIS participant, for myself</option>
              <option>A support coordinator</option>
              <option>A support worker or service provider</option>
              <option>A school, early learning centre or day program</option>
              <option>Something else</option>
            </select>
          </div>
          <div class="f2">
            <div class="field">
              <label for="name">Your name <span class="req">*</span></label>
              <input id="name" name="name" type="text" required autocomplete="name">
            </div>
            <div class="field">
              <label for="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autocomplete="tel">
            </div>
          </div>
          <div class="f2">
            <div class="field">
              <label for="email">Email <span class="req">*</span></label>
              <input id="email" name="email" type="email" required autocomplete="email">
            </div>
            <div class="field">
              <label for="location">Town or suburb</label>
              <input id="location" name="location" type="text" placeholder="Gympie, Tin Can Bay, Noosa…">
            </div>
          </div>
          <div class="field">
            <label for="funding">How is the NDIS plan managed?</label>
            <span class="hint">Not sure? Choose the last option. It is a common question and it does not hold anything up.</span>
            <select id="funding" name="funding">
              <option value="">Please choose…</option>
              <option>Self-managed</option>
              <option>Plan-managed</option>
              <option>NDIA (agency) managed</option>
              <option>Privately funded, not through the NDIS</option>
              <option>No NDIS plan yet</option>
              <option>Not sure</option>
            </select>
          </div>
          <div class="field">
            <label for="message">What is going on? <span class="req">*</span></label>
            <span class="hint">As much or as little as you like. A couple of sentences is plenty to start.</span>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Send enquiry${I.arrow}</button>
          <p class="form-status small" style="margin:14px 0 0" role="status" aria-live="polite"></p>
          <p class="formnote">I answer enquiries within 2 business days. If it is urgent, please call or text ${SITE.phone}. This form is not monitored outside business hours. In an emergency call 000. For mental health crisis support, Lifeline is on 13 11 14.</p>
        </form>
      </div>`;
}

/* ---------------- page shell ---------------- */
function navHTML(current) {
  return NAV.map(item => {
    if (item.children) {
      const id = 'sub-' + item.label.toLowerCase().replace(/\s+/g, '-');
      return `<div class="has-sub" data-open="false">
          <button type="button" aria-expanded="false" aria-controls="${id}">${item.label}${I.chev}</button>
          <div class="submenu" id="${id}">
            ${item.children.map(c => `<a href="${c.href}"${c.href === current ? ' aria-current="page"' : ''}>${c.label}${c.note ? `<small>${c.note}</small>` : ''}</a>`).join('\n            ')}
          </div>
        </div>`;
    }
    return `<a href="${item.href}"${item.href === current ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join('\n        ');
}

function page({ file, title, description, body, schema = [], crumb = null }) {
  const canonical = SITE.url + (file === 'index.html' ? '/' : '/' + file);

  const base = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': SITE.url + '/#business',
    name: SITE.name,
    description: 'NDIS positive behaviour support, early childhood early intervention and daily living skill building in Gympie, on the Sunshine Coast and surrounds.',
    url: SITE.url,
    telephone: '+61 426 745 136',
    email: SITE.email,
    image: SITE.url + '/assets/logo-badge.png',
    logo: SITE.url + '/assets/logo-badge.png',
    slogan: SITE.tagline,
    priceRange: 'NDIS price guide',
    address: { '@type': 'PostalAddress', addressLocality: 'Gympie', addressRegion: 'QLD', addressCountry: 'AU' },
    areaServed: ['Gympie', 'Sunshine Coast', 'Noosa', 'Tin Can Bay', 'Rainbow Beach', 'Cooloola Cove', 'Imbil', 'Kandanga', 'Widgee', 'Goomeri', 'Murgon', 'Kilkivan', 'Curra', 'Maryborough', 'Brisbane']
      .map(n => ({ '@type': 'Place', name: n })),
    availableLanguage: 'English',
    founder: {
      '@type': 'Person',
      name: 'Amy',
      jobTitle: 'Board Certified Behavior Analyst and NDIS Behaviour Support Practitioner',
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Board Certified Behavior Analyst (BCBA)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master of Education in Applied Behavior Analysis' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Science in Psychology' },
      ],
    },
    knowsAbout: ['Positive Behaviour Support', 'Applied Behaviour Analysis', 'Functional Behaviour Assessment', 'Restrictive Practice Reduction', 'Early Childhood Early Intervention', 'NDIS'],
  };

  const crumbSchema = crumb ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
      { '@type': 'ListItem', position: 2, name: crumb, item: canonical },
    ],
  } : null;

  const blocks = [JSON.stringify(base)]
    .concat(crumbSchema ? [JSON.stringify(crumbSchema)] : [])
    .concat(schema);

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#2F4B33">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}/assets/logo-lockup.png">
<meta property="og:locale" content="en_AU">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="assets/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
${blocks.map(b => `<script type="application/ld+json">${b}</script>`).join('\n')}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>

<div class="capacity">
  <div class="wrap">
    <span><span class="dot" aria-hidden="true"></span><strong>${SITE.capacity}</strong></span>
    <span>${SITE.reply}</span>
    <span><a href="tel:${SITE.phoneHref}">${SITE.phone}</a></span>
  </div>
</div>

<header class="site-head" data-nav="closed">
  <div class="wrap">
    <a class="brand" href="index.html">
      <img src="assets/logo-badge.png" alt="" width="40" height="49">
      <span class="brand-txt"><b>Grow What Matters</b><span>Behaviour Support</span></span>
    </a>
    <nav class="nav" aria-label="Main">
        ${navHTML(file)}
    </nav>
    <div class="head-cta">
      ${btn('contact.html', 'Make a referral', 'btn-primary btn-sm')}
      <button class="navtoggle" type="button" aria-expanded="false" aria-label="Menu">${I.menu}</button>
    </div>
  </div>
</header>

<main id="main">
${crumb ? `<div class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span>${crumb}</nav></div>` : ''}
${body}
</main>

<footer class="site-foot">
  <div class="wrap">
    <div class="acknowledge">
      Grow What Matters acknowledges the Gubbi Gubbi (Kabi Kabi) and Butchulla peoples, the Traditional Custodians of the land on which we live and work, and pays respect to Elders past and present. Always was, always will be Aboriginal land.
    </div>
    <div class="foot-grid">
      <div>
        <img class="foot-mark" src="assets/logo-badge-cream.png" alt="Grow What Matters">
        <p class="foot-tag">${SITE.tagline}</p>
        <p class="small">NDIS positive behaviour support, early childhood early intervention and daily living skill building.</p>
        <p class="small"><a href="tel:${SITE.phoneHref}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="specialist-behaviour-support.html">Specialist Behaviour Support</a></li>
          <li><a href="behaviour-support-plans.html">Behaviour Support Plans</a></li>
          <li><a href="restrictive-practices.html">Restrictive Practices</a></li>
          <li><a href="early-childhood-early-intervention.html">Early Childhood</a></li>
          <li><a href="improved-daily-living.html">Improved Daily Living</a></li>
          <li><a href="assessments-and-reports.html">Assessments &amp; Reports</a></li>
          <li><a href="training-and-consultancy.html">Consultancy &amp; Training</a></li>
        </ul>
      </div>
      <div>
        <h4>Information</h4>
        <ul>
          <li><a href="for-families.html">For families</a></li>
          <li><a href="for-support-coordinators.html">For support coordinators</a></li>
          <li><a href="ndis-funding.html">How NDIS funding works</a></li>
          <li><a href="about.html">About Amy</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Where I work</h4>
        <p class="small">Gympie, the Sunshine Coast and surrounds. From Brisbane in the south to Tin Can Bay in the north, and inland as far as Murgon. Telehealth available across Queensland.</p>
        <p class="reg-note">
          Specialist behaviour support is delivered under the NDIS registration of ${SITE.regProvider}, a registered NDIS specialist behaviour support provider.<br><br>
          Early childhood and daily living supports are delivered by Grow What Matters, which is not an NDIS-registered provider, and are available to plan-managed and self-managed participants.
        </p>
      </div>
    </div>
    <div class="foot-bottom">
      <span>&copy; ${new Date().getFullYear()} Grow What Matters. ABN to be added.</span>
      <span>Gympie, Queensland</span>
    </div>
  </div>
</footer>
<script src="assets/site.js"></script>
</body>
</html>`;
}

module.exports = { SITE, I, NAV, page, card, step, faq, faqSchema, ctaBand, enquiryForm, btn, esc };
