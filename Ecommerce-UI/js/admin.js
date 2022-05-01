function myFunction(e) {
  if (document.querySelector(".sideNav a.active") !== null) {
    document.querySelector(".sideNav a.active").classList.remove("active");
  }
  e.target.classList.add("active");
}

function myFunction2(e) {
  if (document.querySelector(".tabList a.active") !== null) {
    document.querySelector(".tabList a.active").classList.remove("active");
  }
  e.target.classList.add("active");
}
