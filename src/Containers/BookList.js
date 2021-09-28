import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Components/Book';
import CategoryFilter from '../Components/CategoryFilter';
import { changeFilter, removeBook } from '../Actions/index';

const BookList = ({ categories }) => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    const id = parseFloat(e.target.value);
    dispatch(removeBook(id));
  };

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const bookFilter = () => {
    if (filter !== 'all') {
      return books.filter((book) => book.category === filter);
    }
    return books;
  };

  return (
    <div>
      <CategoryFilter categories={categories} handleChange={handleChange} />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {bookFilter().map((book) => <Book key={book.id} book={book} remove={removeHandler} />)}
        </tbody>
      </table>
    </div>

  );
};

BookList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BookList.defaultProps = {
  categories: [],
};

export default BookList;
