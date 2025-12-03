let menu=document.querySelector(".navlist");
let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");

menuBtn.addEventListener("click",()=>{
  menu.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
  menu.classList.remove("active");
});
