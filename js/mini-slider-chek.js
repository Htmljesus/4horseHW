let index;
let slideIndex = 0;
const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('.chackmatist'));
const slideCount = slides.length;
const nextButton = document.querySelector('.slider__btn__right')
const prevButton = document.querySelector('.slider__btn__left')
let number = document.querySelector('.media')
let count = 1;

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click',showNextSlide);


function updateSlider(){
    slides.forEach((slide, index) => {
        if(index == slideIndex){
            slide.style.display = 'flex'
        }else{
            slide.style.display = 'none';
        }
    })
    
}

function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    count = (count + 1) % slideCount;
    
    number.textContent = `${count == 0 ? 6 : count}/6`;
    // if(count == 6){
    //     nextButton.style.setAttribute('disabled', '');
    // }
    updateSlider()
}
function showPrevSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    count = (count - 1 + slideCount) % slideCount;
    
    number.textContent = `${count == 0 ?  6 : count}/6`;
    updateSlider()
}