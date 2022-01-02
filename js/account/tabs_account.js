const tabs = document.querySelectorAll("#tabs .txt-categ");
const market = document.querySelectorAll(".content_account");
const type = document.querySelectorAll(".cont_typ_rar");
let tabActive = null;

let hola = document.querySelector(".butgi3.type");

let comp = hola.className;

console.log(hola.childNodes);

tabs.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		tabs.forEach((elem) => {
			elem.classList.remove("active");
		});

		e.currentTarget.classList.toggle("active");
		tabActive = tab.dataset.tab;

		market.forEach((mark) => {
			if (mark.dataset.tab === tabActive) {
				mark.classList.add("active");
			} else {
				mark.classList.remove("active");
			}
		});

		type.forEach((typ) => {
			if (typ.dataset.tab === tabActive) {
				typ.classList.add("active");
			} else {
				typ.classList.remove("active");
			}
		});
	});
});
function activateButton(button, type_button, row) {
    if(button.className == "undefined"){
        console.log("Soy joan");
    }
	document.querySelector(button).onclick = function () {
        console.log(button.className);
		document.querySelector(type_button).classList.toggle("active");
		document.querySelector(row).classList.toggle("active");
	};
}

activateButton(".butgi3.type",".contain_typepl",".spz04.pl");
activateButton(".butgi3.rarit", ".contain_raripl",".spz04.ra_pl");
activateButton(".butgi3.type_tree",".contain_typetr",".spz04.tr");
activateButton(".butgi3.rarit_tr",".contain_raritr",".spz04.ra_tr");
activateButton(".butgi3.rarit_la",".contain_rarila",".spz04.ra_la");
activateButton(".butgi3.rarit_bu",".contain_raribu",".spz04.ra_bu");
activateButton(".butgi3.rarit_se",".contain_rarise",".spz04.ra_se");
