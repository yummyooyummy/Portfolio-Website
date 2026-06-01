import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrDir = resolve(__dirname, 'dist-ssr');

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
const { render } = await import(resolve(ssrDir, 'entry-server.js'));

const ROUTES = [
  { path: '/', route: '/', lang: 'zh', outFile: resolve(distDir, 'index.html') },
  { path: '/en/', route: '/', lang: 'en', outFile: resolve(distDir, 'en/index.html') },
  { path: '/about', route: '/about', lang: 'zh', outFile: resolve(distDir, 'about/index.html') },
  { path: '/en/about', route: '/about', lang: 'en', outFile: resolve(distDir, 'en/about/index.html') },
];

function getHreflangTags(route) {
  const hreflangMap = {
    '/': { zh: '/', en: '/en/' },
    '/about': { zh: '/about', en: '/en/about' },
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
