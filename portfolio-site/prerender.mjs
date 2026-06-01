import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrDir = resolve(__dirname, 'dist-ssr');

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
const { render } = await import(resolve(ssrDir, 'entry-server.js'));

const ROUTES = [
  // Home pages
  { path: '/', route: '/', lang: 'zh', outFile: resolve(distDir, 'index.html') },
  { path: '/en/', route: '/', lang: 'en', outFile: resolve(distDir, 'en/index.html') },

  // About pages
  { path: '/about', route: '/about', lang: 'zh', outFile: resolve(distDir, 'about/index.html') },
  { path: '/en/about', route: '/about', lang: 'en', outFile: resolve(distDir, 'en/about/index.html') },

  // Work list pages
  { path: '/work', route: '/work', lang: 'zh', outFile: resolve(distDir, 'work/index.html') },
  { path: '/en/work', route: '/work', lang: 'en', outFile: resolve(distDir, 'en/work/index.html') },

  // Project detail pages
  { path: '/work/honor-of-kings', route: '/work/honor-of-kings', lang: 'zh', outFile: resolve(distDir, 'work/honor-of-kings/index.html') },
  { path: '/en/work/honor-of-kings', route: '/work/honor-of-kings', lang: 'en', outFile: resolve(distDir, 'en/work/honor-of-kings/index.html') },

  { path: '/work/genesis', route: '/work/genesis', lang: 'zh', outFile: resolve(distDir, 'work/genesis/index.html') },
  { path: '/en/work/genesis', route: '/work/genesis', lang: 'en', outFile: resolve(distDir, 'en/work/genesis/index.html') },

  { path: '/work/signing-app', route: '/work/signing-app', lang: 'zh', outFile: resolve(distDir, 'work/signing-app/index.html') },
  { path: '/en/work/signing-app', route: '/work/signing-app', lang: 'en', outFile: resolve(distDir, 'en/work/signing-app/index.html') },
];

function getHreflangTags(route) {
  const hreflangMap = {
    '/': { zh: '/', en: '/en/' },
    '/about': { zh: '/about', en: '/en/about' },
    '/work': { zh: '/work', en: '/en/work' },
    '/work/honor-of-kings': { zh: '/work/honor-of-kings', en: '/en/work/honor-of-kings' },
    '/work/genesis': { zh: '/work/genesis', en: '/en/work/genesis' },
    '/work/signing-app': { zh: '/work/signing-app', en: '/en/work/signing-app' },
  };

  const urls = hreflangMap[route];
  if (!urls) return '';

  return `
    <link rel="alternate" hreflang="zh" href="${urls.zh}" />
    <link rel="alternate" hreflang="en" href="${urls.en}" />
    <link rel="alternate" hreflang="x-default" href="${urls.zh}" />`;
}

for (const routeConfig of ROUTES) {
  const appHtml = render(routeConfig.lang, routeConfig.route);
  const hreflangTags = getHreflangTags(routeConfig.route);

  let html = template
    .replace('<html lang="zh">', `<html lang="${routeConfig.lang}">`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `${hreflangTags}\n  </head>`);

  mkdirSync(dirname(routeConfig.outFile), { recursive: true });
  writeFileSync(routeConfig.outFile, html, 'utf-8');
  console.log(`prerendered ${routeConfig.path} -> ${routeConfig.outFile.replace(distDir, 'dist')}`);
}

rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender complete, cleaned dist-ssr/');
