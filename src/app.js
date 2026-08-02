const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector("#submenu-open-btn");
const navCloseBtn = document.querySelector("#nav-close-btn");
const submenu = document.querySelector(".submenu");
const submenuItem=document.querySelectorAll(".submenu-item")
const navOpenBtn = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const shoppingCard = document.querySelector(".shopping-card");
const cardCloseBtn = document.querySelector("#card-close-btn");
const shopppingIcon = document.querySelector(".shoppping-icon");


toggleThemeBtns.forEach(btn => {

    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
});

submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
    submenu.classList.toggle("submenu--open")
})

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("right-0")
    overlay.classList.remove("invisible")
})

navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.add("invisible")
})

overlay.addEventListener("click", () => {
    nav.classList.remove("right-0")
    nav.classList.add("-right-64")
    overlay.classList.add("invisible")

    shoppingCard.classList.remove("left-0")
    shoppingCard.classList.add("-left-72")
    overlay.classList.remove("visible");
    overlay.classList.add("invisible");
})

shopppingIcon.addEventListener("click", () => {
    shoppingCard.classList.remove("-left-72")
    shoppingCard.classList.add("left-0")
    overlay.classList.remove("invisible");
    overlay.classList.add("visible");
})

cardCloseBtn.addEventListener("click", () => {
    shoppingCard.classList.remove("left-0")
    shoppingCard.classList.add("-left-72")
    overlay.classList.remove("visible");
    overlay.classList.add("invisible");
})

submenuItem.forEach(item => {
    item.addEventListener("click", function() {
        submenuItem.forEach(i => i.classList.remove('submenu--item--active'));
        this.classList.add('submenu--item--active');
    });
});


// حذف زیرخط لینک‌ها در فایرفاکس
document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(function(link) {
        link.style.textDecoration = 'none';
        link.style.textDecorationLine = 'none';
        link.style.setProperty('text-decoration', 'none', 'important');
        link.style.setProperty('text-decoration-line', 'none', 'important');
    });
});