let t_cpc = document.querySelector(".t_cpc");
let typed = document.querySelector(".type-d");
let typew = document.querySelector(".type-w");
let typem = document.querySelector(".type-m");
let typei = document.querySelector(".type-i");
let typef = document.querySelector(".type-f");
let typep = document.querySelector(".type-p");
let typel = document.querySelector(".type-l");
let typee = document.querySelector(".type-e");
let tags = document.querySelector(".tags");
let tags_w = document.querySelector(".tags_w");
let tags_m = document.querySelector(".tags_m");
let tags_i = document.querySelector(".tags_i");
let tags_f = document.querySelector(".tags_f");
let tags_p = document.querySelector(".tags_p");
let tags_l = document.querySelector(".tags_l");
let tags_e = document.querySelector(".tags_e");
let menu = document.querySelector(".menu-icon");
let menures = document.querySelector(".menu-active");
let entrymenu = document.querySelector(".layout-1");
let opacityshop = document.querySelector(".right-content");
let buttonshop = document.querySelector(".sanr_hk");
let shop = document.querySelector(".left-aside");

t_cpc.onclick = function(){
    t_cpc.classList.toggle("active");
};

buttonshop.onclick = function(){
    opacityshop.classList.toggle("shop_act");
    shop.classList.toggle("active");
};

typed.onclick = function(){
    tags.classList.toggle("active");
};

// typew.onclick = function(){
//     tags_w.classList.toggle("active");
// };

// typem.onclick = function(){
//     tags_m.classList.toggle("active");
// };

// typei.onclick = function(){
//     tags_i.classList.toggle("active");
// };

// typef.onclick = function(){
//     tags_f.classList.toggle("active");
// };

// typep.onclick = function(){
//     tags_p.classList.toggle("active");
// };

// typel.onclick = function(){
//     tags_l.classList.toggle("active");
// };

// typee.onclick = function(){
//     tags_e.classList.toggle("active");
// };

menu.onclick = function(){
    entrymenu.classList.toggle("active");
};

menures.onclick = function(){
    entrymenu.classList.toggle("active");
};

var cbElements = document.getElementsByClassName("checkbox-list");

for (var i = 0; i < cbElements.length; ++i) {
    cbElements[i].addEventListener("click", function() {
        this.getElementsByClassName("checkbox__cm")[0].classList.toggle('selected');
    });
}