/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./test-1/b.js


console.log('b.js:', a);
const b = 'B';

;// ./test-1/a.js


console.log('a.js:', b);
const a = 'A';

;// ./test-1/webpack-entry.js


document.getElementById('message').innerHTML = a;

/******/ })()
;