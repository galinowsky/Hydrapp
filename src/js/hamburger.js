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
