import './App.css';
import React from 'react';
import BookForm from '../Containers/BookFrom';
import BookList from '../Containers/BookList';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <div className="App">
    <BookForm categories={categories} />
    <BookList categories={categories} />
  </div>
);

export default App;
