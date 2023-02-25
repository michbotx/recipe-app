// TOGGLE SWITCH

const toggleSwitch = document.querySelector(".theme-switch-wrapper")
const body = document.querySelector("body")
const themeIcon = document.querySelector("#icon")
const headerImg = document.querySelector("#hero")

// Use localStorage.getItem('theme') to check the current theme on page load. This way, if the user has previously selected a theme, it will be persisted upon refresh.

const currentTheme = localStorage.getItem("theme") || "light"; 
body.setAttribute("data-theme", currentTheme)


function setTheme() {
    darkMode() 
}

function darkMode() {
    body.setAttribute('data-theme', (body.getAttribute('data-theme') === 'dark') ? 'light' : 'dark');
    themeIcon.setAttribute("src", (themeIcon.getAttribute("src") === "images/icon-moon.svg") 
    ? "images/icon-sun.svg"
    : "images/icon-moon.svg"
    );
    localStorage.setItem('theme', body.getAttribute('data-theme'));
}

toggleSwitch.addEventListener("click",setTheme)


//GRAB INGREDIENTS

let ingredientItems = [];

const inputBox = document.querySelector("#input")

inputBox.addEventListener("change", () => {
    
})
// SHOW INGREDIENTS

const ingredientsContainer = document.querySelector("#ingredients-list")

ingredientsContainer.innerHTML = 
`<ul class="ingredient__list">


</ul>

`