import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AcaiPlusRoutes } from './routes/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <AcaiPlusRoutes />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
