const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    { id: 1, title: 'Tio Tigre y Tio Conejo', category: 'Kids' },
    { id: 1, title: 'Thus Spoke Zaratustra', category: 'Horror' },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state].filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
