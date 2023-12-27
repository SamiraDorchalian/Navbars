const burgerEl = document.querySelector(".burger");
const dropDownMenu_one = document.getElementById("dropDownMenu_one");
const dropdownMenu_Two = document.getElementById("dropdownMenu_Two");
const dropdown_Three = document.getElementById("dropdown_Three");

const divTag_1 = document.createElement("div");
divTag_1.innerHTML = `
    <h2>Digital</h2>
    <button>Learn CSS Ebook</button>
    <button>Security Course</button>
    <button>Masterclass Bundle</button>
`;
dropDownMenu_one.appendChild(divTag_1);

const divTag_2 = document.createElement("div");
divTag_2.innerHTML = `
    <h2>Electronic</h2>
    <button>CSS Digital Clock</button>
    <button>UX Master Mouse</button>
    <button>Type Fast Keyboard</button>
`;
dropDownMenu_one.appendChild(divTag_2);

const divTag_3 = document.createElement("div");
divTag_3.innerHTML = `
    <h2>Documents</h2>
    <button>Email Template</button>
    <button>Desktop Wallpaper</button>
    <button>Portfolio Code</button>
`;
dropDownMenu_one.appendChild(divTag_3);

const divServicesTag = document.createElement("div");
divServicesTag.innerHTML = `
    <button>UX/UI Design</button>
    <button>Web Applications</button>
    <button>SEO Advice</button>
`;
dropdownMenu_Two.appendChild(divServicesTag);

dropdown_Three.innerHTML = `
    <button>
        Support
        <img src="./chevron.svg" />
    </button>
    <div class="dropdown-menu">
        <div>
            <button>Live Messenger</button>
            <button>Support Email</button>
            <button>Request Help</button>
        </div>
    </div>
`;

const toggleMenu = () => {
  document.body.classList.toggle("open");
};

burgerEl.addEventListener("click", toggleMenu);
