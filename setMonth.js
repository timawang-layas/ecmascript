const maxNumber = arr => Math.max(...arr);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));