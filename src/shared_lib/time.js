import moment from 'moment';

export function formatAgo(unixtimeStamp) {
  const date = moment.utc(unixtimeStamp).toDate();
  const seconds = Math.floor((new Date() - date) / 1000);
  const days = Math.floor(seconds / 86400);

  if (seconds < 10) return 'a few seconds ago';
  if (days > 1) {
    return `${date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })} at ${date.toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    })}`;
  } else if (days > 0) {
    return `Yesterday at ${date.toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    })}`;
  } else {
    const hours = Math.floor(seconds / 3600);
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const minutes = Math.floor(seconds / 60);
      if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
      }
    }
  }
}
