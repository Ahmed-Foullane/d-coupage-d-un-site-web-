let humbergerBar = document.querySelector(".humbergerBar")

let navMenu = document.querySelector(".navList")

let navItems = document.querySelectorAll(".navItem")

humbergerBar.addEventListener("click",()=>{
    humbergerBar.classList.toggle("active")
    navMenu.classList.toggle("active")
})




navItems.forEach((e)=>{
    e.addEventListener("click",()=>{
        humbergerBar.classList.remove("active")
        navMenu.classList.remove("active")
    })
})