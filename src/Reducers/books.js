import { CRAETE_BOOK } from '../Actions';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CRAETE_BOOK:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
