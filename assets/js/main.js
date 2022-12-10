let menuOpen = document.querySelector(".menu-hamburger");
let menuWrapper = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", function(){
    menuOpen.classList.toggle("bx-x");
    menuWrapper.classList.toggle("active");
});

function btn(text) {
    alert(text);
}


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 40,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});

flatpickr("input[class=datetime]", {
    enableTime: true,
    dateFormat: "Y-m-d h:i",
    altInput: true,
    altFormat: "D j M, Y (h:i K)",
    disableMobile: "true",
    theme: "material_blue",
});
