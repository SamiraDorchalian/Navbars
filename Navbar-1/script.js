const navbarOverlay = document.querySelector(".navbar-overlay");
const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

// const toggleMenuOpen = () => document.body.classList.toggle("open");
const toggleMenuOpen = () => {
  document.body.classList.toggle("open");
};
// navbarMenu.innerHTML = `
//     <button type="button">About Me</button>
//     <button type="button" class="active">Information</button>
//     <button type="button">Projects</button>
// `;
const aboutButton = document.createElement("button");
aboutButton.type = "button";
aboutButton.innerText = "About Me";
navbarMenu.appendChild(aboutButton);

const informationButton = document.createElement("button");
informationButton.type = "button";
informationButton.innerText = "Information";
informationButton.classList = "active";
navbarMenu.appendChild(informationButton);

const projectsButton = document.createElement("button");
projectsButton.type = "button";
projectsButton.innerText = "Projects";
navbarMenu.appendChild(projectsButton);

navbarOverlay.addEventListener("click", toggleMenuOpen);
navbarBurger.addEventListener("click", toggleMenuOpen);
