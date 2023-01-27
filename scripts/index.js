let main = document.querySelector("main");

const api = new Api("andrey-tumbaev"); 

const updCards = function (data) {
	main.innerHTML = "";
	data.forEach(function (cat) {
		if (cat.id) {
			let card = `<div class="${cat.favourite ? "card like" : "card"}"
			style="background-image: url(${cat.img_link || "../../img/cats-default-2.jpeg"})">
				<span>${cat.name}</span>
				</div>`;
			main.innerHTML += card;
			console.log('cat =>', cat)
		}
	});

  	let cards = document.getElementsByClassName("card");
	for (let i = 0, cnt = cards.length; i < cnt; i++) {
		const width = cards[i].offsetWidth;
		cards[i].style.height = width * 0.6 + "px";
	}

};
updCards(cats)

let form = document.querySelector('.form');
form.img_link.addEventListener("change", (e) => {
	form.firstElementChild.style.backgroundImage = `url(${e.target.value})`
})
form.img_link.addEventListener("input", (e) => {

	form.firstElementChild.style.backgroundImage = `url(${e.target.value})`
})

form.addEventListener("submit", e => {
	e.preventDefault();
	let body = {};
	for (let i = 0; i < form.elements.length; i++) {
		let inp = form.elements[i];
		if (inp.type === "checkbox") {
			body[inp.name] = inp.checked;
		} else if (inp.name && inp.value) {
			if (inp.type === "number") {
				body[inp.name] = +inp.value;
			} else {
				body[inp.name] = inp.value;
			}
		}
	}
	cats.push(body)
	updCards(cats)
	closeFormAfterAddCat()
	clearFormAddCat()

})

const addBtnEl = document.getElementById("add"),
	popupEL = document.querySelector(".popup"),
	closePopupFormEl = document.querySelector(".popup__close"),
	btnFormAddCat = document.querySelector(".form__btn");

addBtnEl.addEventListener("click", function (event) {
	event.preventDefault();

	if (!popupEL.classList.contains("popup_active")) {
		popupEL.classList.add("popup_active");
	}
});

closePopupFormEl.addEventListener("click", function (event) {
	popupEL.classList.remove("popup_active");

});

function closeFormAfterAddCat() {
	popupEL.classList.remove("popup_active");
}

function clearFormAddCat() {
	const formAddCat = document.querySelector('#form');
	formAddCat.reset();
}



