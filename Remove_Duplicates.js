const merge = Object.assign({}, obj1, obj2);
const fullName = name || 'buddy';
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));