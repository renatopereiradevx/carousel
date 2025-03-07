const carousel = document.querySelector(".carousel");
let itemWidth = 230; // Largura do item (200px) + gap (30px)
const items = document.querySelectorAll('.item').length;
const visibleItems = 4;
const scrollItemLimit = (items - visibleItems);
let currentSize = 0;
let index = 0;

function next() {
    scrollItemLimit > index ? index++ : index = 0;
    currentSize = calcCurrentSizeNext();
    updateCarousel();
}

function prev() {
    if(index === 0) return;
    
    index--;
    currentSize = calcCurrentSizePrev();
    updateCarousel();
}

function calcCurrentSizeNext() {
    return itemWidth * index;
}

function calcCurrentSizePrev() {
    return currentSize-itemWidth;
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSize}px)`;
}