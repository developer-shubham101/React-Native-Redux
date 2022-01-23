import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVersesList } from '../actions';
import { BookList, ReducerRoot } from '../type';

export default function useBibleVerses(chapterId: string | undefined) {
  const verses = useSelector<ReducerRoot, any>((state) => state.bible.verses);
  console.log('Max::::verses', { verses });

  // const [currentBook, setCurrentBook] = useState<BookList | null | undefined>();
  // const [loading, setLoading] = useState<boolean>(true);
  const [chapter, setChapter] = useState<string | undefined>(chapterId);
  const [bookId, setBookId] = useState<string | undefined>();
  const [verse, setVerse] = useState();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (book) {
  //     setCurrentBook(book);
  //     setLoading(false);
  //   } else {
  //     setLoading(true);
  //   }
  // }, [book]);

  useEffect(() => {
    console.log('Max::::chapter', { verses, chapter });

    if (verses && chapter && verses[chapter]) {
      setVerse(verses[chapter]);
    } else if (chapter && bookId) {
      dispatch(getVersesList(chapter, bookId));
    }
  }, [chapter, verses, bookId]);

  const getVerses = (newChapterId: string, newBookId: string) => {
    setChapter(newChapterId);
    setBookId(newBookId);
  };

  return { verse, /* currentBook, loading,  */ getVerses };
}
