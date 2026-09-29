const nav = document.querySelector('.header__list');
const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const next = document.querySelector('.slider__btn-right');
const prev = document.querySelector('.slider__btn-left')
const sliderTrack = document.querySelector('.slider__track');
const windowSlider = document.querySelector('.slider__window');

burger.addEventListener('click', () => {
  if (window.innerWidth > 840) return
  nav.classList.toggle('active')
  header.classList.toggle('active')
  body.classList.toggle('overflow')
})

header.addEventListener('click', (event) => {
  if (window.innerWidth > 840) return
  if(event.target.matches('.header__link')) {
    nav.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('overflow')
  }
})

document.addEventListener('keydown', (event) => {
  if (window.innerWidth > 840) return
  if(event.key === 'Escape') {
    nav.classList.remove('active')
    header.classList.remove('active')
    body.classList.remove('overflow')
  }
})

let sliderCount = 0;

next.addEventListener('click', () => {
  if(sliderCount > 1) sliderCount = -1
  sliderCount++;
  console.log(sliderCount)


  const width = windowSlider.offsetWidth;

  sliderTrack.style.transform = `translateX(-${sliderCount * width}px)`;
});

prev.addEventListener('click', () => {
  if(sliderCount <= 0) sliderCount = 3
  sliderCount--;
  console.log(sliderCount)

  const width = windowSlider.offsetWidth;
  sliderTrack.style.transform = `translateX(-${sliderCount * width}px)`
})
