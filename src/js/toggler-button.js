import menuIcon from "../assets/images/icon-hamburger.svg";

import closeIcon from "../assets/images/icon-close.svg";


const navbarNav = document.querySelector("#navbarNav");

const togglerButton = document.querySelector(".navbar-toggler");

const togglerIcon = togglerButton.querySelector(".toggler-icon");


navbarNav.addEventListener("show.bs.collapse", () => {

    togglerIcon.src = closeIcon;

});

navbarNav.addEventListener("hidden.bs.collapse", () => {

    togglerIcon.src = menuIcon;

});