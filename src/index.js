/* DEPENDENCIES */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

/* CSS */
import './index.css';
import TodoList from './components/TodoList';

/* COMPONENTS */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <TodoList />
    </React.StrictMode>
  </Provider>
);
