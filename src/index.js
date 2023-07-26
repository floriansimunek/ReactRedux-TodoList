/* DEPENDENCIES */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* CSS */
import './index.css';

/* COMPONENTS */
import TasksHeader from '@components/TasksHeader';

/* REDUX */
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <main className="container">
                <TasksHeader />
            </main>
        </React.StrictMode>
    </Provider>
);
