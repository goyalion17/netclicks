//menu
const leftMenu = document.querySelector(".left-menu"),
  hamburger = document.querySelector(".hamburger");

//open/close menu
hamburger.addEventListener("click", () => {
  leftMenu.classList.toggle("openMenu");
  hamburger.classList.toggle("open");
});

document.body.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".left-menu")) {
    leftMenu.classList.remove("openMenu");
    hamburger.classList.remove("open");
  }
});

leftMenu.addEventListener("click", () => {
  const target = event.target;
  const dropdown = target.closest(".dropdown");
  if (dropdown){
      dropdown.classList.toggle('active')
      leftMenu.classList.add('openMenu')
      hamburger.classList.add('open')
  }
});
