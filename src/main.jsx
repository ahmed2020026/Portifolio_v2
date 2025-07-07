import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';

/* get root Element */
const container = document.getElementById("root");

/* create root */
const root = createRoot(container);

/* render */
root.render(
    <HashRouter>
        <Suspense>
            <App />
        </Suspense>
    </HashRouter>
)
