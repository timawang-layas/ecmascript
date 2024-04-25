const timeFromDate = date => date.toTimeString().slice(0, 8);
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isTabInView = () => !document.hidden;