 

export const BASE_URL = "https://reqres.in/api/";//process.env.BASE_URL;
export const CLICKER_BASE_URL = process.env.CLICKER_BASE_URL;
export const NONE = 'NONE';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const defaultState = {
  
  classes: {
    status: NONE,
    currentClass: '',
    classList: [],
    error: '',
  },
  threads: {
    status: NONE,
    creationStatus: NONE,
    threadsList: [],
    error: '',
  },
  currentThread: {
    status: NONE,
    answerStatus: NONE,
    commentStatus: NONE,
    threadId: '',
    attachments: [],
    attachmentURLs: [],
    attachmentTypes: [],
    comments: [],
    createdAt: 0,
    lastEditedAt: 0,
    otherAnswers: [],
    question: '',
    tags: [],
    bookmarked: false,
    following: false,
    classId: '',
    error: '',
  },
  search: {
    searchToken: {
      status: NONE,
      value: '',
      error: '',
    },
    results: {
      status: NONE,
      value: [],
      error: '',
    },
    image: null,
  },
  notifications: {
    status: NONE,
    value: [],
    error: '',
  },
  clicker: {
    totalTime: 0,
    remainingTime: 0,
    question: NONE,
    className: NONE,
    report: null,
    stats: null,
    answered: 0,
    totalStudents: 0,
    chosen: NONE,
    submitted: NONE,
  },
  profile: {
    status: NONE,
    error: '',
    studentId: '',
    img: '',
    fullName: '',
    email: '',
    askAnonymously: false,
  },
};
