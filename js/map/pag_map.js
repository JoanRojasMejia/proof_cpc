const list_items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20", "Item 21", "Item 22", "Item 23", "Item 24", "Item 25", "Item 26", "Item 27", "Item 28", "Item 29", "Item 30", 
    "Item 31", "Item 32", "Item 33", "Item 34", "Item 35", "Item 36", "Item 37", "Item 38", "Item 39", "Item 40", "Item 41", "Item 42", "Item 43", "Item 44", "Item 45", "Item 46", "Item 47", "Item 48", "Item 49", "Item 50", "Item 51", "Item 52", "Item 53", "Item 54", "Item 55", "Item 56", "Item 57", "Item 58", "Item 59", 
    "Item 60", "Item 61", "Item 62", "Item 63", "Item 64", "Item 65", "Item 66", "Item 67", "Item 68", "Item 69", "Item 70", "Item 71", "Item 72", "Item 73", "Item 74", "Item 75", "Item 76", "Item 77", "Item 78", "Item 79", "Item 80", "Item 81", "Item 82", "Item 83", "Item 84", "Item 85", "Item 86", "Item 87", 
    "Item 88", "Item 89", "Item 90", "Item 91", "Item 92", "Item 93", "Item 94", "Item 95", "Item 96", "Item 97", "Item 98", "Item 99", "Item 100", "Item 101", "Item 102", "Item 103", "Item 104", "Item 105", "Item 106", "Item 107", "Item 108", "Item 109", "Item 110", "Item 111", "Item 112", "Item 113", "Item 114", 
    "Item 115", "Item 116", "Item 117", "Item 118", "Item 119", "Item 120", "Item 121", "Item 122", "Item 123", "Item 124", "Item 125", "Item 126", "Item 127", "Item 128", "Item 129", "Item 130", "Item 131", "Item 132", "Item 133", "Item 134", "Item 135", "Item 136", "Item 137", "Item 138", "Item 139", "Item 140", 
    "Item 141", "Item 142", "Item 143", "Item 144", "Item 145", "Item 146", "Item 147", "Item 148", "Item 149", "Item 150", "Item 151", "Item 152", "Item 153", "Item 154", "Item 155", "Item 156", "Item 157", "Item 158", "Item 159", "Item 160", "Item 161", "Item 162", "Item 163", "Item 164", "Item 165", "Item 166", "Item 167", 
    "Item 168", "Item 169", "Item 170", "Item 171", "Item 172", "Item 173", "Item 174", "Item 175", "Item 176", "Item 177", "Item 178", "Item 179", "Item 180", "Item 181", "Item 182", "Item 183", "Item 184", "Item 185", "Item 186", "Item 187", "Item 188", "Item 189", "Item 190", "Item 191", "Item 192", "Item 193", "Item 194",
    "Item 195", "Item 196", "Item 197", "Item 198", "Item 199", "Item 200", "Item 201", "Item 202", "Item 203", "Item 204", "Item 205", "Item 206", "Item 207", "Item 208", "Item 209", "Item 210", "Item 211", "Item 212", "Item 213", "Item 214", "Item 215", "Item 216", "Item 217", "Item 218", "Item 219", "Item 220", "Item 221", 
    "Item 222", "Item 223", "Item 224", "Item 225", "Item 226", "Item 227", "Item 228", "Item 229", "Item 230", "Item 231", "Item 232", "Item 233", "Item 234", "Item 235", "Item 236", "Item 237", "Item 238", "Item 239", "Item 240", "Item 241", "Item 242", "Item 243", "Item 244", "Item 245", "Item 246", 
    "Item 247", "Item 248", "Item 249", "Item 250", "Item 251", "Item 252", "Item 253", "Item 254", "Item 255", "Item 256", "Item 257", "Item 258", "Item 259", "Item 260", "Item 261", "Item 262", "Item 263", "Item 264", "Item 265", "Item 266", "Item 267", "Item 268", "Item 269", "Item 270", "Item 271", "Item 272", "Item 273",
    "Item 274", "Item 275", "Item 276", "Item 277", "Item 278", "Item 279", "Item 280", "Item 281", "Item 282", "Item 283", "Item 284", "Item 285", "Item 286", "Item 287", "Item 288", "Item 289", "Item 290", "Item 291", "Item 292", "Item 293", "Item 294", "Item 295", "Item 296", "Item 297", "Item 298", "Item 299", "Item 300", 
    "Item 301", "Item 302", "Item 303", "Item 304", "Item 305", "Item 306", "Item 307", "Item 308", "Item 309", "Item 310", "Item 311", "Item 312", "Item 313", "Item 314", "Item 315", "Item 316", "Item 317", "Item 318", "Item 319", "Item 320", "Item 321", "Item 322", "Item 323", "Item 324", "Item 325", 
    "Item 326", "Item 327", "Item 328", "Item 329", "Item 330", "Item 331", "Item 332", "Item 333", "Item 334", "Item 335", "Item 336", "Item 337", "Item 338", "Item 339", "Item 340", "Item 341", "Item 342", "Item 343", "Item 344", "Item 345", "Item 346", "Item 347", "Item 348", "Item 349", "Item 350" 
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
const all_up = document.getElementById('all_up');

