/* DEPENDENCIES */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* CSS */
import './index.css';

/* COMPONENTS */
import TodoList from '@components/TodoList';

/* REDUX */
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <TodoList />
        </React.StrictMode>
    </Provider>
);
