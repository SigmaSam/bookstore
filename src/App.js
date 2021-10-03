import './App.css';
import React from 'react';
import BookForm from './Components/BookFrom';
import BookList from './Components/BookList';

const App = () => (
  <div className="App">
    <BookList />
    <BookForm />
  </div>
);

export default App;
