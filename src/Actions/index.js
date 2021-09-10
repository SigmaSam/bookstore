export const CRAETE_BOOK = 'CREATE_BOOK';

export const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => ({
  type: CRAETE_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { createBook, removeBook };
