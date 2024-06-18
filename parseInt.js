const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const uniqueArr = (arr) => [...new Set(arr)];
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();