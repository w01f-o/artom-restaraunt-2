const burgerButton = document.querySelector(".burger__button");
const burgerMenu = document.querySelector(".burger__menu");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu_open");
  document.body.classList.toggle("body_backdrop");
});

document.body.addEventListener("click", (e) => {
  if (
    !e.target.matches(".burger__menu") &&
    !e.target.matches(".burger__button")
  ) {
    console.log("da");
    burgerMenu.classList.remove("burger__menu_open");
    document.body.classList.remove("body_backdrop");
  }
});
