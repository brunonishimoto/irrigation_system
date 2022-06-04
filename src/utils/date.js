export const getLastWeekDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7); // Get date from 7 days before
  return date.toISOString().split('T')[0]; // Format date in yyyy-mm-dd form
}

export const getCurrentTime = () => {
  const date = new Date();
  hours = date.getHours();
  minute = date.getMinutes();
  return {'hour': hours, 'minute': minute}
}

export const sortTime = (schedule) => {
  function compare (a, b) {
    if (a.hour < b.hour) {
      return -1;
    }
    if (a.hour > b.hour) {
      return 1;
    }
    if (a.minute < b.minute) {
      return -1;
    }
    if (a.minute > b.minute) {
      return 1;
    }
    return 0;
  }
  schedule.sort(compare);
  return schedule;
}

export const formatNumber = (number) => {
  return number.toString().padStart(2, "0")
}
