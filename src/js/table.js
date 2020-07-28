import "../scss/main.scss";
import { registerSW } from "./pwa.js";
// import "./table.js";
import "./hamburger.js";
registerSW();

console.log('jaaaajaaa')

let glasses = [];

glasses = JSON.parse(localStorage.getItem("Glasses"));

let historyTable = document.querySelector(".history-table__body");

const refreshTable = () => {
  while (historyTable.firstChild) {
    historyTable.removeChild(historyTable.lastChild);
  }
  glasses.forEach((day) => {
    let row = historyTable.insertRow(-1);
    let dateCell = row.insertCell(0);
    let valCell = row.insertCell(1);
    dateCell.appendChild(document.createTextNode(day.key));
    valCell.appendChild(document.createTextNode(day.value));
  });
};
console.log(historyTable)
if (historyTable) refreshTable();
