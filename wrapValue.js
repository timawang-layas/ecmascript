const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log("0 && 1 = "+(0 && 1));
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);