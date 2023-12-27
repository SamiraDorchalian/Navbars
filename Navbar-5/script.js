const burgerEl = document.querySelector(".burger");
const navbarEl = document.querySelector(".navbar");

// navbarEl.innerHTML = `
//     <div class="logo">
//     <img src="./logo.svg">
//         <span>Gmail</span>
//     </div>
//     <div class="search">
//         <span class="material-symbols-outlined">search</span>
//         <input type="text" class="search" id="search" spellcheck="false" placeholder="search mail">
//     </div>
//     <nav>
//         <button class="material-symbols-outlined">Help</button>
//         <button class="material-symbols-outlined">Settings</button>
//         <button class="material-symbols-outlined">apps</button>
//         <img src="./logo.png">
//     </nav>
// `;
const logo = document.createElement("div");
logo.classList = "logo";
navbarEl.appendChild(logo);

const imgTag = document.createElement("img");
imgTag.src = "./logo.svg";
logo.appendChild(imgTag);

const spanTag = document.createElement("span");
spanTag.innerText = "Gmail";
logo.appendChild(spanTag);

const searchEl = document.createElement("div");
searchEl.classList = "search";
navbarEl.appendChild(searchEl);

const materialSpanTag = document.createElement("span");
materialSpanTag.classList = "material-symbols-outlined";
materialSpanTag.innerText = "Search";
searchEl.appendChild(materialSpanTag);

const searchInput = document.createElement("input");
searchInput.classList = "search";
searchInput.id = "search";
searchInput.type = "text";
searchInput.placeholder = "search mail";
searchInput.spellcheck = "false";
searchEl.appendChild(searchInput);

const navEl = document.createElement("nav");
navbarEl.appendChild(navEl);
const buttonElOne = document.createElement("button");
buttonElOne.classList = "material-symbols-outlined";
buttonElOne.innerText = "Help";
buttonElOne.style.color = "#2a9d8f";
navEl.appendChild(buttonElOne);
const buttonElTwo = document.createElement("button");
buttonElTwo.classList = "material-symbols-outlined";
buttonElTwo.innerText = "Settings";
buttonElTwo.style.color = "#264653";
navEl.appendChild(buttonElTwo);
const buttonElThree = document.createElement("button");
buttonElThree.classList = "material-symbols-outlined";
buttonElThree.innerText = "apps";
buttonElThree.style.color = "#e76f51";
navEl.appendChild(buttonElThree);
const imgEl = document.createElement("img");
imgEl.src = "./logo.png";
navEl.appendChild(imgEl);

const toggleMenu = () => {
  document.body.classList.toggle("open");
};

burgerEl.addEventListener("click", toggleMenu);
