const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const channel = getChannel(computedAppVersion);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const repositoryRootPath = path.resolve(__dirname, '..');