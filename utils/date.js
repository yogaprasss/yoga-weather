const monthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthId = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dateFormat = (dateParam, lang = 'en') => {
  const date = new Date(dateParam);
  
  const year = date.getFullYear();
  const month = lang === 'en' ? monthEn[date.getMonth()] : monthId[date.getMonth()];
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const amPm = hour < 12 ? 'AM' : 'PM';

  const dateString = lang === 'en' ? `${month} ${day}, ${year}` : `${day} ${month} ${year}`;
  const timeString = `${hour}:${minute}${lang === 'en' ? ' ' + amPm : ''}`;

  return `${dateString} ${timeString}`;
};
