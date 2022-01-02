const list_items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20", "Item 21", "Item 22", "Item 23", "Item 24", "Item 25", "Item 26", "Item 27", "Item 28", "Item 29", "Item 30", 
    "Item 31", "Item 32", "Item 33", "Item 34", "Item 35", "Item 36", "Item 37", "Item 38", "Item 39", "Item 40", "Item 41", "Item 42", "Item 43", "Item 44", "Item 45", "Item 46", "Item 47", "Item 48", "Item 49", "Item 50", "Item 51", "Item 52", "Item 53", "Item 54", "Item 55", "Item 56", "Item 57", "Item 58", "Item 59", "Item 60", "Item 61", "Item 62", "Item 63"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
const all_up = document.getElementById('all_up');
const tabs = document.querySelectorAll('#tabs .tab');
const market = document.querySelectorAll('.central-content');
let tabActive = null;

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach((elem) =>{
            elem.classList.remove('active');
        });

        e.currentTarget.classList.toggle('active');
        tabActive = tab.dataset.tab;


        market.forEach((mark) => {
            if(mark.dataset.tab === tabActive){
                mark.classList.add('active');
            } else {
                mark.classList.remove('active');
            }
        });
    });
});

let current_page = 1;
let rows = 8;

const plantAleatory = (arr)  => {
    let inaleatory = Math.floor(Math.random() * arr.length);
    return arr[inaleatory]
}

const generateOwner = (long) => {
    let numbers = "123456789";
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let all = numbers + letters;
    let com = "";
    let com2 = "";

    for(let i = 0; i < long; i++){
        let aleatory = Math.round(Math.random() * all.length);
        let aleatory2 = Math.round(Math.random() * all.length);
        com += all.charAt(aleatory);
        com2 += all.charAt(aleatory2);
    }

    return "OWNER: 0x" + com + "..." + com2;
}

const numberRandom = (max, min) => {
    return String(Math.round(Math.random() * (1 + max - min) + min))
}

