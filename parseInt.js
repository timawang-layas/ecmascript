const uniqueArr = (arr) => [...new Set(arr)];
const buildOutputPath = path.join(repositoryRootPath, 'out');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;