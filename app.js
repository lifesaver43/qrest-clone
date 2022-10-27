// change nav style on scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scrolled", window.scrollY > 0);
})

// features accordion
const list = document.getElementsByClassName("list");

for(i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}
