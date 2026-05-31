import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrDir = resolve(__dirname, 'dist-ssr');

const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
const { render } = await import(resolve(ssrDir, 'entry-server.js'));

const ROUTES = [
  { path: '/', lang: 'zh', outFile: resolve(distDir, 'index.html') },
  { path: '/en/', lang: 'en', outFile: resolve(distDir, 'en/index.html') },
];

const HREFLANG_TAGS = `
    <link rel="alternate" hreflang="zh" href="/" />
    <link rel="alternate" hreflang="en" href="/en/" />
    <link rel="alternate" hreflang="x-default" href="/" />`;

for (const route of ROUTES) {
  const appHtml = render(route.lang);

  let html = template
    .replace('<html lang="zh">', `<html lang="${route.lang}">`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `${HREFLANG_TAGS}\n  </head>`);

  mkdirSync(dirname(route.outFile), { recursive: true });
  writeFileSync(route.outFile, html, 'utf-8');
  console.log(`prerendered ${route.path} -> ${route.outFile.replace(distDir, 'dist')}`);
}

rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender complete, cleaned dist-ssr/');
