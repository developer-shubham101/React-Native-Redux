import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../actions';
import { BookList, ReducerRoot } from '../type';

export default function useBibleList() {
  const bookList = useSelector<ReducerRoot, BookList[] | null | undefined>(
    (state) => state.bible.bookList,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return { bookList };
}
