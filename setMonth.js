const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomString = () => Math.random().toString(36).slice(2);