let current_page = 1;
let rows = 84;

const landAleatory = (arr)  => {
    let inaleatory = Math.floor(Math.random() * arr.length);
    return arr[inaleatory]
}

const numberRandom = (max, min) => {
    return String(Math.round(Math.random() * (1 + max - min) + min));
}

const createDirection = (max, min) => {
    let x = numberRandom(max, min);
    let y = numberRandom(max, min);

    return x + ", " + y
}

const lands = [
    {
        img: "img/map/rect_mv.jpeg",
        background: "#554768",
    },
    {
        img: "img/map/rect_mv1.jpeg",
        background: "#554768",
    },
    {
        img: "img/map/rect_mv2.jpeg",
        background: "#554768",
    },
    {
        img: "img/map/rect_mv3.jpeg",
        background: "#554768",
    },
    {
        img: "img/map/rect_lv.jpeg",
        background: "#5c5c5c",
    },
    {
        img: "img/map/rect_lv1.jpeg",
        background: "#5c5c5c",
    },
    {
        img: "img/map/rect_lv2.jpeg",
        background: "#5c5c5c",
    },
    {
        img: "img/map/rect_lv3.jpeg",
        background: "#5c5c5c",
    },
];


function displayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    for(let i = 0; i < paginatedItems.length; i++){

        let generateland = landAleatory(lands);

        //Create a container
        let a_container = document.createElement("a"); 
        a_container.setAttribute("href", "#");
        a_container.style.cursor = "auto";

        //Create hover:cursor-pointer - child of a_container
        let hover_cursor = document.createElement("div");
        hover_cursor.classList.add("hover:cursor-pointer");
        hover_cursor.classList.add("m-8");
        hover_cursor.classList.add("md:m-8");

        //Create border - child of hover_cursor
        let border = document.createElement("div");
        border.classList.add("border");
        border.classList.add("border-gray-3");
        border.classList.add("bg-gray-4");
        border.classList.add("rounded");
        border.classList.add("transition");
        border.classList.add("hover:shadow");
        border.classList.add("hover:border-gray-6");

        //Create px-12 - child of border
        let px_12 = document.createElement("div");
        px_12.classList.add("px-12");
        px_12.classList.add("py-16");
        px_12.classList.add("rv_lupm");
        px_12.classList.add("btn16");

        //Create flex - child of px-12
        let flex = document.createElement("div");
        flex.classList.add("flex");
        flex.classList.add("justify-between");
        flex.classList.add("items-center");

        //Create map_img - child of px-12
        let map_img = document.createElement("div");
        map_img.classList.add("map_lvp");

        //Create img - child of map_img
        let img = document.createElement("img");
        img.classList.add("mx-auto");
        img.classList.add("chemvv");
        img.setAttribute("src", generateland.img);
        map_img.appendChild(img);

        //Create inline - child of flex
        let inline = document.createElement("div");
        inline.classList.add("inline-block");

        //Create span_flex - child of inline
        let span_flex = document.createElement("span");
        span_flex.classList.add("flex");
        span_flex.classList.add("px-8");
        span_flex.classList.add("rounded");
        span_flex.classList.add("text-12");
        span_flex.classList.add("border");
        span_flex.classList.add("border-transparent");
        span_flex.style.paddingTop = "1px";
        span_flex.style.paddingBottom = "1px";
        span_flex.style.backgroundColor = generateland.background;
        span_flex.style.borderColor = "transparent";
        span_flex.style.width = "75px";
        span_flex.style.display = "flex";
        span_flex.style.justifyContent = "center";

        //Create div_flex - child of span_flex
        let div_flex = document.createElement("div");
        div_flex.classList.add("flex");
        div_flex.classList.add("items-center");

        //Create alfi - child of div_flex
        let alfi = document.createElement("img");
        alfi.setAttribute("src", "img/tools/alf.png");
        alfi.setAttribute("width", "13");
        alfi.setAttribute("height", "13");
        div_flex.appendChild(alfi);

        //Create ml - child of path
        let ml = document.createElement("span");
        ml.classList.add("ml-4");
        ml.style.color = "#fff";
        ml.textContent = createDirection(110, -110);
        div_flex.appendChild(ml);
        span_flex.appendChild(div_flex);
        inline.appendChild(span_flex);
        flex.appendChild(inline);
        px_12.appendChild(flex);
        px_12.appendChild(map_img);
        border.appendChild(px_12);
        hover_cursor.appendChild(border);
        a_container.appendChild(hover_cursor);

        wrapper.appendChild(a_container);
    }
}

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
        console.log(current_btn);
        current_btn.classList.remove("active");

        list.classList.add("active");
    });

    return list;
}

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);

const topup = document.querySelectorAll("a.top");

for (let i = 0 ; i < topup.length; i++) {
    topup[i].addEventListener('click', () => {
        all_up.scrollTop = 0;
    }); 
}
