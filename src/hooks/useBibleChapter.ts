import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookList, ReducerRoot } from '../type';

export default function useBibleChapter() {
  const book = useSelector<ReducerRoot, BookList | null | undefined>(
    (state) => state.bible.currentBook,
  );

  const [currentBook, setCurrentBook] = useState<BookList | null | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (book) {
      setCurrentBook(book);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [book]);

  return { currentBook, loading };
}
