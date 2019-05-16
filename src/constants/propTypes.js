import PropTypes from 'prop-types';
import { NONE, LOADING, SUCCESS, ERROR } from 'constants/misc';
import { requiredIf } from 'shared_lib/propTypes';
import { answer, comment } from 'shared_constants/propTypes';

const possibleStatuses = PropTypes.oneOf([NONE, LOADING, SUCCESS, ERROR]);

export const classes = PropTypes.shape({
  status: possibleStatuses.isRequired,
  classList: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      classId: PropTypes.string.isRequired,
      updates: PropTypes.number.isRequired,
    }),
  ).isRequired,
  currentClass: PropTypes.string.isRequired,
});

export const threads = PropTypes.shape({
  status: possibleStatuses.isRequired,
  threadsList: PropTypes.arrayOf(
    PropTypes.shape({
      threadId: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      endorsedAnswer: answer,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      bookmarked: PropTypes.bool.isRequired,
      following: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  error: PropTypes.string.isRequired,
});

export const fullThread = PropTypes.shape({
  status: PropTypes.string.isRequired,
  threadId: PropTypes.string.isRequired,
  endorsedAnswer: answer,
  otherAnswers: PropTypes.arrayOf(answer).isRequired,
  comments: PropTypes.arrayOf(comment).isRequired,
  classId: PropTypes.string.isRequired,
  attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
  attachmentURLs: PropTypes.arrayOf(PropTypes.string).isRequired,
  attachmentTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  answerStatus: PropTypes.string.isRequired,
  commentStatus: PropTypes.string.isRequired,
});

export const router = PropTypes.shape({
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
});

export const search = PropTypes.shape({
  searchToken: PropTypes.shape({
    status: possibleStatuses.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }),
  results: PropTypes.shape({
    status: possibleStatuses.isRequired,
    value: PropTypes.array.isRequired,
    error: PropTypes.string.isRequired,
  }),
  image: PropTypes.string,
});

export const clicker = PropTypes.shape({
  // question: PropTypes.object,
  remaining: PropTypes.number,
  totalTime: PropTypes.number,
  answered: PropTypes.number,
  totalStudents: PropTypes.number,
  // report: PropTypes.object
});

export const profile = PropTypes.shape({
  status: possibleStatuses.isRequired,
  studentId: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  askAnonymouslt: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
});

export const singleNotification = PropTypes.shape({
  threadId: PropTypes.string,
  lastUpdated: PropTypes.number.isRequired,
  new: PropTypes.bool.isRequired,
  newComments: requiredIf(PropTypes.number, props => !!props.threadId),
  newAnswers: requiredIf(PropTypes.number, props => !!props.threadId),
  newEndorsedAnswer: requiredIf(PropTypes.bool, props => !!props.threadId),
  question: requiredIf(PropTypes.string, props => !!props.threadId),
  classId: PropTypes.string,
  newThreads: requiredIf(PropTypes.number, props => !!props.classId),
  className: requiredIf(PropTypes.string, props => !!props.classId),
});
export const notifications = PropTypes.shape({
  status: possibleStatuses.isRequired,
  value: PropTypes.arrayOf(singleNotification).isRequired,
  error: PropTypes.string.isRequired,
});
