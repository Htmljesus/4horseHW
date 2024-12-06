let current = 0;
let prev = 1;
let next = 4;
const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('.chackmatist'));
const sliderButtonCont = document.querySelectorAll('.slider__btn');

for (let i = 0; i < sliderButtonCont; i++) {
    sliderButtonCont[i].addEventListener("click", () => i == 0 ? showPrevSlide()  : showNextSlide());
}
const showNextSlide = () => current < 5 ? updateSlider(current + 1) : updateSlider(0);
const showPrevSlide = () => current > 0 ? updateSlider(current - 1) : updateSlider(slides.length - 1);

const updateSlider = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("first");
        slides[i].classList.remove("sixth");
        slides[i].classList.remove("fourth");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 5;
    }

    slides[current].classList.add("first");
    slides[prev].classList.add("sixth");
    slides[next].classList.add("fourth");
    
}
