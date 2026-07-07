const navbarNav = document.querySelector("#navbarNav");

const togglerButton = document.querySelector(".navbar-toggler");

const togglerIcon = togglerButton.querySelector(".toggler-icon");


const menuIcon = "./src/assets/images/icon-hamburger.svg";

const closeIcon = "./src/assets/images/icon-close.svg";


navbarNav.addEventListener("show.bs.collapse", () => {

    togglerIcon.src = closeIcon;

});

navbarNav.addEventListener("hidden.bs.collapse", () => {

    togglerIcon.src = menuIcon;

});