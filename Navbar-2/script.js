const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar-menu");

const navbarLogo = document.createElement("h1");
navbarLogo.classList = "navbar-logo";
navbar.appendChild(navbarLogo);

const navbarLogoIcon = document.createElement("img");
navbarLogoIcon.classList = "navbar-logo-icon";
navbarLogoIcon.src = "./logo-icon.png";
navbarLogo.appendChild(navbarLogoIcon);

const navbarLogoTextIcon = document.createElement("img");
navbarLogoTextIcon.classList = "navbar-logo-text-icon";
navbarLogoTextIcon.src = "./logo-text.png";
navbarLogo.appendChild(navbarLogoTextIcon);

const uilUilBagButton = document.createElement("button");
uilUilBagButton.type = "button";
uilUilBagButton.classList = "uil uil-bag";
uilUilBagButton.style.color = "#ffd500";
navbarMenu.appendChild(uilUilBagButton);

const uilUilLaptop = document.createElement("button");
uilUilLaptop.type = "button";
uilUilLaptop.classList = "uil uil-laptop";
uilUilLaptop.style.color = "#000";
navbarMenu.appendChild(uilUilLaptop);

const uilUilEnvelopeActive = document.createElement("button");
uilUilEnvelopeActive.type = "button";
uilUilEnvelopeActive.classList = "uil uil-envelope active";
uilUilEnvelopeActive.style.color = "#00509d";
navbarMenu.appendChild(uilUilEnvelopeActive);

const uilUilHeartColors = document.createElement("button");
uilUilHeartColors.type = "button";
uilUilHeartColors.classList = "uil uil-heart colors";
uilUilHeartColors.style.color = "#d90429";
navbarMenu.appendChild(uilUilHeartColors);
