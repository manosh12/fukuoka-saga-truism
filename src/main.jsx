import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import "i18n";
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next"; // Ensure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>

        <App />

      </NextUIProvider>
  </React.StrictMode>
)
