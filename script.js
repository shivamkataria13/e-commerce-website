const navbar = document.querySelector("#navbar")
const openmenu = document.getElementById("menu")
const closemenu = document.getElementById("menu-close")


openmenu.addEventListener("click", () => {
    navbar.classList.add("open")
} )

closemenu.addEventListener("click", () => {
    navbar.classList.remove("open")
} )
