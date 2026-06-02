import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import LabPage from './pages/LabPage.jsx';
import AI from './pages/AI.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { content } from './content.js';

const ROUTES = {
  '/': HomePage,
  '/about': AboutPage,
  '/work': WorkPage,
  '/lab': LabPage,
  '/ai': AI,
  '/contact': ContactPage,
};

export function render(lang, route, props = {}) {
  // Handle project detail routes
  if (route.startsWith('/work/')) {
    const slug = route.replace('/work/', '');
    const currentContent = content[lang];
    return renderToString(
      <StrictMode>
        <ProjectDetail content={currentContent} lang={lang} slug={slug} />
      </StrictMode>
    );
  }

  const PageComponent = ROUTES[route];
  if (!PageComponent) {
    throw new Error(`Unknown route: ${route}`);
  }

  const currentContent = content[lang];

  return renderToString(
    <StrictMode>
      <PageComponent content={currentContent} lang={lang} {...props} />
    </StrictMode>
  );
}
