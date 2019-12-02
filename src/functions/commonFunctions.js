export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function applyDaysToDate(date, days) {
  const convertedDays = date.setDate(date.getDate() + days);
  return new Date(convertedDays);
}

export function getPrettyDate(date) {
  const days = date.getDay();
  const month = date.toLocaleString(`default`, {month: `long`});
  return `
  ${days} ${month}
  `;
}
