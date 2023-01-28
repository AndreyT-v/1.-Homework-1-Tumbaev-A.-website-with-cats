let main = document.querySelector("main");

const updCards = function (data) {
  main.innerHTML = "";
  data.forEach(function (cat) {
    if (cat.id) {
      let card = `<div class="${cat.favourite ? "card like" : "card"}"
			style="background-image: url(${cat.img_link || "images/cat.jpeg"})">
				<span>${cat.name}</span>
				</div>`;
      main.innerHTML += card;
      console.log("cat =>", cat);
    }
  });

  let cards = document.getElementsByClassName("card");
  for (let i = 0, cnt = cards.length; i < cnt; i++) {
    const width = cards[i].offsetWidth;
    cards[i].style.height = width * 0.6 + "px";
  }
};

updCards(cats);

const addBtn = document.querySelector("#add"),
  popupForm = document.querySelector("#popup-form"),
  closePopupForm = popupForm.querySelector(".popup-close");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!popupForm.classList.contains("active")) {
    popupForm.classList.add("active");
    popupForm.parentElement.classList.add("active");
  }
});

closePopupForm.addEventListener("click", () => {
  popupForm.classList.remove("active");
});

  function closeFormAfterAddCat() {
  popupForm.classList.remove("active");
}


// Не работает, ПОЧЕМУ????????:


// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	let body = {};
// 	for (let i = 0; i < form.elements.length; i++) {
// 		let inp = form.elements[i];
// 		if (inp.type === "checkbox") {
// 			body[inp.name] = inp.checked;
// 		} else if (inp.name && inp.value) {
// 			if (inp.type === "number") {
// 				body[inp.name] = +inp.value;
// 			} else {
// 				body[inp.name] = inp.value;
// 			}
// 		}
// 	}
// 	cats.push(body);
// 	updCards(cats);
// 	closeFormAfterAddCat();
// 	form.reset();
// });

