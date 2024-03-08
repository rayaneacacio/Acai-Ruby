import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AcaiSizesProvider } from './hook/acaiSizes';

import { AcaiPlusRoutes } from './routes/index';
import { AcaiComponentsProvider } from './hook/acaiComponents';
import { PedidoProvider } from './hook/pedido';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
        <AcaiSizesProvider>
          <AcaiComponentsProvider>
            <PedidoProvider>
              <AcaiPlusRoutes />
            </PedidoProvider>
          </AcaiComponentsProvider>
        </AcaiSizesProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
