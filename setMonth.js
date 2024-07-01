const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const currentDate = () => new Date().toLocaleDateString('en-US');
console.log("1 || 2 = "+(1 || 2));