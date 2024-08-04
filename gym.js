const menuBtn = document.getElementById("menu-btn")
const navlinks =document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navlinks.classList.toggle("open");

    // const isOpen = navlinks.classList.contains("open");
    // menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

// // navlinks.addEventListener("click", (e) => {
// //     navlinks.classList.remove("open");
// //     menuBtnIcon.setAttribute("class", "ri-menu-line");
// // })


// // about container
// ScrollReveal().reveal(".about-image img",{
//     ...ScrollRevealOption,
//     origin:"left",
// });
// ScrollReveal().reveal(".about-content .section-header",{
//     ...ScrollRevealOption,
//     delay:500,
// });
// ScrollReveal().reveal(".about-content .section-description",{
//     ...ScrollRevealOption,
//     delay:1000,
// });
// ScrollReveal().reveal(".about-card",{
//     ...ScrollRevealOption,
//     delay:1500,
//     interval:500,
// });

// // price container
// ScrollReveal().reveal(".price-card", {
//     ...ScrollRevealOption,
//     interval:500,
// });

// // swiper

// const swiper = new Swiper(".swiper-wrapper",{
//     loop:true,
//     slidePerView:"auto",
//     spaceBetween:20,
// })