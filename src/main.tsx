import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { ThemeProvider } from '@mui/material/styles';
import { fontTheme } from './mui_themes';
import { BrowserRouter } from 'react-router-dom';
import type {} from '@mui/lab/themeAugmentation';
import { Provider } from 'react-redux';
import { store } from '../src/app/store'
//font theme nie działa fix it

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={fontTheme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
