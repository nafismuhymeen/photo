// Elements
const navLink = document.querySelectorAll(".navigation-link");
const navContainer = document.querySelectorAll(".navigation-container");
const menuIcon = document.querySelector("#menu-icon");
const closeDrawerIcon = document.querySelector("#close-icon");
const drawer = document.querySelector("#nav-list");

// Open Drawer Function
const openDrawer = () => {
  drawer.classList.add("open");
};

// Close Drawer Function
const closeDrawer = () => {
  drawer.classList.remove("open");
};

// Adding Event Listner
menuIcon.addEventListener("click", openDrawer);
closeDrawerIcon.addEventListener("click", closeDrawer);
navLink.forEach((el) => el.addEventListener("click", closeDrawer));

const makeUnderLine = () => {
  if (window.location.pathname === "/") {
    navContainer[0].classList.add("nav-active");
  }
  if (window.location.pathname === "/pages/gallery.html") {
    navContainer[1].classList.add("nav-active");
  }
  if (window.location.pathname === "/pages/quiz.html") {
    navContainer[2].classList.add("nav-active");
  }
  if (window.location.pathname === "/pages/about.html") {
    navContainer[3].classList.add("nav-active");
  }
};

makeUnderLine();
