const burger = document.querySelector(".burger");
const firstDropDown = document.querySelector(".dropdown");
const dropDownSecond = document.getElementById("dropDownSecond");
const dropdown_menu_El = document.getElementById("dropdown_menu_El");

const buttonEl = document.createElement("button");
buttonEl.classList = "button";
buttonEl.innerText = "Services";
firstDropDown.appendChild(buttonEl);
const chevronSvg = document.createElement("img");
chevronSvg.src = "chevron.svg";
firstDropDown.appendChild(chevronSvg);
const dropdownMenu = document.createElement("div");
dropdownMenu.classList = "dropdown-menu";
firstDropDown.appendChild(dropdownMenu);
const firstButtonDropdownMenu = document.createElement("button");
firstButtonDropdownMenu.innerText = "UX/UI Design";
dropdownMenu.appendChild(firstButtonDropdownMenu);
const secondButtonDropdownMenu = document.createElement("button");
secondButtonDropdownMenu.innerText = "Web Applications";
dropdownMenu.appendChild(secondButtonDropdownMenu);
const thirdButtonDropdownMenu = document.createElement("button");
thirdButtonDropdownMenu.innerText = "SEO Advice";
dropdownMenu.appendChild(thirdButtonDropdownMenu);

dropDownSecond.innerHTML = `
    <button class="button">
        Product
        <img src="./chevron.svg" />
    </button>
    <div class="dropdown-menu">
        <button>Learn CSS Ebook</button>
        <button>Security Course</button>
        <button>Masterclass Bundle</button>
    </div>
`;
const buttonLiveChat = document.createElement("button");
buttonLiveChat.innerText = "Live Chat";
dropdown_menu_El.appendChild(buttonLiveChat);
const buttonSendEmail = document.createElement("button");
buttonSendEmail.innerText = "Send Email";
dropdown_menu_El.appendChild(buttonSendEmail);
const buttonRequestHelp = document.createElement("button");
buttonRequestHelp.innerText = "Request Help";
dropdown_menu_El.appendChild(buttonRequestHelp);

const toggleMenu = () => {
  document.body.classList.toggle("open");
};
burger.addEventListener("click", toggleMenu);
