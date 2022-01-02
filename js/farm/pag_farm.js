const list_items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
const all_up = document.getElementById('all_up');

let current_page = 1;
let rows = 8;

function displayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    for(let i = 0; i < paginatedItems.length; i++){

        //Create grid-item
        let grid_item = document.createElement("a"); 
        grid_item.setAttribute("land-f1", "");
        grid_item.setAttribute("gview", "");
        grid_item.classList.add("grid-item");
        grid_item.classList.add("gauz");
        grid_item.setAttribute("dview", "");

        //Create cover-view - child of grid-item
        let cover_view = document.createElement("div");
        cover_view.setAttribute("land-f1", "");
        cover_view.classList.add("cover-view");

        //Create nick - child of cover-view
        let nick = document.createElement("div");
        nick.setAttribute("land-f1", "");
        nick.classList.add("nick-p");
        nick.classList.add("class-pt");
        nick.classList.add("mario_v");
        nick.classList.add("btn10");
        nick.textContent = "Hakkav";
        cover_view.appendChild(nick);

        //Create type - child of cover-view
        let type = document.createElement("div");
        type.setAttribute("land-f1", "");
        type.classList.add("type-d");
        type.classList.add("dragon_");
        type.textContent = "Dragon";

        //Create tags - child of type
        let tags = document.createElement("div")
        tags.classList.add("tags");

        //Create tag_origin - child of tags
        let tag_origin = document.createElement("span");
        tag_origin.classList.add("tag_origin");
        tag_origin.textContent = "ORIGIN";

        //Create star - child of tag_origin
        let star = document.createElement("img");
        star.classList.add("star");
        star.setAttribute("src", "img/tools/star.png");
        tag_origin.appendChild(star);
        tags.appendChild(tag_origin);

        //Create level - child of tag_origin
        let level = document.createElement("span");
        level.classList.add("level");
        level.textContent = "LVL 3";
        tags.appendChild(level);
        type.appendChild(tags);
        cover_view.appendChild(type);

        //Create tag_remove - child of cover-view
        let tag_remove = document.createElement("div");
        tag_remove.setAttribute("kit_sr", "");
        tag_remove.setAttribute("land-f1", "");
        tag_remove.classList.add("btn2");
        tag_remove.classList.add("tag");
        tag_remove.classList.add("box_pt");
        tag_remove.style.backgroundImage = "url(img/rarity/remove.png)";
        cover_view.appendChild(tag_remove);

        //Create harvest - child of cover-view
        let harvest = document.createElement("div");
        harvest.setAttribute("kit_sr", "");
        harvest.setAttribute("land-f1", "");
        harvest.classList.add("btn1");
        harvest.classList.add("harvest");
        harvest.classList.add("box_pt");
        harvest.style.backgroundImage = "url(img/rarity/harvest.png)";
        cover_view.appendChild(harvest);

        //Create plant_img - child of cover-view
        let plant_img = document.createElement("div");
        plant_img.setAttribute("kit_sr", "");
        plant_img.setAttribute("land-f1", "");
        plant_img.classList.add("plant-v");
        plant_img.classList.add("box_pt");
        plant_img.style.backgroundImage = "url(img/nfts/plants/dragon/common_dragon.png)";
        cover_view.appendChild(plant_img);

        //Create luch_st - child of cover-view
        let luch_st = document.createElement("div");
        luch_st.setAttribute("tabindex", "0");

        //Create land_image - child of luch_st
        let land_image = document.createElement("div");
        land_image.setAttribute("kit_sr", "");
        land_image.setAttribute("land-f1", "");
        land_image.classList.add("cover-image");
        land_image.classList.add("box_pt");
        land_image.classList.add("egv_bx");
        land_image.style.backgroundImage = "url(img/farm/land.png)";
        luch_st.appendChild(land_image);

        //Create vp_king - child of luch_st
        let vp_king = document.createElement("div");
        vp_king.classList.add("vp_king");

        //Create sub_tools_bigpot - child of vp_king
        let sub_tools_bigpot = document.createElement("button");
        sub_tools_bigpot.setAttribute("type", "button");
        sub_tools_bigpot.classList.add("sub_tools");

        //Create img_bigpot - child of sub_tools_bigpot
        let img_bigpot = document.createElement("img");
        img_bigpot.setAttribute("src", "img/tools/sub-tools/bigpot.png");
        img_bigpot.setAttribute("alt", "Big pot");
        img_bigpot.classList.add("btn3");
        img_bigpot.classList.add("tool_active");
        sub_tools_bigpot.appendChild(img_bigpot);

        //Create amount_sbigpot - child of sub_tools_bigpot
        let amount_bigpot = document.createElement("span");
        amount_bigpot.classList.add("amount");
        amount_bigpot.classList.add("bigpot");
        amount_bigpot.textContent = "1";
        sub_tools_bigpot.appendChild(amount_bigpot);
        vp_king.appendChild(sub_tools_bigpot);

        //Create sub_tools_smallpot - child of vp_king
        let sub_tools_smallpot = document.createElement("button");
        sub_tools_smallpot.setAttribute("type", "button");
        sub_tools_smallpot.classList.add("sub_tools");

        //Create img_smallpot - child of sub_tools_smallpot
        let img_smallpot = document.createElement("img");
        img_smallpot.setAttribute("src", "img/tools/sub-tools/smallpot.png");
        img_smallpot.setAttribute("alt", "small pot");
        img_smallpot.classList.add("btn4");
        img_smallpot.classList.add("tool_active");
        sub_tools_smallpot.appendChild(img_smallpot);

        //Create amount_smallpot - child of sub_tools_smallpot
        let amount_smallpot = document.createElement("span");
        amount_smallpot.classList.add("amount");
        amount_smallpot.classList.add("smallpot");
        amount_smallpot.textContent = "2";
        sub_tools_smallpot.appendChild(amount_smallpot);
        vp_king.appendChild(sub_tools_smallpot);

        //Create sub_tools_water - child of vp_king
        let sub_tools_water = document.createElement("button");
        sub_tools_water.setAttribute("type", "button");
        sub_tools_water.classList.add("sub_tools");

        //Create img_water - child of sub_tools_water
        let img_water = document.createElement("img");
        img_water.setAttribute("src", "img/tools/sub-tools/water.png");
        img_water.setAttribute("alt", "Water");
        img_water.classList.add("btn5");
        img_water.classList.add("tool_active");
        sub_tools_water.appendChild(img_water);

        //Create amount_water - child of sub_tools_water
        let amount_water = document.createElement("span");
        amount_water.classList.add("amount");
        amount_water.classList.add("water");
        amount_water.textContent = "2";
        sub_tools_water.appendChild(amount_water);
        vp_king.appendChild(sub_tools_water);

        //Create sub_tools_greenhouse - child of vp_king
        let sub_tools_greenhouse = document.createElement("button");
        sub_tools_greenhouse.setAttribute("type", "button");
        sub_tools_greenhouse.classList.add("sub_tools");

        //Create img_greenhouse - child of sub_tools_greenhouse
        let img_greenhouse = document.createElement("img");
        img_greenhouse.setAttribute("src", "img/tools/sub-tools/greenhouse.png");
        img_greenhouse.setAttribute("alt", "Green house");
        img_greenhouse.classList.add("btn6");
        img_greenhouse.classList.add("tool_active");
        sub_tools_greenhouse.appendChild(img_greenhouse);

        //Create amount_greenhouse - child of sub_tools_greenhouse
        let amount_greenhouse = document.createElement("span");
        amount_greenhouse.classList.add("amount");
        amount_greenhouse.classList.add("greenhouse");
        amount_greenhouse.textContent = "2";
        sub_tools_greenhouse.appendChild(amount_greenhouse);
        vp_king.appendChild(sub_tools_greenhouse);
        luch_st.appendChild(vp_king);
        cover_view.appendChild(luch_st);
        grid_item.appendChild(cover_view);

        //Create info-view - child of grid-item
        let info_view = document.createElement("div");
        info_view.setAttribute("land-f1", "");
        info_view.classList.add("info-view");

        //Create title_view - child of info-view
        let title_view = document.createElement("div");
        title_view.setAttribute("land-f1", "");
        title_view.classList.add("title-view");
        title_view.classList.add("ellipsis");
        title_view.textContent = "CPC: 20/72";
        info_view.appendChild(title_view);

        //Create price - child of info-view
        let price = document.createElement("div");
        price.setAttribute("land-f1", "");
        price.classList.add("price");
        price.classList.add("ellipsis");

        //Create class-pt - child of price
        let class_pt = document.createElement("span");
        class_pt.setAttribute("land-f1", "");
        class_pt.classList.add("class-pt");
        class_pt.classList.add("epic");
        class_pt.classList.add("rarity");
        class_pt.textContent = "1205482057";
        price.appendChild(class_pt);

        //Create gampi - child of price
        let gampi = document.createElement("span");
        gampi.setAttribute("land-f1", "");
        gampi.classList.add("gampi");
        gampi.classList.add("time-vp");
        gampi.textContent = "CPC: 45";
        price.appendChild(gampi);

        //Create cpc_value - child of price
        let cpc_value = document.createElement("span");
        cpc_value.setAttribute("land-f1", "");
        cpc_value.classList.add("cpc-value");
        cpc_value.classList.add("class-pt");
        cpc_value.classList.add("mario_v");
        cpc_value.textContent = "17:20";
        price.appendChild(cpc_value);
        info_view.appendChild(price);
        grid_item.appendChild(info_view);

        wrapper.appendChild(grid_item);
    }
};

function setupPagination (items, wrapper, rows_per_page){
    wrapper.innerHTML="";

    let page_count = Math.ceil(items.length / rows_per_page);

    for(let i = 1; i < page_count + 1; i++){
        let btn = pagination_list(i, items)
        wrapper.appendChild(btn);
    }
};

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























































