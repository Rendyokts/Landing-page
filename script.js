const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".meny-navigation");

menuBar.addEventListener("click", function(){
    menuNav.classList.toggle("menu-active");
});
