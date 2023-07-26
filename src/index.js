/* DEPENDENCIES */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* CSS */
import './index.css';

/* COMPONENTS */

/* REDUX */
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <div className="container">container</div>
        </React.StrictMode>
    </Provider>
);
