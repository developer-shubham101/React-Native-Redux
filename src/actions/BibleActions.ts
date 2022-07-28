import { appOperation } from '../appOperation';
import { BookList } from '../type';
import * as t from './types';

export const getBooks = () => async (dispatch: any) => {
  try {
    console.log('Asdasdasd');

    const response = await appOperation.customer.getBooks();
    // console.log('response.statusCode', response.statusCode);

    dispatch({ type: t.BIBLE_BOOKS_LIST_SUCCESS, payload: response.data });
    if (response.statusCode == 200) {
    } else {
      // showAlert(response.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getVersesList = (chapter: string, bookId: string) => async (
  dispatch: any,
) => {
  try {
    const response = await appOperation.customer.getVersesList(bookId, chapter);
    // console.log('response.statusCode', response.statusCode);

    dispatch({
      type: t.BIBLE_BOOKS_VERSES_LIST_SUCCESS,
      payload: { chapterId: chapter, data: response.data },
    });
    if (response.statusCode == 200) {
    } else {
      // showAlert(response.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const readBook = (bookId: BookList) => async (dispatch: any) => {
  dispatch({ type: t.BIBLE_BOOK_READ, payload: bookId });
};
