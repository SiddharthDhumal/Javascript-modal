let openModal = document.querySelector(".open--modal");
let closeModal = document.querySelector(".close--modal");
let main = document.getElementById("main");
let container = document.querySelector(".container");
// function display

function start() {
  main.classList.add("hidden");
  container.classList.remove("opacity");
  openModal.classList.remove("hidden");
}

start();

openModal.addEventListener("click", () => {
  main.classList.remove("hidden");
  openModal.classList.add("hidden");
  container.classList.add("opacity");
  // console.log("clicked");
});

closeModal.addEventListener("click", () => {
  main.classList.add("hidden");
  container.classList.remove("opacity");
  openModal.classList.remove("hidden");
});


// window.addEventListener('click',function(event){
//   if(event.target == event.target.closest('.container')){
//     main.classList.add("hidden");
//   container.classList.remove("opacity");
//   openModal.classList.remove("hidden");
//     console.log('clickedwindow');
//   }
// })