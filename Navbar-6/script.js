const bodyTag = document.querySelector("body");
// bodyTag.innerHTML=`
// <nav class="navbar">
// <h1>Page Title</h1>
// <div class="tabs">
//     <input type="radio" name="group" id="tab-1">
//     <input type="radio" name="group" id="tab-2">
//     <input type="radio" name="group" id="tab-3">
//     <input type="radio" name="group" id="tab-4">
//     <div class="buttons">
//         <label class="material-symbols-outlined"for="tab-1">home</label>
//         <label class="material-symbols-outlined"for="tab-2">notifications</label>
//         <label class="material-symbols-outlined"for="tab-3">favorite</label>
//         <label class="material-symbols-outlined"for="tab-4">settings</label>
//         <div class="underline"></div>
//     </div>
// </div>
// </nav>
// `
const navbarEl = document.createElement("nav");
navbarEl.classList = "navbar";
bodyTag.appendChild(navbarEl);
const h1_Tag = document.createElement("h1");
h1_Tag.innerText = "Page Title";
navbarEl.appendChild(h1_Tag);
const tabsEl = document.createElement("div");
tabsEl.classList = "tabs";
navbarEl.appendChild(tabsEl);
const tab_1 = document.createElement("input");
tab_1.id = "tab-1";
tab_1.name = "group";
tab_1.type = "radio";
tabsEl.appendChild(tab_1);
const tab_2 = document.createElement("input");
tab_2.id = "tab-2";
tab_2.name = "group";
tab_2.type = "radio";
tabsEl.appendChild(tab_2);
const tab_3 = document.createElement("input");
tab_3.id = "tab-3";
tab_3.name = "group";
tab_3.type = "radio";
tabsEl.appendChild(tab_3);
const tab_4 = document.createElement("input");
tab_4.id = "tab-4";
tab_4.name = "group";
tab_4.type = "radio";
tabsEl.appendChild(tab_4);
const buttons = document.createElement("div");
buttons.classList = "buttons";
tabsEl.appendChild(buttons);
buttons.innerHTML = `
    <label class="material-symbols-outlined"for="tab-1">home</label>
    <label class="material-symbols-outlined"for="tab-2">notifications</label>
    <label class="material-symbols-outlined"for="tab-3">favorite</label>
    <label class="material-symbols-outlined"for="tab-4">settings</label>
    <div class="underline"></div>
`;
