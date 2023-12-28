const bodyEL = document.querySelector("body");
(bodyEL.style.fontFamily = "Roboto"), "sans-serif";
bodyEL.style.margin = "0";

const navHeader = document.createElement("header");
bodyEL.appendChild(navHeader);

const navWrapper = document.createElement("div");
navWrapper.classList = "nav-wrapper";
navWrapper.style.display = "flex";
navWrapper.style.position = "relative";
navWrapper.style.flexDirection = "row";
navWrapper.style.flexWrap = "nowrap";
navWrapper.style.alignItems = "center";
navWrapper.style.justifyContent = "space-between";
navHeader.appendChild(navWrapper);

const divEL = document.createElement("div");
divEL.classList = "logo-container";
divEL.innerText = "programming practive";
divEL.style.display = "flex";
divEL.style.fontWeight = "bold";
divEL.style.textTransform = "uppercase";
divEL.style.color = "#ffb703";
divEL.style.justifyContent = "center";
divEL.style.alignItems = "center";
navWrapper.appendChild(divEL);

const navEl = document.createElement("nav");
navWrapper.appendChild(navEl);

const inputHidden = document.createElement("input");
inputHidden.classList = "hidden";
inputHidden.type = "checkbox";
inputHidden.id = "menuToggle";
navEl.appendChild(inputHidden);

const menuBtn = document.createElement("label");
menuBtn.classList = "menu-btn";
menuBtn.htmlFor = "menuToggle";
navEl.appendChild(menuBtn);
const divOne = document.createElement("div");
divOne.classList = "menu";
menuBtn.appendChild(divOne);
const divTwo = document.createElement("div");
divTwo.classList = "menu";
menuBtn.appendChild(divTwo);
const divThree = document.createElement("div");
divThree.classList = "menu";
menuBtn.appendChild(divThree);

const navContainer = document.createElement("div");
navContainer.classList = "nav-container";
navEl.appendChild(navContainer);

const navTabs = document.createElement("ul");
navTabs.classList = "nav-tabs";
navTabs.style.display = "flex";
navTabs.style.fontWeight = "600";
navTabs.style.fontSize = "18px";
navTabs.style.listStyle = "none";
navContainer.appendChild(navTabs);
const homeLi = document.createElement("li");
homeLi.classList = "nav-tab";
homeLi.innerText = "Home";
navTabs.appendChild(homeLi);
const ProductsLi = document.createElement("li");
ProductsLi.classList = "nav-tab";
ProductsLi.innerText = "Products";
navTabs.appendChild(ProductsLi);
const ServicesLi = document.createElement("li");
ServicesLi.classList = "nav-tab";
ServicesLi.innerText = "Services";
navTabs.appendChild(ServicesLi);
const FAQLi = document.createElement("li");
FAQLi.classList = "nav-tab";
FAQLi.innerText = "FAQ";
navTabs.appendChild(FAQLi);
const ContactLi = document.createElement("li");
ContactLi.classList = "nav-tab";
ContactLi.innerText = "Contact";
navTabs.appendChild(ContactLi);
const CareersLi = document.createElement("li");
CareersLi.classList = "nav-tab";
CareersLi.innerText = "Careers";
navTabs.appendChild(CareersLi);

// bodyEL.innerHTML = `
//     <header>
//         <div class="nav-wrapper">
//             <div class="logo-container">programming practive</div>
//             <nav>
//                 <input class="hidden" type="checkbox" id="menuToggle">
//                 <label class="menu-btn" for="menuToggle">
//                     <div class="menu"></div>
//                     <div class="menu"></div>
//                     <div class="menu"></div>
//                 </label>
//                 <div class="nav-container">
//                     <ul class="nav-tabs">
//                         <li class="nav-tab">Home</li>
//                         <li class="nav-tab">Products</li>
//                         <li class="nav-tab">Services</li>
//                         <li class="nav-tab">FAQ</li>
//                         <li class="nav-tab">Contact</li>
//                         <li class="nav-tab">Careers</li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     </header>
//     <div class="center">
//         <h1>Resize window to 800px to toggle menu</h1>
//     </div>
// `;
