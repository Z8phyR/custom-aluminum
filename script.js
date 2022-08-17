const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-list");
const buttons = document.querySelectorAll(".next button");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("show");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.classList.contains("next-slide") ? 1 : -1;
    console.log(offset);
    const imgSlide = document.querySelector(".carousel-images");
    const active = document.querySelector(".active");
    let newIndex = [...imgSlide.children].indexOf(active) + offset;
    if (newIndex < 0) newIndex = imgSlide.children.length - 1;
    if (newIndex >= imgSlide.children.length) newIndex = 0;

    imgSlide.children[newIndex].classList.add("active");
    active.classList.remove("active");
  });
});
