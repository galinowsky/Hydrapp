import "../scss/main.scss";
import { registerSW } from "./pwa.js";
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
    glasses.push(newDay);
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
