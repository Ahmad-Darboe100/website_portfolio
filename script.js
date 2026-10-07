const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const icon = document.querySelector("i");

menuBtn.addEventListener('click', function(){
    const isOpen = navLinks.classList.toggle("open");

    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);

    menuBtn.setAttribute("aria-expanded", isOpen);
});