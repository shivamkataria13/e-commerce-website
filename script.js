const navbar = document.querySelector("#navbar")
const openmenu = document.getElementById("menu")
const closemenu = document.getElementById("menu-close")


openmenu.addEventListener("click", () => {
    navbar.classList.add("open")
} )

closemenu.addEventListener("click", () => {
    navbar.classList.remove("open")
} )




// single product page
let mainImg = document.getElementById('main-img')
let smallImg = document.getElementsByClassName('small-img')


smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;  
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;  
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;  
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;  
}