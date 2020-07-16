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
    slides[slideIndex - 1].classList.add('animate__animated', 'animate__bounceInRight');
    imageon[slideIndex - 1].style.display = "block";
    imageoff[slideIndex - 1].style.display = "none";
}

//WOW.JS
new WOW().init();

//Animate 

// Jumbotron
const animate1 = document.querySelector('.jumbo-right');
animate1.classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-2s');

const animate2 = document.querySelector('.jumbo-left .updates');
animate2.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

const animate3 = document.querySelector('.jumbo-left .caption');
animate3.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

const animate4 = document.querySelector('.jumbo-left .buttons');
animate4.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-3s');

// Why-Us
const animate5 = document.querySelector('.why-us-title');
animate5.classList.add('wow', 'animate__animated', 'animate__fadeInDown');

const animate6 = document.querySelector('.why-us-services .services .one');
animate6.classList.add('wow', 'animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

const animate7 = document.querySelector('.why-us-services .services .two');
animate7.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');

const animate8 = document.querySelector('.why-us-services .services .three');
animate8.classList.add('wow', 'animate__animated', 'animate__fadeInRight', 'animate__delay-1s');

// Services
const animate9 = document.querySelector('.features-one .col-left');
animate9.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');

const animate10 = document.querySelector('.features-one .col-right');
animate10.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');

const animate11 = document.querySelector('.features-two .col-right');
animate11.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');

const animate12 = document.querySelector('.features-two .col-left');
animate12.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');

// Partnership
const animate13 = document.querySelector('.partnership .signup');
animate13.classList.add('wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');