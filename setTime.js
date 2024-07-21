const appName = getAppName(channel);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;