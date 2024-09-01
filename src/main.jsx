import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './css/style.css';
import { Provider } from 'react-redux';
import store from './app/store.js';
import DataContexts from './contexts/DataContexts.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataContexts>
            <Provider store={store}>
                <App />
            </Provider>
        </DataContexts>
    </StrictMode>
);
