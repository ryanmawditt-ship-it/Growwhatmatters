const fs = require('fs');
const path = require('path');
const { page, SITE } = require('./layout');

const pages = []
  .concat(require('./pages-core'))
  .concat(require('./pages-more'))
  .concat(require('./pages-audience'));

const OUT = path.resolve(__dirname, '..');

pages.forEach(p => {
  const html = page(p);
  fs.writeFileSync(path.join(OUT, p.file), html);
  console.log('wrote', p.file, (html.length / 1024).toFixed(1) + 'kb');
});

/* sitemap */
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE.url}${p.file === 'index.html' ? '/' : '/' + p.file}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.file === 'index.html' ? '1.0' : (['positive-behaviour-support-gympie.html', 'specialist-behaviour-support.html', 'contact.html'].includes(p.file) ? '0.9' : '0.7')}</priority>
  </url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);

fs.writeFileSync(path.join(OUT, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

/* 404 */
fs.writeFileSync(path.join(OUT, '404.html'), page({
  file: '404.html',
  title: 'Page not found | Grow What Matters',
  description: 'That page could not be found.',
  body: `<section class="phero"><div class="wrap">
    <p class="kicker">404</p>
    <h1>That page has wandered off</h1>
    <p class="lede">The link may be old, or the address slightly off. Nothing is broken at your end.</p>
  </div></section>
  <section><div class="wrap narrow">
    <h2>Try one of these</h2>
    <ul class="ticks">
      <li><a href="index.html">Home</a></li>
      <li><a href="specialist-behaviour-support.html">Specialist Behaviour Support</a></li>
      <li><a href="positive-behaviour-support-gympie.html">Behaviour support in Gympie</a></li>
      <li><a href="ndis-funding.html">How NDIS funding works</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div></section>`,
}));

console.log('\nsitemap.xml, robots.txt and 404.html written.');
console.log('Total pages:', pages.length + 1);
