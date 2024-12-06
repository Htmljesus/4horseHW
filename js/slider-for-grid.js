let indexGrid;
let slideIndexGrid = 0;
const sliderGrid = document.querySelector('.main__center__grid');
const slidesGrid = Array.from(sliderGrid.querySelectorAll('.grid__block'));
const slideCountGrid = slidesGrid.length;
const rghtBtn = document.querySelector('.btn__right');
const lftBtn = document.querySelector('.btn__left');
const dots = document.querySelector('.slider__for__grid');
const allDots = Array.from(dots.querySelectorAll('.dot'));
const dotsLength = allDots.length;
let dotsIndex = 0;
let indexDot;

lftBtn.addEventListener('click', showPrevGridSlide);
rghtBtn.addEventListener('click',showNextGridSlide);

function nextDot(){
    allDots.forEach((acitveDot, indexDot) =>{
        if(indexDot == dotsIndex){
            acitveDot.classList.add('active');
        }else{
            acitveDot.classList.remove('active');
        }
    })
}

function updateGridSlider(){
    slidesGrid.forEach((slideGrid, indexGrid) => {
        if(indexGrid == slideIndexGrid){
            slideGrid.style.display = 'flex'
        }else{
            slideGrid.style.display = 'none';
        }
    })
    
}

function showNextGridSlide(){
    slideIndexGrid = (slideIndexGrid + 1) % slideCountGrid;
    dotsIndex = (dotsIndex + 1) % dotsLength;

    nextDot();
    updateGridSlider();
}
function showPrevGridSlide(){
    slideIndexGrid = (slideIndexGrid - 1 + slideCountGrid) % slideCountGrid;
   
    updateGridSlider()
}