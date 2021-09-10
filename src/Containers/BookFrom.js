import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../Actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBook({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    }));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Title" onChange={titleHandler} value={title} />
      <select name="categories" onChange={categoryHandler} id="categories" value={category}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {' '}
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
