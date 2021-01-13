const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li")

//toggle nav 
    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active");

    });
    //Animate links
    navlinks.forEach((link,index)=>{
       link.style.animation 
    });
}
navSlide();