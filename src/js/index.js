import "../scss/main.scss";
import { registerSW } from "./pwa.js";
import "./table.js";
import moment from 'moment';
registerSW();

// localStorage.setItem("Notes", JSON.stringify(NotesArr));
// JSON.parse(localStorage.getItem("Notes"));

let counter = document.querySelector(".hydro__counter");
let addGlass = document.querySelector(".addGlass");
let delGlass = document.querySelector(".delGlass");
let glasses = [];
let newDay = {
  key: new Date().toISOString().slice(0, 10),
  value: 0,
};
const todayKey = new Date().toISOString().slice(0, 10);
let newKey = new Date().toISOString().slice(0, 10);

glasses = JSON.parse(localStorage.getItem("Glasses"));

if (!glasses) {
  glasses = [newDay];
  localStorage.setItem("Glasses", JSON.stringify(glasses));
} else {
  let found = false;
  glasses.forEach((day) => {
    if (day.key == todayKey) {
      counter.innerHTML = day.value;
      found = true;
    }
  });
  if (found == false)
    glasses.unshift(newDay);
}

addGlass.addEventListener("click", () => { 
  counter.innerHTML = Number(counter.innerHTML, 10) + 1;
  setCounter();
});

delGlass.addEventListener("click", () => {
  if (counter.innerHTML !== "0") {
    counter.innerHTML = Number(counter.innerHTML, 10) - 1;
    setCounter();
  }
});

const setCounter = () => {
  glasses.find((elem) => elem.key == todayKey).value = Number(
    counter.innerHTML
  );
  localStorage.setItem("Glasses", JSON.stringify(glasses));
};





let historyTable = document.querySelector('.history-table__body')
console.log(historyTable)
glasses.forEach(day =>{
let row = historyTable.insertRow(-1)
 let dateCell = row.insertCell(0)
 let valCell = row.insertCell(1)
 
 dateCell.appendChild(document.createTextNode(day.key))
 valCell.appendChild(document.createTextNode(day.value))
// dateCell. = 
})



let forw = document.querySelector('.dateForward')
let backw = document.querySelector('.dateBackward')
let todayDate = new Date().toISOString().slice(0, 10)
let today = new Date()
document.querySelector('.todayDate').innerHTML = new Date().toISOString().slice(0, 10)
console.log(moment().format("L"))

forw.addEventListener('click',() => {
  today.setDate(today.getDate() + 1);
document.querySelector('.todayDate').innerHTML = today.toISOString().slice(0, 10)

})

backw.addEventListener('click',() => {
  today.setDate(today.getDate() - 1);
document.querySelector('.todayDate').innerHTML = today.toISOString().slice(0, 10)
})




let buttonChange = document.querySelector(".js-hamburger");
let screen = document.documentElement.clientWidth;
let nav = document.querySelector(".navigation");
let navHead = document.querySelector('.app-bar')
if (buttonChange) {
  buttonChange.addEventListener("click", () => {
    nav.classList.toggle("navigation__open");
    navHead.classList.toggle("app-bar__open")
  });
}

if (window) {
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 520 &&
      navHead.classList.toggle("app-bar__open")
      
    ) {
      // nav.classList.toggle("navigation__open");
      navHead.classList.toggle("app-bar__open");
    }
  });
}


//  forw.addEventListener('click',)

// let daysInMonth = getDaysInMonthUTC(6,2020)
// // console.log(daysInMonth)
// // function getDaysInMonthUTC(month, year) {
// //   var date = new Date(Date.UTC(year, month, 1));
// //   var days = [];
// //   while (date.getUTCMonth() === month) {
// //     days.push(new Date(date));
// //     date.setUTCDate(date.getUTCDate() + 1);
// //   }
// //   return days;
// // }

