import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ServiceOptions } from './pages/ServiceOptions';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <ServiceOptions />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
