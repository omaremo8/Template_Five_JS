let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector(".list")

// Toggle Menu
toggleMenu.onclick = function (e) {
    e.stopPropagation()
    links.classList.toggle("open")
}

// Click AnyWhere Outside Menu And Toggle Button

document.addEventListener("click", (e) => {
    if (e.target !== toggleMenu) {
        if (links.classList.contains("open")) {
            links.classList.toggle("open")
        }
    }
})