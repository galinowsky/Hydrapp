!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=142)}({1:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}))}},142:function(e,n,t){"use strict";t.r(n);t(2);var r=t(1);t(3);Object(r.a)()},2:function(e,n,t){},3:function(e,n){var t=document.querySelector(".js-hamburger"),r=(document.documentElement.clientWidth,document.querySelector(".navigation")),o=document.querySelector(".app-bar");t&&t.addEventListener("click",(function(){r.classList.toggle("navigation__open"),o.classList.toggle("app-bar__open")})),window&&window.addEventListener("resize",(function(){window.innerWidth>=520&&r.classList.contains("navigation__open")&&r.classList.toggle("navigation__open"),window.innerWidth>=520&&o.classList.toggle("app-bar__open")&&o.classList.toggle("app-bar__open")}))}});