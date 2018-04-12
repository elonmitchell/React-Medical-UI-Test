import moment from 'moment';

export const checkDateRange = (date, range) => {
  const days = moment().diff(date, 'days');

  if (days < 0) {
    return false;
  }
  switch (range) {
    case 'ALL':
      return true;
    case '6D':
      if (days <= 6) {
        return true;
      } else {
        return false;
      }
    case '6W':
      if (days <= 7 * 6) {
        return true;
      } else {
        return false;
      }
    case '6M':
      if (days <= 30 * 6) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
};
