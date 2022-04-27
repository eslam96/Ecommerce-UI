let activeLink = document.querySelector("#activeLink");
let inactiveLink = document.querySelector("#inactiveLink");

activeLink.addEventListener("click", showActiveList);
inactiveLink.addEventListener("click", showInactiveList);

function showActiveList() {
  console.log("active works");
  activeLink.classList.add("active");
  inactiveLink.classList.remove("active");
  document.querySelector("#activeList").style.display = "block";
  document.querySelector("#inactiveList").style.display = "none";
}

function showInactiveList() {
  console.log("inactive works");
  activeLink.classList.remove("active");
  inactiveLink.classList.add("active");
  document.querySelector("#activeList").style.display = "none";
  document.querySelector("#inactiveList").style.display = "block";
}
