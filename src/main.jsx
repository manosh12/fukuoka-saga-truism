import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </NextUIProvider>
  </React.StrictMode>
)
