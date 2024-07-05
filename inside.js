const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);