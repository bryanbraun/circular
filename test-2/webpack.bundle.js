/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

  ;// ./test-2/b.js


  console.log('b.js:', a());
  function b() { return 'B' };

  ;// ./test-2/a.js


  console.log('a.js:', b());
  function a() { return 'A' };

  ;// ./test-2/webpack-entry.js


  document.getElementById('message').innerHTML = a();

  /******/
})()
  ;
