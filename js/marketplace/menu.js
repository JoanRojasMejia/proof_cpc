let menu = document.querySelector(".menu-icon");
let menures = document.querySelector(".menu-active");
let entrymenu = document.querySelector(".layout-1");

menu.onclick = function(){
    entrymenu.classList.toggle("active");
};

menures.onclick = function(){
    entrymenu.classList.toggle("active");
};