import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* get root Element */
const container = document.getElementById("root");

/* create root */
const root = createRoot(container);

/* render */
root.render(
    <App />
)
