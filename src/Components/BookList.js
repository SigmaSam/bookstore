import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Book from './Book';
import { changeFilter, removeBook } from '../Actions/index';
import CategoryFilter from './CategoryFilter';

function BooksList({
  books, removeBook, changeFilter, filter,
}) {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };
  const checkFilter = (filter, books) => {
    if (filter === 'All') return books;
    return books.filter((book) => book.category === filter);
  };

  return (
    <div className="list-container">
      <header className="mont">
        <div className="header-title ">Bookstore CMS</div>
        <button type="button" className="book-tag ">
          {' '}
          Books
        </button>
        <span>Category: </span>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </header>
      <div className="booklist">
        {checkFilter(filter, books).map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ removeBook, changeFilter }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
