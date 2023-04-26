import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import './Server/server';

import './index.css';
import '@7shifts/sous-chef/dist/index.css';
import { Modal, SousChefProvider } from '@7shifts/sous-chef';

const rootElement = document.getElementById('root') as HTMLElement;

Modal.setAppElement(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <SousChefProvider>
            <Router />
        </SousChefProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
