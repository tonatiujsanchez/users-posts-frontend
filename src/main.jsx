import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import { ThemeProvider } from './context/theme'
import { DataProvider } from './context/data'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
