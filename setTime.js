const fullName = name || 'buddy';
const currentDate = () => new Date().toLocaleDateString('en-US');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;