export interface ReducerRoot {
  bible: BibleReducer;
}

export interface BibleReducer {
  bookList: BookList[] | null | undefined;
  currentBook: BookList | null | undefined;
  verses: any;
}

export interface BookList {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  bibleId: string;
  bookId: string;
  number: string;
  position: number;
}
