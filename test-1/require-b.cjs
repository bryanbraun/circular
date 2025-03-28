const a = require('./require-a.cjs');

console.log('b.js:', a);
module.exports = 'B';
