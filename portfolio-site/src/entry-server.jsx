import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render(initialLang) {
  return renderToString(
    <StrictMode>
      <App initialLang={initialLang} />
    </StrictMode>
  );
}
