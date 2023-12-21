const navbar = document.querySelector(".navbar");
const navbarBurder = document.querySelector(".navbar-burder");
const menuEl = document.querySelector(".menu");
// navbar.innerHTML = `
//     <img class="navbar-logo" src="./assets/logo.png" />
//     <input type="text" placeholder="search" class="navbar-search" />
// `;

// menuEl.innerHTML = `
//     <a href="#" style="animation: delay 0.1s;">Home</a>
//     <a href="#" style="animation: delay 0.2s;">About</a>
//     <a href="#" style="animation: delay 0.3s;">Services</a>
//     <a href="#" style="animation: delay 0.4s;">Products</a>
//     <a href="#" style="animation: delay 0.5s;">Contact</a>
// `;

const navbarLogo = document.createElement("img");
navbarLogo.classList = "navbar-logo";
navbarLogo.src = "./assets/download (5).svg";
navbar.appendChild(navbarLogo);

const navbarSearch = document.createElement("input");
navbarSearch.classList = "navbar-search";
navbarSearch.placeholder = "search";
navbarSearch.type = "text";
navbar.appendChild(navbarSearch);

const homeTagA = document.createElement("a");
homeTagA.href =
  "https://www.google.com/maps/d/u/0/viewer?mid=1_elAYHm5NzUMIJtUiVOsdBORU4k&hl=en_US&ll=36.733450535122785%2C128.2653745&z=7";
homeTagA.style.animation = "delay 0.1s";
homeTagA.innerText = "Home";
menuEl.appendChild(homeTagA);

const aboutTagA = document.createElement("a");
aboutTagA.href = "https://en.wikipedia.org/wiki/South_Korea";
aboutTagA.style.animation = "delay 0.2s";
aboutTagA.innerText = "About";
menuEl.appendChild(aboutTagA);

const servicesTagA = document.createElement("a");
servicesTagA.href = "https://en.wikipedia.org/wiki/K-pop";
servicesTagA.style.animation = "delay 0.2s";
servicesTagA.innerText = "Services";
menuEl.appendChild(servicesTagA);

const productsTagA = document.createElement("a");
productsTagA.href = "https://en.wikipedia.org/wiki/Kimchi";
productsTagA.style.animation = "delay 0.2s";
productsTagA.innerText = "Products";
menuEl.appendChild(productsTagA);

const contactTagA = document.createElement("a");
contactTagA.href =
  "https://en.wikipedia.org/wiki/Iran%E2%80%93South_Korea_relations";
contactTagA.style.animation = "delay 0.2s";
contactTagA.innerText = "Contact";
menuEl.appendChild(contactTagA);

const toggleMenu = () => {
  document.body.classList.toggle("open");
};
navbarBurder.addEventListener("click", toggleMenu);
