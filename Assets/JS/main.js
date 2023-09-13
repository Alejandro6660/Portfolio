/*==========SHOW AND CLOSE NAV==========*/
const d = document;
/*=====Show__nav=====*/
const $navMenu = d.getElementById("nav__menu"),
  $btnToggle = d.getElementById("button__toggle"),
  $btnClose = d.getElementById("nav__close"),
  $navLink = d.querySelectorAll(".nav__item");

if ($btnToggle) {
  $btnToggle.addEventListener("click", () => {
    $navMenu.classList.add("show-menu");
  });
}
if ($btnClose) {
  $btnClose.addEventListener("click", () => {
    $navMenu.classList.remove("show-menu");
  });
}
if ($navLink) {
  $navLink.forEach((e) => {
    e.addEventListener("click", () => {
      $navMenu.classList.remove("show-menu");
    });
  });
}
/*==========SHOW shadow header==========*/
const $head = d.getElementById("head");
window.addEventListener("scroll", () => {
  this.scrollY >= 25
    ? $head.classList.add("head__shadow")
    : $head.classList.remove("head__shadow");
});
