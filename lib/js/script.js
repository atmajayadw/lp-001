// Slideshow Testimonials
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    const slides = document.getElementsByClassName("slides");
    const clients = document.getElementsByClassName("client");

    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = "none";  
    }

    // for(let i = 0; i<clients.length; i++){
    //     clients[i].className = clients[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
}