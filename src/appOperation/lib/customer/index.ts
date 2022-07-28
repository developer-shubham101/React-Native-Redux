import { AppOperation } from './../../index';
import { CUSTOMER_TYPE } from '../../types';

type getMethod = () => void;

export default (appOperation: AppOperation) => ({
  samplePost: (postData) =>
    appOperation.post('/update-address', postData, CUSTOMER_TYPE),

  getBooks: () =>
    appOperation.get(
      '?bible=55212e3cf5d04d49-01',
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),

  getVersesList: (book: string, chapter: string) =>
    appOperation.get(
      `?bible=55212e3cf5d04d49-01&book=${book}&chapter=${chapter}`,
      undefined,
      undefined,
      CUSTOMER_TYPE,
    ),
});