const plants = [
    {
        type_css: "type-dkm",
        type: "dark_",
        img: "url(img/nfts/plants/dark/common_dark.png)",
        rarity: "common",
        name: "Dark",
        price: numberRandom(190, 60),
        cpc: "CPC: 9/40"
    },
    {
        type_css: "type-dkm",
        type: "dark_",
        img: "url(img/nfts/plants/dark/uncommon_dark.png)",
        rarity: "uncommon",
        name: "Dark",
        price: numberRandom(190, 60),
        cpc: "CPC: 13/40"
    },
    {
        type_css: "type-dkm",
        type: "dark_",
        img: "url(img/nfts/plants/dark/mythical_dark.gif)",
        rarity: "epic",
        name: "Dark",
        price: numberRandom(190, 60),
        cpc: "CPC: 25/70"
    },
    {
        type_css: "type-dkm",
        type: "dark_",
        img: "url(img/nfts/plants/dark/mythical_dark2.gif)",
        rarity: "epic",
        name: "Dark",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-dm",
        type: "dragon_",
        img: "url(img/nfts/plants/dragon/common_dragon.png)",
        rarity: "common",
        name: "Dragon",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-dm",
        type: "dragon_",
        img: "url(img/nfts/plants/dragon/uncommon_dragon.png)",
        rarity: "uncommon",
        name: "Dragon",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-em",
        type: "electro_",
        img: "url(img/nfts/plants/electro/common_electro.png)",
        rarity: "common",
        name: "Electro",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-em",
        type: "electro_",
        img: "url(img/nfts/plants/electro/rare_electro.png)",
        rarity: "rare",
        name: "Electro",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-em",
        type: "electro_",
        img: "url(img/nfts/plants/electro/mythical_electro.gif)",
        rarity: "epic",
        name: "Electro",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-em",
        type: "electro_",
        img: "url(img/nfts/plants/electro/mythical_electro2.gif)",
        rarity: "epic",
        name: "Electro",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-fym",
        type: "fairy_",
        img: "url(img/nfts/plants/fairy/common_fairy.png)",
        rarity: "common",
        name: "Fairy",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-fym",
        type: "fairy_",
        img: "url(img/nfts/plants/fairy/uncommon_fairy.png)",
        rarity: "uncommon",
        name: "Fairy",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-fym",
        type: "fairy_",
        img: "url(img/nfts/plants/fairy/mythical_fairy.gif)",
        rarity: "epic",
        name: "Fairy",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-fm",
        type: "fire_",
        img: "url(img/nfts/plants/fire/common_fire.png)",
        rarity: "common",
        name: "Fire",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-fm",
        type: "fire_",
        img: "url(img/nfts/plants/fire/uncommon_fire.png)",
        rarity: "uncommon",
        name: "Fire",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-gm",
        type: "ghost_",
        img: "url(img/nfts/plants/ghost/common_ghost.png)",
        rarity: "common",
        name: "Ghost",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-gm",
        type: "ghost_",
        img: "url(img/nfts/plants/ghost/uncommon_ghost.png)",
        rarity: "uncommon",
        name: "Ghost",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-gm",
        type: "ghost_",
        img: "url(img/nfts/plants/ghost/rare_ghost.png)",
        rarity: "rare",
        name: "Ghost",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-gm",
        type: "ghost_",
        img: "url(img/nfts/plants/ghost/mythical_ghost.gif)",
        rarity: "epic",
        name: "Ghost",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-im",
        type: "ice_",
        img: "url(img/nfts/plants/ice/common_ice.png)",
        rarity: "common",
        name: "Ice",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-im",
        type: "ice_",
        img: "url(img/nfts/plants/ice/uncommon_ice.png)",
        rarity: "uncommon",
        name: "Ice",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-im",
        type: "ice_",
        img: "url(img/nfts/plants/ice/mythical-ice.gif)",
        rarity: "epic",
        name: "Ice",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-lm",
        type: "light_",
        img: "url(img/nfts/plants/light/common_light.png)",
        rarity: "common",
        name: "Light",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-lm",
        type: "light_",
        img: "url(img/nfts/plants/light/uncommon_light.png)",
        rarity: "uncommon",
        name: "Light",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-lm",
        type: "light_",
        img: "url(img/nfts/plants/light/mythical_light.gif)",
        rarity: "epic",
        name: "Light",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-lm",
        type: "light_",
        img: "url(img/nfts/plants/light/mythical_light.gif)",
        rarity: "epic",
        name: "Light",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-mm",
        type: "metal_",
        img: "url(img/nfts/plants/metal/common_metal.png)",
        rarity: "common",
        name: "Metal",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-mm",
        type: "metal_",
        img: "url(img/nfts/plants/metal/uncommon_metal.png)",
        rarity: "uncommon",
        name: "Metal",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-pm",
        type: "parasite_",
        img: "url(img/nfts/plants/parasite/common_parasite.png)",
        rarity: "common",
        name: "Parasite",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-pm",
        type: "parasite_",
        img: "url(img/nfts/plants/parasite/uncommon_parasite.png)",
        rarity: "uncommon",
        name: "Parasite",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-wm",
        type: "water_",
        img: "url(img/nfts/plants/water/common_water.png)",
        rarity: "common",
        name: "Water",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-wm",
        type: "water_",
        img: "url(img/nfts/plants/water/uncommon_water.png)",
        rarity: "uncommon",
        name: "Water",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-wm",
        type: "water_",
        img: "url(img/nfts/plants/water/mythical_water.gif)",
        rarity: "epic",
        name: "Water",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-wim",
        type: "wind_",
        img: "url(img/nfts/plants/wind/common_wind.png)",
        rarity: "common",
        name: "Wind",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    },
    {
        type_css: "type-wim",
        type: "wind_",
        img: "url(img/nfts/plants/wind/uncommon_wind.png)",
        rarity: "uncommon",
        name: "Wind",
        price: numberRandom(190, 60),
        cpc: "CPC: 22/65"
    }
];

function displayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    for(let i = 0; i < paginatedItems.length; i++){

        let generatePlant = plantAleatory(plants);

        //Create grid-item
        let grid_item = document.createElement("a"); 
        grid_item.setAttribute("mark_nft", "");
        grid_item.setAttribute("gview", "");
        grid_item.classList.add("grid-item");
        grid_item.classList.add("gauz");
        grid_item.classList.add(generatePlant.name);
        grid_item.classList.add("show");
        grid_item.setAttribute("dview", "");

        //Create cover-view - child of grid-item
        let cover_view = document.createElement("div");
        cover_view.setAttribute("land-f1", "");
        cover_view.classList.add("cover-view");

        //Create type - child of cover-view
        let type = document.createElement("div");
        type.setAttribute("land-f1", "");
        type.classList.add(generatePlant.type_css);
        type.classList.add(generatePlant.type);
        type.textContent = generatePlant.name;
        cover_view.appendChild(type);

        //Create owner - child of cover-view
        let owner = document.createElement("div");
        owner.classList.add("data__vp-owner");
        owner.textContent = generateOwner(4);
        cover_view.appendChild(owner);

        //Create plant - child of cover-view
        let image_plant = document.createElement("div");
        image_plant.setAttribute("kit_sr", "");
        image_plant.setAttribute("mark_nft", "");
        image_plant.classList.add("plant-lv");
        image_plant.classList.add("box_pt");
        image_plant.classList.add("egv_bxm");
        image_plant.style.backgroundImage = generatePlant.img;
        cover_view.appendChild(image_plant);
        grid_item.appendChild(cover_view);

        //Create data_vp - child of grid-item
        let data_vp = document.createElement("div");
        data_vp.classList.add("data__vp");


        //Create flex-ston - child of data_vp
        let flex_ston = document.createElement("div");
        flex_ston.classList.add("flex-ston");
        flex_ston.classList.add("ds_1");

        //Create flex-crit -child of flex-ston
        let flex_crit = document.createElement("div");
        flex_crit.classList.add("flex-crit");

        //Create data__vp-price - child of flex-crit
        let data_vp_price = document.createElement("div");
        data_vp_price.classList.add("data__vp-price");

        //Create token - child of data__vp-price
        let token = document.createElement("img");
        token.classList.add("token_market");
        token.classList.add("ds_2");
        token.classList.add("top-2");
        token.setAttribute("src", "img/market/token.png");
        data_vp_price.appendChild(token);
        let price = document.createElement("div");
        price.textContent = generatePlant.price;
        data_vp_price.appendChild(price);
        flex_crit.appendChild(data_vp_price);
        flex_ston.appendChild(flex_crit);
        data_vp.appendChild(flex_ston);

        //Create flex-column - child of data_vp
        let flex_column = document.createElement("div");
        flex_column.classList.add("flex-column");

        //Create data__vp-info - child of flex-column
        let data_vp_info = document.createElement("div");
        data_vp_info.classList.add("data__vp-info");
        data_vp_info.classList.add("grayt");
        data_vp_info.classList.add("dat-if");
        data_vp_info.textContent = "10 min ago";
        flex_column.appendChild(data_vp_info);
        data_vp.appendChild(flex_column);
        grid_item.appendChild(data_vp);

        //Create info-view - child of grid-item
        let info_view = document.createElement("div");
        info_view.setAttribute("land-f1", "");
        info_view.classList.add("info-view");

        //Create price - child of info-view
        let price2 = document.createElement("div");
        price2.setAttribute("land-f1", "");
        price2.classList.add("price");
        price2.classList.add("ellipsis");

        //Create class-pt - child of price
        let class_pt = document.createElement("span");
        class_pt.setAttribute("land-f1", "");
        class_pt.classList.add("class-pt");
        class_pt.classList.add(generatePlant.rarity);
        class_pt.classList.add("rarity");
        class_pt.textContent = numberRandom(3000000000, 1000000000);
        price2.appendChild(class_pt);

        //Create gampi - child of price
        let gampi = document.createElement("span");
        gampi.setAttribute("land-f1", "");
        gampi.classList.add("gampi");
        gampi.classList.add("time-vp");
        gampi.textContent = generatePlant.cpc;
        price2.appendChild(gampi);


         //Create gampi - child of price
        let buymk = document.createElement("span");
        buymk.setAttribute("land-f1", "");
        buymk.classList.add("cpc-value");
        buymk.classList.add("class-pt");
        buymk.classList.add("mario_v");
        buymk.classList.add("btn15");
        buymk.textContent = "Buy";
        price2.appendChild(buymk);
        info_view.appendChild(price2);
        grid_item.appendChild(info_view);

        wrapper.appendChild(grid_item);
    }
}

function setupPagination (items, wrapper, rows_per_page){
    wrapper.innerHTML="";

    let page_count = Math.ceil(items.length / rows_per_page);

    for(let i = 1; i < page_count + 1; i++){
        let btn = pagination_list(i, items)
        wrapper.appendChild(btn);
    }

}

function pagination_list (page, items){
    let list = document.createElement("li");
    list.setAttribute("pages-r", "");
    let number_list = document.createElement("a");
    number_list.classList.add("top");
    number_list.setAttribute("pages-r", "");
    number_list.innerText = page;
    list.appendChild(number_list);

    if(current_page == page) list.classList.add("active");

    list.addEventListener('click', function () {
        current_page = page;
        displayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagination li.active');
        current_btn.classList.remove("active");

        list.classList.add("active");
    });

    return list;
};

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);

const topup = document.querySelectorAll("a.top");

for (let i = 0 ; i < topup.length; i++) {
    topup[i].addEventListener('click', () => {
        all_up.scrollTop = 0;
    } ); 
}




