let buttonChange = document.querySelector(".js-hamburger");
let screen = document.documentElement.clientWidth;
let nav = document.querySelector(".navigation");
let navHead = document.querySelector(".app-bar");
// let tempChart = document.querySelector('#history-chart');

if (buttonChange) {
  buttonChange.addEventListener("click", () => {
    nav.classList.toggle("navigation__open");
    navHead.classList.toggle("app-bar__open");
  });
}
// console.log(buttonChange)
// console.log(navHead)
if (window) {
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 520 &&
      nav.classList.contains("navigation__open")
    ) {
      nav.classList.toggle("navigation__open");
      // nav.setAttribute('display','none')
    }
    if (window.innerWidth >= 520 && navHead.classList.toggle("app-bar__open")) {
      navHead.classList.toggle("app-bar__open");
    }
  });
}
