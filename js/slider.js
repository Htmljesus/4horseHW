let current = 0;
let prev = 5;
let next = 4;
const sliderBig = document.querySelector('.slider');
const slidesMassive = Array.from(sliderBig.querySelectorAll('.chackmatist'));
const sliderButtonCont = document.querySelectorAll('.slider__btn');

for (let i = 0; i < sliderButtonCont; i++) {
    sliderButtonCont[i].addEventListener("click", () => i == 0 ? showPrevBigSlide()  : showNextBigSlide());
}
const showNextBigSlide = () => current < 6 ? updateBigSlider(current + 1) : updateBigSlider(0);
const showPrevBigSlide = () => current > 1 ? updateBigSlider(current - 1) : updateBigSlider(slidesMassive.length - 1);

const updateBigSlider = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slidesMassive.length; i++) {
        slidesMassive[i].classList.remove("first");
        slidesMassive[i].classList.remove("sixth");
        slidesMassive[i].classList.remove("fourth");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 5;
    }

    slidesMassive[current].classList.add("first");
    slidesMassive[prev].classList.add("sixth");
    slidesMassive[next].classList.add("fourth");
    
}