const togglerButton = document.querySelector(".navbar-toggler");

const togglerIcon = togglerButton.querySelector(".toggler-icon");

const menuIcon = "./src/assets/images/icon-hamburger.svg";

const closeIcon = "./src/assets/images/icon-close.svg";

togglerButton.addEventListener("click", () => {

    const isOpen = togglerButton.getAttribute("aria-expanded") === "true";

    togglerIcon.src = isOpen ? closeIcon : menuIcon;

});