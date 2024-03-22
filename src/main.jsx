import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import counterStore from './store/index.js'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'; // Import your custom theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={counterStore}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
