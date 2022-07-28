import * as t from '../actions/types';

const INITIAL_STATE = {
  bookList: [],
  currentBook: null,
  verses: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.BIBLE_BOOKS_LIST_SUCCESS: {
      return { ...state, bookList: action.payload };
    }

    case t.BIBLE_BOOK_READ: {
      return { ...state, currentBook: action.payload };
    }
    case t.BIBLE_BOOKS_VERSES_LIST_SUCCESS: {
      let verses = state.verses;
      if (action.payload) {
        verses[action.payload.chapterId] = action.payload.data;
      }
      return { ...state, verses: verses };
    }

    default:
      return state;
  }
};
