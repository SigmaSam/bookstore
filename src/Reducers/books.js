import { CREATE_BOOK, REMOVE_BOOK } from '../Actions/index';

const initialState = [
  { id: 1, title: 'Tio Tigre y Tio Conejo', category: 'Kids' },
  { id: 2, title: 'Thus Spoke Zaratustra', category: 'Horror' },
];

const remove = (book, state) => {
  const index = state.findIndex((findBook) => findBook.id === book.id);
  const newState = [...state];
  newState.splice(index, 1);
  return newState;
};

const booksReducer = (state = initialState, action) => {
  const { book, type } = action;

  switch (type) {
    case CREATE_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return [...remove(book, state)];
    default:
      return state;
  }
};

export default booksReducer;
