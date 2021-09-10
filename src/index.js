import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import rootReducer from './Reducers';

const books = [
  { id: 1, title: 'Guacamayo', category: 'History' },
  { id: 2, title: 'Indignados', category: 'Education' },
];

const store = createStore(rootReducer, {
  books,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
