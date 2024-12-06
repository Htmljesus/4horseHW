const leftBtn = document.getElementById('left__header__btn');
const rightBtn = document.getElementById('right__header__btn');

leftBtn.addEventListener('mouseenter', () => {
    leftBtn.style.backgroundColor = '#FBCE51';
    leftBtn.style.color = '#1F1F1F'
})
leftBtn.addEventListener('mouseleave', () => {
    leftBtn.style.backgroundColor = '#1F1F1F';
    leftBtn.style.color = '#ffffff'
})

rightBtn.addEventListener('mouseenter', () => {
    rightBtn.style.backgroundColor = '#1F1F1F';
    rightBtn.style.color = '#ffffff'
})
rightBtn.addEventListener('mouseleave', () => {
    rightBtn.style.backgroundColor = 'transparent';
    rightBtn.style.color = '#1F1F1F'
})