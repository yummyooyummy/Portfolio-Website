import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { content } from './content.js';

const ROUTES = {
  '/': HomePage,
  '/about': AboutPage,
};

export function render(lang, route) {
  const PageComponent = ROUTES[route];
  if (!PageComponent) {
    throw new Error(`Unknown route: ${route}`);
  }

  const currentContent = content[lang];

  return renderToString(
    <StrictMode>
      <PageComponent content={currentContent} lang={lang} />
    </StrictMode>
  );
}
