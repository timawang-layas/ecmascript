const uniqueArr = (arr) => [...new Set(arr)];
const value = ( 5 < 7 ) ? "True" : "False" ;
const isEven = (num) => num % 2 === 0;
console.log(false == '0');
const isEmptyArray = arr => !arr.length;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();