const channel = getChannel(computedAppVersion);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;