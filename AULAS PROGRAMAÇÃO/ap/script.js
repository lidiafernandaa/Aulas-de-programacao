let totalSliders = document.querySelectorAll('.slider--item').length;
let currentSlide = 0; 

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSliders})`; 
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSliders - 1; 
    }
    updateMargin()
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSliders - 1)) {
        currentSlide = 0
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidht = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidht); 
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`; 
}

setInterval(goNext, 5000); 