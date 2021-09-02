export const CRAETE_BOOK = 'CREATE_BOOK';

export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = (book) => ({
  type: CRAETE_BOOK,
  bookUpload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  bookRemove: book,
});
