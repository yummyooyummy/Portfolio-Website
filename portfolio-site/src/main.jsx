import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { content } from './content.js'

function detectLangFromPath() {
  return window.location.pathname.startsWith('/en') ? 'en' : 'zh';
}

function detectRoute() {
  const path = window.location.pathname;
  // Remove /en/ prefix if present
  const cleanPath = path.startsWith('/en/') ? path.slice(3) : path;
  // Remove trailing slash except for root
  return cleanPath === '' ? '/' : cleanPath.replace(/\/$/, '');
}

const ROUTES = {
  '/': HomePage,
  '/about': AboutPage,
};

const lang = detectLangFromPath();
const route = detectRoute();
const PageComponent = ROUTES[route];

if (!PageComponent) {
  console.error(`Unknown route: ${route}`);
} else {
  const currentContent = content[lang];

  hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
      <PageComponent content={currentContent} lang={lang} />
    </StrictMode>,
  );
}
