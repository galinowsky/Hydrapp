!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=137)}({1:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}))}},137:function(e,n,t){"use strict";t.r(n);t(2);var r=t(1);t(3);Object(r.a)();var o=document.querySelector(".hydro__logo");console.log(o);var i=document.querySelector(".hydro__counter"),c=document.querySelector(".addGlass"),a=document.querySelector(".delGlass"),u=[],s={key:(new Date).toISOString().slice(0,10),value:0},l=(new Date).toISOString().slice(0,10),d=document.querySelector(".monit");if(u=JSON.parse(localStorage.getItem("Glasses"))){var f=!1;u.forEach((function(e){e.key==l&&(i.innerHTML=e.value,f=!0)})),0==f&&u.unshift(s)}else u=[s],localStorage.setItem("Glasses",JSON.stringify(u));c.addEventListener("click",(function(){i.innerHTML=Number(i.innerHTML,10)+1,g()})),a.addEventListener("click",(function(){"0"!==i.innerHTML&&(i.innerHTML=Number(i.innerHTML,10)-1,g())}));var g=function(){u.find((function(e){return e.key==l}))||u.unshift({key:l,value:0}),u.find((function(e){return e.key==l})).value=Number(i.innerHTML),Number(i.innerHTML)>0?d.innerHTML="":d.innerHTML="no records for this day",localStorage.setItem("Glasses",JSON.stringify(u))},y=(document.querySelector(".history-table__body"),document.querySelector(".dateForward")),m=document.querySelector(".dateBackward"),v=new Date;document.querySelector(".todayDate").innerHTML;document.querySelector(".todayDate").innerHTML=(new Date).toISOString().slice(0,10);var S=function(){o.classList.toggle("changeGlassAnimationForward")},L=function(){o.classList.toggle("changeGlassAnimationBack")};y.addEventListener("click",(function(){S(),setTimeout((function(){v.setDate(v.getDate()+1),document.querySelector(".todayDate").innerHTML=v.toISOString().slice(0,10);var e=p(v);e?(e.key,i.innerHTML=e.value,d.innerHTML=""):(d.innerHTML="no records for this day",i.innerHTML=0)}),250),setTimeout((function(){return requestAnimationFrame(S)}),500)})),m.addEventListener("click",(function(){L(),setTimeout((function(){v.setDate(v.getDate()-1),document.querySelector(".todayDate").innerHTML=v.toISOString().slice(0,10);var e=p(v);e?(e.key,i.innerHTML=e.value,d.innerHTML="",l=e.key):(d.innerHTML="no records for this day",i.innerHTML=0,l=document.querySelector(".todayDate").innerHTML)}),250),setTimeout((function(){return requestAnimationFrame(L)}),500)}));var p=function(e){var n=null;return u.forEach((function(t){t.key==e.toISOString().slice(0,10)&&(n=t)})),n};o.classList.toggle("hydro__logo--enter"),setTimeout((function(){return o.classList.toggle("hydro__logo--enter")}),1e3)},2:function(e,n,t){},3:function(e,n){var t=document.querySelector(".js-hamburger"),r=(document.documentElement.clientWidth,document.querySelector(".navigation")),o=document.querySelector(".app-bar");t&&t.addEventListener("click",(function(){r.classList.toggle("navigation__open"),o.classList.toggle("app-bar__open")})),window&&window.addEventListener("resize",(function(){window.innerWidth>=520&&r.classList.contains("navigation__open")&&r.classList.toggle("navigation__open"),window.innerWidth>=520&&o.classList.toggle("app-bar__open")&&o.classList.toggle("app-bar__open")}))}});