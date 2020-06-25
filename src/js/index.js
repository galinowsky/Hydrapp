import "../scss/main.scss";
import { registerSW } from "./pwa.js";
import "./table.js";
import "./hamburger.js";
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
let today = new Date()
let todayDis = document.querySelector('.todayDate').innerHTML
document.querySelector('.todayDate').innerHTML = new Date().toISOString().slice(0, 10)


forw.addEventListener('click',() => {
  today.setDate(today.getDate() + 1);
document.querySelector('.todayDate').innerHTML = today.toISOString().slice(0, 10)
  //check if this day exists in arr, if so push
  let day = ifDayExists(today)
  if(day) {
    todayDis = day.key
    counter.innerHTML = day.value
  }
})

backw.addEventListener('click',() => {
  today.setDate(today.getDate() - 1);
document.querySelector('.todayDate').innerHTML = today.toISOString().slice(0, 10)
let day = ifDayExists(today)
  if(day) {
    todayDis = day.key
    counter.innerHTML = day.value
  }
})


const ifDayExists = (day) => {
  let dayExists  = null
  glasses.forEach((elem)=>{
  if(elem.key==day.toISOString().slice(0, 10)) dayExists = elem
  }
)
return dayExists
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

