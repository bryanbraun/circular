/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./test-3/b.js


const b = () => {
  console.log('b.js:', a);
};

;// ./test-3/a.js


const a = () => {
  console.log('a.js:', b);
};

;// ./test-3/webpack-entry.js


document.getElementById('message').innerHTML = a();

/******/ })()
;