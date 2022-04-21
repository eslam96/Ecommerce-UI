// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");

// let overlay = document.querySelector('.overlayWindow');

// btn1.addEventListener("click", function(){
//     overlay.style.width = "100%";
// });

// btn2.addEventListener("click", function(){
//     overlay.style.width = "100%";
// });

function openOverlay() {
  document.querySelector(".overlayWindow").style.width = "100%";
}

function closeOverlay() {
  document.querySelector(".overlayWindow").style.width = "0%";
}
