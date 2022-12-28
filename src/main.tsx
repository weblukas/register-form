import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { ThemeProvider } from '@mui/material/styles';
import {fontTheme} from './mui_themes';

import { BrowserRouter } from 'react-router-dom';

//theme nie działa

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={fontTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
