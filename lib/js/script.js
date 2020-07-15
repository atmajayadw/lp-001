// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const span = document.querySelectorAll('.hamburger span');
const sidebar = document.querySelector('.sidebar .links');

hamburger.addEventListener('click', function () {
    span[0].classList.toggle('show1');
    span[1].classList.toggle('show2');
    span[2].classList.toggle('show3');
    sidebar.classList.toggle('active');
});

// Slideshow Testimonials
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const clients = document.querySelectorAll(".client");
    const imageon = document.querySelectorAll(".imageon");
    const imageoff = document.querySelectorAll(".imageoff");

    // const clients2 - document.querySelectorAll("client")


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < imageon.length; i++) {
        imageon[i].style.display = "none";
    }

    for (let i = 0; i < imageoff.length; i++) {
        imageoff[i].style.display = "block";
    }

    slides[slideIndex - 1].style.display = "block";
    imageon[slideIndex - 1].style.display = "block";
    imageoff[slideIndex - 1].style.display = "none";
}

//WOW.JS
new WOW().init();