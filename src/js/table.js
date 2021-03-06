import "../scss/main.scss";
import { registerSW } from "./pwa.js";
// import "./table.js";
import "./hamburger.js";
registerSW();
var Chart = require('chart.js');

let glasses = [];

glasses = JSON.parse(localStorage.getItem("Glasses"));

let historyTable = document.querySelector(".history-table__body");
let newGlasses = glasses.sort((a,b) => {
    let dateA = new Date(a.key), dateB = new Date(b.key)
    return dateA - dateB
  })
const refreshTable = () => {
  while (historyTable.firstChild) {
    historyTable.removeChild(historyTable.lastChild);
  }
  newGlasses.reverse().forEach((day) => {
    let row = historyTable.insertRow(-1);
    let dateCell = row.insertCell(0);
    let valCell = row.insertCell(1);
    dateCell.appendChild(document.createTextNode(day.key));
    valCell.appendChild(document.createTextNode(day.value));
  });
};
if (historyTable) refreshTable();


  console.log(newGlasses)
let days = newGlasses.map(day => (day.key))
let drinkedGlasses = newGlasses.map(day => (day.value))
var ctx = document.querySelector('#history-chart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        color:'rgba(75, 192, 192, 0.2)',
        labels: days,
        datasets: [{
            label: 'Glasses per day',
            data: drinkedGlasses,
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black'
            }
        },
        scales: {
            yAxes: [{
                fontColor: 'black',
                ticks: {
                    fontColor: 'black',
                    beginAtZero: true
                }
            }],
            xAxes: [{
                fontColor: 'black',
                ticks: {
                    fontColor: 'black',
                }
            }],
        }
    }
});


// const refreshTable = () => {
//     while (historyTable.firstChild) {
//       historyTable.removeChild(historyTable.lastChild);
//     }
//     glasses.forEach((day) => {
//       let row = historyTable.insertRow(-1);
//       let dateCell = row.insertCell(0);
//       let valCell = row.insertCell(1);
//       dateCell.appendChild(document.createTextNode(day.key));
//       valCell.appendChild(document.createTextNode(day.value));
//     });
//   };
//   console.log(historyTable)
//   if (historyTable) refreshTable();